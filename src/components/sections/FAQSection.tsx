"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Who is Al Ghwasa?",
    answer:
      "Ghwasa Technical Equipment Trading LLC (Al Ghwasa) is a Dubai-based supplier of marine and industrial equipment, established in 1990. We supply specialised safety products and technical solutions from internationally recognised manufacturers.",
  },
  {
    question: "What types of industrial products does Al Ghwasa supply?",
    answer:
      "We supply a wide range of marine and industrial products, including gas detection equipment, static grounding systems, anti-static technologies, explosion protection systems, pressure testing equipment and hazardous-area electrical products.",
  },
  {
    question: "Which brands does Al Ghwasa represent?",
    answer:
      "We work with globally recognised manufacturers, including Newson Gale, Gastec, Fraser Anti-Static Techniques, IEP Technologies, Hydrorex and Shimada, offering specialised equipment for marine and industrial applications.",
  },
  {
    question: "Is Al Ghwasa an authorised distributor for these brands?",
    answer:
      "Al Ghwasa works with international manufacturers as an authorised dealer for its represented brands, providing customers access to genuine products and manufacturer-backed solutions. Authorisation is subject to the respective brand agreements.",
  },
  {
    question: "Which countries does Al Ghwasa serve?",
    answer:
      "Based in Dubai, UAE, we serve customers across the Middle East, including the United Arab Emirates, Saudi Arabia, Oman, Qatar, Kuwait and Bahrain, along with other international markets.",
  },
  {
    question: "Which industries do your products cater to?",
    answer:
      "Our products support various industries, including oil and gas, marine and offshore, petrochemical, chemical processing, pharmaceuticals, food manufacturing, power generation and general industrial manufacturing.",
  },
  {
    question: "How can I choose the right industrial safety equipment?",
    answer:
      "The right equipment depends on your application, operating environment, technical requirements and applicable safety standards. Our team can help you identify suitable products based on your specific industrial or marine requirements.",
  },
  {
    question: "Can I request product specifications and technical details?",
    answer:
      "Yes. You can explore individual product pages to find available technical specifications, features and applications. You can also contact our team for additional product information and documentation.",
  },
  {
    question: "How can I request a quotation for industrial equipment?",
    answer:
      "You can submit an enquiry through our website or contact our sales team directly. Share the product name, brand, required quantity and application details to help us prepare a suitable quotation.",
  },
  {
    question: "Does Al Ghwasa supply products for marine and offshore applications?",
    answer:
      "Yes. With a history dating back to 1990, Al Ghwasa supplies marine and industrial equipment for vessel operations, offshore facilities and shore-based industrial applications, supporting a range of equipment and safety requirements.",
  },
];

interface FAQSectionProps {
  id?: string;
  className?: string;
  onNavigate?: (sectionId: string) => void;
}

export function FAQSection({
  id = "internal-faq",
  className = "",
  onNavigate,
}: FAQSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@ghwasa.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id={id}
      className={`relative w-full bg-white py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 border-b border-[#0F2E53]/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">

          {/* ========================================================= */}
          {/* LEFT COLUMN: Title, Subtitle & Copy Email Pill           */}
          {/* Fixed / Sticky on large screens while right side scrolls   */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-20 self-start">
            <h2
              className="font-serif text-4xl sm:text-5xl font-normal text-[#121316] tracking-tight leading-[1.15]"
              style={{
                fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif",
              }}
            >
              Questions
            </h2>

            <p className="mt-4 text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed max-w-sm">
              Anything else? Send a note and we&apos;ll reply within a day.
            </p>

            {/* Copyable Email Pill Button */}
            <div className="mt-7 flex items-center">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 text-xs sm:text-[13px] font-medium text-slate-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-slate-300 transition-all cursor-pointer group"
                aria-label="Copy email address"
              >
                <span>info@ghwasa.com</span>
                <span className="flex items-center gap-1.5 text-slate-400 group-hover:text-slate-600 transition-colors pl-2 border-l border-slate-200">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 text-xs font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-xs">Copy</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 2-Column Grid of Minimal FAQ Cards         */}
          {/* Exactly matching reference image styling (#f7f7f5 cards)  */}
          {/* ========================================================= */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
              {FAQ_ITEMS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-[20px] bg-[#f7f7f5] p-6 sm:p-7 flex flex-col justify-start transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs"
                >
                  <h3
                    className="font-serif text-[17px] sm:text-[18px] text-[#121316] font-medium tracking-tight leading-snug"
                    style={{
                      fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p className="font-sans text-[13px] sm:text-[13.5px] text-slate-600 font-normal leading-relaxed mt-2.5">
                    {faq.answer}
                  </p>
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
export { FAQSection as FaqSection };
