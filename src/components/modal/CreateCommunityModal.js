import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deactivateCreateCommunityModal } from '../../actions/CommunityModal.action';
import { createNewCommunity } from '../../actions/Community.action';
import { FaCheck } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { FiUpload } from 'react-icons/fi'

const initialForm = { name: "", description: "", tags: "", requestToJoin: false, mainImg: null };

const CreateCommunityModal = () => {
  const [uploadedImg, setUploadedImg] = useState("");
  const [communityForm, setCommunityForm] = useState(initialForm);
  const showCreateCommunityModal = useSelector(state => state.communityModal.showCreateCommunityModal);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCommunityForm({ ...communityForm, [e.target.name]: e.target.value });
  }
  const handleDivContent = (e) => {
    setCommunityForm({ ...communityForm, description: e.target.innerHTML });
  }
  const handleFile = (e) => {
    setCommunityForm({ ...communityForm, mainImg: e.target.files[0]})
  }
  const handleRequest = () => {
    setCommunityForm((prev) => ({ ...communityForm, requestToJoin: !prev.requestToJoin }));
  }

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(deactivateCreateCommunityModal());
    setCommunityForm(initialForm);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewCommunity(communityForm));
    dispatch(deactivateCreateCommunityModal());
  }

  useEffect(() => {
    if (communityForm.mainImg) {
      const reader = new FileReader()
      reader.addEventListener("load", () => { 
        setUploadedImg(reader.result) 
      }, false)
      reader.readAsDataURL(communityForm.mainImg)
    }
  }, [communityForm.mainImg])
  
  return (
    <>
      {showCreateCommunityModal ? (
        <div className="w-full min-h-screen h-screen bg-black bg-opacity-50 fixed top-0 flex justify-center items-center z-20 transition">
          <div className="shadow-md bg-white px-12 py-8 relative rounded-md" style={{ width:"800px", height:"500px", boxShadow: "0px 3px 15px #00000080"}}>
            <form onSubmit={handleSubmit}>
              <div className="text-xl text-center border-b py-3 mx-6 border-gray-500">
                Create Your Community
              </div>
              <div className="flex mt-5">
                <div className="flex items-center justify-center">
                  <label htmlFor="mainImg">
                    <div className="bg-gray-200 rounded-md w-52 h-72 overflow-hidden flex justify-center items-center cursor-pointer hover:opacity-80">     
                      { communityForm.mainImg ?  
                        <img src={uploadedImg} alt="Main image" className="object-cover w-full h-full" /> : 
                        <div className="w-3/4 h-1/2 flex justify-center items-center">
                          <FiUpload className="w-3/4 h-1/2 opacity-30" />
                        </div> 
                      }
                    </div>
                  </label>
                  <input id="mainImg" name="mainImg" type="file" onChange={handleFile} className="w-0" />
                </div>
                <div className="ml-5 w-full">
                  <div className="flex items-center relative">
                    <input name="name" type="text" onChange={handleChange} placeholder="Name" className="py-1 bg-transparent focus:outline-none w-full" />
                    <FaCheck />
                    <div className="absolute border bottom-0  border-black w-full rounded-md" />
                  </div>
                  <div className="mt-3 px-2 py-1 border border-gray-400 resize-none w-full rounded-md overflow-y-auto">
                    <div contentEditable="true" onInput={handleDivContent} style={{height:"180px"}} placeholder="Description" className="focus:outline-none" />
                    <div className="px-3 py-1 rounded-lg bg-primaryLight">
                      <input name="tags" type="text" onChange={handleChange} placeholder="tags" className="bg-transparent focus:outline-none text-white placeholder-white" />
                    </div>
                  </div>
                  <div className="flex mt-2 items-center w-max" onClick={handleRequest}>
                    { communityForm?.requestToJoin ? <ImCheckboxChecked className=" text-primary" /> : <ImCheckboxUnchecked className=" text-primaryLight" /> }
                    <span className="ml-1 font-light">Receive members upon request</span>
                    {/* <label><input type="checkbox" name="requestToJoin" value="true" onChange={handleChange} />Receive members upon request</label> */}
                  </div>
                </div>
              </div>
              
              <div className="w-full flex items-center justify-center mt-8">
                <button type="submit" className="px-3 py-1 bg-primary rounded-3xl text-white hover:opacity-80 transition w-28 mr-3" >Create</button>
                <button onClick={handleClose} className="px-3 py-1 bg-primary rounded-3xl text-white hover:opacity-80 transition w-28">Cancel</button>
              </div>
            </form>
            <button onClick={handleClose} className="absolute top-1.5 right-1.5 p-1.5 rounded-full hover:bg-gray-200 focus:outline-none">
              <AiOutlineClose className="text-2xl" />
            </button>
          </div>
        </div>
      ) : null 
      }
    </>
  )
  
}

export default CreateCommunityModal
