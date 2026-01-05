import React from 'react'

function Footer() {
    return (
        <footer className="w-full bg-[#2f5349] py-8 text-gray-300">
            <div className='md:max-w-7xl mx-auto px-16 pb-14'>
                <div className='grid md:grid-cols-4 grid-rows-1 md:gap-24  items-start mx-auto md:px-12 py-16'>
                    <div>
                        <div className='text-xl font-semibold flex mb-3 text-black'>Quick Links</div>
                        <div>Home</div>
                        <div>Services</div>
                        <div>About Us</div>
                        <div>Contact</div>
                    </div>
                    <div>
                        <div className='text-xl font-semibold flex mb-3 text-black'>Support</div>
                        <div>Help Center</div>
                        <div>FAQs</div>
                        <div>Report an Issue</div>
                        <div>Feedback</div>
                    </div>
                    <div>
                        <div className='text-xl font-semibold flex mb-3 text-black'>Company</div>
                        <div>About AroundU</div>
                        <div>How It Works</div>
                        <div>Our Mission</div>
                        <div>Careers(optional)</div>
                    </div>
                    <div>
                        <div className='text-xl font-semibold flex mb-3 text-black'>Contact</div>
                        <div>Email Support</div>
                        <div>Location: India</div>
                        <div>Working Hours</div>
                    </div>
                </div>
                <div className='border-b-2 border-b-gray-200'></div>
                <div className='mt-12'>
                    <div className=''>As on January 5,2026</div>
                    <div>© Copyright 2026 Vertex</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer