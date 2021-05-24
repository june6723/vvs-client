import React, { useState } from 'react'
import { FaUser, FaUserCircle } from 'react-icons/fa'
import moment from 'moment'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { likePost, dislikePost } from '../../actions/Post.action'
import CommunityPostComment from './CommunityPostComment'
import { createComment, getComments } from '../../actions/Comment.actions'
import LoadingSm from '../etc/LoadingSm'
import { Link } from 'react-router-dom'

const CommunityPost = ({ post }) => {
  const dispatch = useDispatch()

  const profile = JSON.parse(localStorage.getItem('profile'))
  const { creator } = post
  const { name, profileImg } = creator
  const agoTime = moment(post.createdAt).fromNow();

  const [likeStatus, setLikeStatus] = useState({
    likesCnt: post.likes.length,
    liked: post.likes.includes(profile.id),
    dislikesCnt: post.dislikes.length,
    disliked: post.dislikes.includes(profile.id)
  })
  const [viewComments, setViewComments] = useState(false)
  const comments = useSelector((state) => state.comment[post._id])
  const [commentText, setCommentText] = useState("")

  const handleLike = (e) => {
    e.preventDefault()
    dispatch(likePost(post._id))
    setLikeStatus((prevState) => ({ ...prevState, 
      liked:!prevState.liked, 
      likesCnt: prevState.liked ? prevState.likesCnt-1 : prevState.likesCnt+1 
    }))
  }

  const handleDislike = (e) => {
    e.preventDefault()
    dispatch(dislikePost(post._id))
    setLikeStatus((prevState) => ({ ...prevState, 
      disliked:!prevState.disliked, 
      dislikesCnt: prevState.disliked ? prevState.dislikesCnt-1 : prevState.dislikesCnt+1 
    }))
  }

  const handleViewComments = () => {
    dispatch(getComments(post._id))
    setViewComments((prevState) => !prevState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createComment({ postId: post._id, text: commentText}))
    const textInput = document.getElementById('textInput')
    textInput.value = ""
    setCommentText("")
  }
  const handleChange = (e) => {
    setCommentText(e.target.value)
  }
  
  return (
    <div className="mb-3">
      <div className="w-full border-2 border-gray-300 rounded-md relative p-1.5">
        <div className="flex items-center">
          <Link to={`/${name}`} className="hover:bg-opacity-90 mr-2 bg-primary rounded-md ">
            { profileImg ? <img className="" src={profileImg} alt={name} className="w-10 h-10 rounded-lg bg-cover" /> : 
              <FaUser className="text-white p-1 w-9 h-9" />}
          </Link>
          <Link to={`/${name}`} className="hover:text-gray-600"><span className="font-medium">{name}</span></Link>
        </div>
        <div className="px-12">
          <div className="font-light">{post.text}</div>
        </div>
        <div>{post.images.length > 0 ? "Images" : null}</div>
        <div className="absolute bottom-1 right-2 font-light text-sm">{agoTime}</div>
      </div>
      <div className="flex items-center py-0.5 px-1">
        <div className="flex items-center my-1 px-2 border-r-2 border-gray-400">
          { likeStatus.liked ? <AiFillLike onClick={handleLike} className="text-primary" /> : <AiOutlineLike onClick={handleLike} /> }
          { <span className="text-gray-600">{likeStatus.likesCnt}</span> }
          { likeStatus.disliked ? <AiFillDislike onClick={handleDislike} className="text-primary" /> : <AiOutlineDislike onClick={handleDislike} /> }
          { <span className="text-gray-600">{likeStatus.dislikesCnt}</span> }
        </div>
        <div className="px-2" onClick={handleViewComments}>
          { post.comments.length > 0 ? <span>{post.comments.length} {post.comments.length === 1?"Comment":"Comments"}</span> : <span>Comment</span> }
        </div>
      </div>
      { viewComments && (comments ?  
        <div className="border-t mx-3 py-2">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center">
              { profile.profileImg? <img /> : <FaUserCircle className="text-primary w-7 h-7 mr-1.5" /> }
              <input id="textInput" type="text" name="text" placeholder="Type comment" onChange={handleChange} className="bg-gray-200 rounded-2xl focus:outline-none py-1 px-3 w-full font-normal" />
            </div>
          </form>
          <ul>
          { comments.map((comment) => (
            <li key={comment._id}><CommunityPostComment comment={comment} /></li>
            ))
          }
          </ul>
        </div> :
        <LoadingSm />)
      }
    </div>
  )
}

export default CommunityPost
