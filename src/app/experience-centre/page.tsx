"use client";

import { useState } from "react";
import { SITE_METADATA } from "@/lib/data/site-content";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  Gauge,
  Sparkles,
  ShieldCheck,
  PhoneCall,
  Clock,
  Send,
} from "lucide-react";

export default function ExperienceCentrePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    preferredDate: "",
    interests: "",
  });

  const [booked, setBooked] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  const facilities = [
    {
      title: "ATEX Static Grounding Test Rig",
      desc: "Simulate road tanker and rail car loading conditions with real-time Earth-Rite® loop resistance interlock verification.",
      icon: Sparkles,
    },
    {
      title: "Direct-Reading Gas Detection Chamber",
      desc: "Hands-on sampling with Gastec detector tubes, multi-gas portable sensors, and span gas bump-testing procedures.",
      icon: Gauge,
    },
    {
      title: "MARPOL 15 PPM Bilge Calibration Station",
      desc: "Live optical sensor testing and data logger retrieval for Brannstrom Bilgmon 488 marine pollution prevention systems.",
      icon: ShieldCheck,
    },
    {
      title: "High Pressure Hydrostatic Power Units",
      desc: "Hydrorex portable test rig demonstrations capable of reaching pressures up to 10,000 PSI safely.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-white text-[#0F2E53]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F2E53]/15 bg-[#0F2E53]/5 px-3.5 py-1 text-xs font-semibold text-[#0F2E53]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Dubai Live Demonstration & Calibration Facility</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0F2E53] sm:text-5xl">
            Al Ghwasa Experience Centre
          </h1>
          <p className="text-base leading-relaxed text-[#0F2E53]/75">
            Experience our comprehensive range of marine safety and ATEX explosion protection
            technologies before deploying them to your offshore fleet or chemical plant.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-[#0F2E53] mb-8">
            Demonstration Stations & Facilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {facilities.map((fac) => {
              const Icon = fac.icon;
              return (
                <div
                  key={fac.title}
                  className="rounded-3xl border border-[#0F2E53]/15 bg-white p-8 shadow-sm hover:border-[#0F2E53]/30 transition-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F2E53] text-white shadow-md shadow-[#0F2E53]/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#0F2E53]">
                    {fac.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#0F2E53]/70">
                    {fac.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Booking Form and Location Card */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-7 rounded-3xl border border-[#0F2E53]/15 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F2E53] mb-2">
              <Calendar className="w-4 h-4" />
              <span>Schedule a Guided Technical Visit</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0F2E53]">
              Book a Tour with Our Application Engineers
            </h3>
            <p className="mt-2 text-xs text-[#0F2E53]/70">
              We arrange bespoke demonstrations for engineering teams, procurement directors,
              and marine safety superintendents.
            </p>

            {booked ? (
              <div className="my-10 text-center space-y-4 rounded-2xl bg-[#0F2E53]/5 p-8 border border-[#0F2E53]/20">
                <CheckCircle2 className="mx-auto h-12 w-12 text-[#0F2E53]" />
                <h4 className="text-lg font-bold text-[#0F2E53]">
                  Visit Request Acknowledged
                </h4>
                <p className="text-xs text-[#0F2E53]/80 max-w-md mx-auto">
                  Thank you, {formData.name}. Our facility coordinator will contact you shortly
                  to confirm your date and prepare relevant equipment stations.
                </p>
                <button
                  type="button"
                  onClick={() => setBooked(false)}
                  className="rounded-full bg-[#0F2E53] px-5 py-2 text-xs font-semibold text-white hover:bg-[#164377] transition-colors"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F2E53] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3.5 py-2.5 text-xs text-[#0F2E53] focus:border-[#0F2E53] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0F2E53] mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Petrochem Ltd"
                      className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3.5 py-2.5 text-xs text-[#0F2E53] focus:border-[#0F2E53] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F2E53] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3.5 py-2.5 text-xs text-[#0F2E53] focus:border-[#0F2E53] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0F2E53] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3.5 py-2.5 text-xs text-[#0F2E53] focus:border-[#0F2E53] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F2E53] mb-1">
                    Areas of Interest / Equipment to Test
                  </label>
                  <textarea
                    rows={3}
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    placeholder="e.g. Newson Gale static grounding, Gastec sampling pumps, Bilgmon 488 calibration..."
                    className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3.5 py-2.5 text-xs text-[#0F2E53] focus:border-[#0F2E53] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F2E53] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#164377] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Tour Appointment</span>
                </button>
              </form>
            )}
          </div>

          {/* Location & Visiting Info */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0F2E53] text-white p-8 space-y-6 flex flex-col justify-between shadow-xl shadow-[#0F2E53]/20">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/80">
                <Clock className="w-4 h-4" />
                <span>Visiting Hours</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight">
                Dubai Technical Facility
              </h3>

              <div className="space-y-3 text-xs text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">{SITE_METADATA.address}</span>
                    <span className="text-[11px] text-white/60">{SITE_METADATA.poBox}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Sunday – Thursday</span>
                    <span className="text-[11px] text-white/60">8:00 AM – 6:00 PM GST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Direct Desk</span>
                    <span className="text-[11px] text-white/60">{SITE_METADATA.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 border border-white/15 text-xs text-white/90">
              <p className="font-semibold text-white">Parking & Access:</p>
              <p className="mt-1 text-[11px] text-white/70 leading-normal">
                Dedicated visitor parking available on-site. Close proximity to Dubai trade routes
                and port zones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
