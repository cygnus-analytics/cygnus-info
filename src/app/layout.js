import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import MegaNavbar from "@/components/layout/MegaNavbar";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.cygnussolutions.co.in";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Cygnus Information Solutions Pvt. Ltd.",
    template: "%s | Cygnus Information Solutions",
  },
  description:
    "Cygnus Information Solutions delivers enterprise IT infrastructure, cybersecurity, cloud, AI/ML, storage, and networking solutions across India. Trusted by ONGC, NSDL, Central Bank of India, and more.",
  keywords: [
    "IT infrastructure India",
    "cybersecurity solutions",
    "cloud solutions India",
    "HPC cluster",
    "data centre solutions",
    "enterprise networking",
    "AI ML solutions",
    "Cygnus Information Solutions",
    "IT company Mumbai",
    "storage solutions India",
  ],
  authors: [{ name: "Cygnus Information Solutions Pvt. Ltd.", url: BASE_URL }],
  creator: "Cygnus Information Solutions Pvt. Ltd.",
  publisher: "Cygnus Information Solutions Pvt. Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Cygnus Information Solutions",
    title: "Cygnus Information Solutions Pvt. Ltd.",
    description:
      "Enterprise IT infrastructure, cybersecurity, cloud, AI/ML, and networking solutions trusted by India's leading institutions.",
    images: [
      {
        url: "/cygnus.png",
        width: 1200,
        height: 630,
        alt: "Cygnus Information Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cygnus Information Solutions Pvt. Ltd.",
    description:
      "Enterprise IT infrastructure, cybersecurity, cloud, AI/ML, and networking solutions trusted by India's leading institutions.",
    images: ["/cygnus.png"],
  },
  icons: {
    icon: "/tabLogo.png",
    shortcut: "/tabLogo.png",
    apple: "/tabLogo.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cygnus Information Solutions Pvt. Ltd.",
  url: BASE_URL,
  logo: `${BASE_URL}/cygnus.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-22-0000-0000",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/company/cygnus-information-solutions"],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cygnus Information Solutions",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/casestudies?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={organizationSchema} />
        <JsonLd data={webSiteSchema} />
        <MegaNavbar/>
        <main className="pt-18">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}