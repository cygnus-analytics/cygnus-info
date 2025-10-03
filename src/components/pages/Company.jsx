"use client";
import Memories from "../sections/Company/Memories";
import Career from "../sections/Company/Career";
import Community from "../sections/Company/Community";
import Team from "../sections/Company/Team";
import Values from "../sections/Company/Values";
import Heads from "../sections/Company/Heads";
import Banner from "../sections/Company/Banner";
import TeamMembers from "../sections/Company/TeamMembers";
import { MarqueeDemo } from "../sections/Company/MarqueeDemo";

export default function Company() {
  return (
    <div>
      <Banner />
      <Team />
      <Community />
      <TeamMembers />

      <section className="py-20">
        <h2 className="text-center text-4xl font-bold mb-4">Life at Cygnus</h2>
        <p className="text-center text-gray-600">
          Empowering Growth, Celebrating Innovation, and Building a Culture of
          Excellence.
        </p>
        <Memories />
      </section>
      {/* <MarqueeDemo/> */}
      <Values />
      <Career />
      <Heads />
    </div>
  );
}
