import React, { FunctionComponent } from "react";

interface ISearchFormInput{ 
    changeAction: any;
}

export const SearchFormInput: FunctionComponent<ISearchFormInput> = ({ changeAction }) => {
  return (
    <>
        <label className="search-label" htmlFor="search-input">{'FIND YOUR MOVIE'}</label>
        <input id="search-input" className="search-input" autoComplete="off" onChange={changeAction} /> 
    </>
  );
};