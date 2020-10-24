import React, { FunctionComponent } from "react";
import "./FilmDetailsItem.scss";

interface FilmDetailsItemProps {
  text: string;
  orderAction: any;
  select?: boolean;
}

export const FilmDetailsItem: FunctionComponent<FilmDetailsItemProps> = ({
  text,
  orderAction,
  select = null
}) => {
  const selectedClass = select ? ' selected' : '';

  return (
    <h3
      className={"film-details-item" + selectedClass}
      onClick={(): void => {
          orderAction(text);
        }
      }
    >
      {text}
    </h3>
  );
};