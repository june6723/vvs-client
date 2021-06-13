import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { findUserByName, followUser } from '../../actions/User.action'
import Loading from '../etc/Loading'

const UserProfile = ({ name }) => {
  const profile = useSelector((state) => state.user.profile)
  const myProfile = JSON.parse(localStorage.getItem('profile'))
  const myId = myProfile.id
  const dispatch = useDispatch()
  const [isFollowing, setIsFollowing] = useState()
  const [followerLength, setFollowerLength] = useState()
  const followers = profile && profile.follower

  useEffect(() => {
    dispatch(findUserByName(name))
  }, [dispatch, name])

  useEffect(() => {
    setFollowerLength(followers?.length)
    if(followers?.includes(myId)) {
      setIsFollowing(true)
    } else {
      setIsFollowing(false)
    }
  }, [followers])

  const handleFollow = (e) => {
    e.preventDefault()
    dispatch(followUser(profile._id))
    if(isFollowing) {
      setFollowerLength((prev) => prev-1)
    } else {
      setFollowerLength((prev) => prev+1)
    }
    setIsFollowing((prev) => !prev)
  }


  if(!profile) return <Loading />
  return (
    <div className="relative top-16 min-w-full">
      <div className="px-16 py-5 border-b border-black">
        <h2 className="text-2xl font-medium">{profile?.name}'s Profile</h2>
      </div>
      <div className="mb-5 mt-1 py-3 flex justify-center" >
        <div className="grid grid-cols-7 gap-1 w-1/2 border rounded-lg border-gray-400 p-1" style={{ height:"300px" }}>
          <div className="col-span-3 h-full bg-gray-200 rounded-lg relative">
            <div className="bg-primaryLight rounded-lg h-2/5"></div>
            <div></div>
            <div className="absolute h-full w-full flex flex-col items-center justify-center top-0">
              <div className="" >
                { profile?.profileImg ? <img src={profile?.profileImg} alt={profile?.name} className="w-11 h-11 border-2 border-white rounded-full bg-cover" /> : 
                  <FaUserCircle className="w-10 h-10 border border-white rounded-full bg-white text-primary" /> }
              </div>
              <h3>{profile?.name}</h3>
              <span>Followers ({followerLength})</span>
            </div>
            <div className="absolute bottom-4 w-full flex justify-center">
              { isFollowing ? 
                  <button onClick={handleFollow} className="px-8 py-1 rounded-3xl text-gray-100 bg-gray-500 hover:bg-gray-400 transition">Following</button> :
                  <button onClick={handleFollow} className="px-8 py-1 rounded-3xl text-white bg-primary hover:bg-secondaryLight transition">Follow</button> }
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col h-full">
              <div className="flex h-full items-center justify-center">
                <span>Description</span>
              </div>
              <div className="px-3 py-2 bg-secondaryLight rounded-lg">
                <span className="text-sm text-gray-100">#Tag1 #Tag2 #Tag3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400">
        
      </div>
    </div>
  )
}

export default UserProfile
