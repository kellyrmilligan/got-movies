import { Movie } from "@/app/components/movie";
import { getPopularMovies } from "@/services/get-popular-movies";

export default async function Home() {
  const movies = await getPopularMovies();

  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold mb-6">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies && movies.results
          ? movies.results.map((movie, index) => (
              <Movie key={movie.id} movie={movie} isPriority={index === 0} />
            ))
          : null}
      </div>
    </main>
  );
}
