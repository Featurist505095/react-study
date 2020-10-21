import React, { FunctionComponent } from "react";
import "./ErrorText.scss";

interface ErrorTextProps {
  text?: string;
}

export const ErrorText: FunctionComponent<ErrorTextProps> = ({
  text = 'No films found'
}) => {
  return (
    <h2 className={"error-text"}>{text}</h2>
  );
};