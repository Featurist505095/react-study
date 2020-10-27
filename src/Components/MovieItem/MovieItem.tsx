import React, { FunctionComponent, useEffect } from "react";
import { MovieImage } from "../MovieImage/MovieImage";
import { MovieInformation } from "../MovieInformation/MovieInformation";
import "./MovieItem.scss";

interface MovieItemProps {
  title: string;
  release_date: string;
  genres: string[];
  poster_path: string;
}

export const MovieItem: FunctionComponent<MovieItemProps> = ({title, release_date, genres, poster_path}) => {
  const itemClass = title.replace(/\s+/g, '');

  useAnimation(itemClass);

  return (
    <div className={`movie-item ${itemClass}`}>
      <MovieImage poster_path={poster_path} />
      <MovieInformation title={title} genres={genres} release_date={release_date} />
    </div>
  );
};

const useAnimation = (item: string): void => {
  const [ minDelay, maxDelay ] = [5, 10];
  const randomValue = Math.round(minDelay - 0.5 + Math.random() * (maxDelay - minDelay + 1));

  useEffect(() => {
    const timer = setTimeout(toggleHint, randomValue * 1000, item);

    return function clearTimer() {
      toggleHint(item);
      clearTimeout(timer);
    };
  }, [item]);
}

const toggleHint = (item: string): void => {
  const currElement = document.querySelector(`.movie-item.${item}`);

  currElement?.classList.toggle('hint');
}