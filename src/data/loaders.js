import { fetchAPI } from "@/lib/api";
import getStrapiURL from "@/lib/get-strapi-url";
import qs from "qs";

export async function getHomePage() {
  const path = "/api/home-page?populate=*";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);

  return await fetchAPI(url.href, { method: "GET" });
}

export async function getGlobal() {
  const populateObj = {
    populate: {
      Header: {
        populate: {
          logo: { populate: "image" },
          menus: { populate: { dropdownItems: true } },
          cta: true,
        },
      },
      Footer: {
        populate: {
          logo: { populate: "image" },
          links: true,
          linkGroup: { populate: { link: true } },
          contact: true,
        },
      },
    },
  };

  const queryString = qs.stringify(populateObj, { encodeValuesOnly: true });

  const BASE_URL = getStrapiURL();
  const path = `/api/global?${queryString}`;
  const url = new URL(path, BASE_URL);

  return await fetchAPI(url.href, { method: "GET" });
}
