import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Lightbulb,
  Wrench,
  GraduationCap,
  Star,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const LandingPage = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-[80vh] flex items-center font-sans">
      {/* Background Decorative Blobs (Subtle) */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#2f5349]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-[#ffc800]/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            className="relative z-10 order-1 lg:order-1 text-center lg:text-left"
          >
            <div className="relative inline-block">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#2f5349]/10 px-4 py-1.5 text-sm font-semibold text-[#2f5349]">
                <ShieldCheck size={16} /> Verified Professionals
              </span>
              <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#2f5349]">
                All Local Services,
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-black">
                    One Platform.
                  </span>
                  {/* Underline decoration */}
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#ffc800] -z-10"
                    viewBox="0 0 100 10"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                    />
                  </motion.svg>
                  <Sparkles
                    className="absolute md:-top-8 opacity-0 md:opacity-100 -right-8 text-[#ffc800]"
                    size={40}
                    strokeWidth={1.5}
                  />
                </span>
              </h1>
            </div>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600 leading-relaxed">
              Find verified professionals for home services, repairs, learning,
              and daily needs. Quality service, guaranteed satisfaction.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <motion.button
                className="group relative overflow-hidden rounded-full bg-[#2f5349] px-8 py-4 text-white shadow-xl transition-all hover:bg-[#244038] w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-semibold text-lg">
                  Book Now
                </span>
              </motion.button>

              <motion.button
                className="flex items-center gap-3 font-semibold text-[#2f5349] group"
                whileHover={{ x: 5 }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffc800] text-[#2f5349] transition-transform group-hover:rotate-90">
                  <ArrowRight size={20} />
                </span>
                <span>How it works</span>
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT CONTENT (Image & Floating Icons) */}
          <div className="relative order-2 lg:order-2 flex justify-center items-center min-h-112.5">
            {/* Main Image Wrapper */}
            <motion.div
              className="relative z-10 w-[85%] md:w-full max-w-120"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%]  bg-[#f2f4f3] rounded-full -z-10" />

              <img
                src="/assets/land-page/land.jpg"
                alt="Service Professional"
                className="w-[100%] h-auto rounded-3xl border-12 border-[#2f5349] object-contain drop-shadow-2xl"
              />

              <motion.div
                className="absolute -top-6 left-4 sm:left-10 bg-white p-3 rounded-2xl shadow-lg border border-gray-100"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Lightbulb
                  size={32}
                  className="text-[#ffc800] fill-[#ffc800]/20"
                />
              </motion.div>

              {/* 2. Wrench (Plumbing/Repair) */}
              <motion.div
                className="absolute top-1/3 -right-6 sm:-right-8 bg-white p-3 rounded-2xl shadow-lg border border-gray-100"
                animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Wrench size={32} className="text-[#2f5349]" />
              </motion.div>

              {/* 3. Graduation Cap (Learning) */}
              <motion.div
                className="absolute bottom-20 -left-4 sm:-left-8 bg-white p-3 rounded-2xl shadow-lg border border-gray-100"
                animate={{ x: [0, 10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <GraduationCap size={32} className="text-blue-500" />
              </motion.div>

              {/* 4. Star (Quality) */}
              <motion.div
                className="absolute -bottom-4 right-10 sm:right-20 bg-[#2f5349] p-2 rounded-full shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Star size={24} className="text-white fill-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
