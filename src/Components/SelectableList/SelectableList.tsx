import React, { FunctionComponent } from "react";
import { InformationItem } from "../InformationItem/InformationItem";
import { SortList } from "../SortList/SortList";
import "./SelectableList.scss";

interface SelectableListProps {
  orderAction: any;
  selected: string;
}

export const SelectableList: FunctionComponent<SelectableListProps> = ({ orderAction, selected }) => {
  const order = 'Order by: '
  const sortList = ['release date', 'rating'];
  
  return (
    <div className="selectable-list">
      <InformationItem text={order}/>
      <SortList criteria={sortList} orderAction={orderAction} selected={selected}/>
    </div>
  );
};