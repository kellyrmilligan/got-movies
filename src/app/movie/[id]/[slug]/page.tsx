import { getMovieDetails } from "@/services/get-movie-details";

import { Movie } from "@/app/components/movie";
import { RouteProps } from "@/utils/types/route-props";
import type { Metadata, ResolvingMetadata } from "next";
import { MovieHero } from "./components/movie-hero";

import { FavoriteButton } from "./components/favorite-button";
import { ClientOnly } from "@/utils/components/client-only";

interface Params {
  slug: string;
  id: string;
}

export async function generateMetadata(
  { params }: RouteProps<Params>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const movieDetails = await getMovieDetails(Number(params.id));

  return {
    title: movieDetails.title ?? "Movie",
    description: movieDetails.overview ?? "Movie overview",
  };
}

export default async function Page({ params }: { params: Params }) {
  const movieDetails = await getMovieDetails(Number(params.id));

  return (
    <main>
      <MovieHero
        title={movieDetails.title}
        backdrop_path={movieDetails.backdrop_path}
      />
      <section className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold">Overview</h2>
          {movieDetails.id ? (
            <ClientOnly>
              <FavoriteButton id={movieDetails.id} />
            </ClientOnly>
          ) : null}
        </div>
        <p>{movieDetails.overview}</p>
      </section>
      {movieDetails.similar.results && movieDetails.similar.results.length ? (
        <section className="p-6">
          <h2 className="mb-6 text-xl md:text-3xl font-bold">
            You may also like...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {movieDetails.similar.results.map((movie, index) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
