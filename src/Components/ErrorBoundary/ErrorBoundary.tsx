import React from "react";
import { ErrorText } from "../ErrorText";
import "./ErrorBoundary.scss";

export default class ErrorBoundary extends React.Component{
    state = {
      catchedError: false
    }

  componentDidCatch(error: any){
    this.setState({ catchedError: error });
  }

  render(){
    const { children } = this.props;

    if (this.state.catchedError)
      return (
        <div className="movie-list">
          <ErrorText />
        </div>);

    return children;
  }
}