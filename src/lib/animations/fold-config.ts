/**
 * Verified Foldfolio Reference Dimensions & Kinematics Configuration
 * Source: docs/foldfolio-device-design.md & docs/foldfolio-scroll-behavior.md
 * Adapted for AL GHWASA Brand Identity.
 */

export const FOLDFOLIO_CONFIG = {
  // Desktop Landscape Reference Geometry (Le.landscape)
  landscape: {
    W: 1000,          // Full opened width in px
    H: 684,           // Height in px
    halfW: 500,       // Width of one wing (500px)
    f: 4,             // Metallic chamfered outer frame rim (4px)
    bz: 8,            // Inner protective bezel (8px)
    T: 12,            // Total inset to screen: f + bz = 12px
    R: 46,            // Outer corner radius (46px)
    screenR: 34,      // Inner screen corner radius: R - T = 34px
    displayW: 976,    // Active display width: W - 2*T = 976px
    displayH: 660,    // Active display height: H - 2*T = 660px
    perspective: 2800,// Reference camera distance in px
    defaultScale: 0.70, // Default desktop scale factor (z ~ 0.70)
  },
  // Mobile Portrait Clamshell Reference Geometry (Le.portrait)
  portrait: {
    W: 380,           // Portrait width in px
    H: 740,           // Portrait full unfolded height in px
    halfH: 370,       // Clamshell wing height: H / 2 = 370px
    f: 4,             // Outer rim
    bz: 7,            // Inner bezel
    T: 10,            // Total inset: f + bz = 10px
    R: 42,            // Outer corner radius (42px)
    screenR: 32,      // Inner screen corner radius: R - T = 32px
    displayW: 360,    // Active display width: W - 2*T = 360px
    displayH: 720,    // Active display height: H - 2*T = 720px
    perspective: 2800,// 3D camera distance
    portraitBelow: 810,// Threshold below which portrait clamshell is activated (matches Framer nym7v5)
    aspectRatioThreshold: 0.85,
  },
  // Motion & Scroll Runway Parameters
  motion: {
    openLength: 1.15,   // Multiplier of viewport height for unfolding
    closeLength: 1.10,  // Multiplier of viewport height for closing
    holdLength: 0.40,   // Multiplier of viewport height for resting closed
    smoothing: 0.12,    // Exponential smoothing factor (EMA lerp)
    spring: {
      stiffness: 90,
      damping: 20,
      restDelta: 0.0005,
    },
  },
};
