import React, {useState} from 'react'
import {
  PhotoIcon,
  GIFIcon,
  PollIcon,
  EmojiIcon,
  ScheduleIcon,
  NavigationIcon
} from '../icon/icon';
import db from '../firebase';
import { collection, addDoc, serverTimestamp  } from 'firebase/firestore'
import profile from '../images/profile.gif'

const Tweetbox = () => {

  const [content, setContent ] = useState('')

  const sendTweet = async () => {
    if (content !== '') {
      await addDoc(collection(db, 'feed'), {
        displayName: 'VezirOni',
        username: '@vezironi',
        content,
        timestamp: serverTimestamp(),
        avatar: profile
      })

      setContent('')
    }
  };

  return (
    <div className='flex flex-col flex-1 mt-2 px-2'>
      <textarea 
        placeholder="What's Happening?" 
        className='w-full outline-none text-xl placeholder-gray-dark overflow-hidden resize-none bg-transparent' 
        onChange={e => setContent(e.target.value)} 
        value={content}
      />
      <div className='flex items-center justify-between'>
        <div className='flex text-primary-base'>
          <div className='flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-200 cursor-pointer'>
            <PhotoIcon />
          </div>
          <div className='flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-200 cursor-pointer'>
            <GIFIcon />
          </div>
          <div className='flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-200 cursor-pointer'>
            <PollIcon />
          </div>
          <div className='flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-200 cursor-pointer'>
            <EmojiIcon />
          </div>
          <div className='flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-200 cursor-pointer'>
            <ScheduleIcon />
          </div>
          <div className='flex items-center justify-center w-8 h-8 rounded-full hover:bg-blue-200 cursor-pointer'>
            <NavigationIcon />
          </div>
        </div>
        <button 
          className='bg-primary-base text-white rounded-full px-4 py-2 font-medium'
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  )
}

export default Tweetbox