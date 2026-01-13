import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Search, MapPin, ChevronDown } from "lucide-react"
import { data, Link, NavLink } from 'react-router-dom'

function NavBar() {
    const [coords, setCoords] = useState(null);
    const [address, setAddress] = useState("");

    const getLocation = (position) => {
        console.log(position);

        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });

    }

    const locationError = () => {
        console.log("Error in getting Location");
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getLocation, locationError, {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        })
    }, [])

    useEffect(() => {
        if (!coords) return;

        fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                console.log(data.address.city || data.address.suburb, ",", data.address.state);
                setAddress(`${data.address.city}||${data.address.suburb},${data.address.state}`);
            })
    }, [coords])

    return (
        <header className='sticky z-50 top-0 bg-white'>
            <nav className='flex items-center justify-around md:my-3'>
                <Link to="/">
                    <div className='flex items-center'>
                        <img className='w-12' src="/assets/logo/Logo.jpeg" alt="" />
                        <div className='font-bold text-xl text-[#2f5349]'>Around<span className='text-[#ffc800]'>U</span></div>
                    </div>
                </Link>
                <div className='md:w-2xl hidden md:flex md:justify-around'>
                    <div>
                        <div className="relative md:w-64">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                // placeholder="Connaught Place, New Delhi"F
                                className="pl-9 pr-9 h-12 rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="relative md:w-sm">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search..."
                            className="h-12 pl-11 text-base"
                        />
                    </div>
                </div>
                <div className='w-52 md:w-sm flex justify-around text-sm'>
                    <div>
                        <NavLink to="/explore" className={({ isActive }) => `${isActive ? "font-semibold border-b-2 border-black pb-1" : ""} hover:border-b-2 hover:font-semibold `}>Explore</NavLink>
                    </div>
                    <div>
                        <NavLink to="/request" className={({ isActive }) => `${isActive ? "font-semibold border-b-2 border-black pb-1" : ""} hover:border-b-2 hover:font-semibold `}>Request</NavLink>
                    </div>
                    <div>
                        <NavLink to="/saved" className={({ isActive }) => `${isActive ? "font-semibold border-b-2 border-black pb-1" : ""} hover:border-b-2 hover:font-semibold `}>Saved</NavLink>
                    </div>
                </div>
            </nav>

            <div className='md:hidden flex justify-around mb-1'>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="h-12 pl-11 text-base"
                    />
                </div>
                <div>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Connaught Place, New Delhi"
                            className="pl-9 pr-9 h-12 w-2 rounded-xl"
                        />
                    </div>
                </div>
            </div>
            <div className='border-b-2 border-b-gray-200'></div>
        </header >
    )
}

export default NavBar