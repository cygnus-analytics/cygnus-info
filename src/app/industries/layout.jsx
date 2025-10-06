"use client";
// import { usePathname, useRouter } from "next/navigation";

// const industries = [
//   { name: "Banking & Finance", slug: "banking-finance" },
//   { name: "Oil & Gas", slug: "oil-and-gas" },
//   { name: "Education", slug: "education" },
//   { name: "Manufacturing", slug: "manufacturing" },
//   { name: "Consumer Sector", slug: "consumer-sector" },
//   { name: "Small & Medium Business", slug: "smb" },
// ];

export default function IndustriesLayout({ children }) {

  return (
    <div className="">

      <div className="">{children}</div>
    </div>
  );
}
