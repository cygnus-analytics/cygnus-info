import Contact from '@/components/pages/Contact'
import React from 'react'

export const metadata = {
  title: "Contact Us – Get in Touch with Cygnus",
  description:
    "Contact Cygnus Information Solutions for IT infrastructure, cloud, cybersecurity, and AI/ML solutions. Offices in Mumbai, Pune, NCR, and Dehradun. Reach us by phone, email, or visit us.",
  keywords: [
    "contact Cygnus Information Solutions",
    "IT company contact Mumbai",
    "enterprise IT support India",
    "Cygnus office locations",
  ],
  alternates: { canonical: "https://www.cygnussolutions.co.in/contact" },
  openGraph: {
    url: "https://www.cygnussolutions.co.in/contact",
    title: "Contact Us | Cygnus Information Solutions",
    description:
      "Get in touch with Cygnus Information Solutions. Offices in Mumbai, Pune, NCR, and Dehradun. We'd love to discuss your enterprise IT needs.",
  },
}

const page = () => {
  return (
    <div>
      <Contact/>
    </div>
  )
}

export default page