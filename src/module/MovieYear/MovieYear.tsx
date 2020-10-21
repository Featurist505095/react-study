import React, { FunctionComponent } from "react";
import "./MovieYear.scss";

interface MovieYearProps {
  year: number;
}

export const MovieYear: FunctionComponent<MovieYearProps> = ({ year }) => {
  return (
    <div className="movie-year">
      {year}
    </div>
  );
};