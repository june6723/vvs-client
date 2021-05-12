import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import moment from 'moment'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { likePost, dislikePost } from '../../actions/Post.action'

const CommunityPost = ({ post }) => {
  const dispatch = useDispatch()

  const { id } = JSON.parse(localStorage.getItem('profile'))
  console.log(id)
  const { creator } = post
  const { name, profileImg } = creator
  const agoTime = moment(post.createdAt).fromNow();

  const [likeStatus, setLikeStatus] = useState({
    likesCnt: post.likes.length,
    liked: post.likes.includes(id),
    dislikesCnt: post.dislikes.length,
    disliked: post.dislikes.includes(id)
  })

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
          { likeStatus.liked ? <AiFillLike onClick={handleLike} /> : <AiOutlineLike onClick={handleLike} /> }
          { <span>{likeStatus.likesCnt}</span> }
          { likeStatus.disliked ? <AiFillDislike onClick={handleDislike} /> : <AiOutlineDislike onClick={handleDislike} /> }
          { <span>{likeStatus.dislikesCnt}</span> }
        </div>
        <div className="px-2">Comment</div>
      </div>
    </div>
  )
}

export default CommunityPost
