import React from 'react'
import { SettingsIcon } from '../icon/icon';
import profile from '../images/profile.gif'
import Tweetbox from '../components/tweetbox';
import Divider from '../components/divider';
import Feedlist from '../components/feedlist';

const Content = () => {
  return (
    <main className='sticky top-0 h-screen flex-1 flex flex-col border-r border-l border-gray-extraLight'>
      <header className='sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white'>
        <span className='font-bold text-xl text-gray-900'>Home</span>
        <SettingsIcon />
      </header>
      <div className='flex space-x-4 px-4 py-3'>
        <img 
          src={profile} 
          alt="Profile"
          className='w-10 h-10 rounded-full'
        />
        <Tweetbox />
      </div>
      <Divider />
      <Feedlist />
    </main>
  )
}

export default Content