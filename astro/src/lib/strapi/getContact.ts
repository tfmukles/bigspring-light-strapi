import type { ContactPage } from "@/interface";
import { fetchContentType } from ".";

export async function getContact() {
  return await fetchContentType<ContactPage>(
    "contact",
    {
      populate: "*",
    },
    true,
  );
}
