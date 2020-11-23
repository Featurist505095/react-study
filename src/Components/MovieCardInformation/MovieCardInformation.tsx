import React, { FunctionComponent } from "react";
import "./MovieCardInformation.scss";

interface MovieCardInformationProps {
  title: string;
  vote_average: number;
  release_date: string;
  genres: string[];
  overview: string;
  runtime: number;
}

export const MovieCardInformation: FunctionComponent<MovieCardInformationProps> = ({title, release_date, genres, vote_average, overview, runtime}) => {
  const year = new Date(release_date).getFullYear();

  return (
    <div className="movie-card-information">
      <div className="movie-card-name">
        <h3>{title}</h3>
        <span className="movie-card-rate">{vote_average}</span>
      </div>
      <div className="movie-card-genre">{genres.join(', ')}</div>
      <span className="movie-card-year">{year}</span>
      <span className="movie-card-time">{runtime ? runtime : 'N/A'} min</span>
      <span className="movie-card-description">{overview}</span>
    </div>
  );
};