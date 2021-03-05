import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { SortType } from "../../pages/home/StateType";
import { toggleSort } from "../../store/actionCreators";
import "./SortList.scss";
import SortListView from "./SortListView";

interface SortListProp {
  sortOptionList: SortType[];
  clickAction: any;
  sortBy: SortType;
}
const SortList: FunctionComponent<SortListProp> = ({ sortOptionList, clickAction, sortBy }) => {
  return (<SortListView sortOptionList={sortOptionList} clickAction={clickAction} sortBy={sortBy} />);
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