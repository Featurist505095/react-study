import React, { FunctionComponent } from "react";
import "./MovieCardTime.scss";

interface MovieCardTimeProps {
  time: number;
}

export const MovieCardTime: FunctionComponent<MovieCardTimeProps> = ({time}) => {
  return (
    <span className="movie-card-time">{time} min</span>
  );
};