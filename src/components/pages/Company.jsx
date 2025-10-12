"use client";
import Memories from "../sections/Company/Memories";
import Career from "../sections/Company/Career";
import Community from "../sections/Company/Community";
import Team from "../sections/Company/Team";
import Values from "../sections/Company/Values";
import Heads from "../sections/Company/Heads";
import Banner from "../sections/Company/Banner";
import TeamMembers from "../sections/Company/TeamMembers";

export default function Company({companyData}) {
   if(!companyData) return null;
  return (
    <div>
      <Banner data={companyData?.Banner} />
      <Team data={companyData?.Story} />
      <Community data={companyData?.Vision} />
      <TeamMembers data={companyData?.Heads} />
      <Memories data={companyData?.Life} />
      <Values data={companyData?.Values} />
      <Career data={companyData?.Career} />
      <Heads data={companyData?.Cta} />
    </div>
  );
}
