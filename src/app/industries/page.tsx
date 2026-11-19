import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/data/industries";
import { Factory, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Ghwasa Technical Equipment Trading",
  description:
    "Supplying certified safety solutions for Oil & Gas, Maritime, Chemical Processing, Food/Pharma, and Calibration sectors across the Middle East.",
};

export default function IndustriesPage() {
  return (
    <div className="py-16 sm:py-24 bg-white text-[#0F2E53]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F2E53]/15 bg-[#0F2E53]/5 px-3.5 py-1 text-xs font-semibold text-[#0F2E53]">
            <Factory className="w-3.5 h-3.5" />
            <span>Hazardous Area & Maritime Sectors</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0F2E53] sm:text-5xl">
            Industries We Serve
          </h1>
          <p className="text-base leading-relaxed text-[#0F2E53]/75">
            From offshore drill ships to high-throughput chemical reactors, our specialized
            technologies protect life, infrastructure, and commercial operations across the GCC.
          </p>
        </div>

        {/* Industries List */}
        <div className="mt-16 space-y-12">
          {INDUSTRIES.map((ind, idx) => (
            <div
              key={ind.id}
              className="rounded-3xl border border-[#0F2E53]/15 bg-white p-8 lg:p-10 shadow-sm hover:border-[#0F2E53]/30 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F2E53] text-xs font-bold text-white font-mono">
                      0{idx + 1}
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-[#0F2E53]">
                      {ind.title}
                    </h2>
                  </div>

                  <p className="text-xs font-semibold text-[#0F2E53]">
                    {ind.summary}
                  </p>

                  <p className="text-xs leading-relaxed text-[#0F2E53]/70">
                    {ind.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2E53]/50 mb-2">
                      Key Industrial Applications:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0F2E53]/80">
                      {ind.applications.map((app) => (
                        <div key={app} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0F2E53] shrink-0" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-2xl border border-[#0F2E53]/15 bg-white p-6 space-y-4 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2E53]/50">
                    Featured Systems Supplied:
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {ind.equipmentProvided.map((eq) => (
                      <li key={eq} className="flex items-center justify-between rounded-lg bg-[#0F2E53]/5 p-2.5 font-semibold text-[#0F2E53]">
                        <span>{eq}</span>
                        <span className="text-[10px] text-[#0F2E53]/70 font-mono">ATEX / IMO</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F2E53] py-2.5 text-xs font-semibold text-white hover:bg-[#164377] transition-colors shadow-sm"
                  >
                    <span>Request Industry Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
