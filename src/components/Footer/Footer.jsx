import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-[#2f5349] text-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-start">
                    <div>
                        <h2 className="text-xl font-semibold text-white">
                            Around<span className="text-[#ffc800]">U</span>
                        </h2>
                        <p className="text-sm text-gray-300 mt-3 max-w-sm leading-relaxed">
                            Helping you find trusted local professionals for everyday needs.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>
                                <Link to="/" className="hover:text-white transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-white transition">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-white transition">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-sm text-gray-300 md:text-right">
                        <p className="text-white font-medium mb-2">Serving</p>
                        <p>India</p>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
                    <span>© 2026 AroundU</span>
                    <span className="mt-2 sm:mt-0">All rights reserved</span>
                </div>

            </div>
        </footer>
    );
}

export default Footer;