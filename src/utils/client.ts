import createClient from "openapi-fetch";
import type { paths } from "@/schema";

export const client = createClient<paths>({
  baseUrl: `${process.env.NEXT_PUBLIC_TMDB_API_URL}`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
  },
});
