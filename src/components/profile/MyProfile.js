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
      <div className="mb-5 mt-1 py-3 flex justify-center" >
        <div className="grid grid-cols-10 gap-1 w-2/3 border rounded-lg border-gray-400 p-1" style={{ height:"300px" }}>
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
          <div className="col-span-3">
            <div className="h-1/2 mb-1 bg-secondaryLight rounded-lg flex items-center justify-center">
              View Dashboard
            </div>
            <div className="h-1/2 bg-black text-white rounded-lg flex items-center justify-center">
              Quick Dashboard
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400">
        
      </div>
      { profileImgModal && <ProfileImgModal setProfileImgModal={setProfileImgModal} profileImg={me?.profileImg} /> }
    </div>
  )
}

export default MyProfile
