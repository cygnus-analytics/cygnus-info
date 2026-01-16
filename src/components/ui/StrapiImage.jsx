"use client";
import Image from "next/image";

const StrapiImage = ({ src, alt = "", className = "", width, height, ...rest }) => {
  let imageUrl = "/fallback.jpg";
  let isSvg = false;

  try {
    if (src) {
      const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

      // 1. Extract URL
      if (typeof src === "string") {
        imageUrl = src.startsWith("http") ? src : `${baseURL}${src}`;
      } else if (src?.url) {
        imageUrl = src.url.startsWith("http") ? src.url : `${baseURL}${src.url}`;
      }

      // 2. Detect SVG
      isSvg = imageUrl.split(/[?#]/)[0].endsWith(".svg");

      // 3. Apply Cloudinary optimization ONLY if NOT an SVG
      if (!isSvg && imageUrl.includes("res.cloudinary.com")) {
        imageUrl = imageUrl.replace(
          "/upload/",
          "/upload/f_auto,q_auto/"
        );
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
      width={width}
      height={height}
      // SVGs should not be processed by the Next.js Image optimizer
      unoptimized={isSvg} 
      {...rest}
    />
  );
};

export default StrapiImage;