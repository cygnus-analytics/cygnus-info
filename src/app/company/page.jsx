import React from 'react'
import Company from '../../components/pages/Company'

export const metadata = {
  title: "About Us – Our Team, Values & Culture",
  description:
    "Learn about Cygnus Information Solutions — our story, leadership team, values, community initiatives, and career opportunities across Mumbai, Pune, NCR, and Dehradun.",
  keywords: [
    "Cygnus Information Solutions team",
    "IT company India about us",
    "Cygnus careers",
    "enterprise IT company Mumbai",
  ],
  alternates: { canonical: "https://www.cygnussolutions.co.in/company" },
  openGraph: {
    url: "https://www.cygnussolutions.co.in/company",
    title: "About Us – Team, Values & Culture | Cygnus Information Solutions",
    description:
      "Meet the team behind Cygnus Information Solutions — our leadership, values, and culture driving enterprise IT innovation across India.",
  },
}

const page = () => {
  return (
    <div>
      <Company/>
    </div>
  )
}

export default page