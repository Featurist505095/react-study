import React, { FunctionComponent } from "react";
import "./MovieCardRate.scss";

interface MovieCardRateProps {
  rate: number;
}

export const MovieCardRate: FunctionComponent<MovieCardRateProps> = ({rate}) => {
  return (
    <span className="movie-card-rate">{rate}</span>
  );
};