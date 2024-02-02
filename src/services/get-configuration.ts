import { client } from "@/utils/client";

export async function getConfiguration() {
  const { data, error } = await client.GET("/3/configuration");

  if (error) {
    throw error;
  }

  return data;
}
