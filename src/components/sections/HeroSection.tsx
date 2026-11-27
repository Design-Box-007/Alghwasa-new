"use client";

import { useState, useRef } from "react";
import {
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import { RevealAnimation } from "@/components/ui/RevealAnimation";

interface HeroSectionProps {
  onNavigate?: (sectionId: string) => void;
  id?: string;
  className?: string;
}

export function HeroSection({
  onNavigate,
  id = "internal-home",
  className = "",
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleActionClick = (target: string) => {
    if (onNavigate) {
      onNavigate(target);
    } else {
      const el = document.getElementById(`internal-${target}`) || document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id={id}
      className={`relative w-full bg-white pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8 px-3 sm:px-6 lg:px-8 ${className}`}
    >
      {/* Outer Card Container: Deep blue background, enlarged height to eliminate blank space */}
      <div className="relative w-full rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#0F2E53] via-[#0C2747] to-[#081B33] p-5 sm:p-8 lg:p-10 xl:p-12 border border-[#164377]/60 overflow-hidden text-white">

        {/* Ambient background glows for visual depth and premium feel */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#0284c7]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#164377]/30 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* ========================================================= */}
          {/* LEFT COLUMN: The Only H1 Tag, Copy & Reduced Button Size  */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
            <RevealAnimation backgroundClass="bg-[#0F2E53]" direction="bottom">
              {/* The ONLY H1 Tag on the entire page */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] xl:text-[2.65rem] font-bold tracking-tight text-white leading-[1.18]">
                Industrial Safety &amp; Explosion Protection Solutions Across the Middle East
              </h1>

              {/* P Tag: Lead description */}
              <p className="text-xs sm:text-sm lg:text-[15px] text-blue-100/90 leading-relaxed font-normal mt-3">
                We are an authorised distributor of world-leading industrial safety and protection
                technologies, delivering advanced solutions for static grounding, gas detection,
                anti-static control, explosion protection, pressure testing and hazardous-area
                electrical equipment. Serving industries across the UAE, Saudi Arabia, Qatar,
                Bahrain, Kuwait and Oman, we provide reliable products and technical solutions that
                help protect people, facilities and industrial operations.
              </p>
            </RevealAnimation>

            {/* Bottom Info Bar & Button fitted directly to text size */}
            <div className="pt-1">
              <RevealAnimation backgroundClass="bg-[#0F2E53]" direction="bottom">
                <div className="rounded-2xl bg-white/[0.08] backdrop-blur-md p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-white/10">
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-[11px] text-blue-200 font-medium uppercase tracking-wider">
                      Authorised GCC Distribution
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      UAE · KSA · Qatar · Oman · Kuwait · Bahrain
                    </span>
                  </div>

                  {/* Reduced button size fitted closely to text size */}
                  <button
                    type="button"
                    onClick={() => handleActionClick("brands")}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#0F2E53] hover:bg-blue-50 transition-all group shrink-0 shadow-sm cursor-pointer"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0F2E53] transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Big Square Industrial Video                 */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            <RevealAnimation direction="right" outerClass="w-full max-w-[440px] sm:max-w-[500px] lg:max-w-none rounded-2xl sm:rounded-3xl shadow-2xl">
              <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-white/15 group">
                {/* Industrial Video */}
                <video
                  ref={videoRef}
                  src="https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/industrial%20final.mp4?updatedAt=1793970483221"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover object-center"
                />

                {/* Status Badge in Corner */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-[#0F2E53]/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-white border border-white/20 shadow-xs pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Al Ghwasa Safety in Action</span>
                </div>

                {/* Media Controls Overlay (Fitted to Icon Size) */}
                <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 opacity-90 transition-opacity group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-105 border border-white/20 cursor-pointer"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-3.5 h-3.5 text-white/90" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5 text-white" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-7 h-7 rounded-full bg-[#0F2E53]/90 hover:bg-[#0F2E53] backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-105 border border-white/20 shadow-sm cursor-pointer"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-3 h-3 fill-white text-white" />
                    ) : (
                      <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                    )}
                  </button>
                </div>

                {/* Subtle Bottom Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
}
