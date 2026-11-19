"use client";

import { useState, useRef } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

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
      className={`relative w-full bg-white p-4 sm:p-6 lg:p-8 border-b border-[#0F2E53]/10 ${className}`}
    >
      {/* Outer Card Container matching the reference design */}
      <div className="relative w-full rounded-[26px] sm:rounded-[32px] border border-slate-200/90 bg-white p-4 sm:p-6 lg:p-7 shadow-[0_12px_40px_-18px_rgba(15,46,83,0.08)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* ========================================================= */}
          {/* LEFT COLUMN: Reference Typography, Checklist & Footer Bar */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {/* 001. Section Index Marker matching reference image */}
            {/* <div>
              <span className="text-xs sm:text-sm font-mono font-semibold text-slate-400 tracking-wider">
                001.
              </span>
            </div> */}

            {/* H1 Tag: Requested Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight text-[#0F2E53] leading-snug">
              Industrial Safety &amp; Explosion Protection Solutions Across the Middle East
            </h1>

            {/* P Tag: Requested Body Copy */}
            <p className="text-xs sm:text-[13px] lg:text-sm text-slate-600 leading-relaxed font-normal">
              We are an authorised distributor of world-leading industrial safety and protection
              technologies, delivering advanced solutions for static grounding, gas detection,
              anti-static control, explosion protection, pressure testing and hazardous-area
              electrical equipment. Serving industries across the UAE, Saudi Arabia, Qatar,
              Bahrain, Kuwait and Oman, we provide reliable products and technical solutions that
              help protect people, facilities and industrial operations.
            </p>

            {/* Checklist Items with Circular Outline Checkmarks matching reference */}
            {/* <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0F2E53] stroke-[2.2] shrink-0" />
                <span>ATEX &amp; IECEx Certified Systems</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0F2E53] stroke-[2.2] shrink-0" />
                <span>Static Grounding &amp; Gas Detection Technologies</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#0F2E53] stroke-[2.2] shrink-0" />
                <span>Dubai Testing, Calibration &amp; Technical Facility</span>
              </div>
            </div> */}

            {/* Bottom Footer Bar: Starting / Partner Info & Pill Action Button matching reference */}
            <div className="pt-2">
              <div className="rounded-2xl bg-slate-100/80 p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-slate-200/50">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                    Authorised GCC Distribution
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0F2E53]">
                    UAE · KSA · Qatar · Oman · Kuwait · Bahrain
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleActionClick("brands")}
                  className="inline-flex items-center gap-2.5 rounded-full bg-white pl-4 pr-1.5 py-1.5 text-xs sm:text-sm font-semibold text-[#0F2E53] shadow-sm border border-slate-200 hover:bg-slate-50 hover:shadow transition-all group shrink-0"
                >
                  <span>Explore Solutions</span>
                  <span className="w-7 h-7 rounded-full bg-[#0284c7] text-white flex items-center justify-center transition-transform group-hover:scale-105 group-hover:bg-[#0369a1] shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Industrial Video in Reference Media Card    */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex items-center justify-center h-full">
            <div className="relative w-full aspect-[4/3] min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] rounded-2xl sm:rounded-[24px] overflow-hidden bg-slate-950 border border-slate-200/80 shadow-md group">
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

              {/* Media Controls Overlay */}
              <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 opacity-90 transition-opacity group-hover:opacity-100">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-105 border border-white/20"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-white/90" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-[#0F2E53]/90 hover:bg-[#0F2E53] backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-105 border border-white/20 shadow-sm"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 fill-white text-white" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                  )}
                </button>
              </div>

              {/* Subtle Bottom Vignette */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
