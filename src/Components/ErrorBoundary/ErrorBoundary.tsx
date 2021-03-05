import React from "react";
import ErrorText from "../ErrorText";
import "./ErrorBoundary.scss";


interface IErrorProps {}

interface IErrorState {
  catchedError: boolean | Error
}
class ErrorBoundary extends React.Component<IErrorProps, IErrorState> {
  constructor(props: IErrorProps) {
    super(props);
    this.state = { catchedError: false };
  }

  componentDidCatch(error: Error){
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