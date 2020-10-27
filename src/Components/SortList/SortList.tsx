import React, { FunctionComponent } from "react";
import { FilmDetailsItem } from "../FilmDetailsItem/FilmDetailsItem";
import "./SortList.scss";

interface SortListProp {
  criteria: string[];
  clickAction: any;
  selected: string;
}
export const SortList: FunctionComponent<SortListProp> = ({ criteria, clickAction, selected }) => {

  return (
    <div className="sort-list">
      {criteria.map((item) => {
        const select = item === selected ? true : false;

        return (<FilmDetailsItem key={item} text={item} select={select} clickAction={clickAction} />);
      })}
    </div>
  );
};