import React from "react";
import { Users, ShieldCheck, Wrench } from "lucide-react";

function About() {
    return (
        <div className="min-h-screen bg-gray-50">

            <div className="bg-[#2f5349] text-white py-16 text-center px-4">
                <h1 className="text-3xl md:text-4xl font-semibold">
                    About Around<span className="text-[#ffc800]">U</span>
                </h1>
                <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
                    A platform built to connect people with trusted local professionals
                    for everyday services.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Who We Are
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        AroundU is a local service discovery platform designed to make
                        finding reliable professionals simple and stress-free. Whether it’s
                        home services, repairs, or daily needs, we bring verified experts
                        closer to you.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        What We Do
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                            <Users className="mx-auto text-[#2f5349]" size={32} />
                            <h3 className="mt-4 font-semibold text-gray-800">
                                Connect People
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">
                                We connect users with skilled local professionals nearby.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                            <ShieldCheck className="mx-auto text-[#2f5349]" size={32} />
                            <h3 className="mt-4 font-semibold text-gray-800">
                                Verified Experts
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Every professional is carefully verified for quality and trust.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                            <Wrench className="mx-auto text-[#2f5349]" size={32} />
                            <h3 className="mt-4 font-semibold text-gray-800">
                                Reliable Services
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">
                                From small fixes to major work, we’ve got you covered.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our mission is to simplify access to quality services while
                        empowering local professionals with meaningful opportunities.
                        AroundU aims to build trust, convenience, and reliability in every
                        interaction.
                    </p>
                </section>

            </div>
        </div>
    );
}

export default About;