import { fetchAPI } from "@/lib/api";
import { getStrapiURL } from "@/lib/get-strapi-url";

export async function getHomePage() {
const path = "/api/home-page";
const BASE_URL = getStrapiURL();

const url = new URL (path, BASE_URL); 

return await fetchAPI(url.href, { method: "GET" });
}
