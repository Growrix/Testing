/* eslint-disable @next/next/no-css-tags */

import type { Metadata } from "next";
import { Manrope, Oxanium } from "next/font/google";
import { LegacyRuntime } from "@/components/legacy/legacy-runtime";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const oxanium = Oxanium({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Velocare Auto Studio",
  description: "Premium detailing, paint protection, and auto care frontend experience.",
  icons: {
    icon: "/images/icon-velocare.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <base href="/" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" id="bootstrap" />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/swiper.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/colors/scheme-1.css" id="colors" />
        <link rel="stylesheet" href="/css/custom-swiper-1.css" />
        <link rel="stylesheet" href="/css/datepicker.css" />
      </head>
      <body className={`${manrope.variable} ${oxanium.variable} dark-scheme`}>
        {children}
        <LegacyRuntime />
      </body>
    </html>
  );
}
