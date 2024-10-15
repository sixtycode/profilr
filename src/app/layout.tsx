import NavbarDesktop from "./components/navbar/NavbarDesktop";
import NavbarMobile from "./components/navbar/NavbarMobile";
import Footer from "./components/Footer";
import { Metadata } from "next";
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
        <NavbarDesktop />
        <NavbarMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
