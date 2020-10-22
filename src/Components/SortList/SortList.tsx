import React, { FunctionComponent } from "react";
import { SelectableItem } from "../SelectableItem/SelectableItem";
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
        if (item === selected) {
          return (<SelectableItem key={item} text={item} select={true} orderAction={orderAction} />);
        }
        return (<SelectableItem key={item} text={item} select={false} orderAction={orderAction} />);
      })}
    </div>
  );
};