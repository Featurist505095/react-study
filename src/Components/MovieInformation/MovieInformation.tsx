import React, { FunctionComponent } from "react";
import { MovieName } from "../MovieName/MovieName";
import { MovieYear } from "../MovieYear/MovieYear";
import { MovieGenre } from "../MovieGenre/MovieGenre";
import "./MovieInformation.scss";

interface MovieInformationProps {
  name: string;
  year: number;
  genre: string;
}

export const MovieInformation: FunctionComponent<MovieInformationProps> = ({name, year, genre}) => {
  return (
    <div className="movie-information">
      <MovieName name={name} />
      <MovieYear year={year} />
      <MovieGenre genre={genre} />
    </div>
  );
};