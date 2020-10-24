import React, { FunctionComponent } from "react";
import "./SearchOptionItem.scss";

interface SearchOptionItemProps {
  option: string;
  select?: boolean;
  searchAction: any;
}
export const SearchOptionItem: FunctionComponent<SearchOptionItemProps> = ({option , select, searchAction}) => {
  const selectedClass = (select === true) ? ' selected' : '';

  return (
    <button className={"search-option-item" + selectedClass}
      onClick={(): void => {
        searchAction(option);
      }}
      >
        {option}
      </button>
  );
};