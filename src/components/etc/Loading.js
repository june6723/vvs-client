import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className="absolute w-full h-screen flex justify-center items-center">
      <div className="loading-spinner border-4" />
    </div>
  )
}

export default Loading
