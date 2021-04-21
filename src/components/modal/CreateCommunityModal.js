import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deactivateCreateCommunityModal } from '../../actions/communityModal';
import { FaUserCircle, FaImages } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { AiOutlineClose, AiOutlinePlusCircle } from 'react-icons/ai';
import { RiVideoFill } from 'react-icons/ri';

const initialForm = { title: "", text: "", tags: [] };

const CreateCommunityModal = () => {
  const [postForm, setPostForm] = useState(initialForm);
  const showCreateCommunityModal = useSelector(state => state.communityModal.showCreateCommunityModal);
  const { profile } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deactivateCreateCommunityModal());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(createPost(postForm));
    dispatch(deactivateCreateCommunityModal());
  }
  const handleCreatePost = (e) => {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <>
      {showCreateCommunityModal ? (
        <div className="w-full min-h-screen h-screen bg-black bg-opacity-50 fixed top-0 flex justify-center items-center z-20 transition">
          <div className="shadow-md bg-white px-12 py-8 relative rounded-md" style={{ width:"720px", height:"500px", boxShadow: "0px 3px 15px #00000080"}}>
            <form onSubmit={handleSubmit}>
              <div className="text-xl text-center border-b py-3 mx-6 border-gray-500">
                Create Your Community
              </div>
              <div className="flex bg-coolGray-300">
                <div>
                  <label htmlFor="mainImg">
                    <div>
                      Main Image
                    </div>
                  </label>
                  <input id="mainImg" type="file" className="w-0" />
                </div>
                <div>
                  <input name="" type="text" />
                  <div>
                    <textarea name="text" style={{height:"180px"}} className="border resize-none w-full px-1 rounded-md overflow-y-auto focus:outline-none" />
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="flex bg-warmGray-300">
                <label><input type="checkbox" value="true" />Receive members upon request</label>
              </div>
              <div>
                <button type="submit" className="px-3 py-1 bg-secondary rounded-3xl text-white hover:opacity-80 transition w-28 mr-3" >Create</button>
                <button type="submit" className="px-3 py-1 bg-secondary rounded-3xl text-white hover:opacity-80 transition w-28">Cancel</button>
              </div>
            </form>
            <button onClick={handleClick} className="absolute top-1.5 right-1.5 p-1.5 rounded-full hover:bg-gray-200 focus:outline-none">
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
