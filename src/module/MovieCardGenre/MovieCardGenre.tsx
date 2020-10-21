import React, { FunctionComponent } from "react";
import "./MovieCardGenre.scss";

interface MovieCardGenreProps {
  genre: string;
}

export const MovieCardGenre: FunctionComponent<MovieCardGenreProps> = ({genre}) => {
  return (
    <span className="movie-card-genre">{genre}</span>
  );
};