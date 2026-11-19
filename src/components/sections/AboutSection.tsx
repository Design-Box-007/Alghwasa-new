"use client";

interface AboutSectionProps {
  id?: string;
  className?: string;
}

export function AboutSection({
  id = "internal-about",
  className = "",
}: AboutSectionProps) {
  const stats = [
    {
      value: "35+",
      label: "Years of Experience",
      subtext: "Established in Dubai in 1990",
    },
    {
      value: "12",
      label: "Global Brands",
      subtext: "International manufacturing partnerships",
    },
    {
      value: "500+",
      label: "Products Supplied",
      subtext: "Across marine and industrial applications",
    },
    {
      value: "40+",
      label: "Countries Served",
      subtext: "International distribution reach",
    },
  ];

  return (
    <section
      id={id}
      className={`relative w-full bg-white p-4 sm:p-6 lg:p-8 border-b border-[#0F2E53]/10 ${className}`}
    >
      <div className="relative w-full rounded-[26px] sm:rounded-[32px] border border-slate-200/90 bg-white p-4 sm:p-6 lg:p-7 shadow-[0_12px_40px_-18px_rgba(15,46,83,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* ========================================================= */}
          {/* LEFT SIDE: About Al Ghwasa Overview & Story              */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4">

            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight text-[#0F2E53] leading-snug">
              About Al Ghwasa
            </h2>

            <div className="space-y-3 pt-1">
              <p className="text-xs sm:text-[13px] lg:text-sm text-slate-600 leading-relaxed font-normal">
                Founded in Dubai in 1990, Ghwasa Technical Equipment Trading LLC (Al Ghwasa) is a
                trusted supplier of marine and industrial equipment, serving customers across the
                Middle East and international markets.
              </p>
              <p className="text-xs sm:text-[13px] lg:text-sm text-slate-600 leading-relaxed font-normal">
                With over 35 years of experience, we partner with globally recognised manufacturers to
                provide specialised solutions in gas detection, static grounding, anti-static
                technologies, explosion protection, pressure testing and hazardous-area electrical
                equipment.
              </p>
              <p className="text-xs sm:text-[13px] lg:text-sm text-slate-600 leading-relaxed font-normal">
                Serving the UAE, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain, we are committed to
                delivering genuine products, reliable supply and quality solutions that support
                safer and more efficient marine and industrial operations.
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: Our Company at a Glance (Visual Statistics)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0F2E53]">
                Our Company at a Glance
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 flex flex-col justify-between hover:border-[#0F2E53]/30 hover:bg-slate-50 transition-colors shadow-2xs"
                >
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F2E53]">
                    {stat.value}
                  </span>
                  <div className="mt-2 space-y-0.5">
                    <p className="text-xs sm:text-[13px] font-bold text-[#0F2E53]/90 leading-snug">
                      {stat.label}
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                      {stat.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Named export alias for backward compatibility
export { AboutSection as IndustrialClients };
