import { client } from "@/utils/client";

export async function getPopularMovies() {
  const { data, error } = await client.GET("/3/movie/popular", {
    params: {
      query: { language: "en-US" },
    },
  });

  if (error) {
    throw error;
  }

  return data;
}
