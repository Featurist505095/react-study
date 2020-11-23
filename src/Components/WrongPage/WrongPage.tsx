import React, { FunctionComponent } from "react";
import { ErrorText } from "../ErrorText";
import { SearchButton } from "../SearchButton";

export const WrongPage: FunctionComponent = () => {
  return (
    <>
        <ErrorText text='Oooops... Wrong page!'/>
        <SearchButton size='small to-main' />
    </>
  );
};