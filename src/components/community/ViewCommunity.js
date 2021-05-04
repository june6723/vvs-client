import React, { useEffect } from 'react'
import { FaUsers } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { getOneCommunity, joinCommunityRequest } from '../../actions/Community.action';

const ViewCommunity = () => {
  const { communityId } = useParams();
  const dispatch = useDispatch();
  const viewCommunity = useSelector((state) => state.community.viewCommunity);

  useEffect(() => {
    dispatch(getOneCommunity(communityId));
  })

  const handleJoin = (e) => {
    e.preventDefault();
    dispatch(joinCommunityRequest(viewCommunity?._id));
  }

  return (
    <div className="pt-16">
      <div className="flex justify-between px-16 py-4 border-b border-gray-400">
        <div className="flex items-center">
          {viewCommunity?.mainImg ? null : <FaUsers className="text-md mr-3 p-1.5 w-10 h-10 text-white bg-secondaryLight rounded-full" />}
          <span className="text-lg mr-1">{viewCommunity?.name}</span>
          <div className="mr-3">
            <MdKeyboardArrowUp />
            <MdKeyboardArrowDown />
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-lg" />
            <span className="text-xs">{viewCommunity?.member?.length} {viewCommunity?.member?.length ? "member" : "members"}</span>
          </div>
        </div>
        <div className="flex items-center">
          <button onClick={handleJoin}>Join Community</button>
        </div>
      </div>
    </div>
  )
}

export default ViewCommunity
