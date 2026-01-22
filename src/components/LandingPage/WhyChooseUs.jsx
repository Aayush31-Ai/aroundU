import React from "react";
import {
  ShieldCheck,
  IndianRupee,
  MapPin,
  CalendarCheck,
  Sparkle,
  CheckCircle2,
} from "lucide-react";

/* ---------- STATIC DATA ---------- */
const features = [
  {
    icon: ShieldCheck,
    title: "Verified professionals",
    desc: "Background checks, ID verification, and recurring quality reviews for trusted service providers.",
    tag: "Safety first",
    gradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-600",
  },
  {
    icon: MapPin,
    title: "Built for daily needs",
    desc: "Plumbing, cleaning, personal tutor near me, and more—optimized for quick, everyday bookings.",
    tag: "Same day",
    gradient: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-600",
  },
  {
    icon: CalendarCheck,
    title: "Smooth booking & alerts",
    desc: "Pick a slot, get notifications, track arrival, and rate your experience in one place.",
    tag: "2 min",
    gradient: "from-violet-50 to-purple-50",
    iconBg: "bg-violet-600",
  },
  {
    icon: IndianRupee,
    title: "Budget-first pricing",
    desc: "Affordable home services with upfront estimates, no hidden fees, and savings for repeat bookings.",
    tag: "Transparent",
    gradient: "from-amber-50 to-orange-50",
    iconBg: "bg-amber-600",
  },
];

const stats = [
  { icon: ShieldCheck, value: "4.9/5", label: "Avg Rating" },
  { icon: MapPin, value: "80+", label: "Cities" },
  { icon: CalendarCheck, value: "12k+", label: "Bookings" },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">

        {/* ---------- HEADER ---------- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2f5349]/20 bg-[#f6faf8] px-3 py-1.5 text-xs font-bold uppercase text-[#2f5349]">
            <Sparkle size={14} className="text-[#ffc800]" />
            People-first services
          </span>

          <h2 className="mt-5 text-3xl lg:text-5xl font-extrabold text-[#1f2f2a] leading-tight">
            Why people trust our home services platform
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Trusted service providers, daily coverage, and honest prices—backed by admin oversight and community reviews.
          </p>
        </div>

        {/* ---------- STATS BAR ---------- */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#2f5349] to-[#1f2f2a] text-white">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#ffc800]" />
              <div className="text-3xl font-extrabold mb-1">{stat.value}</div>
              <div className="text-xs text-white/80 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ---------- FEATURES GRID ---------- */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.gradient} p-8 border-2 border-gray-100 hover:border-[#2f5349]/30 transition-all hover:scale-[1.02]`}
            >
              {/* Icon */}
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} text-white mb-4 shadow-lg`}>
                <item.icon size={26} strokeWidth={2.5} />
              </div>

              {/* Tag Badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#2f5349] shadow-sm">
                  <CheckCircle2 size={12} />
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1f2f2a] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/30 rounded-full blur-2xl" />
            </div>
          ))}
        </div>

        {/* ---------- TRUST BANNER ---------- */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2f5349] via-[#3a5f51] to-[#2f5349] p-8 lg:p-12 text-white text-center">
            <div className="relative z-10">
              <ShieldCheck className="w-16 h-16 mx-auto mb-4 text-[#ffc800]" />
              <h3 className="text-2xl lg:text-3xl font-extrabold mb-3">
                Trusted by 12,000+ Customers
              </h3>
              <p className="text-white/90 text-base mb-6 max-w-2xl mx-auto">
                Join thousands who rely on vetted pros, provider tools for availability and earnings, and admin quality assurance that keeps every service consistent.
              </p>
              <div className="flex items-center justify-center gap-2 text-[#ffc800] font-bold text-lg">
                <span className="text-3xl">★★★★★</span>
                <span>4.9 out of 5</span>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
