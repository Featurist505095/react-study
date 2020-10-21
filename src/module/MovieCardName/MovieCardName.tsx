import React, { FunctionComponent } from "react";
import { MovieCardRate } from "../MovieCardRate/MovieCardRate";
import "./MovieCardName.scss";

interface MovieCardNameProps {
  name: string;
  rate: number;
}

export const MovieCardName: FunctionComponent<MovieCardNameProps> = ({name, rate}) => {
  return (
    <div className="movie-card-name">
      <h3>{name}</h3>
      <MovieCardRate rate={rate} />
    </div>
  );
};