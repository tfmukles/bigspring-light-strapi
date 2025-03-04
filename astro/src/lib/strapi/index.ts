import qs from "qs";

/**
 * Fetches data for a specified Strapi content type.
 *
 * @param {string} contentType - The type of content to fetch from Strapi.
 * @param {Record<string, unknown>} params - Query parameters to append to the API request.
 * @param {boolean} [spreadData] - Whether to return a single object instead of an array.
 * @return {Promise<T>} The fetched data.
 */

interface StrapiData {
  id?: number;
  [key: string]: any;
}

interface StrapiResponse<T = StrapiData> {
  data: T;
}

export function spreadStrapiData<T extends StrapiData>(
  data: StrapiResponse<T>,
): T {
  if (Array.isArray(data.data) && data.data.length > 0) {
    return data.data[0];
  }
  if (!Array.isArray(data.data)) {
    return data.data;
  }

  return data.data;
}

export async function fetchContentType<T extends StrapiData>(
  contentType: string,
  params: Record<string, unknown> = {},
  spreadData?: boolean,
): Promise<T> {
  const queryParams = { ...params };
  const baseUrl = import.meta.env.STRAPI_URL ?? process.env.STRAPI_URL;
  try {
    const url = new URL(`api/${contentType}`, baseUrl);
    const response = await fetch(`${url.href}?${qs.stringify(queryParams)}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from Strapi (url=${url.toString()}, status=${response.status})`,
      );
    }

    const jsonData: StrapiResponse<T> = await response.json();
    return spreadData ? spreadStrapiData(jsonData) : jsonData.data;
  } catch (error) {
    console.error("FetchContentTypeError", error);
    return {} as T;
  }
}
