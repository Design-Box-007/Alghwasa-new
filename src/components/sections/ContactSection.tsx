"use client";

import { useState } from "react";
import { BRANDS } from "@/lib/data/brands";
import { MapPin, Phone, Mail, CheckCircle2, Send } from "lucide-react";

interface ContactSectionProps {
  id?: string;
  className?: string;
}

export function ContactSection({
  id = "contact",
  className = "",
}: ContactSectionProps) {
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [rfqForm, setRfqForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    brand: "Newson Gale",
    message: "",
  });

  return (
    <section
      id={id}
      className={`py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 bg-white border-b border-[#0F2E53]/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Headquarters Information & Engineering Desk */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F2E53]/60">
                Headquarters &amp; Warehouse
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2E53] tracking-tight mt-1.5">
                Request a Formal Engineering Quote
              </h2>
              <p className="mt-3 text-sm text-[#0F2E53]/80 leading-relaxed">
                Our Dubai engineering desk responds within 24 business hours with formal pricing, manufacturer data sheets, and delivery timelines.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3 text-[#0F2E53]">
                <MapPin className="w-4 h-4 text-[#0F2E53] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0F2E53]">Al Ghwasa Technical Equipment Trading LLC</p>
                  <p className="text-[#0F2E53]/70">Deira / Dubai Silicon Oasis, Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#0F2E53]">
                <Phone className="w-4 h-4 text-[#0F2E53] shrink-0" />
                <div>
                  <span className="font-semibold">+971 4 228 2133</span>
                  <span className="text-[#0F2E53]/60 text-xs ml-2">Sun - Thu, 8am - 5pm GST</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#0F2E53]">
                <Mail className="w-4 h-4 text-[#0F2E53] shrink-0" />
                <div>
                  <a href="mailto:info@alghwasa.com" className="font-semibold hover:underline">
                    info@alghwasa.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAFAFC] border border-[#0F2E53]/10 text-xs text-[#0F2E53]/70">
              <p className="font-bold text-[#0F2E53] mb-1">
                Ex-Stock Delivery Across GCC:
              </p>
              United Arab Emirates · Saudi Arabia · Qatar · Oman · Kuwait · Bahrain
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Interactive RFQ Form                      */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#0F2E53]/10 bg-[#FAFAFC] p-6 sm:p-8 shadow-xs">
              {rfqSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2E53] mt-4">
                    Quote Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0F2E53]/70 mt-1.5 max-w-sm mx-auto">
                    Thank you, {rfqForm.name}. An Al Ghwasa technical sales specialist has been assigned to your enquiry and will respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setRfqSubmitted(false)}
                    className="mt-5 rounded-full bg-[#0F2E53] text-white px-5 py-2 text-xs font-semibold hover:bg-[#091D36] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRfqSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-[#0F2E53] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={rfqForm.name}
                      onChange={(e) => setRfqForm({ ...rfqForm, name: e.target.value })}
                      placeholder="e.g. Tariq Mansoor"
                      className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0F2E53] focus:outline-none focus:ring-2 focus:ring-[#0F2E53]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F2E53] mb-1">
                        Company / Plant *
                      </label>
                      <input
                        type="text"
                        required
                        value={rfqForm.company}
                        onChange={(e) => setRfqForm({ ...rfqForm, company: e.target.value })}
                        placeholder="e.g. Petrochem LLC"
                        className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0F2E53] focus:outline-none focus:ring-2 focus:ring-[#0F2E53]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F2E53] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={rfqForm.email}
                        onChange={(e) => setRfqForm({ ...rfqForm, email: e.target.value })}
                        placeholder="tariq@petrochem.com"
                        className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0F2E53] focus:outline-none focus:ring-2 focus:ring-[#0F2E53]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F2E53] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={rfqForm.phone}
                        onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0F2E53] focus:outline-none focus:ring-2 focus:ring-[#0F2E53]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F2E53] mb-1">
                        Brand Required
                      </label>
                      <select
                        value={rfqForm.brand}
                        onChange={(e) => setRfqForm({ ...rfqForm, brand: e.target.value })}
                        className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0F2E53] focus:outline-none focus:ring-2 focus:ring-[#0F2E53]"
                      >
                        {BRANDS.map((b) => (
                          <option key={b.name} value={b.name}>
                            {b.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F2E53] mb-1">
                      Project Specifications / Quantity
                    </label>
                    <textarea
                      rows={3}
                      value={rfqForm.message}
                      onChange={(e) => setRfqForm({ ...rfqForm, message: e.target.value })}
                      placeholder="State required model, quantities, hazardous area zone (Zone 0/1/2), or application details..."
                      className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-[#0F2E53] focus:outline-none focus:ring-2 focus:ring-[#0F2E53] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#0F2E53] text-white py-3 text-xs sm:text-sm font-bold shadow-sm hover:bg-[#091D36] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Request for Quotation</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
