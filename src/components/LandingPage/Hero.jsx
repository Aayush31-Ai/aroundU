import { Search } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
<section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden min-h-[80vh] flex items-center">


  <div className="hidden lg:block absolute right-[-250px] top-[-150px] w-[600px] h-[600px]
    bg-gradient-to-bl from-[#7bbfae]/15 via-[#5da897]/10 to-transparent
    rounded-[40%_60%_70%_30%/40%_40%_60%_60%] z-0 blur-3xl
    animate-[float_20s_ease-in-out_infinite]">
  </div>

  {/* Medium Blob - Bottom Left with Animation */}
  <div className="hidden md:block absolute left-[-180px] bottom-[-100px] w-[500px] h-[500px]
    bg-gradient-to-tr from-[#2f5349]/12 via-[#4a6f60]/8 to-transparent
    rounded-[55%_45%_35%_65%/60%_30%_70%_40%] z-0 blur-3xl
    animate-[float_25s_ease-in-out_infinite_reverse]">
  </div>

  {/* Center Accent Blob */}
  <div className="hidden lg:block absolute left-[50%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px]
    bg-gradient-to-br from-[#ffc800]/8 via-[#f5c542]/5 to-transparent
    rounded-[65%_35%_45%_55%/55%_45%_55%_45%] z-0 blur-3xl
    animate-[pulse_15s_ease-in-out_infinite]">
  </div>

  {/* Top Left Small Accent Blob */}
  <div className="hidden sm:block absolute left-[5%] top-[15%] w-[200px] sm:w-[250px] h-[200px] sm:h-[250px]
    bg-gradient-to-br from-[#7bbfae]/10 to-transparent
    rounded-[60%_40%_50%_50%/50%_60%_40%_60%] z-0 blur-2xl
    animate-[float_18s_ease-in-out_infinite_2s]">
  </div>

  {/* Right Middle Floating Blob */}
  <div className="hidden md:block absolute right-[8%] top-[60%] w-[300px] h-[300px]
    bg-gradient-to-tl from-[#ffc800]/10 to-transparent
    rounded-[50%_50%_60%_40%/60%_40%_50%_50%] z-0 blur-2xl
    animate-[float_22s_ease-in-out_infinite_4s]">
  </div>

  {/* Decorative Dots Pattern - Hidden on mobile */}
  <div className="hidden sm:block absolute left-[10%] bottom-[20%] w-[150px] h-[150px] z-0 opacity-20">
    <div className="grid grid-cols-6 gap-3">
      {[...Array(24)].map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 bg-[#2f5349] rounded-full"></div>
      ))}
    </div>
  </div>

  {/* Floating Circles with Animation - Hidden on mobile */}
  <div className="hidden lg:block absolute right-[15%] top-[25%] w-[80px] h-[80px] z-0
    border-4 border-[#7bbfae]/20 rounded-full
    animate-[spin_30s_linear_infinite]">
  </div>

  <div className="hidden sm:block absolute left-[20%] top-[35%] w-[50px] h-[50px] z-0
    border-3 border-[#ffc800]/25 rounded-full
    animate-[spin_20s_linear_infinite_reverse]">
  </div>

  {/* Small Accent Dots */}
  <div className="absolute left-[45%] top-[20%] w-3 h-3 bg-[#7bbfae]/30 rounded-full z-0 animate-pulse"></div>
  <div className="absolute right-[30%] bottom-[30%] w-2 h-2 bg-[#ffc800]/40 rounded-full z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
  <div className="absolute left-[35%] bottom-[25%] w-2.5 h-2.5 bg-[#2f5349]/25 rounded-full z-0 animate-pulse" style={{ animationDelay: '2s' }}></div>

  {/* Gradient Overlay for Depth */}
  <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent z-[1] pointer-events-none"></div>

  {/* ===== MAIN CONTENT ===== */}
  <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 md:py-20 lg:py-24">
    
    {/* Main Headline */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6 sm:mb-8">
      Find Local Services
      <br />
      <span className="bg-gradient-to-r from-[#2f5349] via-[#5da897] to-[#7bbfae] bg-clip-text text-transparent
        animate-[gradient_3s_ease-in-out_infinite]">
        Around You
      </span>
    </h1>

    {/* Subheadline */}
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 font-light px-2">
      Connect with verified professionals for home services, repairs, learning, 
      and daily needs.
    </p>

    {/* Premium Search Bar */}
  <div className="max-w-3xl mx-automb-8 sm:mb-12 px-4">
  <div className="flex items-center bg-white justify-between  h-10 md:h-18  border-2 overflow-hidden border-[#0d7a5f]  rounded-full shadow-md hover:shadow-lg focus-within:ring-4 focus-within:ring-[#0d7a5f]/10 transition-all  ">
    

    <div className="flex-1 flex items-center">
      <input
        type="text"
        placeholder="What do you need help with?"
        className="w-full pl-5 sm:pl-8 pr-2 py-2 sm:py-3 outline-none text-sm sm:text-base lg:text-lg text-gray-700 bg-transparent placeholder:text-gray-400"
      />
    </div>

    <button className="bg-[#0d7a5f]  text-white h-10 md:h-18 flex justify-center items-center  transition-all duration-300   active:bg-[#0f493a]  hover:bg-[#0f493a] w-15 md:w-20  ">
      <Search className="md:h-7 md:w-7 w-4 h-4" />
    </button>
  </div>
</div>

      {/* Premium Quick Links */}
      <div className="mt-16 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2">
        <span className="text-gray-700 font-medium text-xs sm:text-sm">Popular services:</span>
        {['Plumbing', 'Cleaning', 'Electrician', 'Tutor', 'Carpenter'].map((service) => (
          <button
            key={service}
            className="px-3 sm:px-5 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 text-gray-700 text-xs sm:text-sm font-medium
              hover:border-[#2f5349] hover:text-[#2f5349] hover:bg-white hover:shadow-md transition-all duration-200"
          >
            {service}
          </button>
        ))}
      </div>
  </div>

  {/* Custom Keyframes */}
  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translate(0, 0) rotate(0deg);
      }
      33% {
        transform: translate(30px, -30px) rotate(5deg);
      }
      66% {
        transform: translate(-20px, 20px) rotate(-5deg);
      }
    }
    
    @keyframes gradient {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
  `}</style>

</section>

  );
};

export default Hero;
