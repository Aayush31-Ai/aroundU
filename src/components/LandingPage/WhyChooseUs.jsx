import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  IndianRupee,
  MapPin,
  CalendarCheck,
  Sparkle,
} from "lucide-react";

/* ---------- STATIC DATA ---------- */
const features = [
  {
    icon: ShieldCheck,
    image: "http://www.elitecarecheshire.co.uk/wp-content/uploads/2015/07/Professional-Domestic-Services-Cheshire.jpg",
    title: "Verified Professionals",
    desc: "Every expert is identity-checked and quality-reviewed before they meet you.",
    tag: "Safety first",
  },
  {
    icon: MapPin,
    image: "/1.jpg",
    title: "Services Near You",
    desc: "Pinpoint nearby pros and get responses that match your schedule.",
    tag: "2 km avg",
  },
  {
    icon: CalendarCheck,
    image: "/2.jpg",
    title: "Simple Booking",
    desc: "Pick a slot, confirm, and track updates in one place.",
    tag: "2 min",
  },
  {
    icon: IndianRupee,
    image: "/4.jpg",
    title: "Fair Pricing",
    desc: "Clear estimates upfront with no hidden charges.",
    tag: "Transparent",
  },
];

/* ---------- STAT BOX ---------- */
const StatBox = ({ icon: Icon, value, label }) => (
  <div className="rounded-lg bg-white/10 px-3 py-2 backdrop-blur-md border border-white/10">
    <div className="flex items-center gap-2">
      <Icon size={14} className="text-[#ffc800]" />
      <span className="font-semibold text-sm">{value}</span>
    </div>
    <p className="text-white/70 text-[10px] uppercase tracking-wider">{label}</p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-br
        from-white
        via-[#f6faf8]
        to-[#eef5f2]
        py-16 lg:py-24
      "
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4">

        {/* ---------- HEADER ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2f5349]/20 bg-white/80 px-3 py-1 text-xs font-bold uppercase text-[#2f5349]">
            <Sparkle size={14} className="text-[#ffc800]" />
            People-first services
          </span>

          <h2 className="mt-4 text-3xl lg:text-5xl font-extrabold text-[#1f2f2a]">
            Why neighbors keep choosing AroundU
          </h2>

          <p className="mt-4 text-gray-600">
            Vetted experts, nearby matches, and pricing that stays honest.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ---------- FEATURES ---------- */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="space-y-5"
          >
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0 },
                }}
                className="
                  group flex gap-5
                  rounded-3xl
                  border border-gray-200/70
                  bg-white
                  p-5
                  shadow-sm
                  hover:shadow-lg
                  transition
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2f5349] text-white">
                  <item.icon size={22} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-[#1f2f2a]">{item.title}</h3>
                    <span className="rounded-full bg-[#ffc800]/20 px-2 py-0.5 text-[10px] font-bold text-[#2f5349]">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>

                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      loading="lazy"
                      className="h-10 w-10 rounded-lg object-cover"
                      alt=""
                    />
                    <div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        style={{ transformOrigin: "left" }}
                        className="h-full bg-gradient-to-r from-[#ffc800] to-[#2f5349]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ---------- RIGHT IMAGE ---------- */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-xl">
              <img
                src="/c1.jpg"
                loading="eager"
                className="h-[420px] lg:h-[500px] w-full object-cover"
                alt="Service"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2f2a]/80 via-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-xs font-bold tracking-widest text-[#ffc800]">
                  AroundU Impact
                </p>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  12k+ Tasks delivered on time
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  <StatBox icon={ShieldCheck} value="4.9/5" label="Rating" />
                  <StatBox icon={MapPin} value="80+" label="Areas" />
                  <StatBox icon={CalendarCheck} value="Instant" label="Slots" />
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:flex absolute -left-6 -bottom-6 w-60 rounded-2xl bg-white p-4 shadow-xl border"
            >
              <ShieldCheck className="text-green-600 mr-3" />
              <div>
                <p className="font-bold text-sm">Verified Crews</p>
                <p className="text-xs text-gray-500">Live safety checks</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
