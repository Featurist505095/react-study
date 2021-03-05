import React, { FunctionComponent } from "react";
import InformationItem from "../InformationItem";
import SortList from "../SortList";
import "./FilmDetailsList.scss";

const FilmDetailsList: FunctionComponent = () => {
  const order = 'Sort by: '
  
  return (
    <div className="film-details-list">
      <InformationItem text={order} />
      <SortList />
    </div>
  );
};

export default FilmDetailsList;