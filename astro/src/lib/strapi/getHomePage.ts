import type { HomePage } from "@/interface";
import { fetchContentType } from ".";

export async function getHomePageContent() {
  return await await fetchContentType<HomePage>(
    "homepage",
    {
      populate: {
        banner: {
          populate: "*",
        },
        services: { populate: "*" },
        workflow: { populate: "*" },
        call_to_action: { populate: "*" },
        feature: {
          populate: {
            features: {
              populate: "*",
            },
          },
        },
      },
    },
    true,
  );
}
