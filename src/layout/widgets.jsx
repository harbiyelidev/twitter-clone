import React from 'react'
import { SearchIcon } from '../icon/icon'
import { Timeline } from 'react-twitter-widgets'

const widgets = () => {
  return (
    <aside className='w-87 p-2'>
      <div className='flex items-center space-x-3 p-3 m-1 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base'>
        <SearchIcon />
        <input 
          type="text" 
          placeholder='Search'
          className='bg-transparent border-none w-full text-sm outline-none text-15 placeholder-gray-dark'
        />
      </div>
      <div className='mt-4'>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'vezir_oni'
          }}
          options={{
            height: '840'
          }}
        />
      </div>
    </aside>
  )
}

export default widgets