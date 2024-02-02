import { paths } from "@/schema";
import { client } from "@/utils/client";

export async function getMovieDetails(id: number) {
  const { data, error } = await client.GET("/3/movie/{movie_id}", {
    params: {
      path: { movie_id: id },
      query: { language: "en-US", append_to_response: "similar" },
    },
  });

  if (error) {
    throw error;
  }

  return data as typeof data & {
    similar: paths["/3/movie/{movie_id}/similar"]["get"]["responses"]["200"]["content"]["application/json"];
  };
}
