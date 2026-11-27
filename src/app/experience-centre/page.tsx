"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { RevealAnimation } from "@/components/ui/RevealAnimation";

// Gallery images
const GALLERY_IMAGES = [
  "/images/Experience-Center/new-images/1.jpg",
  "/images/Experience-Center/new-images/2.jpg",
  "/images/Experience-Center/new-images/3.jpg",
  "/images/Experience-Center/new-images/4.jpg",
  "/images/Experience-Center/new-images/5.jpg",
];

// Featured articles
const FEATURED_ARTICLES = [
  {
    title: "What Is Gas Detection? A Complete Guide to Industrial Gas Monitoring",
    slug: "what-is-gas-detection",
    category: "Gas Detection & Monitoring",
    date: "September 1, 2026",
    description:
      "Gas detection is the process of identifying and measuring gases in the atmosphere to determine whether potentially hazardous conditions are present in industrial workplaces.",
    imgSrc: "/blogs/What Is Gas Detection A Complete Guide to Industrial Gas Monitoring.png",
  },
  {
    title: "How to Choose the Right Gas Detector for Your Workplace",
    slug: "how-to-choose-the-right-gas-detector",
    category: "Gas Detection & Monitoring",
    date: "September 2, 2026",
    description:
      "Learn how to choose the right gas detector based on the target gas, workplace environment, application, sampling methods, and monitoring requirements.",
    imgSrc: "/blogs/How to Choose the Right Gas Detector for Your Workplace.png",
  },
  {
    title: "What Is a Gas Detector Tube and How Does It Work?",
    slug: "what-is-a-gas-detector-tube",
    category: "Gas Detector Tubes & Sampling",
    date: "September 3, 2026",
    description:
      "A gas detector tube is a measurement device used to detect and estimate the concentration of a specific gas or vapour in air using direct-reading chemical reagents.",
    imgSrc: "/blogs/What Is a Gas Detector Tube and How Does It Work.png",
  },
];

// 10 FAQs
const FAQS = [
  {
    question: "What gas detection equipment does Al Ghwasa supply?",
    answer:
      "Al Ghwasa supplies a wide range of gas detection equipment, including GASTEC gas detector tubes, gas sampling pumps, H₂S gas detectors, data loggers, automatic air sampling pumps, calibration equipment, confined-space sampling accessories, and specialized gas monitoring systems for industrial and safety applications.",
  },
  {
    question: "Is Al Ghwasa an authorized GASTEC distributor in the UAE?",
    answer:
      "Yes. Al Ghwasa is an authorized GASTEC distributor for the Middle East and Africa, supplying genuine Japanese GASTEC gas detection equipment and providing technical support to customers across the region.",
  },
  {
    question: "Where can I buy GASTEC gas detector tubes in the UAE and GCC?",
    answer:
      "Al Ghwasa supplies GASTEC gas detector tubes and sampling equipment across the UAE and GCC, including Saudi Arabia, Qatar, Oman, Kuwait and Bahrain. Customers can submit an enquiry through the website to request product availability and pricing.",
  },
  {
    question: "What gases can GASTEC detector tubes detect?",
    answer:
      "GASTEC offers detector tubes for hundreds of gases and vapours, including hydrogen sulphide (H₂S), ammonia, carbon monoxide, benzene, formaldehyde, sulfur dioxide, hydrocarbons, VOCs and many other industrial and environmental contaminants. The GASTEC system supports more than 500 chemical applications.",
  },
  {
    question: "What is a GASTEC gas detector tube used for?",
    answer:
      "A GASTEC gas detector tube is used for rapid on-site measurement of gases and vapours in air. Air is drawn through the detector tube using a compatible sampling pump, producing a visible colour change that can be compared with the calibrated scale printed on the tube.",
  },
  {
    question: "Do you supply H₂S gas detection equipment for sewers and wastewater?",
    answer:
      "Yes. Al Ghwasa supplies H₂S gas detection and monitoring solutions for sewer and wastewater applications, including the GASTEC GHS-8AT-EX H₂S data logger for continuous monitoring and corrosion-prevention applications in sewer networks.",
  },
  {
    question: "Can GASTEC equipment be used for confined-space gas detection?",
    answer:
      "Yes. GASTEC sampling pumps, detector tubes and extension hoses can be used for confined-space gas testing, including applications involving manholes, storage tanks, silos, process vessels and other difficult-to-access areas. Remote sampling accessories allow air to be tested before personnel enter potentially hazardous environments.",
  },
  {
    question: "Which industries use Al Ghwasa gas detection solutions?",
    answer:
      "Our gas detection solutions are suitable for oil & gas, petrochemical, marine and shipping, wastewater, chemical processing, construction, mining, utilities, industrial hygiene, laboratories, emergency response, environmental monitoring and confined-space operations. Different detector tubes and monitoring systems are selected according to the gas and application being tested.",
  },
  {
    question: "Do you provide technical support, training and calibration services?",
    answer:
      "Yes. Al Ghwasa provides product demonstrations, technical guidance, equipment training, calibration and maintenance support for applicable GASTEC equipment and sampling pumps.",
  },
  {
    question: "How can I request a quote for GASTEC gas detection equipment?",
    answer:
      "You can select the required GASTEC detector tube, gas sampling pump, H₂S monitor or other gas detection equipment on our website and submit an enquiry. Our team will assist with product selection, availability, pricing and technical requirements.",
  },
];

export default function ExperienceCenterPage() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollThumbIntoView = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement;
    if (child) {
      el.scrollTo({
        left: child.offsetLeft - el.clientWidth / 2 + child.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0F2E53] flex flex-col">
      <SiteHeader />

      <main className="flex-1 w-full overflow-hidden">
        {/* ========================================================= */}
        {/* SECTION 1: HERO HEADER                                    */}
        {/* ========================================================= */}
        <header className="py-5 lg:px-10 p-5 w-full">
          {/* Top Title & Subtitle */}
          <RevealAnimation
            direction="bottom"
            outerClass="flex flex-col lg:flex-row items-start justify-between lg:items-center py-4 gap-3 w-full"
          >
            <h1 className="font-inter font-normal text-[28px] md:text-[30px] lg:text-[48px] leading-[1.3] text-left text-[#0F2E53]">
              Experience Innovation in Action
            </h1>
            <p className="text-base sm:text-lg font-light text-gray-600">
              Experience the Power of Solutions in Action
            </p>
          </RevealAnimation>

          {/* Hero Banner Image Card */}
          <RevealAnimation
            direction="bottom"
            outerClass="w-full lg:h-[520px] h-[400px] relative overflow-hidden rounded-[32px] sm:rounded-4xl p-6 sm:p-10 flex items-end justify-start shadow-xl"
          >
            <Image
              src="/images/Experience-Center/new-images/4.jpg"
              alt="Al Ghwasa Experience Center Hero"
              fill
              priority
              sizes="100vw"
              className="w-full h-full absolute inset-0 object-center object-cover z-10 brightness-85"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 lg:h-44 h-60 bg-gradient-to-t from-[#143C66] to-transparent z-20 pointer-events-none" />

            {/* Overlay Text & Explore Button */}
            <div className="relative z-30 flex flex-col lg:flex-row justify-between items-start lg:items-center w-full lg:gap-10 gap-4">
              <p className="font-inter text-base sm:text-lg lg:text-xl text-white font-normal max-w-2xl leading-relaxed">
                Leading Gas Detection &amp; Safety Solutions Provider in the UAE, GCC &amp; Africa
              </p>
              <Link
                href="/categories"
                className="flex items-center gap-2 font-bold whitespace-nowrap bg-white py-2.5 px-4 rounded-full text-[#0F2E53] hover:bg-gray-100 transition-colors shadow-lg group cursor-pointer text-sm sm:text-base"
              >
                <span>Explore our Products</span>
                <span className="border border-[#0F2E53]/20 rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </RevealAnimation>
        </header>

        {/* ========================================================= */}
        {/* SECTION 2: OUR EXPERIENCE CENTER GALLERY / CAROUSEL       */}
        {/* ========================================================= */}
        <section className="lg:px-10 px-5 py-8 sm:py-12 w-full">
          <div className="flex justify-between mb-6 items-end">
            <h2 className="font-inter font-normal text-[28px] md:text-[30px] lg:text-[48px] leading-[1.3] text-[#0F2E53]">
              Our Experience Center
            </h2>
          </div>

          <div className="relative flex flex-col items-center w-full">
            {/* Main Showcase Image */}
            <div className="relative w-full h-[300px] sm:h-[450px] md:h-[580px] lg:h-[680px] overflow-hidden rounded-[24px] sm:rounded-[30px] shadow-lg bg-gray-100">
              <Image
                src={GALLERY_IMAGES[selectedIdx]}
                alt={`Al Ghwasa Experience Center ${selectedIdx + 1}`}
                fill
                priority={selectedIdx === 0}
                sizes="100vw"
                className="object-cover w-full h-full transition-all duration-500"
              />
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mt-6 w-full">
              <button
                onClick={() => {
                  setSelectedIdx((prev) => {
                    const next = prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1;
                    scrollThumbIntoView(next);
                    return next;
                  });
                }}
                className="p-1 hover:text-[#0F2E53] text-gray-500 transition-colors cursor-pointer"
                aria-label="Previous gallery image"
              >
                <ChevronLeft size={36} className="sm:w-10 sm:h-10" />
              </button>

              <div
                ref={scrollRef}
                className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth px-2 py-2 max-w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {GALLERY_IMAGES.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedIdx(i);
                      scrollThumbIntoView(i);
                    }}
                    className={`relative border-2 rounded-lg flex-shrink-0 p-0.5 cursor-pointer transition-all duration-300 overflow-hidden ${
                      i === selectedIdx
                        ? "border-blue-500 scale-105 shadow-md"
                        : "border-transparent opacity-75 hover:opacity-100"
                    }`}
                    aria-label={`View gallery image ${i + 1}`}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 relative rounded overflow-hidden">
                      <Image
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelectedIdx((prev) => {
                    const next = prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1;
                    scrollThumbIntoView(next);
                    return next;
                  });
                }}
                className="p-1 hover:text-[#0F2E53] text-gray-500 transition-colors cursor-pointer"
                aria-label="Next gallery image"
              >
                <ChevronRight size={36} className="sm:w-10 sm:h-10" />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: FEATURED ARTICLES                              */}
        {/* ========================================================= */}
        <section className="w-full px-5 lg:px-10 py-12 sm:py-16 bg-white">
          <div className="flex flex-col items-center text-center justify-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            <RevealAnimation backgroundClass="bg-white" direction="bottom">
              <h2 className="font-inter font-normal text-[28px] md:text-[30px] lg:text-[48px] leading-[1.3] text-[#0F2E53] mb-2 text-center mx-auto">
                Featured Articles
              </h2>
            </RevealAnimation>
            <RevealAnimation backgroundClass="bg-white" direction="bottom">
              <p className="font-inter font-normal text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mt-2 text-center mx-auto">
                Expert guides, product overviews, and safety insights on GASTEC gas detection tubes and
                systems — helping protect workers and maintain compliance across the GCC and
                international markets.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 font-inter w-full">
            {FEATURED_ARTICLES.map((article, i) => (
              <RevealAnimation
                key={article.slug || i}
                direction="bottom"
                backgroundClass="bg-white"
                outerClass="rounded-2xl h-full"
              >
                <div className="group flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full shadow-sm hover:shadow-md border border-gray-100">
                  <Link
                    href={`/blogs/${article.slug}`}
                    className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 block"
                  >
                    <Image
                      src={article.imgSrc}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  <div className="pt-4 p-5 flex flex-col flex-grow space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="inline-block px-2.5 py-1 bg-gray-100 text-[#0F2E53] font-medium rounded-md text-[11px] sm:text-xs">
                        {article.category}
                      </span>
                      <span className="text-gray-400 font-normal ml-auto text-[11px] sm:text-xs">
                        {article.date}
                      </span>
                    </div>

                    <Link href={`/blogs/${article.slug}`} className="block">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F2E53] group-hover:text-[#143c66] transition-colors duration-200 line-clamp-2 leading-snug font-heading">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed flex-grow font-inter font-normal">
                      {article.description}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/blogs">
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#0F2E53] hover:bg-[#0F2E53]/90 text-white font-medium text-sm transition-colors duration-200 cursor-pointer shadow-sm font-inter">
                <span>View All</span>
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: FREQUENTLY ASKED QUESTIONS                     */}
        {/* ========================================================= */}
        <section className="px-5 lg:px-10 py-12 sm:py-16 w-full space-y-8 bg-white">
          <RevealAnimation backgroundClass="bg-white" direction="bottom">
            <h2 className="font-inter font-normal text-[28px] md:text-[30px] lg:text-[48px] leading-[1.3] text-[#0F2E53] mb-4 text-center mx-auto">
              Frequently Asked Questions
            </h2>
          </RevealAnimation>

          <div className="space-y-4 w-full">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <RevealAnimation
                  key={i}
                  outerClass="overflow-hidden"
                  backgroundClass="bg-white"
                  direction="bottom"
                >
                  <div className="border border-[#0F2E53]/30 hover:border-[#0F2E53] rounded-2xl overflow-hidden transition-colors bg-white">
                    <button
                      className="w-full flex cursor-pointer justify-between text-left items-center py-5 px-5 sm:px-8 lg:px-10 bg-white text-black text-base sm:text-lg font-medium gap-4"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-[#0F2E53] font-medium">{faq.question}</span>
                      <span className="text-[#0F2E53] flex-shrink-0 transition-transform duration-300">
                        {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-8 lg:px-10 py-5 bg-gray-100 text-gray-800 text-sm sm:text-base leading-relaxed border-t border-gray-200">
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
      </main>

      <SiteFooter />
    </div>
  );
}
