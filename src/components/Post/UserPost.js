import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const UserPost = ({ post }) => {
  const { profile } = useSelector(state => state.auth);

  return (
    <div className="grid grid-cols-8 bg-primary rounded-xl mb-4 pt-3">
      <div className="col-span-1 flex flex-col items-center justify-center mr-2 ml-3">
        { profile?.profileImg ? <img alt={profile.name} src={profile.profileImg} className="w-12 h-12 rounded-full border-2 border-white" /> : 
          <FaUserCircle className="text-white text-5xl" /> }
        <span className="text-sm text-white mt-1">{profile?.name}</span>
      </div>
      <div className="col-span-7 bg-white rounded-xl p-3 mr-3">
        <div>
          <span className="font-bold">{post?.title}</span>
          <div className="text-sm whitespace-pre-line">{post?.text}</div>
        </div>
      </div>
      <div className="flex justify-between col-span-8 rounded-b-xl py-2 mt-3" style={{ backgroundColor:"#00000059" }}>
        <div className="flex ml-5 text-xl text-white">
          <AiOutlineHeart className="mr-1" />
          <BiComment />
        </div>
        <div className="mr-3 text-xl text-white"> 
          <BsBookmark />
        </div>
      </div>
    </div>
  )
}

export default UserPost
