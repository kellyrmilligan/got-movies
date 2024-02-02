import { getMovieDetails } from "@/services/get-movie-details";

import { RouteProps } from "@/utils/types/route-props";
import type { Metadata, ResolvingMetadata } from "next";
import { MoviesList } from "@/app/components/movies-list";
import { MovieHero } from "./components/movie-hero";
import { ClientOnly } from "@/utils/components/client-only";
import { FavoriteButton } from "./components/favorite-button";

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
      {movieDetails.similar.results && movieDetails.similar.results ? (
        <section className="p-6">
          <h2 className="mb-6 text-xl md:text-3xl font-bold">
            You may also like...
          </h2>
          <MoviesList movies={movieDetails.similar.results} />
        </section>
      ) : null}
    </main>
  );
}
