import type { Social } from "@/interface";
import { fetchContentType } from "@/lib/strapi";

export async function getSocial() {
  return await fetchContentType<Social>("social", {
    populate: {
      populate: "*",
    },
  });
}
