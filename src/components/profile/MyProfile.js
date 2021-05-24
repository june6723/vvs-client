import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { findUserById } from '../../actions/User.action'
import ProfileImgModal from '../modal/ProfileImgModal'

const MyProfile = ({ id }) => {
  const me = useSelector((state) => state.user.me)
  const [profileImgModal, setProfileImgModal] = useState(false)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(findUserById(id))
  }, [dispatch])

  const handleToggle = () => {
    setProfileImgModal((prevState) => !prevState)
  }

  return (
    <div className="relative top-16 min-w-full">
      <div className="px-16 py-5 border-b border-black">
        <h2 className="text-2xl font-medium">My Profile</h2>
      </div>
      <div className="border-b border-gray-400 py-3 flex justify-center" >
        <div className="grid grid-cols-10 w-2/3 border rounded-lg border-gray-400 p-1" style={{ height:"300px" }}>
          <div className="col-span-3 h-full bg-gray-200 rounded-lg relative">
            <div className="bg-primaryLight rounded-lg h-2/5"></div>
            <div></div>
            <div className="absolute h-full w-full flex flex-col items-center justify-center top-0">
              <div onClick={handleToggle} className="cursor-pointer" >
                { me?.profileImg ? <img src={me?.profileImg} alt={me?.name} className="w-11 h-11 border-2 border-white rounded-full bg-cover" /> : 
                  <FaUserCircle className="w-10 h-10 border border-white rounded-full bg-white text-primary" /> }
              </div>
              <h3>{me?.name}</h3>
              <span>Followers ({me?.follower?.length})</span>
            </div>
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-3"></div>
        </div>
      </div>
      <div></div>
      { profileImgModal && <ProfileImgModal setProfileImgModal={setProfileImgModal} profileImg={me?.profileImg} /> }
    </div>
  )
}

export default MyProfile
