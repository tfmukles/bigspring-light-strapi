import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import "dotenv/config";
import type { Config } from "./src/interface";
import { fetchContentType } from "./src/lib/strapi";

// Function-based configuration
export async function getConfig() {
  const { site } = await fetchContentType<Config>(
    "config",
    {
      populate: {
        site: {
          populate: "*",
        },
      },
    },
    true,
  );

  return defineConfig({
    output: "static",
    site: site.baseUrl || "http://examplesite.com",
    base: site.basePath || "/",
    trailingSlash: site.trailingSlash ? "always" : "never",
    integrations: [
      react(),
      sitemap(),
      tailwind({
        applyBaseStyles: false,
      }),
    ],
  });
}

// Export the function invocation
export default getConfig();
