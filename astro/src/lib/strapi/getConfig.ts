import type { Config } from "@/interface";
import { fetchContentType } from ".";

export async function getConfig(): Promise<Config> {
  return await fetchContentType<Config>(
    "config",
    {
      populate: {
        site: {
          populate: "*",
        },
        params: {
          populate: "*",
        },
        navButton: {
          populate: "*",
        },
        metadata: {
          populate: "*",
        },
        settings: {
          populate: "*",
        },
      },
    },
    true,
  );
}
