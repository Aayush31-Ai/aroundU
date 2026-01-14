import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-[#2f5349] text-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-14">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            Around<span className="text-[#ffc800]">U</span>
                        </h2>
                        <p className="text-sm text-gray-300 mt-3 max-w-xs">
                            Helping you find trusted local professionals for everyday needs.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white mb-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="hover:text-white cursor-pointer"><Link to="/">Home</Link></li>
                            <li className="hover:text-white cursor-pointer"><Link>Services</Link></li>
                            <li className="hover:text-white cursor-pointer"><Link to="/about">About</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white mb-3">
                            Support
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="hover:text-white cursor-pointer"><Link>Help Center</Link></li>
                            <li className="hover:text-white cursor-pointer"><Link>FAQs</Link></li>
                            <li className="hover:text-white cursor-pointer"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-10 pt-6 text-sm text-gray-300 flex flex-col md:flex-row justify-between">
                    <span>© 2026 AroundU</span>
                    <span>India</span>
                </div>

            </div>
        </footer>
    );
}

export default Footer;