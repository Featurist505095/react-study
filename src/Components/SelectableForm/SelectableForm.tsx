import React, { FunctionComponent } from "react";
import { SelectableList } from "../SelectableList/SelectableList";
import { InformationItem } from "../InformationItem/InformationItem";
import "./SelectableForm.scss";

interface SelectableFormProps {
  filmCount?: number;
  orderAction?: any;
  selected?: string;
  genre?: string;
}
export const SelectableForm: FunctionComponent<SelectableFormProps> = ({ filmCount = 0, orderAction, selected='' , genre }) => {
  if (filmCount < 1 && genre === undefined) {
    return (
      <div className="selectable-form"></div>
    );
  }

  return (genre === undefined) ?
  (
    <div className="selectable-form">
      <InformationItem text={`${filmCount} movies found`} />
      <SelectableList orderAction={orderAction} selected={selected}/>
    </div>
  ) :
  (
    <div className="selectable-form">
      <InformationItem text={`Films by ${genre} genre`} />
    </div>
  );
};