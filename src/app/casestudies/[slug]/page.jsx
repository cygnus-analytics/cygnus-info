import CaseStudiesCard from "../../../components/sections/CaseStudies/CaseStudiesCard";
import { getCaseStudyPage } from "@/data/loaders";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const response = await getCaseStudyPage();
  const allStudies = response?.data || [];
  const currentStudy = allStudies.find((study) => study.slug === slug);

  if (!currentStudy) return { title: "Case Study Not Found" };

  return {
    title: `Cygnus | ${currentStudy.heading}`,
    description: currentStudy.challenge?.[0]?.children?.[0]?.text || "Explore our latest case study.",
  };
}
export async function generateStaticParams() {
  const response = await getCaseStudyPage();
  const studies = response?.data || [];

  return studies.map((study) => ({
    slug: study.slug,
  }));
}
export default async function Page({ params }) {
  const { slug } = await params;
  
  const response = await getCaseStudyPage();
  const allStudies = response?.data || [];

  const currentStudy = allStudies.find((study) => study.slug === slug);

  if (!currentStudy) {
    notFound();
  }

  return (
    <CaseStudiesCard 
      currentStudy={currentStudy} 
      allStudies={allStudies} 
    />
  );
}