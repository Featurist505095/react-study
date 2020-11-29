import React, { FunctionComponent } from "react";
import { SortType } from "../../pages/home/StateType";
import FilmDetailsItem from "../FilmDetailsItem";
import "./SortList.scss";

interface SortListViewProp {
  sortOptionList: SortType[];
  clickAction: any;
  sortBy: SortType;
}
const SortListView: FunctionComponent<SortListViewProp> = ({ sortOptionList, clickAction, sortBy }) => {
  return (
    <div className="sort-list">
      {sortOptionList.map((item) => 
        (<FilmDetailsItem key={item} text={item} selected={sortBy} clickAction={clickAction} />)
      )}
    </div>
  );
};

export default SortListView;