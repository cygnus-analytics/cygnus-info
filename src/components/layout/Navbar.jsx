"use client";
import { useState } from "react";
import PropTypes from "prop-types";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../layout/NavbarMenu";
import { cn } from "../../lib/utils";
import { caseData } from "../../../public/assets";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center mt-20">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 mx-auto z-50 flex justify-between", className)}
    >
      <Menu setActive={setActive}>
        {/* Home */}
        <MenuItem setActive={setActive} active={active} item="Home" href="/">
          <div className="flex flex-col space-y-4 text-md">
            <HoveredLink href="/web-dev">Leaders</HoveredLink>
            <HoveredLink href="/interface-design">Values</HoveredLink>
            <HoveredLink href="/seo">Products and Solutions</HoveredLink>
            <HoveredLink href="/branding">Industries</HoveredLink>
          </div>
        </MenuItem>

        {/* Solutions */}
        <MenuItem item="Solutions" href="/solutions" />

        {/* Industries */}
        <MenuItem setActive={setActive} active={active} item="Industries" href="/industries">
        <div className="flex flex-col space-y-4 text-md">
            <HoveredLink href="/industries/banking-finance">Banking & Finance</HoveredLink>
            <HoveredLink href="/industries/oil-and-gas">Oil & Gas</HoveredLink>
            <HoveredLink href="/industries/education">Education</HoveredLink>
            <HoveredLink href="/industries/manufacturing">Manufacturing</HoveredLink>
            <HoveredLink href="/industries/consumer-sector">Consumer Sector</HoveredLink>
            <HoveredLink href="/industries/small-and-medium-business-smb">SMBs</HoveredLink>

          </div>
        </MenuItem>


        {/* Case Studies */}
        <MenuItem setActive={setActive} active={active} item="Case Studies" href="/casestudies">
        <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title={caseData[0].heading}
              href={`/casestudies/${caseData[0].slug}`}
              src={caseData[0].image}
              description="Prepare for tech interviews like never before." />
            <ProductItem
              title={caseData[1].heading}
              href={`/casestudies/${caseData[1].slug}`}
              src={caseData[1].image}
              description="Production ready Tailwind css components for your next project" />
            <ProductItem
              title={caseData[2].heading}
              href={`/casestudies/${caseData[2].slug}`}
              src={caseData[2].image}
              description="Never write from scratch again. Go from idea to blog in minutes." />
            <ProductItem
              title={caseData[3].heading}
              href={`/casestudies/${caseData[3].slug}`}
              src={caseData[3].image}
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" />
          </div>
        </MenuItem>

        {/* Company */}
        <MenuItem setActive={setActive} active={active} item="Company" href="/company">
          <div className="flex flex-col space-y-4 text-md">
            <HoveredLink href="/hobby">Our Story</HoveredLink>
            <HoveredLink href="/individual">The Team</HoveredLink>
            <HoveredLink href="/team">Values</HoveredLink>
            <HoveredLink href="/enterprise">Career</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarDemo;

Navbar.propTypes = {
  className: PropTypes.string,
};
