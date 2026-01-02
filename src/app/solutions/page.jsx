import Solutions from '@/components/pages/Solutions'
import React from 'react'
import { getSolutionsPage } from "@/data/loaders.js"

export const revalidate = 604800;

export const metadata = {
  title: "Cygnus | Solutions",
}

export default async function Page() {
  const solutionsPageData = await getSolutionsPage();

  return (
    <>
    <Solutions solutionsData={solutionsPageData?.data}/>
    </>
  )
}
