import React, { FunctionComponent } from "react";
import { FilmDetailsItem } from "../FilmDetailsItem/FilmDetailsItem";
import "./SortList.scss";

interface SortListProp {
  criteria: string[];
  orderAction: any;
  selected: string;
}
export const SortList: FunctionComponent<SortListProp> = ({ criteria, orderAction, selected }) => {

  return (
    <div className="sort-list">
      {criteria.map((item) => {
        const select = item === selected ? true : false;

        return (<FilmDetailsItem key={item} text={item} select={select} orderAction={orderAction} />);
      })}
    </div>
  );
};