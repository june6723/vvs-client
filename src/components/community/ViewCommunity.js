import React, { useEffect } from 'react'
import { FaSearch, FaUsers } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { getCommunityPosts, getOneCommunity, joinCommunityRequest } from '../../actions/Community.action';
import { activateCreatePostModal } from '../../actions/PostModal.action';
import { CLEAR_VIEW_COMMUNITY } from '../../constants/actionTypes';
import CommunityPost from './CommunityPost';
// import Loading from '../etc/Loading'

const ViewCommunity = () => {
  const { communityId } = useParams();
  const dispatch = useDispatch();
  const viewCommunity = useSelector((state) => state.community.viewCommunity);
  const communityPosts = useSelector((state) => state.community.communityPosts)
  const profile = JSON.parse(localStorage.getItem('profile'))
  const userId = profile.id

  useEffect(() => {
    dispatch(getOneCommunity(communityId));
<<<<<<< HEAD
=======
    dispatch(getCommunityPosts(communityId))
    return (() => {
      dispatch({ type: CLEAR_VIEW_COMMUNITY })
    })
>>>>>>> release/0.1.1
  }, [dispatch])

  const handleJoin = (e) => {
    e.preventDefault();
    dispatch(joinCommunityRequest(viewCommunity?._id));
  }

  const handlePostModal = (e) => {
    e.preventDefault();
    dispatch(activateCreatePostModal());
  }
  
  // if(loading) return <Loading />
  return (
    <div className="pt-16">
      <div className="flex justify-between px-32 py-4 border-b border-gray-400">
        <div className="flex items-center">
          {viewCommunity?.mainImg ? 
            <img src={viewCommunity.mainImg} alt="Community main image" className="w-10 h-10 rounded-full mr-3" /> : 
            <FaUsers className="text-md mr-3 p-1.5 w-10 h-10 text-white bg-secondaryLight rounded-full" />
          }
          <span className="text-md font-semibold mr-1">{viewCommunity?.name}</span>
          <div className="mr-3 flex flex-col items-center">
            <MdKeyboardArrowUp />
            <MdKeyboardArrowDown />
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-2xl" />
            <span className="text-xs">{viewCommunity?.member?.length} {viewCommunity?.member?.length ? "member" : "members"}</span>
          </div>
        </div>
        <div className="flex items-center">
          {!viewCommunity?.member?.includes(userId) && !viewCommunity?.requestToJoin &&
            <button onClick={handleJoin} className="px-6 py-1 text-lg font-semibold bg-primary text-white rounded-md hover:bg-secondaryLight transition">Join</button>
          }
          {!viewCommunity?.member?.includes(userId) && viewCommunity?.requestToJoin && !viewCommunity?.memberRequest?.includes(userId) &&
            <button onClick={handleJoin} className="px-3 py-1 text-lg font-semibold bg-primary text-white rounded-md hover:bg-secondaryLight transition">Join Request</button>
          }
          {viewCommunity?.memberRequest?.includes(userId) &&
            <div className="px-3 py-1 text-lg font-normal bg-gray-500 text-white rounded-md">Under Review</div>
          }
          
        </div>
      </div>
      <div className="mt-1"> 
        <div className="bg-black opacity-60 z-0">
          <div className="flex justify-center items-center z-10 text-white py-12">
            <h3 className="text-xl font-semibold ">{viewCommunity?.name}</h3>
          </div>
        </div>
      </div>
      <div className="flex px-32 border-t mt-1 border-gray-400">
        <div className="flex justify-center items-center rounded-2xl px-3 border border-gray-500 max-w-xs">
          <FaSearch className="text-lg mr-1" />
          <input className="w-full focus:outline-none" />
        </div>
        {viewCommunity?.member.includes(userId) && <button onClick={handlePostModal} className="px-3 py-1 h-full bg-primary text-white rounded-md hover:opacity-80 transition">Create</button>}
      </div>
      <div className="flex px-32 py-8 w-full">
          <div className="overflow-hidden bg-gray-400" style={{maxWidth:"360px", width:"360px"}}>
            <div>
              <h4>Group Chats</h4>
              <h4>Groupt Calls</h4>
            </div>
          </div>
          <div className="w-full px-8">
            { communityPosts?.map((post) => (
              <CommunityPost key={post._id} post={post} />
            ))}
          </div>
          <div className="overflow-hidden bg-gray-400" style={{maxWidth:"240px", width:"240px"}}>
            <div>
              <h4>Members Online</h4>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ViewCommunity
