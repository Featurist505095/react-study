import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import MovieImage from "../MovieImage";
import MovieInformation from "../MovieInformation";
import "./MovieItem.scss";

interface MovieItemProps {
  id: number;
  title: string;
  release_date: string;
  genres: string[];
  poster_path: string;
}

const MovieItem: FunctionComponent<MovieItemProps> = ({id, title, release_date, genres, poster_path}) => {
  const linkPath = `/film/${id}`;
  return (
    <Link to={linkPath}>
      <div className="movie-item">
        <MovieImage poster_path={poster_path} />
        <MovieInformation title={title} genres={genres} release_date={release_date} />
      </div>
    </Link>

  );
};

export default MovieItem;