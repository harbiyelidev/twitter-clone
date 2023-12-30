import React from 'react'
import profile from '../images/profile.gif'

import {
    ReplyIcon,
    RepostIcon,
    LikeIcon,
    ViewIcon,
    BookmarkIcon,
    ShareIcon
} from '../icon/icon';

const Feedlist = () => {
  return (
    <article className='flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer hover:bg-gray-50 transform transition-all duration-200'>
        <img 
          src={profile} 
          alt="Profile"
          className='w-10 h-10 rounded-full'
        />
        <div className='flex-1'>
            <div className='flex justify-between items-center w-full'>
                <div className='flex items-center text-sm'>
                    <h4 className='font-bold'>VezirOni</h4>
                    <span className='ml-2 text-gray-dark'>@vezir_oni</span>
                    <div className='mx-2 bg-gray-dark h-1 w-1 border rounded-full' />
                    <span className='text-gray-dark'>
                        {new Date().toLocaleTimeString()}
                    </span>
                </div>
                <div className='flex space-x-1 justify-end w-full'>
                    <div className='w-1 h-1 bg-gray-900 rounded-full' />
                    <div className='w-1 h-1 bg-gray-900 rounded-full' />
                    <div className='w-1 h-1 bg-gray-900 rounded-full' />
                </div>
            </div>
            <p className='text-gray-900 text-sm'>EN; <br/>Hello, I'm Vezir Oni! I'm 18 years old and I've been working with software for 5 years. I'm currently a full stack developer! I built this site using ReactJS, Firebase and Tailwind CSS. Everything you tweet is saved in the database but you can't see it <br /><br />TR; <br />Merhaba, ben Vezir Oni! 18 Yaşındayım ve 5 yıldır yazılımla uğraşıyorum. Şu anda full stack developer'ım! Bu siteyi ReactJS, Firebase ve Tailwind CSS kullanarak yaptım. Tweet attığınız her şey database'e kayıt olur fakat siz göremezsiniz!<br/><br/>Contact; <br/><br/> Mail: <a href="mailto:vezironi@icloud.com" className='text-primary-base underline'>vezironi@icloud.com</a><br/>Discord: <a href="https://discord.com/users/996488031932514394" target='_blank' className='text-primary-base underline' rel="noopener noreferrer">vezironi</a><br/>Discord Server: <a href="https://discord.gg/EQgUNvjTsa" target='_blank' className='text-primary-base underline' rel="noopener noreferrer">https://discord.gg/EQgUNvjTsa</a></p>
            <ul className='flex justify-between'>
                <li className='flex group items-center text-gray-dark w-max'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-100 group-hover:text-primary-base'>
                        <ReplyIcon/> 
                    </div>
                    <span className='group-hover:text-primary-base text-12'>7</span>
                </li>
                <li className='flex group items-center text-gray-dark w-max'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-100 group-hover:text-green-600'>
                        <RepostIcon/> 
                    </div>
                    <span className='group-hover:text-green-600 text-12'>128</span>
                </li>
                <li className='flex group items-center text-gray-dark w-max'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-red-100 group-hover:text-red-600'>
                        <LikeIcon/> 
                    </div>
                    <span className='group-hover:text-red-600 text-12'>2.3K</span>
                </li>
                <li className='flex group items-center text-gray-dark w-max'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-100 group-hover:text-blue-400'>
                        <ViewIcon/> 
                    </div>
                    <span className='group-hover:text-blue-400 text-12'>328K</span>
                </li>
                <li className='flex justify-end'>
                    <div className='flex group items-center text-gray-dark w-max'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-100 group-hover:text-primary-base'>
                            <BookmarkIcon/> 
                        </div>
                    </div>
                    <div className='flex group items-center text-gray-dark w-max'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-100 group-hover:text-primary-base'>
                            <ShareIcon/> 
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </article>
  )
}

export default Feedlist
