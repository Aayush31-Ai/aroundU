import React from "react";
import { Mail, MapPin, Clock } from "lucide-react";

function Contact() {
    return (
        <div className="min-h-screen bg-gray-50">

            <div className="bg-[#2f5349] text-white py-16 text-center">
                <h1 className="text-3xl font-semibold">Contact Us</h1>
                <p className="mt-3 text-gray-200">
                    We’re here to help. Reach out to us anytime.
                </p>
            </div>


            <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">
                        Get in touch
                    </h2>

                    <div className="space-y-5 text-gray-600">
                        <div className="flex items-center gap-3">
                            <Mail className="text-[#2f5349]" />
                            <span>support@aroundu.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <MapPin className="text-[#2f5349]" />
                            <span>India</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Clock className="text-[#2f5349]" />
                            <span>Mon – Sat · 9:00 AM – 6:00 PM</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Send us a message
                    </h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f5349]"
                        />

                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f5349]"
                        />

                        <textarea
                            rows="4"
                            placeholder="Your message"
                            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f5349]"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-[#2f5349] text-white py-2 rounded-lg hover:bg-[#26463f] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;