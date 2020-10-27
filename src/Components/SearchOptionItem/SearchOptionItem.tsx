import React, { FunctionComponent } from "react";
import "./SearchOptionItem.scss";

interface SearchOptionItemProps {
  option: string;
  select?: boolean;
  clickAction: any;
}
export const SearchOptionItem: FunctionComponent<SearchOptionItemProps> = ({option , select, clickAction}) => {
  const selectedClass = (select === true) ? ' selected' : '';

  return (
    <button className={"search-option-item" + selectedClass}
      onClick={(): void => {
        clickAction.action(option, clickAction.useFunction);
      }}
      >
        {option}
      </button>
  );
};