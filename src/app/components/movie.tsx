import { paths } from "@/schema";
import { ArrayElement } from "@/utils/types/array-element";
import Link from "next/link";
import { FC } from "react";
import slugify from "slugify";
import Image from "next/image";

interface MovieProps {
  /**
   * this is due to the generated schema not using references for components
   * it inlines all types in the responses
   */
  movie: ArrayElement<
    NonNullable<
      paths["/3/movie/popular"]["get"]["responses"]["200"]["content"]["application/json"]["results"]
    >
  >;
  /**
   * set this to true for the first movie in the list
   */
  isPriority?: boolean;

  config: NonNullable<
    paths["/3/configuration"]["get"]["responses"]["200"]["content"]["application/json"]
  >;
}

export const Movie: FC<MovieProps> = async ({ movie, isPriority, config }) => {
  const movieDetailsHref = `/movie/${movie.id}/${slugify(movie.title ?? "", {
    lower: true,
  })}`;
  const posterImageSrc = `${config?.images?.secure_base_url}${config?.images?.poster_sizes?.[4]}${movie.poster_path}`;
  return (
    <div
      key={movie.id}
      className="card card-compact bg-base-100 shadow-xl w-full aspect-[490/900] relative"
    >
      <figure className="aspect-[490/900]">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcVA8AAakBE6hGgM8AAAAASUVORK5CYII="
          src={posterImageSrc}
          alt={movie.title ?? "Movie poster"}
          width={500}
          height={750}
          priority={isPriority}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title sm:line-clamp-1 mb-1">
          <Link
            href={movieDetailsHref}
            className="after:absolute after:left-0 after:top-0 after:bottom-0 after:right-0"
          >
            {movie.title}
          </Link>
        </h2>
        <p className="line-clamp-2 mb-4">{movie.overview}</p>
        <div className="card-actions">
          <div className="btn btn-primary w-full">Learn more</div>
        </div>
      </div>
    </div>
  );
};
