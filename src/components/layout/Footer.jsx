import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import StrapiImage from "../ui/StrapiImage";

const Footer = ({ footerData }) => {
  if (!footerData) return null;

  const { description, copyright, links, linkGroup, logo } = footerData;

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

  const logoUrl = logo?.image?.url;
  const logoAlt = logo?.logoText;

  return (
    <footer className="bg-gradient-to-br from-blue-800 to-blue-950">
      <div className="mx-auto max-w-screen-xl space-y-8 pt-16 pb-30 lg:space-y-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <StrapiImage
              src={logoUrl}
              alt={logoAlt}
              width={160}
              height={60}
              className="h-8 w-48"
            />

            <p className="mt-4 max-w-xs text-white pl-3">
              CYGNUS INFORMATION SOLUTIONS PVT. LTD.
              <br />
              Registered Office - 1005 Lodha Supremus, Opp MTNL Building, Saki
              Vihar Road, Andheri (E), Mumbai – 400072.
            </p>

            {/* Social icons */}
            <ul className="mt-8 flex gap-6 pl-3">
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 px-3">
            {linkGroup?.map((group) => (
              <div key={group.id}>
                <p className="font-semibold text-white">{group.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {group.link?.map((linkItem) => (
                    <li key={linkItem.id}>
                      <Link
                        href={linkItem.href || "#"}
                        className="text-neutral-200 transition hover:opacity-75"
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

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white">
          <p className="text-center sm:text-left">
            &copy; 2025. Cygnus Information Solutions Pvt. Ltd.<br/> All rights
            reserved.
          </p>

          <div className="flex gap-6 flex-wrap justify-center sm:justify-end">
            <p className="transition hover:text-neutral-200 cursor-pointer">
              Terms and Conditions
            </p>
            <p className="transition hover:text-neutral-200 cursor-pointer">
              Privacy Statement
            </p>
            <p className="transition hover:text-neutral-200 cursor-pointer">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
