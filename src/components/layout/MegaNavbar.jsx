"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import cygnusLogo from "../../../public/logo/cygnus.png";

const formatMenuTitle = (key) => {
  return key
    .replace(/([A-Z])/g, " $1") 
    .replace(/^./, (str) => str.toUpperCase());
};

const menuColumns = {
  solutions: 2,
  industries: 2,
  caseStudies: 2,
};

const menuRoutes = {
  solutions: "/solutions",
  industries: "/industries",
  caseStudies: "/casestudies",
};

const dropdownData = {
  solutions: [
    {
      title: "Infrastructure",
      description:
        "Robust systems designed to support enterprise operations efficiently.",
      href: "/solutions/infrastructure",
    },
    {
      title: "Cyber Security",
      description: "Protect your data with advanced threat detection systems.",
      href: "/solutions/cyber-security",
    },
    {
      title: "Storage",
      description:
        "Reliable solutions for storing and managing critical information.",
      href: "/solutions/storage",
    },
    {
      title: "Network",
      description:
        "High-performance networks ensuring seamless connectivity across systems.",
      href: "/solutions/network",
    },
    {
      title: "End Point Solutions",
      description: "Secure and manage all devices connected to your network.",
      href: "/solutions/end-point-solutions",
    },
    {
      title: "Print Solutions",
      description:
        "Efficient printing and document management for business operations.",
      href: "/solutions/print-solutions",
    },
    {
      title: "HPC",
      description:
        "High-performance computing for complex simulations and processing.",
      href: "/solutions/hpc",
    },
    {
      title: "Cloud Solutions",
      description:
        "Flexible cloud services to scale your infrastructure on demand.",
      href: "/solutions/cloud-solutions",
    },
    {
      title: "AI/ML",
      description:
        "Leverage artificial intelligence for smarter business decisions.",
      href: "/solutions/ai-ml",
    },
  ],
  industries: [
    {
      title: "Banking & Finance",
      description:
        "Innovative solutions designed for banks and financial institutions.",
      href: "/industries/banking-finance",
    },
    {
      title: "Oil & Gas",
      description:
        "Advanced technologies improving efficiency in energy and oil sectors.",
      href: "/industries/oil-and-gas",
    },
    {
      title: "Education",
      description:
        "Empowering schools and universities with modern digital tools.",
      href: "/industries/education",
    },
    {
      title: "Manufacturing",
      description:
        "Optimizing production processes with smart industrial technologies.",
      href: "/industries/manufacturing",
    },
    {
      title: "Consumer Sector",
      description:
        "Enhancing customer experiences and driving brand loyalty effectively.",
      href: "/industries/consumer-sector",
    },
    {
      title: "SMBs",
      description:
        "Scalable and affordable solutions tailored for small businesses.",
      href: "/industries/small-and-medium-business-smb",
    },
  ],
  caseStudies: [
    {
      title: "ONGC – High Performance Computing Cluster Solution",
      description: "Built scalable HPC cluster for ONGC to process workloads efficiently.",
      href: "/casestudies/ongc-high-performance-computing-cluster-hpcc-solution",
    },
    {
      title: "Saregama – Data Centre Optimization",
      description: "Optimized Saregama’s data centre for improved performance and reliability.",
      href: "/casestudies/saregama-data-centre-optimization-2022",
    },
    {
      title: "Oil Vessel – Small Data Centre",
      description: "Implemented compact high-availability data centre for vessel operations efficiently.",
      href: "/casestudies/oil-vessel-installation-implementation-of-small-data-centre-2022",
    },
    {
      title: "NSDL – Storage Upgradation",
      description: "Upgraded NSDL’s storage systems ensuring faster, secure, and reliable access.",
      href: "/casestudies/nsdl-storage-up-gradation-2019-2022",
    },
    {
      title: "ONGC – Data Centre Relocation",
      description: "Relocated ONGC’s data centre seamlessly with zero downtime ensured.",
      href: "/casestudies/ongc-data-centre-relocation-2020-2021",
    },    
    {
      title: "Central Bank of India",
      description: "Enhanced Central Bank’s IT infrastructure improving speed and customer services.",
      href: "/casestudies/central-bank-of-india-digital-documentation-2016-17",
    },
    {
      title: "Allahabad High Court – Digital Documentation",
      description: "Digitized High Court’s records ensuring accessibility, security, and storage efficiency.",
      href: "/casestudies/allahabad-high-court-digital-documentation-2015",
    },
    {
      title: "Food Food TV Channel – IT Infrastructure",
      description: "Delivered IT infrastructure ensuring smooth broadcasting and efficient channel operations.",
      href: "/casestudies/food-tv-channel-of-sanjeev-kapoor-complete-it-infrastructure-support-2013-14",
    },
    {
      title: "Bank of Maharashtra – Audit Automation",
      description: "Automated audit process improving compliance, accuracy, and transparency effectively.",
      href: "/casestudies/bank-of-maharashtra-audit-automation-ie-manual-audit-to-online-audit",
    },
  ],
  
};

const DropdownItem = ({ title, description, href }) => (
  <li>
    <a href={href} className="block p-3 rounded-lg hover:bg-gray-100">
      <h4 className="font-semibold text-blue-800">{title}</h4>
      <span className="text-sm text-gray-800">{description}</span>
    </a>
  </li>
);

const MegaNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const renderDropdown = (menuKey, columns = 2) => (
    <div className="absolute top-full left-1/2 -translate-x-1/2 z-40 bg-white border-y border-gray-200 shadow-sm w-[40rem] p-4 rounded-xl">
      <div className={`grid grid-cols-${columns} gap-4`}>
        {Array.from({ length: columns }).map((_, colIndex) => (
          <ul key={colIndex} className="space-y-1">
            {dropdownData[menuKey]
              .slice(
                colIndex * Math.ceil(dropdownData[menuKey].length / columns),
                (colIndex + 1) *
                  Math.ceil(dropdownData[menuKey].length / columns)
              )
              .map((item, index) => (
                <DropdownItem key={index} {...item} />
              ))}
          </ul>
        ))}
      </div>
    </div>
  );

  return (
    <nav
      className="bg-white border-gray-200 fixed top-0 left-0 right-0 z-50"
      ref={menuRef}
    >
      <div className="flex items-center justify-between mx-auto py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <Image
            src={cygnusLogo}
            alt="Cygnus Logo"
            width={100}
            height={50}
            className="h-10 w-auto cursor-pointer"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center font-medium w-auto">
          <ul className="flex flex-row space-x-5">
            <li>
              <a
                href="/"
                className="block py-2 px-2 text-gray-900 rounded-md hover:text-blue-800 transition-colors"
              >
                Home
              </a>
            </li>

            {["solutions", "industries", "caseStudies"].map((menu) => (
              <li
                key={menu}
                className="relative"
                onMouseEnter={() => setActiveMenu(menu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href={menuRoutes[menu]}
                  className={`flex items-center w-full py-2 px-3 text-gray-900 rounded-md hover:text-blue-800 transition-colors ${
                    activeMenu === menu ? "text-blue-600" : ""
                  }`}
                >
                  {formatMenuTitle(menu)}
                </a>
                {activeMenu === menu && renderDropdown(menu, menuColumns[menu])}
              </li>
            ))}

            <li>
              <a
                href="/company"
                className="block py-2 px-3 text-gray-900 rounded-md hover:text-blue-800 transition-colors"
              >
                Company
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <a
            href="/contact"
            className="hidden lg:block text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
            >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col p-4 space-y-2 font-medium bg-gray-50 border-t border-gray-200">
          <li>
            <a
              href="/"
              className="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100"
            >
              Home
            </a>
          </li>

          {["solutions", "industries", "caseStudies"].map((menu) => (
            <li key={menu} className="relative">
              <a
                href={menuRoutes[menu]}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveMenu(activeMenu === menu ? null : menu);
                }}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
                <svg
                  className={`w-3 h-3 ml-2 transition-transform duration-200 ${
                    activeMenu === menu ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </a>
              <div
                className={`mt-2 bg-white rounded-lg shadow-md transition-all duration-300 overflow-hidden ${
                  activeMenu === menu
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="p-2 space-y-1">
                  {dropdownData[menu].map((item, index) => (
                    <DropdownItem key={index} {...item} />
                  ))}
                </ul>
              </div>
            </li>
          ))}

          <li>
            <a
              href="/company"
              className="block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100"
            >
              Company
            </a>
          </li>

          <li className="block lg:hidden">
            <a
              href="/contact"
              className="block text-center text-white bg-gradient-to-r from-blue-500 to-blue-900 hover:opacity-90 shadow-lg shadow-blue-500/50 font-medium rounded-2xl text-sm px-5 py-2.5 transition-all duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MegaNavbar;
