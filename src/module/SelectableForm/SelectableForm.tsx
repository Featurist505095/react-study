import React, { FunctionComponent } from "react";
import { SelectableList } from "../SelectableList/SelectableList";
import { InformationItem } from "../InformationItem/InformationItem";
import "./SelectableForm.scss";

interface SelectableFormProps {
  filmCount: number;
  orderAction: any;
  selected: string;
}
export const SelectableForm: FunctionComponent<SelectableFormProps> = ({ filmCount, orderAction, selected }) => {
  if (filmCount < 1) {
    return (
      <div className="selectable-form"></div>
    );
  }

  const text = `${filmCount} movies found`;

  return (
    <div className="selectable-form">
      <InformationItem text={text} />
      <SelectableList orderAction={orderAction} selected={selected}/>
    </div>
  );
};