"use client";

import React from "react";
import { motion } from "motion/react";

interface RevealAnimationProps {
  children: React.ReactNode;
  backgroundClass?: string;
  outerClass?: string;
  direction?: "left" | "right" | "top" | "bottom";
  duration?: number;
  onAnimationComplete?: () => void;
}

export function RevealAnimation({
  children,
  backgroundClass = "bg-white",
  outerClass = "",
  direction = "right",
  duration = 1.2,
  onAnimationComplete,
}: RevealAnimationProps) {
  const getStyle = (dir: string) => {
    switch (dir) {
      case "left":
      default:
        return { width: "100%", left: 0, top: 0, bottom: 0 };
      case "right":
        return { width: "100%", right: 0, top: 0, bottom: 0 };
      case "top":
        return { height: "100%", top: 0, left: 0, right: 0 };
      case "bottom":
        return { height: "100%", bottom: 0, left: 0, right: 0 };
    }
  };

  const getWhileInView = (dir: string) => {
    switch (dir) {
      case "left":
      case "right":
      default:
        return { width: 0 };
      case "top":
      case "bottom":
        return { height: 0 };
    }
  };

  return (
    <div className={`relative overflow-hidden ${outerClass}`}>
      {children}
      <motion.div
        className={`absolute z-[90] ${backgroundClass}`}
        style={getStyle(direction)}
        initial={getStyle(direction)}
        whileInView={getWhileInView(direction)}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration, ease: "easeOut" }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}

export default RevealAnimation;
