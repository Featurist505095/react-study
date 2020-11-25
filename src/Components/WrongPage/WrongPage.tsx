import React, { FunctionComponent } from "react";
import ErrorText from "../ErrorText";
import SearchButton from "../SearchButton";

const WrongPage: FunctionComponent = () => {
  return (
    <>
      <ErrorText text='Oooops... Wrong page!' />
      <SearchButton size='small to-main' />
    </>
  );
};

export default WrongPage;