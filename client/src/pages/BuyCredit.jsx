import React from 'react'
import { assets } from '../assets/assets'
import { plans } from '../assets/assets'

const BuyCredit = () => {

  const handlePayment = (planId, method) => {
    console.log(`Payment initiated for ${planId} using ${method}`)
    // TODO: Implement payment logic later
    alert(`Payment for ${planId} using ${method} - Coming soon!`)
  }

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-green-500/50 text-green-400 px-10 py-2 rounded-full mb-6 hover:bg-green-500/10 transition-all'>
        Our Plans
      </button>
      
      <h1 className='text-center mb-6 sm:mb-10 text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-green-400 via-emerald-500 to-green-300 bg-clip-text text-transparent'>
        Choose the plan that's right for you
      </h1>
      
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div 
            className='bg-zinc-900 border border-green-500/30 shadow-lg shadow-green-500/10 rounded-lg py-12 px-8 text-gray-300 hover:scale-105 hover:border-green-500/50 hover:shadow-green-500/30 transition-all duration-500' 
            key={index}
          >
            <img width={40} src={assets.logo_icon} alt='' />
            <p className='mt-3 font-semibold text-gray-100'>{item.id}</p>
            <p className='text-sm text-gray-400'>{item.desc}</p>
            <p className='my-6 text-gray-100'>
              <span className='text-3xl font-medium text-green-400'>₹{item.price} </span>
              <span className='text-gray-400'>/ {item.credits} credits</span>
            </p>
            
            <div className='flex flex-col gap-3'>
              <button 
                onClick={() => handlePayment(item.id, 'Razorpay')} 
                className='w-full flex justify-center items-center gap-2 border border-green-500/40 bg-zinc-800 text-sm rounded-md py-2.5 min-w-52 hover:bg-green-500/10 hover:border-green-400 transition-all'
              >
                <img className='h-4' src={assets.razorpay_logo} alt="" />
                <span className='text-gray-300'>Pay with Razorpay</span>
              </button>
              
              <button 
                onClick={() => handlePayment(item.id, 'Stripe')} 
                className='w-full flex justify-center items-center gap-2 border border-green-500/40 bg-zinc-800 text-sm rounded-md py-2.5 min-w-52 hover:bg-green-500/10 hover:border-green-400 transition-all'
              >
                <img className='h-4' src={assets.stripe_logo} alt="" />
                <span className='text-gray-300'>Pay with Stripe</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit