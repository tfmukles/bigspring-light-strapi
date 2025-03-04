import type { NotFoundPage } from "@/interface";
import { fetchContentType } from ".";

export async function getNotfound() {
  return await fetchContentType<NotFoundPage>(
    "notfound",
    {
      populate: "*",
    },
    true,
  );
}
