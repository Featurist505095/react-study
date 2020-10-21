import React, { FunctionComponent } from "react";
import "./MovieCardDescription.scss";

interface MovieCardDescriptionProps {
  description: string;
}

export const MovieCardDescription: FunctionComponent<MovieCardDescriptionProps> = ({description}) => {
  return (
    <span className="movie-card-description">{description}</span>
  );
};