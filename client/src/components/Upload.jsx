import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Upload = () => {

  const { removeBG } = useContext(AppContext)

  const handleUpload = (file) => {
    console.log('Selected file:', file)
    
    if (file) {
      removeBG(file)   // actually call your bg removal
    }
  }

  return (
    <div className='pb-16'>
      
      {/* Title */}
      <h1 className='text-center py-6 md:py-16 text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-green-400 via-emerald-500 to-green-300 bg-clip-text text-transparent'>
        See the magic. Try now
      </h1>

      <div className='text-center mb-24'>
        <input
          onChange={e => handleUpload(e.target.files[0])}
          type="file"
          id="upload2"
          accept="image/*"
          hidden
        />

        <label
          htmlFor='upload2'
          className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer
                     bg-gradient-to-r from-green-400 to-emerald-500
                     shadow-lg shadow-green-500/50
                     m-auto hover:scale-105 hover:shadow-green-500/70
                     transition-all duration-700'
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className='text-black text-sm font-semibold'>
            Upload your image
          </p>
        </label>
      </div>
    </div>
  )
}

export default Upload