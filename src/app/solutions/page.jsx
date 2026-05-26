import Solutions from '@/components/pages/Solutions'
import React from 'react'

export const metadata = {
  title: "IT Solutions – Infrastructure, Cloud, Cybersecurity & AI/ML",
  description:
    "Explore Cygnus's end-to-end IT solutions: enterprise infrastructure, cybersecurity, cloud computing, AI/ML, networking, storage, print, and endpoint management across India.",
  keywords: [
    "IT infrastructure solutions India",
    "cybersecurity services",
    "cloud computing solutions",
    "AI ML solutions India",
    "enterprise networking",
    "data storage solutions",
    "HPC solutions",
    "print solutions",
  ],
  alternates: { canonical: "https://www.cygnussolutions.co.in/solutions" },
  openGraph: {
    url: "https://www.cygnussolutions.co.in/solutions",
    title: "IT Solutions – Infrastructure, Cloud, Cybersecurity & AI/ML | Cygnus",
    description:
      "End-to-end IT solutions from Cygnus: enterprise infrastructure, cybersecurity, cloud, AI/ML, networking, and storage.",
  },
}

const page = () => {
  return (
    <>
    <Solutions/>
    </>
  )
}

export default page
