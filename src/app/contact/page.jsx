import Contact from '@/components/pages/Contact'
import React from 'react'
import { getContactPage } from "@/data/loaders.js";

export const revalidate = 604800;

export const metadata = {
  title: "Cygnus | Contact",
}

export default async function Page() {
  const contactData = await getContactPage();
  return (
    <div>
      <Contact contact={contactData?.data} />
    </div>
  )
}

