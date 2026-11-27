"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Mail, Phone, MapPin, ChevronDown, CheckCircle2 } from "lucide-react";
import { RevealAnimation } from "@/components/ui/RevealAnimation";

interface ContactSectionProps {
  id?: string;
  className?: string;
  detectorImage?: string;
  detectorAlt?: string;
}

export function ContactSection({
  id = "contact",
  className = "",
  detectorImage = "/images/Contact/gastec-h2s-logger.png",
  detectorAlt = "GASTEC H2S Hydrogen Sulphide Data Logger",
}: ContactSectionProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    country: "",
    enquiryType: "",
    message: "",
  });

  // Track scroll position across the top banner
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring physics for fluid movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  // Horizontal motion: Starts shifted right (80px), scrolls smoothly left to (-80px),
  // and smoothly reverses in reverse order when scrolling down vs up
  const x = useTransform(smoothProgress, [0, 1], [80, -80]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id={id} className={`w-full bg-[#0F2E53] text-white ${className}`}>
      {/* 1. TOP BANNER: Transition & Parallax Gas Detector */}
      <div ref={bannerRef} className="relative w-full overflow-hidden select-none">
        {/* Split Background: Top half white (matching preceding section), Bottom half #0F2E53 */}
        <div className="absolute inset-0 flex flex-col pointer-events-none">
          <div className="w-full h-1/2 bg-white" />
          <div className="w-full h-1/2 bg-[#0F2E53]" />
        </div>

        {/* Floating Gas Detector Container */}
        <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-16 h-36 sm:h-44 md:h-52 lg:h-60 flex items-center justify-end">
          <motion.div
            style={{ x }}
            className="relative w-24 sm:w-32 md:w-40 lg:w-48 aspect-square z-20 pointer-events-none drop-shadow-2xl"
          >
            <Image
              src={detectorImage}
              alt={detectorAlt}
              fill
              priority
              sizes="(max-width: 640px) 100px, (max-width: 1024px) 160px, 200px"
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* 2. MAIN FORM & DETAILS CONTAINER */}
      <div className="w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 sm:pb-16 pt-4 sm:pt-6">
        
        {/* Section Heading & Subtitle */}
        <RevealAnimation backgroundClass="bg-[#0F2E53]" direction="bottom" outerClass="mb-8 sm:mb-10 mx-auto">
          <div className="text-center flex flex-col items-center justify-center">
            <h2 className="font-normal text-[28px] md:text-[30px] lg:text-[48px] leading-[1.3] text-white mb-2 text-center mx-auto tracking-tight">
              Get in Touch with Our Gas Detection Specialists
            </h2>
            <p className="font-normal text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-3xl text-center mx-auto">
              Have questions, need a quote, or require product guidance across the GCC? Fill in the form below and our technical team will respond promptly.
            </p>
          </div>
        </RevealAnimation>

        {/* White Form Card */}
        <div className="w-full bg-white rounded-2xl border-2 border-[#0F2E53] p-6 sm:p-10 shadow-sm text-gray-900">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2E53] mt-4">
                Thank you!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-sm mx-auto">
                Your enquiry has been submitted successfully. An Al Ghwasa gas detection specialist will respond promptly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-5 rounded-full bg-[#0F2E53] text-white px-5 py-2 text-xs font-semibold hover:bg-[#163f70] transition-colors cursor-pointer"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0F2E53] focus:ring-1 focus:ring-[#0F2E53]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0F2E53] focus:ring-1 focus:ring-[#0F2E53]"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="+971"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0F2E53] focus:ring-1 focus:ring-[#0F2E53]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0F2E53] focus:ring-1 focus:ring-[#0F2E53]"
                  />
                </div>
              </div>

              {/* Row 3: Country & Enquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#0F2E53] focus:ring-1 focus:ring-[#0F2E53] bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Country</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Oman">Oman</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>

                <div className="relative">
                  <select
                    required
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#0F2E53] focus:ring-1 focus:ring-[#0F2E53] bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Enquiry Type</option>
                    <option value="Products">Products</option>
                    <option value="Services">Services</option>
                    <option value="Customized Solutions">Customized Solutions</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <textarea
                  rows={3}
                  required
                  placeholder="Equiry details (eg: Model, brand, quantity and other requirements)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0F2E53] focus:ring-1 focus:ring-[#0F2E53] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center sm:justify-start">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-md bg-[#0F2E53] text-white font-semibold text-sm shadow-sm hover:bg-[#163f70] transition-colors cursor-pointer"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Bottom 3-Column Info Card */}
        <RevealAnimation backgroundClass="bg-[#0F2E53]" direction="bottom" outerClass="mt-8 w-full">
          <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 text-gray-900">
            <div className="grid grid-cols-3 divide-x divide-gray-200 items-center">
              {/* Email */}
              <a
                href="mailto:sales@alghwasa.com"
                title="sales@alghwasa.com"
                aria-label="Email: sales@alghwasa.com"
                className="flex flex-col items-center justify-center gap-2 py-2 px-1 sm:px-4 group cursor-pointer transition-transform duration-200 active:scale-95"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#0F2E53] text-white flex items-center justify-center shadow-sm group-hover:bg-[#163f70] group-hover:scale-105 transition-all duration-200">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-[#0F2E53] transition-colors">
                  Email
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+97143968037"
                title="+97143968037"
                aria-label="Call: +97143968037"
                className="flex flex-col items-center justify-center gap-2 py-2 px-1 sm:px-4 group cursor-pointer transition-transform duration-200 active:scale-95"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#0F2E53] text-white flex items-center justify-center shadow-sm group-hover:bg-[#163f70] group-hover:scale-105 transition-all duration-200">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-[#0F2E53] transition-colors">
                  Phone
                </span>
              </a>

              {/* Address */}
              <a
                href="https://maps.app.goo.gl/b8KAwE9whDgJS2ix8?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                title="Unit M08/09, Al Shraifi-1 Zabeel Road, PO BOX: 52084 Dubai, UAE"
                aria-label="Address: Unit M08/09, Al Shraifi-1 Zabeel Road, PO BOX: 52084 Dubai, UAE"
                className="flex flex-col items-center justify-center gap-2 py-2 px-1 sm:px-4 group cursor-pointer transition-transform duration-200 active:scale-95"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#0F2E53] text-white flex items-center justify-center shadow-sm group-hover:bg-[#163f70] group-hover:scale-105 transition-all duration-200">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-[#0F2E53] transition-colors">
                  Address
                </span>
              </a>
            </div>
          </div>
        </RevealAnimation>

      </div>
    </section>
  );
}

// Named alias for backward compatibility
export { ContactSection as QuoteSection };
