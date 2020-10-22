import React, { FunctionComponent } from "react";
import { MovieCardName } from "../MovieCardName/MovieCardName";
import { MovieCardGenre } from "../MovieCardGenre/MovieCardGenre";
import { MovieCardYear } from "../MovieCardYear/MovieCardYear";
import { MovieCardDescription } from "../MovieCardDescription/MovieCardDescription";
import "./MovieCardInformation.scss";
import { MovieCardTime } from "../MovieCardTime/MovieCardTime";

interface MovieCardInformationProps {
  name: string;
  rate: number;
  year: number;
  genre: string;
  description: string;
  time: number;
}

export const MovieCardInformation: FunctionComponent<MovieCardInformationProps> = ({name, year, genre, rate, description, time}) => {
  return (
    <div className="movie-card-information">
      <MovieCardName name={name} rate={rate}/>
      <MovieCardGenre genre={genre} />
      <MovieCardYear year={year} />
      <MovieCardTime time={time} />
      <MovieCardDescription description={description} />
    </div>
  );
};