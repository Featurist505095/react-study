import React, { FunctionComponent } from "react";
import classNames from "classnames"; 
import { SearchType } from "../../pages/home/StateType";
import "./SearchOptionItem.scss";

interface SearchOptionItemProps {
  option: SearchType;
  selected: SearchType;
  clickAction: any;
}
const SearchOptionItem: FunctionComponent<SearchOptionItemProps> = ({option , selected, clickAction}) => {
  const selectedClass = classNames('search-option-item', {selected: selected === option});

  return (
    <button
      className={selectedClass}
      type="button"
      onClick={clickAction}
    >
      {option}
    </button>
  );
};

export default SearchOptionItem;