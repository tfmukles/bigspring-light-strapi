import type { FAQPage } from "@/interface";
import { fetchContentType } from ".";

export async function getFaq() {
  return await fetchContentType<FAQPage>(
    "faq",
    {
      populate: "*",
    },
    true,
  );
}
