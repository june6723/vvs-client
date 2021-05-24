import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md'
import { AiFillMessage } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { findMe } from '../../actions/User.action';

const Navbar = () => {
  const profile = JSON.parse(localStorage.getItem('profile'))
  const dispatch = useDispatch()
  const me = useSelector((state) => state.user.me)

  useEffect(() => {
    if(profile) {
      dispatch(findMe(profile.id))
    }
  }, [dispatch])

  return (
    <div className="flex items-center justify-end bg-gray-800 px-16 py-3 fixed top-0 h-16 z-10 w-screen min-w-full">
      <div className="absolute inset-x-1/2">
        <Link to="/" className="text-white text-2xl">VVS</Link>
      </div>
      <div className="flex items-center">
        { me ? (
            <ul className="flex items-center h-full">
              <li className="mr-3 text-white hover:text-gray-200">
                <Link to="/"><MdNotifications className=" w-7 h-7" /></Link>
              </li>
              <li className="mr-4 text-white hover:text-gray-200">
                <Link to="/"><AiFillMessage className="w-6 h-6" /></Link>
              </li>
              <li className=" bg-white text-primary border-white border-2 rounded-full hover:bg-opacity-90">
                <Link to={`/${me.name}`}>
                  { me.profileImg ? <img alt={me.name} src={me.profileImg} className="rounded-full w-8 h-8 bg-cover" /> : 
                    <FaUserCircle className="text-3xl" /> }
                </Link>
              </li>
            </ul>
        ) : (
          <>
            <Link to="/login" className="text-white px-5 py-0.5 bg-violet-600 hover:bg-violet-500 rounded-md text-lg mr-3">Log In</Link>
            <Link to="/signup" className="text-white px-4 py-0.5 bg-coolGray-600 hover:bg-coolGray-500 rounded-md text-lg">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  )
};

export default Navbar;
