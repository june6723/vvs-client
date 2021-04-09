import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { activateCreatePostModal } from '../../actions/postModal';

const tabItems = ["My Feed", "My Communities"];

const LoggedInHome = () => {
  const [activatedTab, setActivatedTab] = useState(tabItems[0]);
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const handleTabClick = (index) => {
    setActivatedTab(tabItems[index]);
  }
  const handlePostModal = (e) => {
    e.preventDefault();
    dispatch(activateCreatePostModal());
    console.log(state);
  }

  return (
    <div className="px-12">
      <div className="py-5 text-2xl">My Feed</div>
      <div className="border-t border-b text-2xl text-center py-10">Trending Feed</div>
      <div className="mt-8 grid grid-cols-4 gap-8">
        <ul className="grid border rounded-lg grid-cols-2 gap-1">
          { activatedTab && tabItems.map((item,index) => {
              if (item === activatedTab) {
                return <li key={index} className="px-3 py-1 rounded-md text-center text-white bg-primary transition">{item}</li>
              }
              return <li key={index} onClick={()=>handleTabClick(index)} className="px-3 py-1 rounded-md text-center hover:bg-indigo-400 hover:text-white transition cursor-pointer">{item}</li>
            })
          }
        </ul>
        <div className="col-span-2 px-32">
          <div className="flex justify-center items-center w-full rounded-2xl px-3 border border-gray-500 h-full">
            <FaSearch className="text-lg mr-1" />
            <input className="w-full focus:outline-none" />
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={handlePostModal} className="px-3 py-1 h-full bg-primary text-white rounded-md hover:opacity-80 transition">Create</button>
        </div>
        <div className="col-start-1 bg-gray-200 text-center">Suggested Friends</div>
        <div className="col-span-2 bg-gray-200"></div>
        <div className="bg-gray-200 text-center">Friends & Message</div>
      </div>
    </div>
  )
}

export default LoggedInHome
