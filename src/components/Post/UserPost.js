import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const UserPost = ({ post }) => {
  const { profile } = useSelector(state => state.auth);

  return (
    <div className="grid grid-cols-8 bg-secondary rounded-xl p-2">
      <div className="col-span-1 flex flex-col items-center justify-center mr-2">
        { profile?.profileImg ? <img alt={profile.name} src={profile.profileImg} /> : <FaUserCircle className="text-white text-5xl" /> }
        <span className="text-sm text-white mt-1">{profile?.name}</span>
      </div>
      <div className="col-span-7 bg-white rounded-xl p-3">
        <div>
          <span className="font-bold">{post?.title}</span>
          <div className="text-sm">{post?.text}</div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default UserPost
