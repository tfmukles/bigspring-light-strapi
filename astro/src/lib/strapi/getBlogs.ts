import type { Post } from "@/interface";
import { fetchContentType } from ".";

export async function getBlogs() {
  const blogs = await fetchContentType<Post[]>("blogs", {
    populate: "*",
  });
  return blogs.filter((blog) => blog.draft === false);
}
