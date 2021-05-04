import React, { useEffect } from 'react';
import { FaAngleLeft, FaEdit, FaGlobeAmericas, FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getJoinedCommunities, getLatestCommunities } from '../../actions/community';
import { activateCreateCommunityModal } from '../../actions/communityModal';
import ViewCommunity from './CommunityCard';


const Community = () => {
  const dispatch = useDispatch();
  const latest = useSelector((state) => state.community.latestCommunities);
  const joined = useSelector((state) => state.community.joinedCommunities);

  useEffect(() => {
    dispatch(getLatestCommunities(1));
  }, [])
  useEffect(() => {
    dispatch(getJoinedCommunities());
  },[])

  const handleCommunityModal = (e) => {
    e.preventDefault();
    dispatch(activateCreateCommunityModal());
  }

  return (
    <div className="relative top-16">
      <div className="px-16 py-6 text-xl font-bold border-b">
        Discover Communities • Across the globe!
        <button onClick={handleCommunityModal} className="px-3 py-1 ml-5 h-full bg-primary text-white rounded-md hover:opacity-80 transition">Create</button>
      </div>
      <div className="py-6 border-b">
        <div className="flex flex-col items-center justify-center text-2xl">
          <FaGlobeAmericas />
          Community
        </div>
      </div>
      <div className="py-6 flex flex-col items-center">
        <div className="flex justify-center items-center w-full rounded-2xl pl-3 pr-1 py-1 border border-gray-500 h-full max-w-sm">
          <FaSearch className="text-2xl mr-1" />
          <input className="w-full focus:outline-none" placeholder="Search Keywords" />
          <button className="bg-primary text-white text-sm rounded-2xl py-1 px-4">Community</button>
        </div>
        <div className="mt-8 px-16 w-full">
          <div className="flex justify-between items-center">
            <div className="flex text-2xl font-semibold items-center">
              Joined Communities
              <FaAngleLeft className="ml-1" />
            </div>
            <div className="flex items-center text-sm">
              Edit List
              <FaEdit className="ml-1 text-md" />
            </div>
          </div>
          <div className="mt-3 px-5 py-1 border rounded-sm">
            {joined?.map((community) => (
              <ViewCommunity key={community._id} data={community} />
            ))}
          </div>
        </div>
        <div className="mt-8 px-16 w-full">
          <div className="flex justify-between items-center">
            <div className="flex text-2xl font-semibold items-center">
              Latest Communities
              <FaAngleLeft className="ml-1" />
            </div>
          </div>
          <div className="mt-3 px-5 py-1 border rounded-sm">
            {latest?.map((community) => (
              <ViewCommunity key={community._id} data={community} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
