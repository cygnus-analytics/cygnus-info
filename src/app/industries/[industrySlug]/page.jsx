import IndustriesClient from "../../../components/pages/Industries";
import { getIndustriesPage } from "@/data/loaders";

import BankingBanner from "../../../../public/industrypics/Banking/banner.jpg";
import OilAndGasBanner from "../../../../public/industrypics/Oil/banner.jpg";
import EducationBanner from "../../../../public/industrypics/Education/classic-american-school-2025-02-11-21-11-14-utc-2.jpg";
import ManufacturingBanner from "../../../../public/industrypics/Manufacturing/industrial-worker-inspecting-and-check-up-machine-2025-03-14-13-22-31-utc.jpg";
import ConsumerSectorBanner from "../../../../public/industrypics/ConsumerSector/banner.jpg";
import SmallMediumBusinessBanner from "../../../../public/industrypics/Smb/banner.jpg";

const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const industries = [
  {
    name: "Banking & Finance",
    slug: createSlug("Banking & Finance"),
    description:
      "In the ever-evolving world of banking and finance, innovation and security are key drivers of success. We offer comprehensive solutions designed to meet the unique needs of financial institutions, empowering them to thrive in today’s competitive landscape.",
    banner: BankingBanner,
  },
  {
    name: "Oil & Gas",
    slug: createSlug("Oil and Gas"),
    description:
      "The oil and gas industry demands cutting-edge solutions to address its unique challenges, from optimizing operations to ensuring robust security. We deliver comprehensive IT infrastructure, cybersecurity, and cloud solutions designed to transform your business and drive operational excellence.",
    banner: OilAndGasBanner,
  },
  {
    name: "Education",
    slug: createSlug("Education"),
    description:
      "Empowering the education sector with innovative technology solutions, we help institutions create a future-ready learning environment.",
    banner: EducationBanner,
  },
  {
    name: "Manufacturing",
    slug: createSlug("Manufacturing"),
    description:
      "In the manufacturing sector, technology plays a pivotal role in driving operational efficiency, enhancing production quality, and ensuring business continuity.",
    banner: ManufacturingBanner,
  },
  {
    name: "Consumer Sector",
    slug: createSlug("Consumer Sector"),
    description:
      "The consumer sector thrives on agility, innovation, and the ability to adapt to evolving customer demands.",
    banner: ConsumerSectorBanner,
  },
  {
    name: "Small & Medium Business (SMB)",
    slug: createSlug("Small and Medium Business (SMB)"),
    description:
      "Small and medium businesses require cost-effective, scalable, and secure IT solutions to thrive in a competitive environment.",
    banner: SmallMediumBusinessBanner,
  },
];

export default async function Page({ params }) {
  const industriesData = await getIndustriesPage();
  const { industrySlug } = await params;
  const selected = industries.find((i) => i.slug === industrySlug) || industries[0];

  return (
    <>
      <IndustriesClient industries={industries} selected={selected} />
    </>
  );
}
