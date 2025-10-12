import React from "react";
import Home from "../components/pages/Home.jsx";
import { getHomePage } from "@/data/loaders.js";

export const revalidate = 600;

export default async function Page() {
  const homePageData = await getHomePage();

  return (
    <div>
      <Home homeData={homePageData?.data} />
    </div>
  );
}
