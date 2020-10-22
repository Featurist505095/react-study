import React, { FunctionComponent } from "react";
import "./MovieImage.scss";

interface MovieImageProps {
  name: string;
}

export const MovieImage: FunctionComponent<MovieImageProps> = ({ name }) => {
  return (
    <img className="movie-image" src={'../../assets/images/'+name+'.png'} />
  );
};