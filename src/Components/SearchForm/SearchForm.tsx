import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchMoviesByServer, updateData, updateInputData, clearSearchData } from "../../store/actionCreators";
import { stateSelector } from "../../store/reducers";
import "./SearchForm.scss";
import SearchFormView from "./SearchFormView";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchForm: FunctionComponent = () => {
  const {sortBy, searchBy, searchData, searchInput} = useSelector(stateSelector);
  const query = useQuery();
  const text = query.get('text') || undefined;
  const sort = query.get('sort') || undefined;
  const search = query.get('search') || undefined;

  const dispatch = useDispatch();

  const clickAction = () => {
    dispatch(updateData(searchInput));
  };


  useEffect(() => {
    dispatch(fetchMoviesByServer(sort, search, text));
    dispatch(clearSearchData());
  }, [searchData, sortBy]);

  const changeAction = (event: any) => {
    dispatch(updateInputData(event.target.value))};

  return (
    <SearchFormView 
      changeAction={changeAction} 
      clickAction={clickAction} 
      sortBy={sortBy} 
      searchBy={searchBy} 
      searchInput={searchInput}
    />
  );
};

export default SearchForm;