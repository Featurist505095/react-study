import React, { FunctionComponent } from "react";
import "./MovieImage.scss";

interface MovieImageProps {
  poster_path?: string;
}

const MovieImage: FunctionComponent<MovieImageProps> = ({ poster_path }) => {
  return (
    <img className="movie-image" src={poster_path} alt="" />
  );
};

export default MovieImage;