import {
  ShieldCheck,
  IndianRupee,
  MapPin,
  CalendarCheck,
  Sparkle,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    image: "/3.jpg",
    title: "Verified Professionals",
    desc: "Every expert is identity-checked and quality-reviewed before they meet you.",
    tag: "Safety first",
  },
  {
    icon: MapPin,
    image: "/1.jpg",
    title: "Services Near You",
    desc: "Pinpoint nearby pros and get responses that match your schedule, not the other way around.",
    tag: "2 km avg distance",
  },
  {
    icon: CalendarCheck,
    image: "/2.jpg",
    title: "Simple Booking",
    desc: "Pick a slot, confirm, and track updates in one place with zero back-and-forth.",
    tag: "2 min booking",
  },
  {
    icon: IndianRupee,
    image: "/4.jpg",
    title: "Fair Pricing",
    desc: "Clear estimates upfront plus flexible plans that keep surprises off your bill.",
    tag: "Transparent quotes",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f7f9f8] via-white to-[#eef5f2] py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Ambient shapes - Hidden on mobile */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hidden sm:block absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#2f5349]/10 blur-3xl" />
        <div className="hidden lg:block absolute -right-10 top-10 h-52 w-52 rounded-full bg-[#ffc800]/20 blur-3xl" />
        <div className="hidden sm:block absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#2f5349]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 sm:gap-12 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2f5349]/20 bg-white/70 px-2 sm:px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2f5349] shadow-sm backdrop-blur">
            <Sparkle size={12} className="text-[#ffc800] sm:w-4 sm:h-4" />
            People-first services
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#1f2f2a]">
            Why neighbors keep choosing AroundU
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            A service platform built for real homes and busy days: vetted
            experts, instant nearby matches, and pricing that stays honest.
          </p>
        </div>

        <div className="grid items-center gap-6 sm:gap-8 md:gap-12 lg:grid-cols-2">
          {/* Feature list */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            {features.map((item, idx) => (
              <div
                key={item.title}
                className="group flex gap-3 sm:gap-4 rounded-2xl border border-gray-200/70 bg-white/80 p-4 sm:p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-10 sm:h-12 w-10 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#2f5349]/90 text-white shadow-lg">
                  <item.icon size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3">
                    <h3 className="text-base sm:text-lg font-semibold text-[#1f2f2a]">
                      {item.title}
                    </h3>
                    <span className="rounded-full bg-[#ffc800]/15 px-2 sm:px-3 py-1 text-xs font-semibold text-[#2f5349] whitespace-nowrap">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-3">
                    <div className="h-10 sm:h-12 w-10 sm:w-12 shrink-0 overflow-hidden rounded-lg shadow-md ring-2 ring-white/80">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-[#ffc800] to-[#2f5349]/60 group-hover:from-[#ffc800] group-hover:to-[#2f5349] transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual stack */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
              <img
                src="/c1.jpg"
                alt="Trusted local services"
                className="h-full w-full max-h-[300px] sm:max-h-[420px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                  Trusted locally
                </p>
                <h3 className="mt-2 text-base sm:text-lg md:text-2xl text-right font-semibold">
                  Over 12k tasks delivered right on time
                </h3>
                <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="rounded-lg bg-white/15 px-2 sm:px-3 py-2 backdrop-blur">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <ShieldCheck size={14} className="sm:w-4 sm:h-4" />
                      <span className="font-semibold">4.9/5</span>
                    </div>
                    <p className="text-white/80 text-xs">rating</p>
                  </div>
                  <div className="rounded-lg bg-white/15 px-2 sm:px-3 py-2 backdrop-blur">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <MapPin size={14} className="sm:w-4 sm:h-4" />
                      <span className="font-semibold">80+</span>
                    </div>
                    <p className="text-white/80 text-xs">areas</p>
                  </div>
                  <div className="rounded-lg bg-white/15 px-2 sm:px-3 py-2 backdrop-blur">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <CalendarCheck size={14} className="sm:w-4 sm:h-4" />
                      <span className="font-semibold">Same-day</span>
                    </div>
                    <p className="text-white/80 text-xs">slots</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 sm:-left-6 -bottom-8 sm:-bottom-10 hidden w-40 sm:w-48 md:w-56 sm:block">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-xl">
                <img
                  src="/2.jpg"
                  alt="Real pros"
                  className="h-24 sm:h-32 w-full rounded-t-2xl object-cover"
                />
                <div className="p-3 sm:p-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2f5349]">
                    <ShieldCheck size={14} className="sm:w-4 sm:h-4" /> Verified crews
                  </div>
                  <p className="mt-1 sm:mt-2 text-xs text-gray-600">
                    Live updates once they are on the way.
                  </p>
                </div>
              </div>
            </div>  

            <div className="absolute -right-3 sm:-right-4 -top-6 sm:-top-8 hidden rotate-2 rounded-2xl border border-[#ffc800]/30 bg-white/90 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-[#2f5349] shadow-lg backdrop-blur sm:flex items-center gap-2">
              <Sparkle size={14} className="text-[#ffc800] sm:w-4 sm:h-4" />
              100% human support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
