import { client } from "@/utils/client";

export async function getConfiguration() {
  const { data, error } = await client.GET("/3/configuration", {
    cache: "no-store",
  });

  if (error) {
    throw error;
  }

  return data;
}
