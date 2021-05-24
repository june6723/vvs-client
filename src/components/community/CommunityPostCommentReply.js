import React from 'react'
import { FaUserCircle } from 'react-icons/fa'


const CommunityPostCommentReply = ({ reply }) => {

  return (
    <div className="mt-1 flex mb-2">
      { reply.creator.profileImg? <img src={reply.creator.profileImg} alt={reply.creator.name} className="w-8 h-8 mr-1.5 rounded-lg bg-cover" /> : 
        <FaUserCircle className="text-primary w-7 h-7 mr-1.5" /> }
      <div className="max-w-max">
        <div className="text-sm bg-gray-200 px-2 py-1 rounded-lg">
          <span className="block font-medium">{reply.creator.name}</span>
          <div className="font-light">
            {reply.text}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityPostCommentReply
