import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import MegaNavbar from "@/components/layout/MegaNavbar";
import { getGlobal } from "@/data/loaders";

export const revalidate = 604800;

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
  description: "Welcome to Cygnus Information Solutions – Delivering world-class technology solutions that empower businesses to innovate, scale, and succeed in a rapidly evolving digital landscape.",
  icons: {
    icon: "/tabLogo.png",
    shortcut: "/tabLogo.png",
  },
};

export default async function RootLayout({ children }) {
  const globalData = await getGlobal();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MegaNavbar headerData={globalData?.data?.Header} />
        <main className="pt-18"> 
          {children}
        </main>
        <Footer footerData={globalData?.data?.Footer} />
      </body>
    </html>
  );
}