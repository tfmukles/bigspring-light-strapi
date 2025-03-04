interface ImageInfo {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

const fallbackImage = "/images/banner.png";
const STRAPI_URL = import.meta.env.STRAPI_URL;

export const getImageInfo = (imageData: any): ImageInfo | null => {
  if (!imageData) return null;

  // Handle direct URL string
  if (typeof imageData === "string") {
    return { url: imageData };
  }

  const attributes = imageData?.data?.attributes || imageData;
  if (!attributes?.url) return { url: fallbackImage };

  // Ensure the URL starts with STRAPI_URL only if needed
  const imageUrl =
    attributes.url.startsWith(STRAPI_URL) || attributes.url.startsWith("http")
      ? attributes.url
      : `${STRAPI_URL}${attributes.url}`;

  return {
    url: imageUrl,
    alternativeText: attributes.alternativeText ?? "not found",
    width: attributes.width,
    height: attributes.height,
  };
};
