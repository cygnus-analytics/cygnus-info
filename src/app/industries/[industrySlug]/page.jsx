import IndustriesClient from "@/components/pages/IndustriesClient";

const BASE_URL = "https://www.cygnussolutions.co.in";

const industryMeta = {
  "banking-finance": {
    title: "Banking & Finance IT Solutions",
    description:
      "Comprehensive IT infrastructure, cybersecurity, and cloud solutions for banking and financial institutions. Cygnus helps financial organizations innovate securely and at scale.",
    keywords: ["banking IT solutions", "finance cybersecurity", "banking cloud India"],
  },
  "oil-and-gas": {
    title: "Oil & Gas IT Solutions",
    description:
      "Purpose-built IT infrastructure, HPC, and operational technology solutions for the oil and gas sector. Cygnus drives efficiency and safety for energy companies.",
    keywords: ["oil gas IT solutions", "HPC oil gas", "energy sector IT India"],
  },
  education: {
    title: "Education Technology Solutions",
    description:
      "Future-ready IT solutions for schools, colleges, and universities. Cygnus delivers networking, cloud, and digital transformation for the education sector.",
    keywords: ["education IT solutions India", "school IT infrastructure", "edtech solutions"],
  },
  manufacturing: {
    title: "Manufacturing IT Solutions",
    description:
      "IT infrastructure, networking, and operational technology for manufacturing enterprises. Cygnus enables smart factories and Industry 4.0 adoption.",
    keywords: ["manufacturing IT solutions", "Industry 4.0 India", "factory IT infrastructure"],
  },
  "consumer-sector": {
    title: "Consumer Sector IT Solutions",
    description:
      "Agile and scalable IT solutions for retail and consumer businesses. Cygnus helps consumer sector companies adapt to evolving market demands with robust technology.",
    keywords: ["retail IT solutions India", "consumer sector technology", "FMCG IT infrastructure"],
  },
  "small-and-medium-business-smb": {
    title: "SMB IT Solutions – Small & Medium Business",
    description:
      "Cost-effective, scalable IT solutions designed for small and medium businesses. Cygnus provides infrastructure, cloud, and security tailored to SMB budgets and growth plans.",
    keywords: ["SMB IT solutions India", "small business IT infrastructure", "medium business cloud"],
  },
};

export async function generateStaticParams() {
  return Object.keys(industryMeta).map((slug) => ({ industrySlug: slug }));
}

export async function generateMetadata({ params }) {
  const { industrySlug } = await params;
  const meta = industryMeta[industrySlug] ?? {
    title: "Industry Solutions",
    description:
      "Cygnus Information Solutions delivers tailored IT solutions across industries including banking, oil & gas, education, manufacturing, and SMB sectors.",
    keywords: [],
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${BASE_URL}/industries/${industrySlug}`,
    },
    openGraph: {
      url: `${BASE_URL}/industries/${industrySlug}`,
      title: `${meta.title} | Cygnus Information Solutions`,
      description: meta.description,
    },
  };
}

export default function IndustryPage() {
  return <IndustriesClient />;
}
