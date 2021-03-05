import React, { FunctionComponent } from "react";
import "./FilmDetailsItem.scss";
import classNames from "classnames";

interface FilmDetailsItemProps {
  text: string;
  clickAction: any;
  selected: string;
}

const FilmDetailsItem: FunctionComponent<FilmDetailsItemProps> = ({
  text,
  clickAction,
  selected
}) => {
  const selectedClass = classNames('film-details-item', {selected: selected === text}); 

  return (
    <h3
      className={selectedClass}
      onClick={clickAction}
      onKeyDown={() => false}
      role="presentation"
    >
      {text}
    </h3>
  );
};

export default FilmDetailsItem;