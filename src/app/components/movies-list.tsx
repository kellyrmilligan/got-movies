import { FC } from "react";
import { Movie } from "./movie";
import { paths } from "@/schema";
import { getConfiguration } from "@/services/get-configuration";

interface MoviesListProps {
  movies: NonNullable<
    paths["/3/movie/popular"]["get"]["responses"]["200"]["content"]["application/json"]["results"]
  >;
}

export const MoviesList: FC<MoviesListProps> = async ({ movies }) => {
  const config = await getConfiguration();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {movies.map((movie, index) => (
        <Movie
          config={config}
          key={movie.id}
          movie={movie}
          isPriority={index === 0}
        />
      ))}
    </div>
  );
};
