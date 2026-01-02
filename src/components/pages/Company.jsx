"use client";
import Memories from "../sections/Company/Memories";
import Career from "../sections/Company/Career";
import Community from "../sections/Company/Community";
import Story from "../sections/Company/Team";
import Heads from "../sections/Company/Heads";
import Banner from "../sections/Company/Banner";
import TeamMembers from "../sections/Company/TeamMembers";
import MissionVission from "../sections/Company/MissionVission";
import OurStory from "../sections/Company/OurStory";
import CTASection from "../layout/CTASection";

export default function Company({ companyData }) {
  if (!companyData) return null;
  return (
    <div>
      <Banner data={companyData?.Banner} />
      <OurStory data={companyData?.Story} />
      {/* <Story data={companyData?.Story} /> */}
      <MissionVission />
      <TeamMembers data={companyData?.Heads} />
      <Community data={companyData?.Vision} />
      <Career data={companyData?.Career} />
      <Memories data={companyData?.Life} />
      {/* <Heads data={companyData?.Cta} /> */}
      <CTASection
        heading={companyData?.Cta?.title}
        description="Ready to join us on a journey where innovation meets impact?"
        buttonText={companyData?.Cta?.ctaText}
        href={companyData?.Cta?.ctaLink}
        bgImage="/bgimages/liquid-cheese.svg"
        maxWidth="max-w-6xl"
      />
    </div>
  );
}
