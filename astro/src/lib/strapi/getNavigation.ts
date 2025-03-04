import type { Navigation } from "@/interface";
import { fetchContentType } from "@/lib/strapi";

export async function getNavigation() {
  return await fetchContentType<Navigation>("navigation", {
    populate: {
      main: {
        populate: "*",
      },
      footer: {
        populate: "*",
      },
    },
  });
}
