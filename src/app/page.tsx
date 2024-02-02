import { getPopularMovies } from "@/services/get-popular-movies";
import { MoviesList } from "@/app/components/movies-list";

export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold mb-6">Popular Movies</h1>
      {movies && movies.results ? <MoviesList movies={movies.results} /> : null}
    </main>
  );
}
