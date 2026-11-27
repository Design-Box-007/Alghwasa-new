import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactSection } from "@/components/sections/ContactSection";
import { RevealAnimation } from "@/components/ui/RevealAnimation";

export const metadata: Metadata = {
  title: "Contact Us | Al Ghwasa Technical Equipment Trading LLC",
  description:
    "Get in touch with Al Ghwasa Technical Equipment Trading LLC in Dubai, UAE for industrial safety equipment, gas detection, static grounding, and quotation requests.",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#0F2E53] flex flex-col">
      {/* 1. GLOBAL NAVIGATION HEADER */}
      <SiteHeader />

      <main className="w-full flex-1">
        {/* 2. HERO SECTION */}
        <header className="relative w-full bg-white pt-4 pb-2 px-3 sm:px-6 lg:px-8 max-w-[1536px] mx-auto">
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] min-h-[420px] max-h-[640px] rounded-[24px] sm:rounded-[32px] overflow-hidden flex items-center justify-center shadow-lg border border-slate-200/80">
            <Image
              src="/images/Contact/contact-hero-bg.jpg"
              alt="Connect with Al Ghwasa"
              fill
              priority
              sizes="100vw"
              className="absolute inset-0 object-cover object-center brightness-75 scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 pointer-events-none" />

            <div className="relative z-20 text-white text-center px-4 md:px-8 space-y-2">
              <RevealAnimation direction="bottom" backgroundClass="bg-black/2">
                <p className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 drop-shadow-md">
                  Connect with
                </p>
              </RevealAnimation>

              <RevealAnimation direction="bottom" backgroundClass="bg-black/2">
                <h1 className="font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg tracking-tight">
                  Al Ghwasa
                </h1>
              </RevealAnimation>
            </div>
          </div>
        </header>

        {/* 3. PARALLAX GAS DETECTOR & MAIN CONTACT FORM */}
        <ContactSection id="contact-form" />

        {/* 4. FIND THE RIGHT GASTEC PRODUCT BANNER */}
        <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 w-full h-auto relative z-30">
              <div className="relative overflow-hidden flex-1">
                <RevealAnimation direction="right" backgroundClass="bg-white">
                  <Link
                    href="/brands/gastec"
                    className="group border-2 border-solid border-[#0277BD] space-y-4 px-6 sm:px-8 py-6 sm:py-8 rounded-2xl transition-all duration-300 block h-full bg-white text-[#0277BD] hover:bg-[#0277BD] hover:text-white shadow-sm hover:shadow-lg"
                  >
                    <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                      Find the right Gastec Product
                    </h5>
                    <div className="text-base sm:text-xl font-light flex justify-between items-center pt-2">
                      <span>Click here to know more</span>
                      <ArrowRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-2" />
                    </div>
                  </Link>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* 5. GOOGLE MAP INTERACTIVE EMBED */}
        <section className="w-full bg-white overflow-hidden border-t border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57779.153!2d55.2170!3d25.2451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f30!3m3!1m2!1s0x3e5f42d641e8903b%3A0xbd079c0a70835bbd!2sAl%20Ghwasa%20Technical%20Equipment%20Trading%20L.L.C!5e1!3m2!1sen!2sin!4v1747917263204!5m2!1sen!2sin"
            width="100%"
            height="637"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Al Ghwasa Technical Equipment Trading Location Map"
            className="w-full h-[450px] sm:h-[550px] lg:h-[637px] border-0"
          />
        </section>
      </main>

      {/* 6. GLOBAL WEBSITE FOOTER */}
      <SiteFooter />
    </div>
  );
}
