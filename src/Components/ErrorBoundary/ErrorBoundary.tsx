import React from "react";
import ErrorText from "../ErrorText";
import "./ErrorBoundary.scss";

class ErrorBoundary extends React.Component{
  state = { catchedError: false };

  componentDidCatch(error: any){
    this.setState({ catchedError: error });
  }

  render(){
    const { children } = this.props;
    const { catchedError } = this.state;
    if (catchedError)
      return (
        <div className="movie-list">
          <ErrorText />
        </div>
);

    return children;
  }
}

export default ErrorBoundary;