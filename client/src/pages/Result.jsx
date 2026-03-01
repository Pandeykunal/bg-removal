import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Result = () => {

  const navigate = useNavigate()

  const { image, resultImage, loading, removeBG } = useContext(AppContext)

  const handleImageUpload = (file) => {
    if (file) {
      removeBG(file)
    }
  }

  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>

      <div className='bg-zinc-900 border border-green-500/30 rounded-lg px-8 py-6 shadow-lg shadow-green-500/10'>

        {/* --------- Images Container --------- */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>

          {/* --------- Left Side --------- */}
          <div>
            <p className='font-semibold text-gray-100 mb-2'>Original</p>
            {image ? (
              <img 
                className='rounded-md border border-green-500/30 shadow-md w-full' 
                src={URL.createObjectURL(image)} 
                alt='Original' 
              />
            ) : (
              <div className='rounded-md border-2 border-dashed border-green-500/30 h-80 flex items-center justify-center bg-zinc-800/50'>
                <div className='text-center'>
                  <input
                    type='file'
                    id='upload-result'
                    accept='image/*'
                    onChange={(e) => handleImageUpload(e.target.files[0])}
                    hidden
                  />
                  <label
                    htmlFor='upload-result'
                    className='cursor-pointer inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold rounded-full hover:scale-105 transition-all'
                  >
                    Upload Image
                  </label>
                  <p className='text-gray-400 text-sm mt-3'>Click to upload an image</p>
                </div>
              </div>
            )}
          </div>

          {/* --------- Right Side --------- */}
          <div className='flex flex-col'>
            <p className='font-semibold text-gray-100 mb-2'>Background Removed</p>
            <div className='rounded-md border border-green-500/30 h-full relative bg-layer shadow-md min-h-[320px] flex items-center justify-center'>
              
              {resultImage ? (
                <img src={resultImage} alt='Result' className='w-full' />
              ) : loading ? (
                <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                  <div className="border-4 border-green-400 rounded-full h-12 w-12 border-t-transparent animate-spin shadow-lg shadow-green-500/50"></div>
                </div>
              ) : (
                <p className='text-gray-500 text-sm'>Result will appear here</p>
              )}

            </div>
          </div>

        </div>

        {/* --------- Buttons --------- */}
        {resultImage && 
          <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
            <button 
              onClick={() => navigate('/')} 
              className='px-8 py-2.5 text-green-400 text-sm border border-green-500/50 rounded-full hover:scale-105 hover:bg-green-500/10 hover:border-green-400 transition-all duration-700'
            >
              Try another image
            </button>
            <a 
              href={resultImage} 
              className='px-8 py-2.5 text-black font-semibold text-sm bg-gradient-to-r from-green-400 to-emerald-500 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-700' 
              download='background-removed.png'
            >
              Download image
            </a>
          </div>
        }

      </div>
    </div>
  )
}

export default Result