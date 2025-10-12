"use client";

import Image from "next/image";

/**
 * StrapiImage component
 * @param {string|object} src - Either a URL string or Strapi media object
 * @param {string} alt - Alt text for the image
 * @param {string} className - Optional CSS classes
 * @param {object} rest - Any other Next.js Image props (fill, width, height, etc.)
 */
const StrapiImage = ({ src, alt = "", className = "", ...rest }) => {
  let imageUrl = "/fallback.jpg";

  try {
    if (src) {
      const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

      if (typeof src === "string") {
        // If src is already a full URL
        if (src.startsWith("http://") || src.startsWith("https://")) {
          imageUrl = src;
        } else {
          imageUrl = `${baseURL}${src}`;
        }
      } else if (src.url) {
        // If src is a Strapi media object
        imageUrl = src.url.startsWith("http") ? src.url : `${baseURL}${src.url}`;
      }
    }
  } catch (err) {
    console.warn("Invalid image URL in StrapiImage:", src, err);
    imageUrl = "/fallback.jpg";
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      className={className}
      {...rest}
    />
  );
};

export default StrapiImage;
