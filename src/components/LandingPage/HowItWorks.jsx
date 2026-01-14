import React from "react";
import { Search, UserCheck, CheckCircle, Sparkle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose a Service",
    desc: "Select the service you need from trusted local categories.",
  },
  {
    icon: UserCheck,
    title: "Select a Professional",
    desc: "Compare profiles, pricing, and availability near you.",
  },
  {
    icon: CheckCircle,
    title: "Get It Done",
    desc: "Confirm your booking and get the job done hassle-free.",
  },
];

const HowItWorks = React.memo(() => {
  return (
    <section className="relative bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="relative text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2f5349]">
            How It Works
          </h2>

          {/* Decorative doodles - Hidden on mobile */}
          <Sparkle
            size={20}
            strokeWidth={1}
            className="absolute -left-2 sm:-left-6 top-2 sm:top-2 rotate-12 text-[#ffc800] hidden sm:block sm:-left-12 md:top-6"
          />

          <Sparkle
            size={16}
            strokeWidth={1}
            className="absolute right-0 sm:right-10 top-8 sm:top-10 -rotate-12 text-[#2f5349]/40 hidden sm:block"
          />

          <p className="mx-auto mt-4 max-w-md text-xs sm:text-sm md:text-base text-gray-600 px-2">
            Getting local services is quick, simple, and reliable.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-10 sm:mt-12 md:mt-14 grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border-2 border-[#368971] bg-white p-5 sm:p-6 md:p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mx-auto flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-full bg-[#ffc800]/40 transition group-hover:scale-110">
                <step.icon className="h-5 sm:h-6 w-5 sm:w-6 text-[#2f5349]" />
              </div>

              {/* Title */}
              <h3 className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-medium text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>

              {/* Step number */}
              <span className="absolute right-4 sm:right-5 top-4 sm:top-5 text-xs sm:text-sm font-semibold text-[#2f5349]/20">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default HowItWorks;