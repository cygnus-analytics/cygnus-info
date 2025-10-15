"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import cygnusLogo from "../../../public/cygnus.png";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href = "#",
  children,
}) => {
  return (
    <div onMouseEnter={() => setActive && setActive(item)} className="relative">
      <motion.div
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.6]"
      >
        <a href={href}>{item}</a>
      </motion.div>

      {active !== null && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-1">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  const router = useRouter();

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative bg-white w-full border border-transparent shadow-input flex items-center justify-between px-6 py-5"
    >
      <div className="flex items-center">
        <Image
          src={cygnusLogo}
          alt="Logo"
          className="h-10 w-auto cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="flex space-x-10">{children}</div>

      <div>
        <a
          href="/contact"
          className="hidden lg:block text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 font-medium rounded-2xl text-sm px-5 py-2.5 text-center"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-2 hover:scale-105 transition-all ease-in-out duration-200">
      <Image
        src={src}
        width={100}
        height={100}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl h-38 w-30"
      />
      <div>
        <h4 className="text-lg font-bold mb-1 text-black max-w-[20rem]">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[20rem]">{description}</p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a {...rest} className="text-neutral-700 hover:text-black">
      {children}
    </a>
  );
};

MenuItem.propTypes = {
  setActive: PropTypes.func,
  active: PropTypes.string,
  item: PropTypes.string.isRequired,
  href: PropTypes.string,
  children: PropTypes.node,
};

Menu.propTypes = {
  setActive: PropTypes.func,
  children: PropTypes.node,
};

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

HoveredLink.propTypes = {
  children: PropTypes.node,
};
