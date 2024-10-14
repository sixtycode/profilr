import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s I Vhicl",
    default: "Vhicl",
  },
  description: "Vehicle For Today",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-neutral-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
