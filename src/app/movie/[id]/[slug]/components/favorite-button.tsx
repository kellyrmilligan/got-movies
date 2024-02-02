"use client";

import { useLocalStorage } from "@uidotdev/usehooks";
import { FC } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

interface FavoriteButtonProps {
  id: number;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({ id }) => {
  const [isFavorite, setIsFavorite] = useLocalStorage(
    `movieFavorite:${id}`,
    false
  );

  return (
    <button
      className="btn btn-circle"
      onClick={() => setIsFavorite(!isFavorite)}
    >
      {isFavorite ? (
        <IoIosHeart fontSize="1.5rem" />
      ) : (
        <IoIosHeartEmpty fontSize="1.5rem" />
      )}
    </button>
  );
};
