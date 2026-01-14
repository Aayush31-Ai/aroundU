import React, { useEffect, useState } from 'react'
import { MapPin, ChevronDown } from "lucide-react"
import { Link, NavLink } from 'react-router-dom'

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

    const handleSuggestionClick = (place) => {
        setCoords({
            latitude: place.lat,
            longitude: place.lon,
        });

        setLocationText("");
        setSuggestions([]);
        setLocationInput(false);
    };

    const handleUseCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setCoords({ latitude, longitude });

                setLocationInput(false);

                setLocationText("");
                setSuggestions([]);
            },
            (error) => {
                alert("Unable to fetch your location. Please allow location access.");
                console.error(error);
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 0,
            }
        );
    };




    return (
        <>
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
                <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-3">
                    <Link to="/">
                        <div className="flex items-center gap-2">
                            <img className="w-9" src="/assets/logo/Logo.jpeg" alt="AroundU Logo" />
                            <div className="font-semibold text-xl text-[#2f5349]">
                                Around<span className="text-[#ffc800]">U</span>
                            </div>
                        </div>
                    </Link>

                    <div
                        onClick={() => setLocationInput(prev => !prev)}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full border border-gray-200 bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
                    >
                        <MapPin size={16} />
                        <span className="max-w-45 truncate">
                            {address || "Detecting location..."}
                        </span>
                        <ChevronDown size={16} />
                    </div>

                    <div className='w-52 md:w-sm flex justify-around text-sm'>

                        <NavLink
                            to="/explore"
                            className={({ isActive }) =>
                                `
    px-1
    transition
    ${isActive
                                    ? "font-medium text-black"
                                    : "text-gray-600"
                                }
    hover:text-black
    hover:border-b-2
    hover:border-black
    `
                            }
                        >
                            Explore
                        </NavLink>

                        <NavLink
                            to="/request"
                            className={({ isActive }) =>
                                `
    px-1
    transition
    ${isActive
                                    ? "font-medium text-black"
                                    : "text-gray-600"
                                }
    hover:text-black
    hover:border-b-2
    hover:border-black
    `
                            }
                        >
                            Request
                        </NavLink>
                        <NavLink
                            to="/saved"
                            className={({ isActive }) =>
                                `
    px-1
    transition
    ${isActive
                                    ? "font-medium text-black"
                                    : "text-gray-600"
                                }
    hover:text-black
    hover:border-b-2
    hover:border-black
    `
                            }
                        >
                            Saved
                        </NavLink>
                    </div>
                </nav>

                <div className='border-b-2 border-b-gray-200'></div>
            </header>
            {
                locationInput && (
                    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60">

                        <div className="bg-white w-[90%] max-w-xl rounded-2xl shadow-xl relative">

                            <button
                                onClick={() => setLocationInput(false)}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
                            >
                                ✕
                            </button>

                            <div className="p-5 border-b flex items-center gap-3">
                                <button
                                    onClick={() => setLocationInput(false)}
                                    className="p-1 rounded-full hover:bg-gray-100"
                                >
                                    ←
                                </button>

                                <input
                                    type="text"
                                    placeholder="Search for your location/society/apartment"
                                    value={locationText}
                                    onChange={(e) => setLocationText(e.target.value)}
                                    className="w-full px-4 py-2.5 text-sm bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2f5349]/20"
                                />
                            </div>

                            <div
                                onClick={handleUseCurrentLocation}
                                className="px-5 py-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 text-[#6b3df4] text-sm font-medium"
                            >
                                📍 Use current location
                            </div>


                            {suggestions.length > 0 && (
                                <div className="max-h-64 overflow-auto px-3">
                                    {suggestions.map((s) => (
                                        <div
                                            key={s.place_id}
                                            onClick={() => handleSuggestionClick(s)}
                                            className="px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50"
                                        >
                                            <div className="text-sm font-medium">
                                                {s.address?.suburb ||
                                                    s.address?.city ||
                                                    s.display_name.split(",")[0]}
                                            </div>
                                            <div className="text-xs text-gray-500 truncate">
                                                {s.display_name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}


                            <div className="py-4 text-center text-xs text-gray-400">
                                powered by OpenStreetMap
                            </div>

                        </div>
                    </div>
                )
            }
        </>
    )
}

export default NavBar