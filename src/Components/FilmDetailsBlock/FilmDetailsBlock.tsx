import React, { FunctionComponent } from "react";
import { FilmDetailsList } from "../FilmDetailsList";
import { InformationItem } from "../InformationItem";
import "./FilmDetailsBlock.scss";

interface FilmDetailsBlockProps {
  filmCount?: number;
  genre?: string;
}
export const FilmDetailsBlock: FunctionComponent<FilmDetailsBlockProps> = ({ filmCount = 0 , genre }) => {
  if (filmCount < 1 && genre === undefined) {
    return (
      <div className="film-details-block"></div>
    );
  }

  return (genre === undefined) ?
  (
    <div className="film-details-block">
      <InformationItem text={`${filmCount} movies found`} />
      <FilmDetailsList />
    </div>
  ) :
  (
    <div className="film-details-block">
      <InformationItem text={`Films by ${genre} genre`} />
    </div>
  );
};