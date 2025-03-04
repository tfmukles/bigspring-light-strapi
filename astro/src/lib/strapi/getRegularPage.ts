import type { Page } from "@/interface";
import { fetchContentType } from ".";

export async function getRegularPage() {
  return await fetchContentType<Page[]>("pages", {});
}
