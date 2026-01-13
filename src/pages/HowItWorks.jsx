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

const HowItWorks = () => {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Heading */}
        <div className="relative text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2f5349]">
            How It Works
          </h2>

          {/* Decorative doodles */}
          <Sparkle
            size={24}
            strokeWidth={1}
            className="absolute -left-6 top-2 rotate-12 text-[#ffc800] sm:-left-12 sm:top-6"
          />

          <Sparkle
            size={20}
            strokeWidth={1}
            className="absolute right-0 top-10 -rotate-12 text-[#2f5349]/40 sm:right-10"
          />

          <p className="mx-auto mt-4 max-w-md text-sm sm:text-base text-gray-600">
            Getting local services is quick, simple, and reliable.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-8 sm:gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ffc800]/40 transition group-hover:scale-110">
                <step.icon className="h-6 w-6 text-[#2f5349]" />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-base sm:text-lg font-medium text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>

              {/* Step number */}
              <span className="absolute right-5 top-5 text-xs sm:text-sm font-semibold text-[#2f5349]/20">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
