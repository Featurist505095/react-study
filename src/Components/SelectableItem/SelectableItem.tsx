import React, { FunctionComponent } from "react";
import "./SelectableItem.scss";

interface SelectableItemProps {
  text: string;
  orderAction: any;
  select?: boolean;
}

export const SelectableItem: FunctionComponent<SelectableItemProps> = ({
  text,
  orderAction,
  select = null
}) => {
  const selectedClass = select ? ' selected' : '';

  return (
    <h3
      className={"selectable-item" + selectedClass}
      onClick={(): void => {
          orderAction(text);
        }
      }
    >
      {text}
    </h3>
  );
};