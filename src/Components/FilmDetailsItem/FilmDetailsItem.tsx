import React, { FunctionComponent } from "react";
import "./FilmDetailsItem.scss";

interface FilmDetailsItemProps {
  text: string;
  clickAction: any;
  selected: string;
}

export const FilmDetailsItem: FunctionComponent<FilmDetailsItemProps> = ({
  text,
  clickAction,
  selected
}) => {
  const selectedClass = selected === text ? ' selected' : '';
  return (
    <h3
      className={"film-details-item" + selectedClass}
      onClick={clickAction}
    >
      {text}
    </h3>
  );
};