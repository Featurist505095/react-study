import React, { FunctionComponent } from "react";
import { filmData } from "../../Types/FilmData";
import { ErrorText } from "../ErrorText/ErrorText";
import { MovieItem } from "../MovieItem/MovieItem";
import "./MovieList.scss";

interface MovieListProps {
  data: filmData[];
}

export const MovieList: FunctionComponent<MovieListProps> = ({data}) => {
  if (!data.length) {
    return (
      <div className="movie-list">
        <ErrorText />
      </div>
    );
  }
  return (
    <div className="movie-list">
      {
        data.map(item => {
          return (<MovieItem key={item.id} {...item}/>)
        }
      )}
    </div>
  );
};