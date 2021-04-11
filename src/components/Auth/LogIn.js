import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logIn } from '../../actions/auth'

const LogIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(formData, history));
  }

  return (
    <div className="h-screen" >
      <div className="relative h-2/3 grid grid-cols-2 mx-12 my-10 lg:mx-36 lg:my-10 " style={{boxShadow: "0px 3px 15px #00000059"}}>
        <div className="from-cyan-400 to-blue-500 bg-gradient-to-r text-white py-8 px-5 hidden lg:block">
          <h3 className="text-3xl font-bold mb-7">Welcome to VVS</h3>
          <h4 className="text-xl font-semibold">A platform where you</h4>
          <h4 className="text-xl font-semibold mb-5">build your own community.</h4> 
          <h5 className="text-md">Exchange information.</h5>
          <h5 className="text-md">Sell information.</h5>
          <h5 className="text-md">Make a profit.</h5>
          <div className="absolute bottom-16 flex">
            <Link to="/signup" className="text-orange-200">Create an account</Link>
          </div>
        </div>
        <section className="col-span-2 flex justify-center w-full h-full lg:px-24 lg:py-8 lg:col-span-1">
          <div className="flex flex-col max-w-lg items-center w-full px-16 py-8">
            <h3 className="font-semibold text-2xl mb-7">Log In</h3>
            <form className="grid w-full" onSubmit={handleSubmit}>
              <div className="flex items-center py-1 mb-5 border-b border-gray-500">
                <IoMdMail className="mr-1 text-lg"/>
                <input className="px-1 focus:outline-none w-full"
                type="text" name="email" placeholder="Email" onChange={handleChange}></input>
              </div>
              <div className="flex items-center py-1 mb-5 border-b border-gray-500">
                <FaLock className="mr-1"/>
                <input className="px-1 focus:outline-none w-full"
                type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange}></input>
                <button onClick={handleShowPassword} className="text-lg">{ showPassword ? <MdVisibilityOff /> : <MdVisibility /> }</button>
              </div>  
              <div className="flex justify-center mt-10">
                <button type="submit" className="px-5 py-3 rounded-md w-2/3 bg-lightBlue-500 text-white hover:bg-lightBlue-400">Log In</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LogIn
