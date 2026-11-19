import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Ghwasa® | Industrial Safety & Explosion Protection Solutions Across the Middle East",
  description:
    "Authorised distributor of world-leading industrial safety and protection technologies in Dubai, UAE since 1990. Foldable device experience inspired by Foldfolio.",
  keywords: [
    "Industrial safety equipment Dubai",
    "Explosion protection Middle East",
    "Static grounding systems",
    "Gas detection tubes Gastec",
    "Newson Gale Earth-Rite",
    "ATEX hazardous area equipment",
    "Marine safety equipment UAE",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col font-sans antialiased bg-white text-[#0F2E53] select-none">
        {children}
      </body>
    </html>
  );
}
