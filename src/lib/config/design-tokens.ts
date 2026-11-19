/**
 * Centralized Design Tokens & Device Customization Configurations
 * Verified against docs/foldfolio-reference-styles.md & adapted for AL GHWASA.
 */

export type DeviceFinishId = "titanium" | "graphite" | "coral" | "sage";
export type BackdropId = "basic" | "glow" | "orbit";

export interface DeviceFinish {
  id: DeviceFinishId;
  name: string;
  swatchGradient: string;
  frameGradient: string;
  boxShadow: string;
  accentColor: string;
  dotColor: string;
}

export interface BackdropOption {
  id: BackdropId;
  name: string;
  description: string;
}

export const DEVICE_FINISHES: Record<DeviceFinishId, DeviceFinish> = {
  titanium: {
    id: "titanium",
    name: "Titanium",
    swatchGradient: "linear-gradient(135deg, #F7F5F1, #A6A29B)",
    frameGradient: "linear-gradient(145deg, #F7F5F1 0%, #DCD9D3 30%, #A6A29B 55%, #DCD9D3 75%, #6F6B65 100%)",
    boxShadow: "inset 0 1px 1px rgba(255,255,255,.82), inset 0 -1px 1px rgba(0,0,0,.3), inset 0 0 0 1px rgba(255,255,255,.25)",
    accentColor: "#0F2E53",
    dotColor: "#DCD9D3",
  },
  graphite: {
    id: "graphite",
    name: "Graphite",
    swatchGradient: "linear-gradient(135deg, #3A3A3D, #0E0E10)",
    frameGradient: "linear-gradient(145deg, #3A3A3D 0%, #1B1B1D 30%, #6A6A6E 55%, #1B1B1D 75%, #0E0E10 100%)",
    boxShadow: "inset 0 1px 1px rgba(255,255,255,.35), inset 0 -1px 1px rgba(0,0,0,.8), inset 0 0 0 1px rgba(255,255,255,.15)",
    accentColor: "#0F2E53",
    dotColor: "#3A3A3D",
  },
  coral: {
    id: "coral",
    name: "Coral",
    swatchGradient: "linear-gradient(135deg, #F9CDBE, #C4664F)",
    frameGradient: "linear-gradient(145deg, #F9CDBE 0%, #EAA28E 30%, #C4664F 55%, #A64732 75%, #7C3020 100%)",
    boxShadow: "inset 0 1px 1px rgba(255,255,255,.6), inset 0 -1px 1px rgba(0,0,0,.4), inset 0 0 0 1px rgba(255,255,255,.2)",
    accentColor: "#C4664F",
    dotColor: "#EFA38C",
  },
  sage: {
    id: "sage",
    name: "Sage",
    swatchGradient: "linear-gradient(135deg, #E0E6D8, #76816B)",
    frameGradient: "linear-gradient(145deg, #E0E6D8 0%, #B8C2AC 30%, #76816B 55%, #58634E 75%, #3B4334 100%)",
    boxShadow: "inset 0 1px 1px rgba(255,255,255,.6), inset 0 -1px 1px rgba(0,0,0,.35), inset 0 0 0 1px rgba(255,255,255,.2)",
    accentColor: "#76816B",
    dotColor: "#C3CBB7",
  },
};

export const BACKDROP_OPTIONS: Record<BackdropId, BackdropOption> = {
  basic: {
    id: "basic",
    name: "Basic",
    description: "Pure studio white backdrop with AL GHWASA identity",
  },
  glow: {
    id: "glow",
    name: "Glow",
    description: "Atmospheric ambient navy blue glow behind the device",
  },
  orbit: {
    id: "orbit",
    name: "Orbit",
    description: "Geometric orbital rings rotating around the chassis",
  },
};

export const DEVICE_DIMENSIONS = {
  landscape: {
    width: 1000,
    halfWidth: 500,
    height: 684,
    screenWidth: 976,
    screenHeight: 660,
    outerRadius: 46,
    bezelThickness: 8,
    frameRim: 4,
    totalInset: 12,
    screenRadius: 34,
  },
  portrait: {
    width: 380,
    halfHeight: 370,
    height: 740,
    screenWidth: 360,
    screenHeight: 720,
    outerRadius: 42,
    bezelThickness: 7,
    frameRim: 4,
    totalInset: 10,
    screenRadius: 32,
  },
};
