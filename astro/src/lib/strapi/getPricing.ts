import type { PricingPage } from "@/interface";
import { fetchContentType } from ".";

export async function getPricing() {
  return await await fetchContentType<PricingPage>("pricing", {
    populate: {
      plans: {
        populate: "*",
      },
      callToAction: {
        populate: "*",
      },
    },
  });
}
