import CaseStudies from '@/components/pages/CaseStudies'
import React from 'react'
import { getCaseStudyPage } from '@/data/loaders'

export const metadata = {
  title: "Cygnus | Case Studies",
}

export const dynamic = 'force-static';
export const revalidate = 604800;

export default async function Page() {
  const caseStudyData = await getCaseStudyPage();

  return (
    <main>
      <CaseStudies caseStudyData={caseStudyData} />
    </main>
  )
}