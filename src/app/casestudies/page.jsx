import CaseStudies from '@/components/pages/CaseStudies'
import React from 'react'
import { getCaseStudyPage } from '@/data/loaders'

export const metadata = {
  title: "Cygnus | Case Studies",
}

export default async function Page() {
  const caseStudyData = await getCaseStudyPage();

  return (
    <div>
      <CaseStudies caseStudyData={caseStudyData} />
    </div>
  )
}