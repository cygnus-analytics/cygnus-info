export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.cygnussolutions.co.in/sitemap.xml",
    host: "https://www.cygnussolutions.co.in",
  };
}
