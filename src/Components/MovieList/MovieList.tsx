import React, { FunctionComponent } from "react";
import { FilmDataType } from "../MovieItem/FilmDataType";
import { MovieItem } from "../MovieItem";
import "./MovieList.scss";
import { ErrorText } from "../ErrorText";

interface MovieListProps {
  MovieData: FilmDataType[];
}

export const MovieList: FunctionComponent<MovieListProps> = ({ MovieData }) => {
  return MovieData.length ? (
    <div className="movie-list">
      {
        MovieData.map(item => {
          return (<MovieItem key={item.id} {...item}/>)
        }
      )}
    </div>
  ) : (
    <ErrorText />
  );
};