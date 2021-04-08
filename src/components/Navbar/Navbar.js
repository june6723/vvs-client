import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import decode from 'jwt-decode';
import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [jwt, setJwt] = useState(JSON.parse(localStorage.getItem('token')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logOut = () => {
    dispatch({ type: LOGOUT });
    history.push('/');
    setUser(null);
    setJwt(null);
  }

  useEffect(() => {
    if (jwt) {
      const decodedToken = decode(jwt);
      if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
    setJwt(JSON.parse(localStorage.getItem('token')));
  }, [location])

  return (
    <div className="flex items-center justify-end bg-gray-800 px-5 py-3 relative h-16">
      <div className="absolute inset-x-1/2">
        <Link to="/" className="text-white text-2xl">VVS</Link>
      </div>
      <div className="">
        { user ? (
          <div className="flex items-center">
            { user.profileImg ? <img alt={user.name} src={user.profileImg} /> : <FaUserCircle className="text-white mr-1 text-3xl" /> }
            <span className="text-white text-lg mr-3">{user.name}</span>
            <button className="text-white px-4 py-0.5 bg-violet-600 hover:bg-violet-500 rounded-md text-lg" onClick={logOut}>Log Out</button>
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
