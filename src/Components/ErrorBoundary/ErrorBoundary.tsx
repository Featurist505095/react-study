import React from "react";
import "./ErrorBoundary.scss";

export const ErrorBoundary = (props: any) => {
  const Text = () => (<h2>Something went wrong!</h2>)
  let err = false;

  return <>{err ? <Text /> : props.children}</>
}