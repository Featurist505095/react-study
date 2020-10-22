import React, { FunctionComponent } from "react";
import "./MovieName.scss";

interface MovieNameProps {
  name: string;
}

export const MovieName: FunctionComponent<MovieNameProps> = ({ name }) => {
  return (
    <div className="movie-name">
      {name}
    </div>
  );
};