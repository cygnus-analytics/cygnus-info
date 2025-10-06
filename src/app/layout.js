import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import MegaNavbar from "@/components/layout/MegaNavbar";
import NavbarDemo from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cygnus Information Solutions Pvt. Ltd.",
  description: "Welcome to Cygnus Information Solutions – World-class solutions for businesses.",
  icons: {
    icon: "/tabLogo.png",
    shortcut: "/tabLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MegaNavbar/>
        <main className="pt-18"> 
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}