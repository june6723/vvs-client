import React from 'react'
import { FaUser } from 'react-icons/fa'
import moment from 'moment'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

const CommunityPost = ({ post }) => {
  const { creator } = post
  const { name, profileImg } = typeof creator === Object ? creator : JSON.parse(localStorage.getItem('profile'))
  const agoTime = moment(post.createdAt).fromNow();
  
  return (
    <div className="mb-3">
      <div className="w-full border-2 border-gray-300 rounded-md relative p-1.5">
        <div className="flex items-center">
          { profileImg ? <img className="" src={profileImg} alt={name} /> : 
            <FaUser className="text-white bg-primary rounded-md p-1 w-9 h-9 mr-2" />}
          <span className="font-medium">{name}</span>
        </div>
        <div className="px-12">
          <div className="font-light">{post.text}</div>
        </div>
        <div>{post.images.length > 0 ? "Images" : null}</div>
        <div className="absolute bottom-1 right-2 font-light text-sm">{agoTime}</div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center my-1 px-2 border-r-2 border-gray-400">
          <AiOutlineLike />
          <AiOutlineDislike />
        </div>
        <div className="px-2">Comment</div>
      </div>
    </div>
  )
}

export default CommunityPost
