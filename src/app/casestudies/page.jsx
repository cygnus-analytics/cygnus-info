import CaseStudies from '@/components/pages/CaseStudies'
import React from 'react'

export const metadata = {
  title: "Case Studies – Real-World IT Success Stories",
  description:
    "Read how Cygnus Information Solutions transformed IT infrastructure for ONGC, Saregama, NSDL, Central Bank of India, Allahabad High Court, and more with measurable results.",
  keywords: [
    "IT case studies India",
    "ONGC HPC cluster",
    "data centre case study",
    "digital documentation India",
    "enterprise storage upgrade",
    "Cygnus case studies",
  ],
  alternates: { canonical: "https://www.cygnussolutions.co.in/casestudies" },
  openGraph: {
    url: "https://www.cygnussolutions.co.in/casestudies",
    title: "Case Studies – Real-World IT Success Stories | Cygnus",
    description:
      "Discover how Cygnus delivered measurable IT results for ONGC, NSDL, Central Bank of India, Allahabad High Court, and other leading institutions.",
  },
}

const Page = () => {
  return (
    <div>
      <CaseStudies />
    </div>
  )
}

export default Page
