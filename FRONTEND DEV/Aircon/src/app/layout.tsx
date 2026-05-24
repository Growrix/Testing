import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoolBreeze AC — Air Conditioning Services",
  description:
    "Installation, servicing & repair for all AC brands. Homes & offices across Dhaka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
