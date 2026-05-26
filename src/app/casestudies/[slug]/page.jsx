import { notFound } from "next/navigation";
import { caseData } from "../../../../public/assets";
import CaseStudiesCard from "@/components/pages/CaseStudiesCard";
import JsonLd from "@/components/JsonLd";

export async function generateStaticParams() {
  return caseData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const card = caseData.find((item) => item.slug === slug);

  if (!card) {
    return { title: "Case Study Not Found" };
  }

  const description = card.challenge?.slice(0, 155) ?? card.heading;

  return {
    title: card.heading,
    description,
    alternates: {
      canonical: `https://www.cygnussolutions.co.in/casestudies/${card.slug}`,
    },
    openGraph: {
      url: `https://www.cygnussolutions.co.in/casestudies/${card.slug}`,
      title: `${card.heading} | Cygnus Information Solutions`,
      description,
      images: card.image
        ? [{ url: card.image, alt: card.heading }]
        : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const card = caseData.find((item) => item.slug === slug);

  if (!card) notFound();

  const others = caseData.filter((item) => item.slug !== slug);
  const startIndex = card.id % others.length;
  const relatedCaseStudies = [
    others[startIndex % others.length],
    others[(startIndex + 1) % others.length],
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cygnussolutions.co.in" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.cygnussolutions.co.in/casestudies" },
      { "@type": "ListItem", position: 3, name: card.heading, item: `https://www.cygnussolutions.co.in/casestudies/${card.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: card.heading,
    description: card.challenge?.slice(0, 155),
    image: card.image ? `https://www.cygnussolutions.co.in${card.image}` : undefined,
    author: { "@type": "Organization", name: "Cygnus Information Solutions Pvt. Ltd." },
    publisher: {
      "@type": "Organization",
      name: "Cygnus Information Solutions Pvt. Ltd.",
      logo: { "@type": "ImageObject", url: "https://www.cygnussolutions.co.in/cygnus.png" },
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <CaseStudiesCard card={card} relatedCaseStudies={relatedCaseStudies} />
    </>
  );
}
