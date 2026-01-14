import React, { useEffect, useState } from 'react'
import { Search, MapPin, ChevronDown } from "lucide-react"
import { data, Link, NavLink } from 'react-router-dom'

function NavBar() {
    const [coords, setCoords] = useState(null);
    const [address, setAddress] = useState("");
    const [locationInput, setLocationInput] = useState(false);
    const [locationText, setLocationText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loadingSuggestions, setLoadingSuggestions] = useState(false);

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
                setAddress(`${data.address.city || data.address.suburb}, ${data.address.state}`);
            })
    }, [coords])

    useEffect(() => {
        if (!locationText || locationText.length < 2) {
            setSuggestions([]);
            return;
        }

        const timeout = setTimeout(() => {
            setLoadingSuggestions(true);

            fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                    locationText
                )}&addressdetails=1&limit=5`,
                {
                    headers: { "User-Agent": "AroundU/1.0" }
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setSuggestions(data);
                    setLoadingSuggestions(false);
                });
        }, 400);

        return () => clearTimeout(timeout);
    }, [locationText]);


    const handleUserLocation = () => {
        if (!locationText) return;

        fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                locationText
            )}&limit=1&addressdetails=1`,
            {
                headers: {
                    "User-Agent": "AroundU/1.0"
                }
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.length) {
                    alert("Location not found");
                    return;
                }

                const lat = data[0].lat;
                const lon = data[0].lon;

                setCoords({ latitude: lat, longitude: lon });

                setLocationInput(false);
                setLocationText("");
            });
    };

    const handleSuggestionClick = (place) => {
        setCoords({
            latitude: place.lat,
            longitude: place.lon,
        });

        setLocationText("");
        setSuggestions([]);
        setLocationInput(false);
    };



    return (
        <header className='sticky z-50 top-0 bg-white shadow-sm'>
            <nav className='flex items-center justify-between md:justify-around px-3 sm:px-6 md:px-8 py-2 md:my-3'>
                <Link to="/">
                    <div className='flex items-center gap-2'>
                        <img className='w-8 sm:w-10 md:w-12' src="/assets/logo/Logo.jpeg" alt="AroundU Logo" />
                        <div className='font-bold text-lg sm:text-xl md:text-2xl text-[#2f5349]'>Around<span className='text-[#ffc800]'>U</span></div>
                    </div>
                </Link>
                <div>
                    <div className="flex items-center gap-1 text-sm cursor-pointer">
                        <MapPin size={16} />
                        {address || "Detecting location..."}
                        <ChevronDown onClick={() => setLocationInput(true)} size={16} />
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
                {locationInput && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white shadow-md rounded p-3 w-72 z-50">
                        <input
                            type="text"
                            placeholder="Enter area (e.g. Kandivali)"
                            value={locationText}
                            onChange={(e) => setLocationText(e.target.value)}
                            className="border p-2 w-full rounded"
                        />

                        <button
                            className="mt-2 w-full bg-black text-white py-1 rounded"
                            onClick={handleUserLocation}
                        >
                            Set location
                        </button>
                    </div>
                )}

                {locationInput && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white shadow-md rounded p-3 w-72 z-50">

                        <input
                            type="text"
                            placeholder="Enter area (e.g. Kandivali)"
                            value={locationText}
                            onChange={(e) => setLocationText(e.target.value)}
                            className="border p-2 w-full rounded"
                        />

                        {loadingSuggestions && (
                            <div className="text-xs text-gray-500 mt-2">Loading...</div>
                        )}

                        {suggestions.length > 0 && (
                            <div className="border mt-2 rounded max-h-40 overflow-auto">
                                {suggestions.map((s) => (
                                    <div
                                        key={s.place_id}
                                        className="p-2 text-sm cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSuggestionClick(s)}
                                    >
                                        {s.display_name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

            </nav>

            <div className='border-b-2 border-b-gray-200'></div>
        </header>
    )
}

export default NavBar