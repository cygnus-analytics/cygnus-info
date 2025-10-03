import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/cygnus_footer.png";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-800 to-blue-950">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 pt-16 pb-40 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left section */}
          <div>
            {/* Logo with Next.js Image */}
            <Image src={logo} className="h-8 w-40" alt="Logo" />

            <p className="mt-4 max-w-xs text-white">
              Cygnus was founded in 2000 with a mission to provide
              mission-critical IT solutions that integrate advanced technologies
              to meet market demands and exceed customer expectations.
            </p>

            {/* Social icons */}
            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebook className="h-6 w-6" />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-6 w-6" />
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Right section with links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-white">Solutions</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/solutions/infrastructure" className="text-gray-200 transition hover:opacity-75">
                   Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/cyber-security" className="text-gray-200 transition hover:opacity-75">
                   Cyber Security
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/storage" className="text-gray-200 transition hover:opacity-75">
                   Storage
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/network" className="text-gray-200 transition hover:opacity-75">
                   Network
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/end-point-solutions" className="text-white transition hover:opacity-75">
                    End Point Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white">Industries</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/about" className="text-white transition hover:opacity-75">
                    Banking & Finance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-200 transition hover:opacity-75">
                   Oil & Gas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-200 transition hover:opacity-75">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-200 transition hover:opacity-75">
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-200 transition hover:opacity-75">
                    Consumer Sector
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-200 transition hover:opacity-75">
                    Small & Medium Businesses
                  </Link>
                </li>
              </ul>
            </div>
            

            <div>
              <p className="font-semibold text-white">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="#" className="text-gray-200 transition hover:opacity-75">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-200 transition hover:opacity-75">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-200 transition hover:opacity-75">
                    Live Chat
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white">Contact</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="mailto:sales@cygnussolutions.co.in" className="text-gray-200 transition hover:opacity-75">
                    sales@cygnussolutions.co.in
                  </Link>
                </li>
                <li>
                  <Link href="tel:+9102249636820" className="text-gray-200 transition hover:opacity-75">
                    +91-022-49636820
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-white">
          &copy; 2025. Cygnus Analytics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
