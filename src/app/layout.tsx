import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

const plus = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  fallback: ["Courier", "monospace"],
});

export const metadata: Metadata = {
  title: {
    template: "%s I Vhicl",
    default: "Vhicl",
  },
  description: "Vehicle For Today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plus.variable} ${roboto_mono.variable}`}>
      <body className="bg-white dark:bg-neutral-800">{children}</body>
    </html>
  );
}
