import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value)
  }

  return (
    <div className='pb-10 md:py-24 mx-4'>

      {/* Title */}
      <h1 className='text-center mb-14 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100'>
        Remove Background with
        <br />
        <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500'>
          High Quality & Accuracy
        </span>
      </h1>

      {/* Slider Container */}
      <div className='relative w-full max-w-3xl mx-auto overflow-hidden rounded-3xl shadow-2xl shadow-green-500/20 bg-black border border-green-500/30'>

        {/* BEFORE Image */}
        <img
          src={assets.image_w_bg}
          className='w-full select-none'
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          draggable={false}
        />

        {/* AFTER Image */}
        <img
          src={assets.image_wo_bg}
          className='absolute inset-0 w-full h-full select-none'
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          draggable={false}
        />

        {/* Labels */}
        <span className='absolute top-5 left-5 bg-black/80 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur border border-green-500/50'>
          BEFORE
        </span>
        <span className='absolute top-5 right-5 bg-black/80 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur border border-green-500/50'>
          AFTER
        </span>

        {/* Divider */}
        <div
          className='absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-green-400 via-emerald-500 to-green-400 shadow-lg shadow-green-500/50'
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Handle */}
        <div
          className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20'
          style={{ left: `${sliderPosition}%` }}
        >
          <div className='w-12 h-12 rounded-full bg-black border-2 border-green-400 shadow-lg shadow-green-500/50 flex items-center justify-center'>
            <div className='w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 animate-pulse' />
          </div>
        </div>

        {/* Invisible Range Input */}
        <input
          type='range'
          min='0'
          max='100'
          value={sliderPosition}
          onChange={handleSliderChange}
          className='absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30'
        />
      </div>
    </div>
  )
}

export default BgSlider