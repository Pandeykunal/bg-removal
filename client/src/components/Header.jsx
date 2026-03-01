import React from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Header = () => {

  const { removeBG } = useContext(AppContext )

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      
      {/* -------- Left Side --------- */}
      <div>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight text-gray-100 leading-tight'>
          Remove the <br className='max-md:hidden' /> 
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-bold'>
            background
          </span>{' '}
          from <br className='max-md:hidden' /> images for free.
        </h1>

        <p className='my-6 text-[15px] leading-relaxed text-gray-400'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br className='max-sm:hidden' /> 
          Lorem Ipsum has been the industry's standard dummy text ever.
        </p>

        <div>
          <input onChange={e => removeBG(e.target.files[0])} type="file" id="upload1" accept='image/*' hidden />
          <label
            htmlFor='upload1'
            className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer
            bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600
            shadow-lg shadow-green-500/50 hover:shadow-green-500/70
            m-auto transition-all duration-300'
          >
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className='text-black text-sm font-semibold'>
              Upload your image
            </p>
          </label>
        </div>
      </div>

      {/* -------- Right Side -------- */}
      <div className='w-full max-w-md relative'>
        {/* Glowing background effect */}
        <div className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-3xl rounded-full'></div>
        
        {/* Image with border and glow */}
        <img 
          src={assets.header_img} 
          alt="" 
          className='relative rounded-2xl border-2 border-green-500/40 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-500' 
        />
      </div>
    </div>
  )
}

export default Header