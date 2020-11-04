import React, { FunctionComponent } from "react";
import { FilmDataType } from "../MovieItem/FilmDataType";
import { MovieItem } from "../MovieItem/MovieItem";
import "./MovieList.scss";

interface MovieListProps {
  MovieData: FilmDataType[];
}

export const MovieList: FunctionComponent<MovieListProps> = ({MovieData}) => {
  return (
    <div className="movie-list">
      {
        MovieData.map(item => {
          return (<MovieItem key={item.id} {...item}/>)
        }
      )}
    </div>
  );
};