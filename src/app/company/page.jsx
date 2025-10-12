import React from 'react'
import Company from '../../components/pages/Company'
import { getCompanyPage } from '@/data/loaders'

export const revalidate = 600;

export const metadata = { title: "Cygnus | Company" }

export default async function Page() {
  const companyPageData = await getCompanyPage();

  return (
    <div>
      <Company companyData={companyPageData?.data} />
    </div>
  )
}
