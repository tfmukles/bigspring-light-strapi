import type { PostIndex } from "@/interface";
import { fetchContentType } from ".";

export async function getBlogIndex() {
  return await fetchContentType<PostIndex>("blog-index", {}, true);
}
