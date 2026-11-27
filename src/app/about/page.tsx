"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "motion/react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactSection } from "@/components/sections/ContactSection";
import { RevealAnimation } from "@/components/ui/RevealAnimation";

// Partner Brand Logos for Section 4
const ROW1_LOGOS = [
  { name: "GASTEC Japan", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/gastec_k4ulsd_pD2vTAdCJ.png" },
  { name: "Arges Marine", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/arges_marine_ksdund_xE_o1W8bR.png" },
  { name: "Fraser Anti-Static", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/fraser-logo_uzsqoy_VNbmrTI4k.jpg" },
  { name: "CS Instruments", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/cs_instrument_logo_nlry4w_SnxIRgARW.jpg" },
  { name: "Guang Cai Electric", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/GCE_Logo_dsplh8_7ou6beMqA.jpg" },
  { name: "Brannstrom Sweden", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/Brannstrom_sweden_vertical_large_rbztvm_3j-jKPJxl.png" },
  { name: "HANSUN Marine", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/HANSUN-LOGO_uzf8xk_3-5LX21yP.jpg" },
  { name: "Shimada Electric", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/shimada_logo_qmhv8e_k19eEZgDH.webp" },
];

const ROW2_LOGOS = [
  { name: "Georim", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/georim_logo_miarxx_Lto-xHeCG.jpg" },
  { name: "Xtronica", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/xtronica_logo_ylzs0f_ECAoH_bsm.png" },
  { name: "Toka Seiki Japan", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/toka_rhpnug_3IkuzK3Rc.png" },
  { name: "Safetec", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/safetec-logo_fmiku2_HnzXJhFm_.png" },
  { name: "Newson Gale", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/ChatGPT_Image_Jul_30_2026_02_11_00_PM_vnjgxa_cSefIwlbH.png" },
  { name: "Nippon Hakuyo", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/HSN_Logo_e7ouef_my0F6vIt-.jpg" },
  { name: "Hydrorex", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/hydrorex_logo_qtvfm7_XdtSAmk-4.jpg" },
  { name: "Alla France", src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/alla-france-logo_tup7wf_nmeX3XgsP.jpg" },
];

// 10 Detailed FAQs
const ABOUT_FAQS = [
  {
    question: "1. When was Al Ghwasa established?",
    answer:
      "Al Ghwasa was established in 1988 and has been supplying industrial, marine and safety equipment for over 35 years.",
  },
  {
    question: "2. What industries does Al Ghwasa serve?",
    answer:
      "We serve oil and gas, petrochemical, marine, offshore, manufacturing and other industrial sectors.",
  },
  {
    question: "3. Which international brands does Al Ghwasa represent?",
    answer:
      "Our brand portfolio includes GASTEC, Newson Gale, Fraser Anti-Static Technologies, IEP Technologies, Hydrorex and Shimada.",
  },
  {
    question: "4. Where does Al Ghwasa operate?",
    answer:
      "We serve customers across the UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain and South Africa.",
  },
  {
    question: "5. What products does Al Ghwasa supply?",
    answer:
      "We supply gas detection equipment, static grounding systems, anti-static solutions, explosion protection equipment and pressure testing solutions.",
  },
  {
    question: "6. Is Al Ghwasa an authorised GASTEC distributor?",
    answer:
      "Yes, Al Ghwasa is an authorised GASTEC distributor, supplying genuine gas detection equipment and related solutions.",
  },
  {
    question: "7. Does Al Ghwasa provide technical support?",
    answer:
      "Yes, we assist customers with product selection, technical guidance and support for their industrial equipment requirements.",
  },
  {
    question: "8. Why choose Al Ghwasa as your industrial equipment supplier?",
    answer:
      "With decades of experience, trusted global partnerships and a diverse product portfolio, we provide reliable equipment and customer-focused support.",
  },
  {
    question: "9. Can Al Ghwasa help businesses find specialised industrial safety solutions?",
    answer:
      "Yes, our team can help identify suitable products across gas detection, static grounding, anti-static and explosion protection categories.",
  },
  {
    question: "10. How can I request a product quotation from Al Ghwasa?",
    answer:
      "You can contact our team through the website enquiry form, email or phone with your product requirements to request a quotation.",
  },
];

export default function AboutPage() {
  // Why Choose Us scroll physics
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: whyScroll } = useScroll({
    target: whyChooseRef,
    offset: ["start 80%", "center 30%"],
  });
  const springWhy = useSpring(whyScroll, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });
  const card2Y = useTransform(springWhy, [0, 0.55], ["-105%", "0%"]);
  const card2Scale = useTransform(springWhy, [0, 0.55], [0.96, 1]);
  const card2Opacity = useTransform(springWhy, [0, 0.15, 0.55], [0.35, 0.8, 1]);

  const card3Y = useTransform(springWhy, [0.25, 0.95], ["-210%", "0%"]);
  const card3Scale = useTransform(springWhy, [0.25, 0.95], [0.92, 1]);
  const card3Opacity = useTransform(springWhy, [0.25, 0.45, 0.95], [0.2, 0.7, 1]);

  // FAQ accordion active state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full min-h-screen bg-white text-[#0F2E53] flex flex-col font-sans">
      <SiteHeader />

      <main className="w-full flex-1 bg-white pb-[40px] flex flex-col gap-16 sm:gap-20 md:gap-24">
        {/* ========================================================= */}
        {/* HERO SECTION: 3 Decades of Gas Detection & Product Cards */}
        {/* ========================================================= */}
        <header className="w-full bg-white pt-3 sm:pt-4 md:pt-5 px-3 sm:px-5 md:px-6 relative">
          <div className="w-full rounded-[24px] sm:rounded-[36px] bg-[#0F2E53] pt-[48px] sm:pt-[60px] md:pt-[70px] pb-12 sm:pb-16 md:pb-20 px-5 sm:px-8 md:px-12 text-white relative shadow-sm overflow-hidden">

            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#0284c7]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#164377]/30 blur-3xl pointer-events-none" />

            <div className="w-full mx-auto text-center mb-8 relative z-10">
              <RevealAnimation backgroundClass="bg-[#0F2E53]" direction="bottom">
                <h1 className="font-normal text-[28px] md:text-[36px] lg:text-[48px] leading-[1.25] text-white mb-2 text-center mx-auto tracking-tight">
                  Trusted Industrial Solutions Across the Gulf Since 1988
                </h1>
                <p className="font-normal text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-3xl mx-auto mt-2 sm:mt-3">
                  For over three decades, Al Ghwasa has been a trusted partner to industries across the Middle East, delivering reliable industrial safety, gas detection, anti-static and explosion protection solutions. As an authorised distributor of globally recognised brands, we connect businesses with genuine products, technical expertise and dependable regional support.
                </p>
              </RevealAnimation>
            </div>

            {/* Overlapping Product Showcase Cards */}
            <div className="w-full flex items-center justify-center relative py-6 sm:py-8 md:py-10 overflow-visible z-10">
              {/* Left Product: GASTEC Permeater PD-1C */}
              <div className="relative w-[98px] min-[400px]:w-[124px] min-[500px]:w-[155px] sm:w-[200px] md:w-[250px] lg:w-[310px] xl:w-[360px] aspect-[3/4] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg bg-white/10 border border-white/20 z-10 -mr-4 min-[400px]:-mr-6 min-[500px]:-mr-8 sm:-mr-10 md:-mr-12 lg:-mr-14 xl:-mr-16 transform translate-y-2 sm:translate-y-5 md:translate-y-8 lg:translate-y-10 shrink-0 transition-transform duration-300 hover:scale-105 hover:z-30">
                <Image
                  src="/images/All-Product-Images/Gas Generation System/PD_1C_1.jpg"
                  alt="GASTEC Permeater PD-1C Standard Gas Generator"
                  fill
                  sizes="(max-width: 480px) 130px, (max-width: 768px) 250px, (max-width: 1024px) 320px, 360px"
                  className="object-cover object-center"
                />
              </div>

              {/* Center Product: GASTEC H2S Data Logger GHS-8AT-EX */}
              <div className="relative w-[118px] min-[400px]:w-[148px] min-[500px]:w-[185px] sm:w-[240px] md:w-[295px] lg:w-[360px] xl:w-[410px] aspect-[3/4] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl bg-white/10 border border-white/20 z-20 shrink-0 transition-transform duration-300 hover:scale-105 hover:z-30">
                <Image
                  src="/images/All-Product-Images/Specialized Sampling Kits/GHS_8AT_EX_1.png"
                  alt="GASTEC H2S Data Logger GHS-8AT-EX"
                  fill
                  priority
                  sizes="(max-width: 480px) 160px, (max-width: 768px) 300px, (max-width: 1024px) 360px, 410px"
                  className="object-cover object-center"
                />
              </div>

              {/* Right Product: GASTEC Gas Detector Tubes & GV-100S Pump */}
              <div className="relative w-[98px] min-[400px]:w-[124px] min-[500px]:w-[155px] sm:w-[200px] md:w-[250px] lg:w-[310px] xl:w-[360px] aspect-[3/4] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg bg-white/10 border border-white/20 z-10 -ml-4 min-[400px]:-ml-6 min-[500px]:-ml-8 sm:-ml-10 md:-ml-12 lg:-ml-14 xl:-ml-16 transform translate-y-3 sm:translate-y-7 md:translate-y-10 lg:translate-y-12 shrink-0 transition-transform duration-300 hover:scale-105 hover:z-30">
                <Image
                  src="/images/Gastec Polytec Tubes.jpg"
                  alt="GASTEC Gas Detector Tubes and GV-100S Sampling Pump"
                  fill
                  sizes="(max-width: 480px) 130px, (max-width: 768px) 250px, (max-width: 1024px) 320px, 360px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="w-full mx-auto text-center flex flex-col items-center justify-center pt-8 border-t border-white/20 mt-4 relative z-10">
              <RevealAnimation backgroundClass="bg-[#0F2E53]" direction="bottom">
                <h2 className="font-normal text-[28px] md:text-[30px] lg:text-[48px] leading-[1.3] text-white mb-3 text-center mx-auto tracking-tight">
                  Built on Trust, Proven Over 30 Years
                </h2>
                <p className="font-normal text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-4xl text-center mx-auto">
                  Al Ghwasa was founded in 1988 to give industries across the Gulf a supplier they could rely on for genuine, accurate gas detection equipment. Today we remain the authorized GASTEC distributor for the region, working closely with petrochemical, marine, oil and gas, and industrial safety teams who cannot afford to get gas detection wrong.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </header>

        {/* ========================================================= */}
        {/* SECTION 1: Why We Do This                                 */}
        {/* ========================================================= */}
        <section className="w-full px-5 md:px-8 bg-white">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">
            {/* Left: Team Photo */}
            <div className="lg:col-span-6 w-full h-full flex flex-col">
              <RevealAnimation direction="left" outerClass="h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
                <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] lg:h-full min-h-[380px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[580px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#f4f4f4]">
                  <Image
                    src="/images/Gastec Images/About Us/Why We Do This.png"
                    alt="Why We Do This - Al Ghwasa Gas Detection Safety"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </RevealAnimation>
            </div>

            {/* Right: Blue Value Proposition Card */}
            <div className="lg:col-span-6 w-full flex flex-col justify-between h-full space-y-8 sm:space-y-10 bg-[#0F2E53] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
              <RevealAnimation backgroundClass="bg-[#0F2E53]" direction="right">
                <div className="space-y-4">
                  <h2 className="font-normal text-[28px] md:text-[30px] lg:text-[48px] leading-[1.3] text-white tracking-tight">
                    Why We Do This
                  </h2>
                  <p className="font-normal text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
                    We supply genuine GASTEC gas detection equipment because worker safety cannot depend on guesswork or counterfeit products. Our goal is to give industries across the Gulf reliable tools, honest technical guidance, and fast support, so every team we work with can detect hazardous gases with confidence. It&apos;s a responsibility we&apos;ve carried for over 30 years, and one we take as seriously today as we did on day one.
                  </p>
                  <div className="pt-2 flex justify-center sm:justify-start">
                    <Link
                      href="/#brands"
                      className="inline-block px-6 py-3 rounded-lg bg-white text-[#0F2E53] text-xs sm:text-sm font-semibold tracking-wide hover:bg-gray-100 transition-colors shadow-sm cursor-pointer"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </RevealAnimation>

              {/* Bottom Thumbnails */}
              <div className="flex items-center gap-4 pt-2 sm:pt-4 overflow-visible">
                <div className="relative w-[150px] sm:w-[200px] md:w-[230px] h-[170px] sm:h-[220px] md:h-[260px] rounded-2xl overflow-hidden shadow-md bg-white/10 border border-white/20 shrink-0">
                  <Image
                    src="/images/All-Product-Images/Gas Generation System/PD_1C_1.jpg"
                    alt="GASTEC Gas Generation Equipment"
                    fill
                    sizes="(max-width: 640px) 150px, 230px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative w-[150px] sm:w-[200px] md:w-[230px] h-[170px] sm:h-[220px] md:h-[260px] rounded-2xl overflow-hidden shadow-md bg-white/10 border border-white/20 shrink-0">
                  <Image
                    src="/images/Gastec Polytec Tubes.jpg"
                    alt="GASTEC Detection Tubes"
                    fill
                    sizes="(max-width: 640px) 150px, 230px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: Who We Are                                     */}
        {/* ========================================================= */}
        <section className="w-full px-5 md:px-8 bg-white">
          <div className="w-full max-w-7xl mx-auto">
            <div className="w-full text-center mb-8 sm:mb-12">
              <RevealAnimation backgroundClass="bg-white" direction="bottom">
                <h2 className="font-normal text-[28px] md:text-[30px] lg:text-[48px] leading-[1.3] text-[#0F2E53] text-center mx-auto tracking-tight">
                  Who We Are
                </h2>
              </RevealAnimation>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              {/* Left Column: 3 Structured Cards */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-4 sm:gap-5 w-full">
                <RevealAnimation backgroundClass="bg-white" direction="left" outerClass="h-full">
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 md:p-7 shadow-sm h-full flex flex-col justify-center transition-all duration-200 hover:border-[#0F2E53]/40">
                    <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#0F2E53] mb-2 text-left tracking-tight">
                      The Origin
                    </h3>
                    <p className="font-normal text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      Al Ghwasa was founded in 1988 with a clear purpose: to provide industries across the region with access to genuine, high-quality industrial equipment from trusted global manufacturers. Recognising the growing need for reliable safety and industrial solutions, we built our business around authentic products, dependable partnerships and customer trust.
                    </p>
                  </div>
                </RevealAnimation>

                <RevealAnimation backgroundClass="bg-white" direction="left" outerClass="h-full">
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 md:p-7 shadow-sm h-full flex flex-col justify-center transition-all duration-200 hover:border-[#0F2E53]/40">
                    <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#0F2E53] mb-2 text-left tracking-tight">
                      Growth &amp; Expansion
                    </h3>
                    <p className="font-normal text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      What began as an industrial equipment supplier in the UAE has grown into a trusted regional distributor, representing internationally recognised brands including GASTEC, Newson Gale, Fraser Anti-Static Technologies, IEP Technologies, Hydrorex and Shimada. Today, we serve customers across the UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain and South Africa, supporting diverse industrial and marine applications.
                    </p>
                  </div>
                </RevealAnimation>

                <RevealAnimation backgroundClass="bg-white" direction="left" outerClass="h-full">
                  <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 md:p-7 shadow-sm h-full flex flex-col justify-center transition-all duration-200 hover:border-[#0F2E53]/40">
                    <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#0F2E53] mb-2 text-left tracking-tight">
                      Purpose &amp; Impact
                    </h3>
                    <p className="font-normal text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      Our purpose is to help industries operate more safely, efficiently and reliably. Through our global brand partnerships, we supply genuine gas detection equipment, static grounding and bonding systems, anti-static technologies, explosion protection solutions, pressure testing equipment and specialised industrial products. Every product we deliver reflects our commitment to quality, authenticity and dependable technical support, helping businesses protect their people, assets and operations.
                    </p>
                  </div>
                </RevealAnimation>
              </div>

              {/* Right Column: Engineer Image */}
              <div className="lg:col-span-6 w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-full">
                <RevealAnimation direction="right" outerClass="h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
                  <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[580px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#f4f4f4]">
                    <Image
                      src="/images/Gastec Images/About Us/Our Story.png"
                      alt="Our Story - Al Ghwasa Marine & Gas Detection"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: Why Choose Us (Dynamic Unfolding 3-Card Stack) */}
        {/* ========================================================= */}
        <section className="w-full px-5 md:px-8 bg-white overflow-visible">
          <div className="w-full text-center mb-8 sm:mb-12">
            <RevealAnimation backgroundClass="bg-white" direction="bottom">
              <h2 className="font-normal text-[28px] md:text-[30px] lg:text-[48px] leading-[1.3] text-[#0F2E53] mb-2 text-center mx-auto tracking-tight">
                Why Choose us
              </h2>
              <p className="font-normal text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto mt-1.5 sm:mt-2">
                At Al Ghwasa, we believe industrial safety starts with the right products and the right partnerships. With over 35 years of industry experience, we are committed to supplying genuine equipment from globally recognised brands, delivering dependable technical support and building lasting customer relationships. From gas detection and static grounding to anti-static technologies and explosion protection, we help industries across the Gulf access reliable solutions backed by quality, expertise and trust.
              </p>
            </RevealAnimation>
          </div>

          <div
            ref={whyChooseRef}
            className="w-full max-w-7xl mx-auto flex flex-col gap-3 sm:gap-4 relative overflow-visible"
          >
            {/* Card 1: Safety (Static top) */}
            <div className="relative z-30 w-full h-[170px] sm:h-[195px] md:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md flex items-center bg-[#011c47]">
              <div className="absolute right-0 top-0 h-full aspect-[2170/725] pointer-events-none select-none">
                <Image
                  src="/images/About/why-choose-us/AboutUs-Why-Choose-us-1.png"
                  alt="Safety - Al Ghwasa Gas Detection"
                  fill
                  unoptimized
                  className="object-contain object-right"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#011c47] via-[#011c47]/85 to-transparent pointer-events-none" />
              <div className="relative z-10 px-5 sm:px-10 md:px-14 py-4 sm:py-6 md:py-8 max-w-[62%] sm:max-w-md md:max-w-lg lg:max-w-xl text-left">
                <h3 className="font-bold text-base sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2 tracking-tight">
                  Safety
                </h3>
                <p className="font-normal text-xs sm:text-sm md:text-base text-gray-200 leading-snug sm:leading-relaxed">
                  Protecting people and workplaces is at the heart of what we do. Through our trusted global brand partnerships, we provide reliable gas detection, static grounding, anti-static and explosion protection solutions that help industries identify hazards, minimise risks and maintain safer working environments.
                </p>
              </div>
            </div>

            {/* Card 2: Authenticity (Smooth unfold on scroll) */}
            <motion.div
              style={{ y: card2Y, scale: card2Scale, opacity: card2Opacity }}
              className="relative z-20 w-full h-[170px] sm:h-[195px] md:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md flex items-center origin-top bg-[#011c47]"
            >
              <div className="absolute right-0 top-0 h-full aspect-[2170/725] pointer-events-none select-none">
                <Image
                  src="/images/About/why-choose-us/AboutUs-Why-Choose-us-2.png"
                  alt="Authenticity - Genuine GASTEC Japan Equipment"
                  fill
                  unoptimized
                  className="object-contain object-right"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#011c47] via-[#011c47]/85 to-transparent pointer-events-none" />
              <div className="relative z-10 px-5 sm:px-10 md:px-14 py-4 sm:py-6 md:py-8 max-w-[62%] sm:max-w-md md:max-w-lg lg:max-w-xl text-left">
                <h3 className="font-bold text-base sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2 tracking-tight">
                  Authenticity
                </h3>
                <p className="font-normal text-xs sm:text-sm md:text-base text-gray-200 leading-snug sm:leading-relaxed">
                  Quality and authenticity define everything we supply. We partner with internationally recognised manufacturers, including GASTEC, Newson Gale, Fraser Anti-Static Technologies, IEP Technologies, Hydrorex and Shimada, ensuring access to genuine products backed by established manufacturing standards and technical expertise.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Reliability (Smooth unfold on scroll) */}
            <motion.div
              style={{ y: card3Y, scale: card3Scale, opacity: card3Opacity }}
              className="relative z-10 w-full h-[170px] sm:h-[195px] md:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md flex items-center origin-top bg-[#011c47]"
            >
              <div className="absolute right-0 top-0 h-full aspect-[2170/725] pointer-events-none select-none">
                <Image
                  src="/images/About/why-choose-us/AboutUs-Why-Choose-us-3.png"
                  alt="Reliability - Regional Support and Fast Dispatch"
                  fill
                  unoptimized
                  className="object-contain object-right"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#011c47] via-[#011c47]/85 to-transparent pointer-events-none" />
              <div className="relative z-10 px-5 sm:px-10 md:px-14 py-4 sm:py-6 md:py-8 max-w-[62%] sm:max-w-md md:max-w-lg lg:max-w-xl text-left">
                <h3 className="font-bold text-base sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2 tracking-tight">
                  Reliability
                </h3>
                <p className="font-normal text-xs sm:text-sm md:text-base text-gray-200 leading-snug sm:leading-relaxed">
                  We believe dependable service is just as important as dependable products. With over 35 years of industry experience, strong global partnerships and regional supply capabilities, we support customers across the Gulf and international markets with responsive service, reliable product delivery and technical assistance they can count on.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: Our Brand Partners                             */}
        {/* ========================================================= */}
        <section className="w-full py-8 sm:py-12 bg-white overflow-hidden">
          <div className="w-full px-5 md:px-8 text-center mb-8 sm:mb-10 flex flex-col items-center justify-center">
            <RevealAnimation backgroundClass="bg-white" direction="bottom">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0284c7] mb-1.5 block">
                Our Brand Partners
              </span>
              <h2 className="font-normal text-[28px] md:text-[30px] lg:text-[48px] leading-[1.3] text-[#0F2E53] mb-2 text-center mx-auto tracking-tight">
                Trusted Brands. Reliable Solutions.
              </h2>
              <p className="font-normal text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mt-1.5 sm:mt-2 max-w-3xl mx-auto text-center">
                We partner with globally recognised manufacturers to deliver genuine industrial safety and equipment solutions. From gas detection and static grounding to anti-static technologies, explosion protection and pressure testing, our brand partnerships help industries access trusted products backed by technical expertise and reliable support.
              </p>
            </RevealAnimation>
          </div>

          {/* Continuous Dual-Row Marquee */}
          <RevealAnimation backgroundClass="bg-white" direction="bottom">
            <div className="w-full border-y border-gray-200/80 bg-white">
              {/* Row 1: Scrolling Left */}
              <div className="w-full border-b border-gray-200/80 overflow-hidden relative">
                <div className="flex flex-nowrap w-max animate-marquee items-center hover:[animation-play-state:paused]">
                  {[...ROW1_LOGOS, ...ROW1_LOGOS].map((brand, idx) => (
                    <div
                      key={`r1-${idx}`}
                      className="flex items-center justify-center w-52 sm:w-64 md:w-72 h-24 sm:h-28 md:h-32 bg-white border-r border-gray-200/80 px-4 sm:px-6 py-2 sm:py-3 transition-colors hover:bg-gray-50/80 shrink-0"
                    >
                      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        <img
                          src={brand.src}
                          alt={brand.name}
                          loading="lazy"
                          className="h-14 sm:h-16 w-auto max-w-[80%] object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Scrolling in Opposite Direction */}
              <div className="w-full overflow-hidden relative">
                <div className="flex flex-nowrap w-max animate-marquee-reverse items-center hover:[animation-play-state:paused]">
                  {[...ROW2_LOGOS, ...ROW2_LOGOS].map((brand, idx) => (
                    <div
                      key={`r2-${idx}`}
                      className="flex items-center justify-center w-52 sm:w-64 md:w-72 h-24 sm:h-28 md:h-32 bg-white border-r border-gray-200/80 px-4 sm:px-6 py-2 sm:py-3 transition-colors hover:bg-gray-50/80 shrink-0"
                    >
                      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        <img
                          src={brand.src}
                          alt={brand.name}
                          loading="lazy"
                          className="h-14 sm:h-16 w-auto max-w-[80%] object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: Frequently Asked Questions                     */}
        {/* ========================================================= */}
        <section className="w-full px-5 md:px-8 py-4 sm:py-6 bg-white">
          <div className="w-full text-center mb-8 sm:mb-12">
            <RevealAnimation backgroundClass="bg-white" direction="bottom">
              <h2 className="font-normal text-[28px] md:text-[30px] lg:text-[48px] leading-[1.3] text-[#0F2E53] mb-2 text-center mx-auto tracking-tight">
                Frequently Asked Questions
              </h2>
            </RevealAnimation>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {ABOUT_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <RevealAnimation key={faq.question} backgroundClass="bg-white" direction="bottom">
                  <div className="border border-[#0F2E53]/20 hover:border-[#0F2E53] rounded-2xl overflow-hidden transition-all duration-200 shadow-xs">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center text-left py-4 sm:py-5 px-5 sm:px-8 bg-white hover:bg-gray-50/70 transition-colors cursor-pointer gap-4"
                      aria-expanded={isOpen}
                    >
                      <h3 className="font-semibold text-base sm:text-lg text-[#0F2E53] leading-snug flex-1">
                        {faq.question}
                      </h3>
                      <div className="shrink-0 text-[#0F2E53] p-1.5 rounded-full bg-gray-100 flex items-center justify-center">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#0F2E53]" />
                        ) : (
                          <Plus className="w-4 h-4 text-[#0F2E53]" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-8 pb-5 pt-1 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: Get in Touch with Gas Detection Specialists    */}
        {/* ========================================================= */}
        <ContactSection
          id="contact"
          detectorImage="https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/ChatGPT_Image_Jun_21_2026_02_37_14_PM_eoqjcf_CPs9Dx3-M.png"
          detectorAlt="Al Ghwasa Industrial Safety Equipment"
        />
      </main>

      <SiteFooter />
    </div>
  );
}
