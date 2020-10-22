import React, { FunctionComponent } from "react";
import "./MovieImage.scss";

interface MovieImageProps {
  poster_path?: string;
}

export const MovieImage: FunctionComponent<MovieImageProps> = ({ poster_path }) => {
  return (
    <img className="movie-image" src={poster_path} />
  );
};