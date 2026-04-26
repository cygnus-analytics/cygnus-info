"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import logoFallback from "../../../public/cygnus_footer.png";

/**
 * ✅ Static fallback data
 */
const DEFAULT_FOOTER = {
  description: `Cygnus was founded in 2000 with a mission to provide
  mission-critical IT solutions that integrate advanced technologies
  to meet market demands and exceed customer expectations.`,

  copyright:
    "© 2025. Cygnus Information Solutions Pvt. Ltd. All rights reserved.",

  links: [
    { id: 1, platform: "facebook", url: "#" },
    { id: 2, platform: "twitter", url: "#" },
    { id: 3, platform: "linkedin", url: "https://www.linkedin.com/company/cygnus-information-solutions-pvt-ltd-/posts/?feedView=all" },
  ],

  linkGroup: [
    {
      id: "solutions",
      title: "Solutions",
      link: [
        { id: 1, text: "Infrastructure", href: "/solutions" },
        { id: 2, text: "Cyber Security", href: "/solutions" },
        { id: 3, text: "Storage", href: "/solutions" },
        { id: 4, text: "Network", href: "/solutions" },
        { id: 5, text: "Cloud Solutions", href: "/solutions" },
        { id: 6, text: "HPC", href: "/solutions" },
        { id: 7, text: "AI/ML", href: "/solutions" },
      ],
    },
    {
      id: "industries",
      title: "Industries",
      link: [
        { id: 1, text: "Banking & Finance", href: "/industries/banking-finance" },
        { id: 2, text: "Oil & Gas", href: "/industries/oil-and-gas" },
        { id: 3, text: "Education", href: "/industries/education" },
        {id: 4, text: "Manufacturing", href: "/industries/manufacturing" },
        {id:5, text:"Consumer Sector", href: "/industries/consumer-sector" },
        {id: 6, text:"SMBs", href: "/industries/small-and-medium-business-smb" },
      ],
    },
    {
      id: "help",
      title: "Helpful Links",
      link: [
        { id: 1, text: "Contact", href: "/contact" },
        { id: 2, text: "FAQs", href: "#" },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      link: [
        { id: 1, text: "sales@cygnussolutions.co.in", href: "mailto:sales@cygnussolutions.co.in" },
        { id: 2, text: "+91-022-49636820", href: "tel:+9102249636820" },
      ],
    },
  ],

  logo: {
    image: null,
    logoText: "Cygnus Logo",
  },
};

const Footer = ({ footerData }) => {
  /**
   * ✅ Fallback-safe data merge
   */
  const data = footerData || DEFAULT_FOOTER;

  const { description, copyright, links, linkGroup, logo } = data;

  /**
   * ✅ Social icon mapper
   */
  const getSocialIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case "linkedin":
        return <FaLinkedin className="h-6 w-6" />;
      // case "twitter":
      //   return <FaTwitter className="h-6 w-6" />;
      // case "meta":
      // case "facebook":
      //   return <FaFacebook className="h-6 w-6" />;
      default:
        return null;
    }
  };

  const logoSrc = logo?.image?.url
    ? `${BASE_URL}${logo.image.url}`
    : logoFallback;

  const logoAlt = logo?.logoText || "Cygnus Logo";

  return (
    <footer className="bg-gradient-to-br from-blue-800 to-blue-950">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 pt-16 pb-32 lg:space-y-16">
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* LEFT SECTION */}
          <div>
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={160}
              height={60}
              style={{ width: "auto", height: "auto" }} // ✅ fixes warning
              priority
            />

            <p className="mt-4 max-w-xs text-white">
              {description}
            </p>

            {/* Social Icons */}
            <ul className="mt-8 flex gap-6">
              {links?.map((item) => {
                const Icon = getSocialIcon(item.platform);
                return (
                  item.url &&
                  Icon && (
                    <li key={item.id}>
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white transition hover:opacity-75"
                      >
                        {Icon}
                      </Link>
                    </li>
                  )
                );
              })}
            </ul>
          </div>

          {/* RIGHT SECTION */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {linkGroup?.map((group) => (
              <div key={group.id}>
                <p className="font-semibold text-white">{group.title}</p>

                <ul className="mt-6 space-y-4 text-sm">
                  {group.link?.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href || "#"}
                        className="text-neutral-200 transition hover:opacity-75"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white">
          <p className="text-center sm:text-left">
            {copyright}
          </p>

          <div className="flex gap-6 flex-wrap justify-center sm:justify-end">
            <p className="cursor-pointer hover:text-neutral-200">
              Terms and Conditions
            </p>
            <p className="cursor-pointer hover:text-neutral-200">
              Privacy Statement
            </p>
            <p className="cursor-pointer hover:text-neutral-200">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;