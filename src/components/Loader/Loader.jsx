import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Plug,
  GraduationCap,
  Scissors,
  Cog
} from "lucide-react";

const icons = [
  Plug,            // Electrician
  GraduationCap,   // Tutor
  Wrench,          // Plumber
  Cog,             // Mechanic
  Scissors         // Salon
];

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const iconTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 600);

    const pageTimer = setTimeout(() => {
      setLoading(false);
      clearInterval(iconTimer);
    }, 2200);

    return () => {
      clearInterval(iconTimer);
      clearTimeout(pageTimer);
    };
  }, []);

  const Icon = icons[index];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center gap-4">

            {/* Animated Icon */}
            <motion.div
              key={index}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#2f5349]"
            >
              <Icon size={30} className="text-[#2f5349]" />
            </motion.div>

            {/* Accent bar */}
            <motion.div
              animate={{ width: ["20%", "60%", "20%"] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="h-1 rounded-full bg-[#ffe174]"
            />

            {/* Optional text */}
            <div className='flex items-center'>
              <img className='w-16' src="/assets/logo/Logo.jpeg" alt="" />
              <div className='font-bold text-2xl text-[#2f5349]'>Around<span className='text-[#ffc800]'>U</span></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}