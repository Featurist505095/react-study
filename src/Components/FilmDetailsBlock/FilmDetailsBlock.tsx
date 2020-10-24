import React, { FunctionComponent } from "react";
import { FilmDetailsList } from "../FilmDetailsList/FilmDetailsList";
import { InformationItem } from "../InformationItem/InformationItem";
import "./FilmDetailsBlock.scss";

interface FilmDetailsBlockProps {
  filmCount?: number;
  orderAction?: any;
  selected?: string;
  genre?: string;
}
export const FilmDetailsBlock: FunctionComponent<FilmDetailsBlockProps> = ({ filmCount = 0, orderAction, selected='' , genre }) => {
  if (filmCount < 1 && genre === undefined) {
    return (
      <div className="film-details-block"></div>
    );
  }

  return (genre === undefined) ?
  (
    <div className="film-details-block">
      <InformationItem text={`${filmCount} movies found`} />
      <FilmDetailsList orderAction={orderAction} selected={selected}/>
    </div>
  ) :
  (
    <div className="film-details-block">
      <InformationItem text={`Films by ${genre} genre`} />
    </div>
  );
};