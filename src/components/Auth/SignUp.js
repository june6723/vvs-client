import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUserAlt, FaLock, FaCalendar } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { signUp } from '../../actions/auth';

const initialState = { name: '', email: '', password: '', confirmPassword: '', day: '', month: '', year: '', gender: '' };

const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleInput = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  }
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { year, month, day } = formData;
    const birthDate = `${year}-${month}-${day}`
    dispatch(signUp({ ...formData, birthDate}, history))
  }

  return (
    <div className="h-screen">
      <div className="grid grid-cols-2 px-36 py-10 relative h-5/6">
        <div className="bg-gradient-to-br from-purple-700 to-fuchsia-400 text-white py-8 px-5">
          <h3 className="text-3xl font-bold mb-7">Welcome to VVS</h3>
          <h4 className="text-xl font-semibold">A platform where you</h4>
          <h4 className="text-xl font-semibold mb-5">build your own community.</h4> 
          <h5 className="text-md">Exchange information.</h5>
          <h5 className="text-md">Sell information.</h5>
          <h5 className="text-md">Make a profit.</h5>
          <div className="absolute bottom-16 flex">
            <h5 className="mr-3">Already have an account?</h5>
            <Link to="/login" className="text-yellow-400">Login</Link>
          </div>
        </div>
        <div className="px-24 py-8">
          <h3 className="font-semibold text-2xl mb-7">Sign Up</h3>
          <form className="grid" onSubmit={handleSubmit}>
            <div className="flex items-center py-1 mb-5 border-b border-gray-500">
              <FaUserAlt className="mr-1"/>
              <input className="px-1 focus:outline-none w-full"
              type="text" name="name" placeholder="Full name" onChange={handleChange}></input>
            </div>
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
            <div className="flex items-center py-1 mb-5 border-b border-gray-500">
              <FaLock className="mr-1"/>
              <input className="px-1 focus:outline-none w-full"
              type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange}></input>
            </div>
            <div className="flex items-center mb-2"><FaCalendar className="mr-2" />BirthDay</div>
            <div className="grid grid-cols-3 gap-x-3 mb-5">
              <input className="border-b border-gray-500 w-full" type="number" name="month" placeholder="Month" onChange={handleChange} maxLength="2" onInput={handleInput} />
              <input className="border-b border-gray-500 w-full" type="number" name="day" placeholder="Day" onChange={handleChange} maxLength="2" onInput={handleInput} />
              <input className="border-b border-gray-500 w-full" type="number" name="year" placeholder="Year" onChange={handleChange} maxLength="4" onInput={handleInput} />
            </div>
            <div className="w-1/3">
              <span className="flex items-center"><FaUserAlt className="text-md mr-2" />Gender</span>
              <select name="gender" className="border-b border-gray-500 py-1" onChange={handleChange}>
                <option value="" hidden>Select gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="others">others</option>
              </select>
            </div>
            <div className="flex justify-center mt-10">
              <button type="submit" className="px-5 py-3 rounded-md w-2/3 bg-violet-600 text-white hover:bg-violet-500">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
