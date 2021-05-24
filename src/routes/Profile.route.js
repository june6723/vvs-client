import React from 'react'
import { useParams } from 'react-router'
import MyProfile from '../components/profile/MyProfile'
import UserProfile from '../components/profile/UserProfile'

const ProfileRoute = () => {
  const { name } = useParams();
  const profile = JSON.parse(localStorage.getItem('profile'))
  return(
    name === profile.name ? <MyProfile id={profile.id} /> : <UserProfile name={name} />
  )
}

export default ProfileRoute
