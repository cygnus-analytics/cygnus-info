"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";

const capitalizeWords = (str) => {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const DropdownItem = ({ title, description, href, onClick }) => (
  <li>
    <Link 
      href={href || "#"} 
      className="block p-3 rounded-lg hover:bg-neutral-100"
      onClick={onClick}
    >
      <h4 className="font-semibold text-blue-900">{title}</h4>
      <span className="text-sm text-neutral-800">{description}</span>
    </Link>
  </li>
);

/**
 * LAPTOP / DESKTOP VIEW COMPONENT
 */
const DesktopMenu = ({ menus, activeMenu, setActiveMenu, renderDropdown }) => {
  return (
    <div className="hidden md:flex items-center font-medium w-auto">
      <ul className="flex flex-row space-x-5">
        {menus
          .filter((menu) => menu?.title)
          .map((menu) => (
            <li
              key={menu.id}
              className="relative"
              onMouseEnter={() => setActiveMenu(menu.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={menu.href || "#"}
                className={`flex items-center w-full py-2 px-3 text-neutral-900 rounded-md hover:text-blue-900 transition-colors ${
                  activeMenu === menu.title ? "text-blue-900" : ""
                }`}
              >
                {capitalizeWords(menu.title)}
              </Link>

              {/* Mega Dropdown Logic */}
              {menu.hasDropdown &&
                activeMenu === menu.title &&
                renderDropdown(menu.dropdownItems)}
            </li>
          ))}
      </ul>
    </div>
  );
};

/**
 * MOBILE VIEW COMPONENT
 */
const MobileMenu = ({ menus, menuOpen, setMenuOpen, activeMenu, setActiveMenu, cta }) => {
  const handleClose = () => setMenuOpen(false);

  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen 
          ? "max-h-[calc(100vh-80px)] opacity-100 " 
          : "max-h-0 opacity-0 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col p-4 space-y-2 font-medium overflow-y-auto max-h-[calc(100vh-80px)]">
        {menus
          .filter((menu) => menu?.title)
          .map((menu) => {
            const isDropdown = menu.hasDropdown;
            const isActive = activeMenu === menu.title;
            
            const itemStyle = `flex items-center justify-between w-full py-3 px-4 rounded-lg transition-colors ${
              isActive 
                ? "bg-blue-50 text-blue-900" 
                : "text-neutral-900 hover:bg-neutral-100"
            }`;

            return (
              <li key={menu.id} className="flex flex-col">
                {isDropdown ? (
                  /* DROPDOWN TRIGGER BUTTON */
                  <button
                    onClick={() => setActiveMenu(isActive ? null : menu.title)}
                    className={itemStyle}
                  >
                    <span className="text-base">{capitalizeWords(menu.title)}</span>
                    <HiChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  /* DIRECT NAVIGATION LINK */
                  <Link 
                    href={menu.href || "#"} 
                    className={itemStyle}
                    onClick={handleClose}
                  >
                    <span className="text-base">{capitalizeWords(menu.title)}</span>
                  </Link>
                )}

                {/* Accordion Content */}
                {isDropdown && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive ? "max-h-auto opacity-100 mt-1" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="pl-4 pr-2 py-2 space-y-1 bg-white rounded-b-lg border-l-2 border-blue-200 ml-2">
                      {menu.dropdownItems?.map((item, index) => (
                        <DropdownItem 
                          key={index} 
                          {...item} 
                          onClick={handleClose} 
                        />
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}

        {cta && (
          <li className="pt-4 pb-10">
            <Link
              href={cta.href || "#"}
              onClick={handleClose}
              className="block text-center text-white bg-gradient-to-r from-blue-600 to-blue-800 font-semibold rounded-xl py-3 shadow-md"
            >
              {cta.text}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

/**
 * MAIN COMPONENT
 */
const MegaNavbar = ({ headerData }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menus = headerData?.menus || [];
  const logoText = headerData?.logo?.logoText || "Logo";
  const cta = headerData?.cta;

const renderDropdown = (dropdownItems = [], columns = 2) => (
  <div className="absolute top-full left-1/2 -translate-x-1/2 z-40 bg-white shadow-sm w-[40rem] p-4 rounded-xl">
    <div className={`grid grid-cols-${columns} gap-4`}>
      {Array.from({ length: columns }).map((_, colIndex) => (
        <ul key={colIndex} className="space-y-1">
          {dropdownItems
            .slice(
              colIndex * Math.ceil(dropdownItems.length / columns),
              (colIndex + 1) * Math.ceil(dropdownItems.length / columns)
            )
            .map((item, index) => (
              <DropdownItem 
                key={index} 
                {...item} 
                onClick={() => setActiveMenu(null)} 
              />
            ))}
        </ul>
      ))}
    </div>
  </div>
);
  return (
    <nav
      className="bg-white fixed top-0 left-0 right-0 z-50"
      ref={menuRef}
    >
      <div className="flex items-center justify-between mx-auto py-4 px-6">
        {/* Brand Logo */}
        <Link href="/">
          <div className="relative h-10 w-44">
            <Image
              src="/logo/cygnus.png"
              alt={logoText}
              fill
              className="object-contain cursor-pointer"
            />
          </div>
        </Link>

        {/* --- DESKTOP VIEW COMPONENT --- */}
        <DesktopMenu 
          menus={menus} 
          activeMenu={activeMenu} 
          setActiveMenu={setActiveMenu} 
          renderDropdown={renderDropdown} 
        />

        {/* Desktop CTA Button */}
        {cta && (
          <div className="hidden md:flex">
            <Link
              href={cta.href}
              target={cta.isExternal ? "_blank" : "_self"}
              className="hidden lg:block text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
            >
              {cta.text}
            </Link>
          </div>
        )}

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 cursor-pointer"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M1 1l15 12M16 1L1 13" : "M1 1h15M1 7h15M1 13h15"}
            />
          </svg>
        </button>
      </div>

      {/* --- MOBILE VIEW COMPONENT --- */}
      <MobileMenu 
        menus={menus} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen}
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu} 
        cta={cta}
      />
    </nav>
  );
};

export default MegaNavbar;