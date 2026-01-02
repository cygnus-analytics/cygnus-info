"use client";
import Image from "next/image";

const StrapiImage = ({ src, alt = "", className = "", ...rest }) => {
  let imageUrl = "/fallback.jpg";

  try {
    if (src) {
      const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

      if (typeof src === "string") {
        imageUrl = src.startsWith("http")
          ? src
          : `${baseURL}${src}`;
      } else if (src?.url) {
        imageUrl = src.url.startsWith("http")
          ? src.url
          : `${baseURL}${src.url}`;
      }

      if (imageUrl.includes("res.cloudinary.com")) {
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
      {...rest}
    />
  );
};

export default StrapiImage;
