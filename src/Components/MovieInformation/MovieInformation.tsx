import React, { FunctionComponent } from "react";
import "./MovieInformation.scss";

interface MovieInformationProps {
  title: string;
  release_date: string;
  genres: string[];
}

const MovieInformation: FunctionComponent<MovieInformationProps> = ({title, release_date, genres}) => {
  const year = new Date(release_date).getFullYear();

  return (
    <div className="movie-information">
      <div className="movie-name">{title}</div>
      <div className="movie-year">{year}</div>
      <div className="movie-genre">{genres[0]}</div>
    </div>
  );
};

export default MovieInformation;