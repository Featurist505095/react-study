import React, { FunctionComponent } from "react";
import "./ErrorText.scss";

interface ErrorTextProps {
  text?: string;
}

const ErrorText: FunctionComponent<ErrorTextProps> = ({
  text = 'No films found'
}) => {
  return (
    <h2 className="error-text">{text}</h2>
  );
};

export default ErrorText;