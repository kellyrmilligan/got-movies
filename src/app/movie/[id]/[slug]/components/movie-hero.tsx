"use client";

import { ConfigContext } from "@/app/providers/configuration-provider";
import { FC, useContext } from "react";

interface MovieHeroProps {
  backdrop_path?: string;
  title?: string;
}

export const MovieHero: FC<MovieHeroProps> = ({ backdrop_path, title }) => {
  const config = useContext(ConfigContext);
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
