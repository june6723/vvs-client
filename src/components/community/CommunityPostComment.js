import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReply, getReplies, likeComment } from '../../actions/Comment.actions'
import { FaUserCircle } from 'react-icons/fa'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import CommunityPostCommentReply from './CommunityPostCommentReply'
import LoadingSm from '../etc/LoadingSm'

const CommunityPostComment = ({ comment }) => {
  const profile = JSON.parse(localStorage.getItem('profile'))
  const dispatch = useDispatch()
  const [viewReplies, setViewReplies] = useState(false)
  const replies = useSelector((state) => state.reply[comment._id])

  const handleLike = () => {
    dispatch(likeComment(comment._id))
  }
  const handleViewReply = () => {
    dispatch(getReplies(comment._id))
    setViewReplies((prevState) => !prevState)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const replyForm = { postId: comment.post, text:replyText, commentId: comment._id }
    dispatch(createReply(replyForm))
    const replyInput = document.getElementById('replyInput')
    replyInput.value = ""
  }

  const [replyText, setReplyText] = useState("")
  const handleChange = (e) => {
    setReplyText(e.target.value)
  }
  return (
    <div className="">
      <div key={comment._id} className="flex mt-2" >
          { comment.creator.profileImg? <img src={comment.creator.profileImg} alt={comment.creator.name} className="w-8 h-8 mr-1.5 rounded-lg bg-cover" /> : 
            <FaUserCircle className="text-primary w-7 h-7 mr-1.5" /> }
          <div className="flex flex-col w-full">
            <div className="max-w-max">
              <div className="text-sm bg-gray-200 px-2 py-1 rounded-lg">
                <span className="block font-medium">{comment.creator.name}</span>
                <div className="font-light">
                  {comment.text}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mr-1">
                { comment.likes.includes(profile.id) ? 
                  <AiFillLike onClick={handleLike} className="text-md" /> : 
                  <AiOutlineLike onClick={handleLike} className="text-md" /> }
                { comment.likes.length > 0 ? comment.likes.length : "" }
              </div>
              <div onClick={handleViewReply} className="text-sm font-normal">
                {comment.replies.length > 0 ? `${comment.replies.length} replies` : "Reply"}
              </div>
            </div>
            { viewReplies && (replies ? 
              <div>
                <ul>
                  { replies.map((reply) =>
                    <li key={reply._id}><CommunityPostCommentReply reply={reply} /></li>)
                  }
                </ul>
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center">
                    { profile.profileImg? <img /> : <FaUserCircle className="text-primary w-7 h-7 mr-1.5" /> }
                    <input id="replyInput" type="text" name="text" placeholder={`Reply to ${comment.creator.name}`} onChange={handleChange} className="bg-gray-200 rounded-2xl focus:outline-none py-1 px-3 w-full text-sm font-light" />
                  </div>
                </form>
              </div> :
              <LoadingSm />)
            }
          </div>
      </div>
    </div>
  )
}

export default CommunityPostComment
