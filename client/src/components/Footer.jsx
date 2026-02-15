import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3 bg-black border-t border-green-500/30'>
      <img width={150} src={assets.logo} alt="" />
      <p className='flex-1 border-l border-green-500/40 pl-4 text-sm text-gray-400 max-sm:hidden'>
        Copyright @GreatStack.dev | All right reserved.
      </p>
      <div className='flex gap-2'>
        <img 
          width={40} 
          src={assets.facebook_icon} 
          alt="" 
          className='hover:opacity-80 transition cursor-pointer hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]'
        />
        <img 
          width={40} 
          src={assets.twitter_icon} 
          alt="" 
          className='hover:opacity-80 transition cursor-pointer hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]'
        />
        <img 
          width={40} 
          src={assets.google_plus_icon} 
          alt="" 
          className='hover:opacity-80 transition cursor-pointer hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]'
        />
      </div>
    </div>
  )
}

export default Footer