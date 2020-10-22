import React, { FunctionComponent } from "react";
import { MovieImage } from "../MovieImage/MovieImage";
import { MovieInformation } from "../MovieInformation/MovieInformation";
import "./MovieItem.scss";

// const movieItems = [
//   {id: 1111, name: 'Film1', rate: 6.7, year: 1994, genre: 'Action'},
//   {id: 2222, name: 'Film2', rate: 0, year: 2150, genre: 'Action'},
//   {id: 3333, name: 'Film3', rate: 10, year: 1850, genre: 'Dramas'}
// ]

interface MovieItemProps {
  name: string;
  rate: number;
  year: number;
  genre: string;
}

export const MovieItem: FunctionComponent<MovieItemProps> = ({name, year, genre}) => {
  return (
    <div className="movie-item">
      <MovieImage name={name} />
      <MovieInformation name={name} genre={genre} year={year} />
    </div>
  );
};