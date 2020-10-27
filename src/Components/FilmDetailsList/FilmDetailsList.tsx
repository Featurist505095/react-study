import React, { FunctionComponent } from "react";
import { InformationItem } from "../InformationItem/InformationItem";
import { SortList } from "../SortList/SortList";
import "./FilmDetailsList.scss";

interface FilmDetailsListProps {
  clickAction: any;
  selected: string;
}

export const FilmDetailsList: FunctionComponent<FilmDetailsListProps> = ({ clickAction, selected }) => {
  const order = 'Order by: '
  const sortList = ['release date', 'rating'];
  
  return (
    <div className="film-details-list">
      <InformationItem text={order}/>
      <SortList criteria={sortList} clickAction={clickAction} selected={selected}/>
    </div>
  );
};