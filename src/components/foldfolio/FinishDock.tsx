"use client";

import { DeviceFinishId, DEVICE_FINISHES } from "@/lib/config/design-tokens";

interface FinishDockProps {
  finish: DeviceFinishId;
  onFinishChange: (finish: DeviceFinishId) => void;
}

export function FinishDock({ finish, onFinishChange }: FinishDockProps) {
  const finishes: DeviceFinishId[] = ["titanium", "graphite", "coral", "sage"];

  return (
    <nav
      aria-label="Device finish selector"
      className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2 py-1 shadow-sm border border-[#0F2E53]/15 backdrop-blur-md select-none transition-all"
    >
      {finishes.map((f) => {
        const item = DEVICE_FINISHES[f];
        const isSelected = finish === f;

        return (
          <button
            key={f}
            type="button"
            aria-label={`${item.name} finish`}
            title={item.name}
            onClick={() => onFinishChange(f)}
            style={{
              background: item.swatchGradient,
            }}
            className={`relative h-4 w-4 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none ${
              isSelected
                ? "ring-[2px] ring-[#0F2E53] ring-offset-1 ring-offset-white scale-110 shadow-xs"
                : "opacity-80 hover:opacity-100"
            }`}
          />
        );
      })}
    </nav>
  );
}
