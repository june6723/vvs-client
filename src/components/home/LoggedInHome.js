import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { getMyPosts } from '../../actions/post';
import { activateCreatePostModal } from '../../actions/postModal';
import UserPost from '../Post/UserPost';

const tabItems = ["My Feed", "My Communities"];

const LoggedInHome = () => {
  const [activatedTab, setActivatedTab] = useState(tabItems[0]);
  const posts = useSelector(state => state.post.posts);
  const dispatch = useDispatch();

  const handleTabClick = (index) => {
    setActivatedTab(tabItems[index]);
  }
  const handlePostModal = (e) => {
    e.preventDefault();
    dispatch(activateCreatePostModal());
  }

  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch])

  return (
    <div className="px-12 relative top-16">
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
        <div className="col-span-2">
          { posts && posts.map(post => (
            <UserPost key={post._id} post={post} />
          ))}
        </div>
        <div className="bg-gray-200 text-center">Friends & Message</div>
      </div>
    </div>
  )
}

export default LoggedInHome
