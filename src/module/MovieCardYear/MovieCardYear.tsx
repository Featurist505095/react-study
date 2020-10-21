import React, { FunctionComponent } from "react";
import "./MovieCardYear.scss";

interface MovieCardYearProps {
  year: number;
}

export const MovieCardYear: FunctionComponent<MovieCardYearProps> = ({year}) => {
  return (
    <span className="movie-card-year">{year}</span>
  );
};