import React, { FunctionComponent } from "react";
import "./MovieGenre.scss";

interface MovieGenreProps {
  genre: string;
}

export const MovieGenre: FunctionComponent<MovieGenreProps> = ({ genre }) => {
  return (
    <div className="movie-genre">
      {genre}
    </div>
  );
};