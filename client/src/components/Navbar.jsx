import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from "@clerk/clerk-react"
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const { openSignIn } = useClerk()
    const { isSignedIn, user } = useUser()
    const { credit, loadCreditsData } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (isSignedIn) {
            loadCreditsData()
        }
    }, [isSignedIn, loadCreditsData])

    return (
        <div className='flex items-center justify-between mx-4 py-3 lg:mx-44 border-b border-green-500/20'>
            
            <Link to='/'>
                <div className='relative group'>
                    
                    {/* Glow effect */}
                    <div className='absolute -inset-2 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-lg blur-lg group-hover:blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

                    {/* Logo */}
                    <img
                        className='relative w-32 sm:w-44 cursor-pointer 
                                   border border-green-500/30 rounded-lg p-2 bg-zinc-900/50
                                   group-hover:border-green-500/60 
                                   group-hover:shadow-lg 
                                   group-hover:shadow-green-500/40
                                   transition-all duration-300'
                        src={assets.logo}
                        alt='logo'
                    />
                </div>
            </Link>

            {isSignedIn ? (
                <div className='flex items-center gap-2 sm:gap-3'>

                    {/* Credits Button */}
                    <button 
                        onClick={() => navigate('/buy')} 
                        className='flex items-center gap-2 
                                   bg-green-500/20 border border-green-500/40 
                                   px-4 sm:px-7 py-1.5 sm:py-2.5 
                                   rounded-full 
                                   hover:scale-105 
                                   hover:bg-green-500/30 
                                   hover:border-green-400 
                                   hover:shadow-lg 
                                   hover:shadow-green-500/30 
                                   transition-all duration-700'
                    >
                        <img className='w-5' src={assets.credit_icon} alt='' />
                        <p className='text-xs sm:text-sm font-medium text-green-400'>
                            Credits : 5 {credit}
                        </p>
                    </button>

                    {/* Greeting */}
                    <p className='text-gray-300 max-sm:hidden'>
                        Hi, {user?.fullName}
                    </p>

                    {/* Clerk User Button */}
                    <UserButton />

                </div>
            ) : (
                <button 
                    onClick={() => openSignIn({})} 
                    className='bg-gradient-to-r from-green-400 to-emerald-500 
                               text-black font-semibold 
                               flex items-center gap-4 
                               px-4 py-2 sm:px-8 sm:py-3 
                               text-sm rounded-full 
                               hover:scale-105 
                               hover:shadow-lg 
                               hover:shadow-green-500/50 
                               transition-all'
                >
                    Get started 
                    <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />
                </button>
            )}
        </div>
    )
}

export default Navbar