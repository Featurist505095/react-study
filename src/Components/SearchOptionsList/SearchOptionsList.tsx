import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchType } from "../../pages/home/StateType";
import { toggleSearch } from "../../store/actionCreators";
import { SearchOptionItem } from "../SearchOptionItem";
import "./SearchOptionsList.scss";

interface ISearch {
  searchBy: SearchType;
  searchOptionList: SearchType[];
}

export const SearchOptionsList: FunctionComponent = () => {
  const searchOptionsList = useSelector((state: ISearch) => state.searchOptionList);
  const selected = useSelector((state: ISearch) => state.searchBy);
  const dispatch = useDispatch();
  const clickAction = (event: any) => {
    const htmlElement = event.target as HTMLElement;
    const selection = htmlElement.innerText === 'TITLE' ? 'TITLE' : 'GENRE';

    return dispatch(toggleSearch(selection));
  };

  return (
    <>
      {searchOptionsList.map((item) => {
        return <SearchOptionItem key={item} option={item} clickAction={clickAction} selected={selected}/>
      })}
    </>
  );
};
