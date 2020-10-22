import React, { useState, FunctionComponent } from "react";
import "./SearchOptionItem.scss";

interface SearchOptionItemProps {
  option: string;
  select?: boolean;
}
export const SearchOptionItem: FunctionComponent<SearchOptionItemProps> = ({option , select = null}) => {
  const [currentSelection, setSelection] = useState(select);
  const selectedClass = currentSelection ? ' selected' : '';

  return (
    <button className={"search-option-item" + selectedClass}
      onClick={(): void => {
          setSelection(!currentSelection);
      }}
      >
        {option}
      </button>
  );
};

/*
import React, { useState, FunctionComponent } from "react";
import "./SelectableItem.scss";

interface SelectableItemProps {
  text: string;
  select?: boolean;
}

export const SelectableItem: FunctionComponent<SelectableItemProps> = ({
  text,
  select = null
}) => {
  const [currentSelection, setSelection] = useState(select);
  const selectedClass = currentSelection ? ' selected' : '';
  
  return (
    <h3
      className={"selectable-item" + selectedClass}
      onClick={(): void => {
        if (typeof currentSelection === "boolean") {
          setSelection(!currentSelection);
        }
      }}
    >
      {text}
    </h3>
  );
};

*/