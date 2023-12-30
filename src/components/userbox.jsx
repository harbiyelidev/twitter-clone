import React from 'react'

import profile from '../images/profile.gif'

const Userbox = () => {
  return (
    <div className='flex justify-between items-center mb-3 hover:bg-blue-200 cursor-pointer rounded-full py-2 px-3 transform transition-colors duration-200'>
        <img 
          src={profile} 
          alt="Profile"
          className='w-10 h-10 rounded-full'
        />
        <div className='flex flex-col w-145 align-left'>
            <span className='font-bold text-15 text-black'>VezirOni</span>
            <span className='text-15 text-gray-dark'>@vezir_oni</span>
        </div>
        <div className='flex space-x-1'>
            <div className='w-1 h-1 bg-gray-900 rounded-full' />
            <div className='w-1 h-1 bg-gray-900 rounded-full' />
            <div className='w-1 h-1 bg-gray-900 rounded-full' />
        </div>
    </div>
  )
}

export default Userbox