import React, { FunctionComponent } from "react";
import { MovieCardName } from "../MovieCardName/MovieCardName";
import { MovieCardGenre } from "../MovieCardGenre/MovieCardGenre";
import { MovieCardYear } from "../MovieCardYear/MovieCardYear";
import { MovieCardDescription } from "../MovieCardDescription/MovieCardDescription";
import "./MovieCardInformation.scss";

interface MovieCardInformationProps {
  name: string;
  rate: number;
  year: number;
  genre: string;
  description: string;
}

export const MovieCardInformation: FunctionComponent<MovieCardInformationProps> = ({name, year, genre, rate, description}) => {
  return (
    <div className="movie-card-information">
      <MovieCardName name={name} rate={rate}/>
      <MovieCardGenre genre={genre} />
      <MovieCardYear year={year} />
      <MovieCardDescription description={description} />
    </div>
  );
};