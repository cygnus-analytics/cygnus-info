import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = ({ footerData }) => {
  if (!footerData) return null;

  const { description, copyright, links, linkGroup } = footerData;

  // Helper to map platform to icon
  const getSocialIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case "linkedin":
        return <FaLinkedin className="h-6 w-6" />;
      case "twitter":
        return <FaTwitter className="h-6 w-6" />;
      case "meta":
      case "facebook":
        return <FaFacebook className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-800 to-blue-950">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 pt-16 pb-40 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left section */}
          <div>
            {/* Logo */}
            {footerData?.logo?.url ? (
              <Image
                src={footerData.logo.url}
                alt={footerData.logo.logoText || "Logo"}
                width={160}
                height={60}
                className="h-8 w-40"
              />
            ) : (
              <p className="text-white font-semibold text-xl">Cygnus</p>
            )}

            {/* Description */}
            <p className="mt-4 max-w-xs text-white">{description}</p>

            {/* Social icons */}
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

          {/* Right section with dynamic link groups */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {linkGroup?.map((group) => (
              <div key={group.id}>
                <p className="font-semibold text-white">{group.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {group.link?.map((linkItem) => (
                    <li key={linkItem.id}>
                      <Link
                        href={linkItem.href || "#"}
                        className="text-gray-200 transition hover:opacity-75"
                      >
                        {linkItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
