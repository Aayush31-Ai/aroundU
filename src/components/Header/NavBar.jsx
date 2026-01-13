import React from 'react'

import { Search, MapPin, ChevronDown } from "lucide-react"
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <header className='sticky z-50 top-0 bg-white shadow-sm'>
            <nav className='flex items-center justify-between md:justify-around px-3 sm:px-6 md:px-8 py-2 md:my-3'>
                <Link to="/">
                    <div className='flex items-center gap-2'>
                        <img className='w-8 sm:w-10 md:w-12' src="/assets/logo/Logo.jpeg" alt="AroundU Logo" />
                        <div className='font-bold text-lg sm:text-xl md:text-2xl text-[#2f5349]'>Around<span className='text-[#ffc800]'>U</span></div>
                    </div>
                </Link>

                <div className='flex gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm md:text-base'>
                    <NavLink to="/explore" className={({ isActive }) => `transition-all duration-200 ${
                        isActive ? "font-semibold text-[#2f5349] border-b-2 border-[#2f5349] pb-1" : "text-gray-700 hover:text-[#2f5349]"
                    }`}>Explore</NavLink>
                    
                    <NavLink to="/request" className={({ isActive }) => `transition-all duration-200 ${
                        isActive ? "font-semibold text-[#2f5349] border-b-2 border-[#2f5349] pb-1" : "text-gray-700 hover:text-[#2f5349]"
                    }`}>Request</NavLink>
                    
                    <NavLink to="/saved" className={({ isActive }) => `transition-all duration-200 ${
                        isActive ? "font-semibold text-[#2f5349] border-b-2 border-[#2f5349] pb-1" : "text-gray-700 hover:text-[#2f5349]"
                    }`}>Saved</NavLink>
                </div>
            </nav>

            <div className='border-b-2 border-b-gray-200'></div>
        </header>
    )
}

export default NavBar