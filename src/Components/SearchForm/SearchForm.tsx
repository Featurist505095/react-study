import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MOVIE_URL from "../../const";
import { fetchMoviesByServer, updateData, updateInputData } from "../../store/actionCreators";
import { stateSelector } from "../../store/reducers";
import "./SearchForm.scss";
import SearchFormView from "./SearchFormView";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchForm: FunctionComponent = () => {
  const {sortBy, searchBy, searchData, searchInput} = useSelector(stateSelector);
  const query = useQuery();
  const text = query.get('text');
  const sort = query.get('sort');
  const search = query.get('search');
  const sortByOriginal = sort === 'rating' ? 'vote_average' : 'release_date';
  const searchByOriginal = search === 'GENRE' ? 'genres' : 'title';
  const searchUrl = text && sort && search ?
    `${MOVIE_URL}movies?sortBy=${sortByOriginal}&sortOrder=desc&search=${text.replace(' ', '%20')}&searchBy=${searchByOriginal}` :
    "";

  const dispatch = useDispatch();

  const clickAction = () => {
    dispatch(updateData(searchInput));
  };


  useEffect(() => {
    dispatch(fetchMoviesByServer(searchUrl));
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