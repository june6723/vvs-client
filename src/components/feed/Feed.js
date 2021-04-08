import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Feed = () => {
  return (
    <div className="px-12">
      <div className="py-5 text-2xl">My Feed</div>
      <div className="border-t border-b text-2xl text-center py-10">Trending Feed</div>
      <div className="mt-8 grid grid-cols-4 gap-8">
        <ul className="flex bg-gray-200">
          <li>My Feed</li>
          <li>My Communities</li>
        </ul>
        <div className="col-span-2 bg-gray-200 flex">
          <div>
            <FaSearch />
          </div>
          <input />
        </div>
        <div className="col-start-1 bg-gray-200">Suggested Friends</div>
        <div className="col-span-2 bg-gray-200"></div>
        <div className="bg-gray-200"></div>
      </div>
    </div>
  )
}

export default Feed
