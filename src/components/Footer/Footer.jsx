import React from 'react'

function Footer() {
    return (
        <footer className="w-full bg-[#2f5349] py-8 sm:py-12 md:py-16 text-gray-300">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-10 md:pb-14'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-24 items-start mx-auto py-12 md:py-16'>
                    <div>
                        <div className='text-base sm:text-lg md:text-xl font-semibold flex mb-3 text-white'>Quick Links</div>
                        <div className='text-xs sm:text-sm space-y-1 cursor-pointer hover:text-white transition'>
                            <div>Home</div>
                            <div>Services</div>
                            <div>About Us</div>
                            <div>Contact</div>
                        </div>
                    </div>
                    <div>
                        <div className='text-base sm:text-lg md:text-xl font-semibold flex mb-3 text-white'>Support</div>
                        <div className='text-xs sm:text-sm space-y-1 cursor-pointer hover:text-white transition'>
                            <div>Help Center</div>
                            <div>FAQs</div>
                            <div>Report an Issue</div>
                            <div>Feedback</div>
                        </div>
                    </div>
                    <div>
                        <div className='text-base sm:text-lg md:text-xl font-semibold flex mb-3 text-white'>Company</div>
                        <div className='text-xs sm:text-sm space-y-1 cursor-pointer hover:text-white transition'>
                            <div>About AroundU</div>
                            <div>How It Works</div>
                            <div>Our Mission</div>
                            <div>Careers</div>
                        </div>
                    </div>
                    <div>
                        <div className='text-base sm:text-lg md:text-xl font-semibold flex mb-3 text-white'>Contact</div>
                        <div className='text-xs sm:text-sm space-y-1'>
                            <div>Email Support</div>
                            <div>Location: India</div>
                            <div>Working Hours</div>
                        </div>
                    </div>
                </div>
                <div className='border-b-2 border-b-gray-600'></div>
                <div className='mt-8 sm:mt-10 md:mt-12 text-xs sm:text-sm text-center md:text-left'>
                    <div className='mb-2'>As on January 5, 2026</div>
                    <div>© Copyright 2026 Vertex</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer