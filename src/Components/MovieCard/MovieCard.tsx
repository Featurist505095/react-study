import React, { FunctionComponent } from "react";
import { MovieImage } from "../MovieImage";
import { MovieCardInformation } from "../MovieCardInformation";
import "./MovieCard.scss";

interface MovieCardProps {
  title: string;
  vote_average: number;
  release_date: string;
  genres: string[];
  overview: string;
  runtime: number;
  poster_path: string;
}

export const MovieCard: FunctionComponent<MovieCardProps> = ({title, release_date, genres, vote_average, overview, runtime, poster_path}) => {
  return (
    <div className="movie-card">
      <MovieImage poster_path={poster_path} />
      <MovieCardInformation title={title} genres={genres} release_date={release_date} overview={overview} vote_average={vote_average} runtime={runtime}/>
    </div>
  );
};