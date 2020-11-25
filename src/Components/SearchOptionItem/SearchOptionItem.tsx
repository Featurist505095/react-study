import React, { FunctionComponent } from "react";
import { SearchType } from "../../pages/home/StateType";
import "./SearchOptionItem.scss";

interface SearchOptionItemProps {
  option: SearchType;
  selected: SearchType;
  clickAction: any;
}
const SearchOptionItem: FunctionComponent<SearchOptionItemProps> = ({option , selected, clickAction}) => {
  const selectedClass = (selected === option) ? ' selected' : '';

  return (
    <button
      className={`search-option-item${  selectedClass}`}
      type="button"
      onClick={clickAction}
    >
      {option}
    </button>
  );
};

export default SearchOptionItem;