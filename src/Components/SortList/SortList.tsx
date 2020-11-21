import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { SortType } from "../../pages/home/StateType";
import { toggleSort } from "../../store/actionCreators";
import { FilmDetailsItem } from "../FilmDetailsItem";
import "./SortList.scss";

interface SortListProp {
  sortOptionList: SortType[];
  clickAction: any;
  sortBy: SortType;
}
const SortList: FunctionComponent<SortListProp> = ({ sortOptionList, clickAction, sortBy }) => {
  return (
    <div className="sort-list">
      {sortOptionList.map((item) => 
        (<FilmDetailsItem key={item} text={item} selected={sortBy} clickAction={clickAction} />)
      )}
    </div>
  );
};

const mapStateToProps = (state: { sortOptionList: SortType[]; sortBy: SortType; }) => {
  return {
    sortOptionList: state.sortOptionList,
    sortBy: state.sortBy 
  }
}

const mapDispatchToProps = ((dispatch: any) => {
  return {
    clickAction: (event: any) => {
      const htmlElement = event.target as HTMLElement;
      const selection = htmlElement.innerText === 'release date' ? 'release date' : 'rating';

      return dispatch(toggleSort(selection))
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortList);