import React from 'react'
import { Input } from "@/components/ui/input"
import { Search, MapPin, ChevronDown } from "lucide-react"
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <header className='sticky z-50 top-0 bg-white'>
            <nav className='flex items-center justify-around '>
                <div className='flex items-center'>
                    <img className='w-12' src="/assets/logo/Logo.jpeg" alt="" />
                    <div className='font-bold text-xl text-[#2f5349]'>Around<span className='text-[#ffc800]'>U</span></div>
                </div>
                <div className="relative w-[320px]">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="pl-9"
                    />
                </div>
                <div>
                    <div className="relative w-sm">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Connaught Place, New Delhi"
                            className="pl-9 pr-9 h-11 rounded-xl"
                        />
                    </div>
                </div>
                <div>
                    <NavLink to="/navbar">Explore</NavLink>
                </div>
                <div>
                    <div>Request</div>
                </div>
                <div>
                    <div>Saved</div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar