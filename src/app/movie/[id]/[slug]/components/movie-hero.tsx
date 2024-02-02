import { getConfiguration } from "@/services/get-configuration";
import { FC } from "react";

interface MovieHeroProps {
  backdrop_path?: string;
  title?: string;
}

export const MovieHero: FC<MovieHeroProps> = async ({
  backdrop_path,
  title,
}) => {
  const config = await getConfiguration();
  return (
    <div
      className="hero aspect-video md:max-h-[400px] lg:max-h-[500px]"
      style={{
        backgroundImage: `url(${config?.images?.secure_base_url}${config?.images?.backdrop_sizes?.[2]}${backdrop_path})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};
