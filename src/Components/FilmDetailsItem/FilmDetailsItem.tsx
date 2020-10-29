import React, { FunctionComponent } from "react";
import "./FilmDetailsItem.scss";

interface FilmDetailsItemProps {
  text: string;
  clickAction: any;
  select?: boolean;
}

export const FilmDetailsItem: FunctionComponent<FilmDetailsItemProps> = ({
  text,
  clickAction,
  select = null
}) => {
  const selectedClass = select ? ' selected' : '';

  return (
    <h3
      className={"film-details-item" + selectedClass}
      onClick={(): void => {
          clickAction(text);
        }
      }
    >
      {text}
    </h3>
  );
};