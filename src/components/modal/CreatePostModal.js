import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deactivateCreatePostModal } from '../../actions/PostModal.action';
import { FaUserCircle, FaImages } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { AiOutlineClose, AiOutlinePlusCircle } from 'react-icons/ai';
import { RiVideoFill } from 'react-icons/ri';
import { createCommunityPost, createPost } from '../../actions/Post.action';

const initialForm = { title: "", text: "", tags: [] };

const CreatePostModal = () => {
  const [postForm, setPostForm] = useState(initialForm);
  const showCreatePostModal = useSelector(state => state.postModal.showCreatePostModal);
  const viewCommunity = useSelector(state => state.community.viewCommunity);
  const community = viewCommunity?._id;
  const { profile } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deactivateCreatePostModal());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (community) {
      dispatch(createCommunityPost({ ...postForm, community }));
    } else {
      dispatch(createPost({ ...postForm, community }));
    }
    dispatch(deactivateCreatePostModal());
  }
  const handleCreatePost = (e) => {
    e.preventDefault();
    handleSubmit();
  }
  const handleSaveDraft = (e) => {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <>
      {showCreatePostModal ? (
        <div className="w-full min-h-screen h-screen bg-black bg-opacity-50 fixed top-0 flex justify-center items-center z-20 transition">
          <div className="shadow-md bg-white px-12 py-8 relative rounded-md" style={{ width:"720px", height:"500px", boxShadow: "0px 3px 15px #00000080"}}>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between mt-1 mb-5">
                <span className="text-lg">Create a post</span>
                <div className="flex items-center px-2 py-1 rounded-md cursor-pointer hover:border hover:bg-gray-200">
                  <IoMdMailOpen className="mr-1 text-lg" />
                  <span className="text-sm font-light">Open Drafts</span>
                </div>
              </div>
              <div className="grid grid-cols-8 bg-secondary rounded-xl p-2">
                <div className="col-span-1 flex flex-col items-center justify-center mr-2">
                  { profile?.profileImg ? <img alt={profile.name} src={profile.profileImg} /> : <FaUserCircle className="text-white text-5xl" /> }
                  <span className="text-sm text-white mt-1">{profile?.name}</span>
                </div>
                <div className="col-span-7 bg-white rounded-xl p-3">
                  <input type="text" name="title" placeholder="Title" className="rounded-3xl border px-3 py-1 w-full focus:outline-none" onChange={handleChange} />
                  <div className="my-2 py-0.5 px-1 border-b border-black flex">
                    <label htmlFor="images" className="p-1 cursor-pointer hover:bg-gray-200 rounded-md"><FaImages className="text-lg" /></label>
                    <input type="file" id="images" className="absolute w-0" />
                    <label htmlFor="videos" className="p-1 cursor-pointer hover:bg-gray-200 rounded-md"><RiVideoFill className="text-lg" /></label>
                    <input type="file" id="videos" className="absolute w-0" />
                  </div>
                  <textarea name="text" style={{height:"180px"}} className="border resize-none w-full px-1 rounded-md overflow-y-auto focus:outline-none" onChange={handleChange} />
                  <button className="flex items-center px-3 py-1.5 rounded-3xl bg-gray-400 text-white font-light text-xs"><AiOutlinePlusCircle className="mr-1 text-lg" />Add Tags</button>
                </div>
              </div>
              <div className="flex w-full justify-center mt-5">
                <button type="submit" className="px-3 py-1 bg-secondary rounded-3xl text-white hover:opacity-80 transition w-28 mr-3" >Save Draft</button>
                <button type="submit" className="px-3 py-1 bg-secondary rounded-3xl text-white hover:opacity-80 transition w-28">Post</button>
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

export default CreatePostModal
