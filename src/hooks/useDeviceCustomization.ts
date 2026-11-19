"use client";

import { useState } from "react";
import {
  BackdropId,
  DeviceFinishId,
  DEVICE_FINISHES,
  BACKDROP_OPTIONS,
} from "@/lib/config/design-tokens";

const FINISH_KEY = "ghwasa_device_finish";
const BACKDROP_KEY = "ghwasa_device_backdrop";

function getInitialFinish(): DeviceFinishId {
  if (typeof window === "undefined") return "titanium";
  try {
    const stored = localStorage.getItem(FINISH_KEY) as DeviceFinishId;
    if (stored && DEVICE_FINISHES[stored]) return stored;
  } catch {}
  return "titanium";
}

function getInitialBackdrop(): BackdropId {
  if (typeof window === "undefined") return "basic";
  try {
    const stored = localStorage.getItem(BACKDROP_KEY) as BackdropId;
    if (stored && BACKDROP_OPTIONS[stored]) return stored;
  } catch {}
  return "basic";
}

export function useDeviceCustomization() {
  const [finish, setFinish] = useState<DeviceFinishId>(getInitialFinish);
  const [backdrop, setBackdrop] = useState<BackdropId>(getInitialBackdrop);

  const changeFinish = (newFinish: DeviceFinishId) => {
    setFinish(newFinish);
    try {
      localStorage.setItem(FINISH_KEY, newFinish);
    } catch {}
  };

  const changeBackdrop = (newBackdrop: BackdropId) => {
    setBackdrop(newBackdrop);
    try {
      localStorage.setItem(BACKDROP_KEY, newBackdrop);
    } catch {}
  };

  return {
    finish,
    backdrop,
    currentFinish: DEVICE_FINISHES[finish],
    currentBackdrop: BACKDROP_OPTIONS[backdrop],
    changeFinish,
    changeBackdrop,
  };
}
