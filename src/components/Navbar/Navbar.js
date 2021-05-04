import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { logOut } from '../../actions/Auth.action';


const Navbar = () => {
  const profile = JSON.parse(localStorage.getItem('profile'))
  const dispatch = useDispatch();

  const callLogOut = () => {
    dispatch(logOut())
  }

  return (
    <div className="flex items-center justify-end bg-gray-800 px-5 py-3 fixed top-0 h-16 z-10 w-screen min-w-full">
      <div className="absolute inset-x-1/2">
        <Link to="/" className="text-white text-2xl">VVS</Link>
      </div>
      <div className="">
        { profile ? (
          <div className="flex items-center">
            { profile.profileImg ? <img alt={profile.name} src={profile.profileImg} /> : <FaUserCircle className="text-white mr-1 text-3xl" /> }
            <span className="text-white text-lg mr-3">{profile.name}</span>
            <button className="text-white px-4 py-0.5 bg-violet-600 hover:bg-violet-500 rounded-md text-lg" onClick={callLogOut}>Log Out</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="text-white px-5 py-1 bg-violet-600 hover:bg-violet-500 rounded-md text-lg mr-3">Log In</Link>
            <Link to="/signup" className="text-white px-4 py-1 bg-coolGray-600 hover:bg-coolGray-500 rounded-md text-lg">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  )
};

export default Navbar;
