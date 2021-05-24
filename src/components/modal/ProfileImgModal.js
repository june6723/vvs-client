import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { uploadProfileImg } from '../../actions/User.action';
import { useDispatch } from 'react-redux';

const ProfileImgModal = ({ setProfileImgModal, profileImg }) => {
  const [uploadImg, setUploadImg] = useState();
  const [previewImg, setPreviewImg] = useState(profileImg)
  const dispatch = useDispatch();

  const handleFile = (e) => {
    setUploadImg(e.target.files[0])
  }

  const handleClose = (e) => {
    e.preventDefault();
    setProfileImgModal((prevState) => !prevState)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadProfileImg(uploadImg))
    setProfileImgModal((prevState) => !prevState)
  }

  useEffect(() => {
    if (uploadImg) {
      const reader = new FileReader()
      reader.addEventListener("load", () => { 
        setPreviewImg(reader.result) 
      }, false)
      reader.readAsDataURL(uploadImg)
    }
  }, [uploadImg])
  
  return (
    <>
      <div className="w-full min-h-screen h-screen bg-black bg-opacity-50 fixed top-0 flex justify-center items-center z-20 transition">
        <div className="shadow-md bg-white px-12 py-8 relative rounded-md" style={{ width:"800px", height:"500px", boxShadow: "0px 3px 15px #00000080"}}>
          <form onSubmit={handleSubmit}>
            <div className="text-xl text-center border-b py-3 mx-6 border-gray-500">
              Upload Your Profile Image
            </div>
            <div className="flex items-center justify-center mt-5">
              <label htmlFor="profileImg">
                <div className="w-64 h-64 rounded-lg">
                  <div className="w-full h-full">
                    { previewImg ?  
                      <img src={previewImg} alt="Main image" className="object-cover rounded-full w-full h-full cursor-pointer" /> : 
                      <FaUserCircle className="bg-white rounded-full text-primary w-full h-full cursor-pointer" />
                    }
                  </div> 
                </div>
              </label>
              <input id="profileImg" name="profileImg" type="file" accept="image/*" onChange={handleFile} className="w-0" />
            </div>
            <div className="w-full flex items-center justify-center mt-8">
              <button type="submit" className="px-3 py-1 bg-primary rounded-3xl text-white hover:opacity-80 transition w-28 mr-3" >Upload</button>
              <button onClick={handleClose} className="px-3 py-1 bg-primary rounded-3xl text-white hover:opacity-80 transition w-28">Cancel</button>
            </div>
          </form>
          <button onClick={handleClose} className="absolute top-1.5 right-1.5 p-1.5 rounded-full hover:bg-gray-200 focus:outline-none">
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  )
  
}

export default ProfileImgModal
