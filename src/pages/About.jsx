import React from "react";
import { ShieldCheck, Users, MapPin, Sparkles } from "lucide-react";
import SEO from "@/components/Common/SEO";

const stats = [
  {
    icon: Users,
    value: "12,000+",
    label: "Services Delivered",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Verified Professionals",
  },
  {
    icon: MapPin,
    value: "80+",
    label: "Cities Covered",
  },
];

const About = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <SEO 
        title="About Us" 
        description="Learn more about AroundU, your trusted partner for finding reliable local service professionals. We connect you with verified experts."
      />
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT — CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2f5349]/20 bg-[#f3faf7] px-3 py-1 text-xs font-bold uppercase text-[#2f5349]">
            <Sparkles size={14} className="text-[#ffc800]" />
            About AroundU
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#1f2f2a] leading-tight">
            Built for real homes, <br className="hidden sm:block" />
            not just listings
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed max-w-xl">
            AroundU was created with one simple belief — finding help for your
            home shouldn’t feel uncertain or complicated. From repairs and
            cleaning to everyday services, we connect you with nearby
            professionals who are verified, reliable, and genuinely skilled at
            what they do.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
            No endless calls. No guesswork. Just trusted people, transparent
            pricing, and services that show up when you need them.
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {stats.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-[#f7f9f8] p-4 text-center"
              >
                <item.icon className="mx-auto mb-2 text-[#2f5349]" size={22} />
                <p className="text-lg font-bold text-[#1f2f2a]">
                  {item.value}
                </p>
                <p className="text-[11px] uppercase tracking-wide text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — VISUAL BLOCK (NO IMAGE, PURE UI) */}
        <div className="relative">
          <div className="rounded-[2.5rem] border bg-linear-to-br from-[#f6faf8] via-white to-[#eef5f2] p-10 shadow-sm">
            <h3 className="text-xl font-bold text-[#1f2f2a]">
              Why people trust AroundU
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#2f5349]" />
                Every professional is identity-checked and reviewed.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#2f5349]" />
                Clear pricing before you book — no surprises later.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#2f5349]" />
                Local experts who understand your area and needs.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#2f5349]" />
                Real human support whenever you need help.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
