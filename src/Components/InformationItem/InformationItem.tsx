import React, { FunctionComponent } from "react";
import "./InformationItem.scss";

interface InformationItemProps {
  text: string;
}

export const InformationItem: FunctionComponent<InformationItemProps> = ({
  text
}) => {
  return (
    <h3 className={"information-item"}>{text}</h3>
  );
};