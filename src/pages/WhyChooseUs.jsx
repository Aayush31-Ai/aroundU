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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f7f9f8] via-white to-[#eef5f2] py-16 md:py-24">
      {/* Ambient shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#2f5349]/10 blur-3xl" />
        <div className="absolute -right-10 top-10 h-52 w-52 rounded-full bg-[#ffc800]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#2f5349]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2f5349]/20 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2f5349] shadow-sm backdrop-blur">
            <Sparkle size={14} className="text-[#ffc800]" />
            People-first services
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#1f2f2a] sm:text-4xl lg:text-5xl">
            Why neighbors keep choosing AroundU
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            A service platform built for real homes and busy days: vetted experts, instant nearby matches, and pricing that stays honest.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Feature list */}
          <div className="space-y-5">
            {features.map((item, idx) => (
              <div
                key={item.title}
                className="group flex gap-4 rounded-2xl border border-gray-200/70 bg-white/80 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2f5349]/90 text-white shadow-lg">
                  <item.icon size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-[#1f2f2a]">
                      {item.title}
                    </h3>
                    <span className="rounded-full bg-[#ffc800]/15 px-3 py-1 text-xs font-semibold text-[#2f5349]">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-lg shadow-md ring-2 ring-white/80">
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
                className="h-full w-full max-h-[420px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/80">Trusted locally</p>
                <h3 className="mt-2 text-l md:text-2xl text-right font-semibold">Over 12k tasks delivered right on time</h3>
                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                  <div className="rounded-lg bg-white/15 px-3 py-2 backdrop-blur">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} />
                      <span className="font-semibold">4.9/5</span>
                    </div>
                    <p className="text-white/80">average rating</p>
                  </div>
                  <div className="rounded-lg bg-white/15 px-3 py-2 backdrop-blur">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="font-semibold">80+</span>
                    </div>
                    <p className="text-white/80">areas covered</p>
                  </div>
                  <div className="rounded-lg bg-white/15 px-3 py-2 backdrop-blur">
                    <div className="flex items-center gap-2">
                      <CalendarCheck size={16} />
                      <span className="font-semibold">Same-day</span>
                    </div>
                    <p className="text-white/80">slot availability</p>
                  </div>
                </div>
              </div>
            </div>

         
            <div className="absolute -left-6 -bottom-10 hidden w-48 sm:block md:w-56">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-xl">
                <img src="/2.jpg" alt="Real pros" className="h-32 w-full rounded-t-2xl object-cover" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#2f5349]">
                    <ShieldCheck size={16} /> Verified crews
                  </div>
                  <p className="mt-2 text-xs text-gray-600">Live updates once they are on the way.</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-8 hidden rotate-2 rounded-2xl border border-[#ffc800]/30 bg-white/90 px-4 py-3 text-sm font-semibold text-[#2f5349] shadow-lg backdrop-blur sm:flex items-center gap-2">
              <Sparkle size={16} className="text-[#ffc800]" />
              100% human support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
