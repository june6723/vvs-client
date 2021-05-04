import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaChevronLeft } from 'react-icons/fa'

const Sidebar = () => {
  const [queryTerm , setQueryTerm] = useState("");
  const [activated, setActivated] = useState(false);
  const searchInput = useRef();
  const location = useLocation()
  
  const handleChange = (e) => setQueryTerm(e.target.value);
  const toggleSidebar = () => setActivated((prevIsSelected) => !prevIsSelected);

  useEffect(() => {
    if(activated) setActivated(false)
  }, [location])

  useEffect(() => {
    const sidebarBtn = document.querySelector('.sidebarBtn');
    const sidebar = document.querySelector('.sidebar');

    if (activated) {
      sidebarBtn.classList.add('-translate-x-full');
      sidebar.classList.remove('-translate-x-full');
    }
    else {
      sidebarBtn.classList.remove('-translate-x-full');
      sidebar.classList.add('-translate-x-full');
    }
    searchInput.current.focus();
  }, [activated])

  return (
    <div className="relative z-10">
      <div className="sidebarBtn fixed w-6 h-36 top-56 rounded-r-2xl bg-secondary cursor-pointer transition duration-200 transform hover:bg-orange-200" onClick={toggleSidebar}></div>
      <nav className="sidebar bg-secondary p-6 w-1/4 h-5/6 fixed top-16 transition transform -translate-x-full" >
        <div className="relative flex items-center px-3 py-1 text-white rounded-3xl bg-warmGray-200 bg-opacity-50 mb-5">
          <FaSearch className="mr-2 text-lg" />
          <input ref={searchInput} className="bg-transparent focus:outline-none text-lg placeholder-white w-full" placeholder="Quick Search" onChange={handleChange} />
        </div>
        <ul className="ml-3">
          <li className="w-max mb-2 rounded-md cursor-pointer hover:bg-orange-200 transition text-white font-bold text-lg"><Link className="w-full px-3 py-1" to="/profile">My Profile</Link></li>
          <li className="w-max mb-2 rounded-md cursor-pointer hover:bg-orange-200 transition text-white font-bold text-lg"><Link className="w-full px-3 py-1" to="/">My Feed</Link></li>
          <li className="w-max mb-2 rounded-md cursor-pointer hover:bg-orange-200 transition text-white font-bold text-lg"><Link className="w-full px-3 py-1" to="/community">Community</Link></li>
        </ul>
        <button className="absolute px-1 text-white h-1/6 text-lg focus:outline-none hover:bg-orange-200 rounded-md" style={{ left:"90%", top:"40%" }} onClick={toggleSidebar}><FaChevronLeft /></button>
      </nav>
    </div>
  )
}

export default Sidebar
