import IndustriesClient from "../../../components/pages/Industries";
import { getIndustriesPage } from "@/data/loaders";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { industrySlug } = await params;
  const industriesDatas = await getIndustriesPage();
  const selected = industriesDatas?.data?.find((i) => i.slug === industrySlug);

  if (!selected) return { title: "Industries | Cygnus" };

  return {
    title: `Cygnus | ${selected.heading}`,
    description: selected.description?.slice(0, 160),
  };
}

export async function generateStaticParams() {
  const apiResponse = await getIndustriesPage();
  const industries = apiResponse?.data;

  return industries?.map((industry) => ({
    industrySlug: industry?.slug,
  }));
}

export default async function Page({ params }) {
  const industriesDatas = await getIndustriesPage();
  const industriesData = industriesDatas?.data;

  const { industrySlug } = await params;

  const selected = industriesData.find((i) => i.slug === industrySlug) || industriesData[0];

  if (!selected) {
    notFound(); 
  }

  return (
    <>
      <IndustriesClient industries={industriesData} selected={selected} />
    </>
  );
}
