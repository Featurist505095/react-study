import React, { FunctionComponent } from "react";
import { FilmDataType } from "../MovieItem/FilmDataType";
import MovieItem from "../MovieItem";
import ErrorText from "../ErrorText";
import MovieListStyled from "./MovieList.styled";

interface MovieListProps {
  MovieData: FilmDataType[];
}

const MovieList: FunctionComponent<MovieListProps> = ({ MovieData }) => {
  return MovieData.length ? (
    <MovieListStyled className="movie-list">
      {
        MovieData.map(item => {
          return (
            <MovieItem 
              key={item.id} 
              id={item.id} 
              title={item.title} 
              release_date={item.release_date} 
              genres={item.genres} 
              poster_path={item.poster_path} 
            />
          )
        }
      )
}
    </MovieListStyled>
  ) : (
    <ErrorText />
  );
};

export default MovieList;