import React from 'react'
import Home from "../components/pages/Home.jsx"

export const metadata = {
  title: "Cygnus Information Solutions Pvt. Ltd.",
  description:
    "Cygnus Information Solutions delivers enterprise IT infrastructure, cybersecurity, cloud, AI/ML, storage, and networking solutions across India. Trusted by ONGC, NSDL, Central Bank of India, and more.",
  alternates: { canonical: "https://www.cygnussolutions.co.in" },
  openGraph: {
    url: "https://www.cygnussolutions.co.in",
    title: "Cygnus Information Solutions Pvt. Ltd.",
    description:
      "Enterprise IT infrastructure, cybersecurity, cloud, AI/ML, and networking solutions trusted by India's leading institutions.",
  },
};

const page = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default page