import React from 'react'
import { testimonialsData } from '../assets/assets';

const Testimonials = () => {

    return (
        <div>

            {/* Title */}
            <h1 className='text-center py-5 lg:py-20 text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-green-400 via-emerald-500 to-green-300 bg-clip-text text-transparent'>
                Customer Testimonials
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">

                {
                    testimonialsData.map((item, index) => (
                        <div 
                            key={index} 
                            className='bg-zinc-900 border border-green-500/30 rounded-xl p-6 shadow-lg shadow-green-500/10 max-w-lg m-auto hover:scale-105 hover:shadow-green-500/30 hover:border-green-500/50 transition-all duration-700'
                        >
                            <p className='text-4xl text-green-400'>"</p>
                            <p className='text-sm text-gray-300 leading-relaxed'>{item.text}</p>
                            <div className='flex items-center gap-3 mt-5'>
                                <img 
                                    className='w-9 h-9 rounded-full border-2 border-green-500/50 object-cover' 
                                    src={item.image} 
                                    alt="" 
                                />
                                <div>
                                    <p className='text-gray-100 font-medium'>{item.author}</p>
                                    <p className='text-sm text-gray-400'>{item.jobTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Testimonials