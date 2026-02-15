import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-36'>

      {/* Heading */}
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-100'>
        Steps to remove background <br />
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500'>
          image in seconds
        </span>
      </h1>

      {/* Cards */}
      <div className='flex flex-wrap justify-center gap-6 mt-16 xl:mt-20'>

        {/* Step 1 */}
        <div className='flex items-start gap-4 bg-zinc-900 border border-green-500/30 shadow-lg shadow-green-500/10 p-7 pb-10 rounded-xl 
                        hover:shadow-green-500/30 hover:-translate-y-1 hover:border-green-500/50 transition-all duration-300'>
          <div className='bg-green-500/20 p-3 rounded-lg border border-green-500/40'>
            <img className='w-6' src={assets.upload_icon} alt="" />
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-100'>Upload image</p>
            <p className='text-sm text-gray-400 mt-1 leading-relaxed'>
              This is a demo text, will replace it later.
              <br />This is a demo.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className='flex items-start gap-4 bg-zinc-900 border border-green-500/30 shadow-lg shadow-green-500/10 p-7 pb-10 rounded-xl 
                        hover:shadow-green-500/30 hover:-translate-y-1 hover:border-green-500/50 transition-all duration-300'>
          <div className='bg-green-500/20 p-3 rounded-lg border border-green-500/40'>
            <img className='w-6' src={assets.remove_bg_icon} alt="" />
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-100'>Remove background</p>
            <p className='text-sm text-gray-400 mt-1 leading-relaxed'>
              This is a demo text, will replace it later.
              <br />This is a demo.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className='flex items-start gap-4 bg-zinc-900 border border-green-500/30 shadow-lg shadow-green-500/10 p-7 pb-10 rounded-xl 
                        hover:shadow-green-500/30 hover:-translate-y-1 hover:border-green-500/50 transition-all duration-300'>
          <div className='bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-lg shadow-lg shadow-green-500/30'>
            <img className='w-6' src={assets.download_icon} alt="" />
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-100'>Download image</p>
            <p className='text-sm text-gray-400 mt-1 leading-relaxed'>
              This is a demo text, will replace it later.
              <br />This is a demo.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Steps