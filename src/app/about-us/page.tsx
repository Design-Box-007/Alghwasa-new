import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Award, Globe, Building, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Ghwasa Technical Equipment Trading LLC",
  description:
    "Founded in Dubai in 1990, Al Ghwasa has over 35 years of experience delivering marine safety and industrial explosion protection technologies.",
};

export default function AboutUsPage() {
  const milestones = [
    { year: "1990", title: "Foundation in Dubai", desc: "Established in Dubai to provide certified maritime safety and technical equipment to regional shipping fleets." },
    { year: "2002", title: "Industrial Safety Expansion", desc: "Expanded into ATEX hazardous area gas detection and electrostatic grounding protection for GCC refineries." },
    { year: "2014", title: "Direct Manufacturer Distributorships", desc: "Formalized authorized partnerships with Newson Gale, Gastec, IEP Technologies, and Fraser Anti-Static." },
    { year: "2022", title: "Dubai Experience Centre", desc: "Inaugurated dedicated testing benches and live demonstration laboratory on Zabeel Road, Dubai." },
  ];

  return (
    <div className="py-16 sm:py-24 bg-white text-[#0F2E53]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F2E53]/15 bg-[#0F2E53]/5 px-3.5 py-1 text-xs font-semibold text-[#0F2E53]">
            <Building className="w-3.5 h-3.5" />
            <span>Over 35 Years of Engineering Excellence</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0F2E53] sm:text-5xl">
            About Al Ghwasa
          </h1>
          <p className="text-base leading-relaxed text-[#0F2E53]/75">
            Founded in Dubai in 1990, Ghwasa Technical Equipment Trading LLC (Al Ghwasa) is a
            trusted supplier of marine and industrial equipment, serving customers across the
            Middle East and international markets.
          </p>
        </div>

        {/* Core Values / Overview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-[#0F2E53]/15 bg-white p-6 shadow-sm hover:border-[#0F2E53]/30 transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F2E53] text-white shadow-xs">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-[#0F2E53]">
              Authentic Manufacturer Supply
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#0F2E53]/70">
              We work with globally recognised manufacturers as an authorised dealer,
              providing customers access to 100% genuine products, factory warranties, and
              manufacturer-backed solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0F2E53]/15 bg-white p-6 shadow-sm hover:border-[#0F2E53]/30 transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F2E53] text-white shadow-xs">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-[#0F2E53]">
              Regional GCC Distribution
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#0F2E53]/70">
              Serving the United Arab Emirates, Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain,
              we maintain responsive local inventory and fast delivery for plant turnarounds and
              port calls.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0F2E53]/15 bg-white p-6 shadow-sm hover:border-[#0F2E53]/30 transition-all">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F2E53] text-white shadow-xs">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-[#0F2E53]">
              Certified Technical Engineers
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#0F2E53]/70">
              Our Dubai-based team provides engineering consultancy, site surveys, commissioning,
              and traceable calibration certificates adhering to ATEX, IECEx, and IMO standards.
            </p>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-[#0F2E53]">
            Our Journey & Milestones
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="relative rounded-2xl border border-[#0F2E53]/15 bg-white p-6 shadow-sm">
                <span className="text-2xl font-black text-[#0F2E53] font-mono">
                  {m.year}
                </span>
                <h4 className="mt-2 text-base font-bold text-[#0F2E53]">
                  {m.title}
                </h4>
                <p className="mt-1 text-xs text-[#0F2E53]/70 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-[#0F2E53] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-[#0F2E53]/20">
          <div>
            <h3 className="text-2xl font-bold">Partner With Al Ghwasa</h3>
            <p className="mt-1 text-xs text-white/80 max-w-xl">
              Discuss your technical equipment requirements with our Dubai engineering specialists.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold text-[#0F2E53] shadow hover:bg-white/90 transition-colors shrink-0"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
