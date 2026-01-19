"use client";
import Image from "next/image";

const StrapiImage = ({ src, alt = "", className = "", width, height, ...rest }) => {
  let imageUrl = "/fallback.jpg";
  let isSvg = false;
  let isCloudinary = false;
  let isStrapiCloud = false;

  try {
    if (src) {
      const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

      // 1. Resolve the Base URL
      if (typeof src === "string") {
        imageUrl = src.startsWith("http") ? src : `${baseURL}${src}`;
      } else if (src?.url) {
        imageUrl = src.url.startsWith("http") ? src.url : `${baseURL}${src.url}`;
      }

      // 2. Identify Source & Type
      isSvg = imageUrl.split(/[?#]/)[0].endsWith(".svg");
      isCloudinary = imageUrl.includes("res.cloudinary.com");
      isStrapiCloud = imageUrl.includes("strapiapp.com");

      // 3. Cloudinary-Specific Optimization (Bypassing Vercel)
      if (!isSvg && isCloudinary) {
        /**
         * We inject width (w_) and quality/format (f_auto, q_auto) 
         * directly into the Cloudinary URL.
         * This ensures the browser downloads a resized version, 
         * not the original high-res upload.
         */
        const resizeParam = width ? `w_${width},` : "";
        imageUrl = imageUrl.replace(
          "/upload/",
          `/upload/${resizeParam}f_auto,q_auto/`
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

      unoptimized={isSvg || isCloudinary || isStrapiCloud} 
      {...rest}
    />
  );
};

export default StrapiImage;