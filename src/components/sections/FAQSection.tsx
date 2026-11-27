"use client";

import { RevealAnimation } from "@/components/ui/RevealAnimation";

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
  return (
    <section
      id={id}
      className={`relative w-full bg-white py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-12 border-b border-[#0F2E53]/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">

          {/* ========================================================= */}
          {/* LEFT COLUMN: Title & Subtitle                             */}
          {/* Fixed / Sticky on large screens while right side scrolls   */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 lg:sticky lg:top-20 self-start">
            <RevealAnimation backgroundClass="bg-white" direction="bottom">
              <h2
                className="font-serif text-4xl sm:text-5xl font-normal text-[#0F2E53] tracking-tight leading-[1.15]"
                style={{
                  fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif",
                }}
              >
                Questions
              </h2>

              <p className="mt-4 text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed max-w-sm">
                Frequently asked questions about our equipment, certifications, and technical support.
              </p>
            </RevealAnimation>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 2-Column Grid of Blue FAQ Tile Cards        */}
          {/* Blue background with pure white typography                 */}
          {/* ========================================================= */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
              {FAQ_ITEMS.map((faq, index) => (
                <RevealAnimation key={index} backgroundClass="bg-white" direction="bottom">
                  <div
                    className="h-full rounded-[20px] bg-[#0F2E53] border border-[#164377]/60 p-6 sm:p-7 flex flex-col justify-start transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-cyan-400/50 shadow-sm"
                  >
                    <h3
                      className="font-serif text-[17px] sm:text-[18px] text-white font-medium tracking-tight leading-snug"
                      style={{
                        fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif",
                      }}
                    >
                      {faq.question}
                    </h3>
                    <p className="font-sans text-[13px] sm:text-[13.5px] text-white/90 font-normal leading-relaxed mt-2.5">
                      {faq.answer}
                    </p>
                  </div>
                </RevealAnimation>
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
