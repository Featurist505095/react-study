import React, { useState, FunctionComponent } from "react";

import "./CompNew.scss";

interface IAppProps {
  readonly text: string;
  count?: number;
}

export const CompNew: FunctionComponent<IAppProps> = ({
  text,
  count
}) => {
  const [counter, setCount] = useState(count);

  return (
    <h3
      className="function-new-component"
      onClick={(): void => {
        counter ? setCount(counter * 2) : setCount(counter);
      }}
    >
      Do you know "{text}"? It is my {count} calling. Can we multiply it?{" "}
      {counter ? counter : "NO!"}
    </h3>
  );
};