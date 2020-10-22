import React, { FunctionComponent } from "react";
import { MovieImage } from "../MovieImage/MovieImage";
import { MovieCardInformation } from "../MovieCardInformation/MovieCardInformation";
import "./MovieCard.scss";

interface MovieCardProps {
  name: string;
  rate: number;
  year: number;
  genre: string;
  description: string;
  time: number;
}

export const MovieCard: FunctionComponent<MovieCardProps> = ({name, year, genre, rate, description, time}) => {
  return (
    <div className="movie-card">
      <MovieImage name={name} />
      <MovieCardInformation name={name} genre={genre} year={year} description={description} rate={rate} time={time}/>
    </div>
  );
};