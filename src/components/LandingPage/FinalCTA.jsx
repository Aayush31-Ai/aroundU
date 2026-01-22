import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const FinalCTA = React.memo(() => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30"></div>
      
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 border-2 border-[#7bbfae] rounded-full"></div>
        <div className="absolute top-40 right-40 w-64 h-64 border-2 border-[#2f5349] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-6">
              <div className="inline-block px-4 py-2 bg-[#7bbfae]/10 rounded-full">
                <span className="text-sm font-semibold text-[#2f5349] uppercase tracking-wide">
                  Home services made easy
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Book trusted, affordable
                <span className="block text-[#417869]">home services today</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Verified experts, budget-friendly pricing, notifications, and reviews—plus saved providers for quick rebooking.
              </p>

              {/* Benefits List */}
              <div className="space-y-3 pt-4">
                {[
                  'Trusted service providers with verification and reviews',
                  'Transparent, affordable pricing for daily home services',
                  'Instant booking with notifications and reminders',
                  'Save favorites and reorder in one tap'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#7bbfae] flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('/services')}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#2f5349] text-white font-semibold rounded-lg shadow-lg shadow-[#7bbfae]/20 hover:bg-[#2f5349] hover:shadow-xl hover:shadow-[#2f5349]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Book a Service
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button
                  onClick={() => navigate('/?join-provider=true')}
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-[#2f5349] text-[#2f5349] font-semibold rounded-lg hover:bg-[#2f5349] hover:text-white transition-all duration-300"
                >
                  Join as Provider
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right Stats/Trust Section */}
            <div className="relative">
              {/* Main Stats Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl">
                <div className="space-y-8">
                  <div className="text-center pb-6 border-b border-white/10">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      Trusted by Thousands
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Join our growing community
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: '100+', label: 'Active Users' },
                      { number: '90+', label: 'Professionals' },
                      { number: '4.9 ★', label: 'Average Rating' },
                      { number: '24/7', label: 'Support' }
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                      >
                        <div className="text-2xl md:text-3xl font-bold text-[#7bbfae] mb-1">
                          {stat.number}
                        </div>
                        <div className="text-slate-400 text-xs md:text-sm">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust Badge */}
                  <div className="flex items-center justify-center gap-3 pt-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7bbfae] to-[#5da897] border-2 border-slate-800 flex items-center justify-center text-white text-xs font-semibold"
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-slate-300 text-sm">
                      and 10,000+ more users
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-[#ffc800] text-slate-900 px-6 py-3 rounded-lg shadow-xl font-semibold hidden md:block">
                 New service added daily
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FinalCTA;
