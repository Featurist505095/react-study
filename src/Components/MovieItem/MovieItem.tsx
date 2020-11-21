import React, { FunctionComponent } from "react";
import { MovieImage } from "../MovieImage";
import { MovieInformation } from "../MovieInformation";
import "./MovieItem.scss";

interface MovieItemProps {
  title: string;
  release_date: string;
  genres: string[];
  poster_path: string;
}

export const MovieItem: FunctionComponent<MovieItemProps> = ({title, release_date, genres, poster_path}) => {
  return (
    <div className={`movie-item`}>
      <MovieImage poster_path={poster_path} />
      <MovieInformation title={title} genres={genres} release_date={release_date} />
    </div>
  );
};