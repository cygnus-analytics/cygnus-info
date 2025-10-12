"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const MegaNavbar = ({ headerData }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  const menus = headerData?.menus || [];
  const logoText = headerData?.logo?.logoText || "Logo";
  const cta = headerData?.cta;

  const DropdownItem = ({ title, description, href }) => (
    <li>
      <Link href={href || "#"} className="block p-3 rounded-lg hover:bg-gray-100">
        <h4 className="font-semibold text-blue-800">{title}</h4>
        <span className="text-sm text-gray-800">{description}</span>
      </Link>
    </li>
  );

  const renderDropdown = (dropdownItems = [], columns = 2) => (
    <div className="absolute top-full left-1/2 -translate-x-1/2 z-40 bg-white border-y border-gray-200 shadow-sm w-[40rem] p-4 rounded-xl">
      <div className={`grid grid-cols-${columns} gap-4`}>
        {Array.from({ length: columns }).map((_, colIndex) => (
          <ul key={colIndex} className="space-y-1">
            {dropdownItems
              .slice(
                colIndex * Math.ceil(dropdownItems.length / columns),
                (colIndex + 1) * Math.ceil(dropdownItems.length / columns)
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
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo/cygnus.png"
            alt={logoText}
            width={100}
            height={50}
            className="h-10 w-auto cursor-pointer"
          />
        </Link>

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
                    href={menu.href}
                    className={`flex items-center w-full py-2 px-3 text-gray-900 rounded-md hover:text-blue-800 transition-colors ${
                      activeMenu === menu.title ? "text-blue-600" : ""
                    }`}
                  >
                    {menu.title.charAt(0).toUpperCase() +
                      menu.title.slice(1).toLowerCase()}
                  </Link>

                  {menu.hasDropdown &&
                    activeMenu === menu.title &&
                    renderDropdown(menu.dropdownItems)}
                </li>
              ))}
          </ul>
        </div>

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
          {menus
            .filter((menu) => menu?.title)
            .map((menu) => (
              <li key={menu.id} className="relative">
                <button
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100"
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === menu.title ? null : menu.title
                    )
                  }
                >
                  {menu.title}
                  {menu.hasDropdown && (
                    <svg
                      className={`w-3 h-3 ml-2 transition-transform duration-200 ${
                        activeMenu === menu.title ? "rotate-180" : ""
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
                  )}
                </button>

                {menu.hasDropdown && (
                  <div
                    className={`mt-2 bg-white rounded-lg shadow-md transition-all duration-300 overflow-hidden ${
                      activeMenu === menu.title
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="p-2 space-y-1">
                      {menu.dropdownItems.map((item, index) => (
                        <DropdownItem key={index} {...item} />
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}

          {cta && (
            <li className="block lg:hidden">
              <Link
                href={cta.href || "#"}
                className="block text-center text-white bg-gradient-to-r from-blue-500 to-blue-900 hover:opacity-90 shadow-lg shadow-blue-500/50 font-medium rounded-2xl text-sm px-5 py-2.5 transition-all duration-300"
              >
                {cta.text}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default MegaNavbar;
