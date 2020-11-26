import React, { FunctionComponent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MOVIE_URL from "../../const";
import { fetchMoviesByServer, updateData, updateInputData } from "../../store/actionCreators";
import { stateSelector } from "../../store/reducers";
import "./SearchForm.scss";
import SearchFormView from "./SearchFormView";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchForm: FunctionComponent = () => {

  const dispatch = useDispatch();
  const {sortBy, searchBy, searchData, searchInput} = useSelector(stateSelector);
  const firstPause = useRef(false);
  const firstUrl = useRef(true);
  const query = useQuery();
  const text = query.get('text');
  const sort = query.get('sort');
  const search = query.get('search');
  let searchDataOriginal: string | null = searchData.replace(' ', '%20');
  let sortByOriginal = sortBy === 'rating' ? 'vote_average' : 'release_date';
  let searchByOriginal = searchBy === 'GENRE' ? 'genres' : 'title';

  if (sort && search && text && firstUrl.current) {
    firstUrl.current = false;
    firstPause.current = true;
    searchDataOriginal = text;
    sortByOriginal = sort === 'rating' ? 'vote_average' : 'release_date';
    searchByOriginal = search === 'GENRE' ? 'genres' : 'title';
    dispatch(updateData(searchDataOriginal));
  }

  const searchUrl = `${MOVIE_URL}movies?sortBy=${sortByOriginal}
    &sortOrder=desc&search=${searchDataOriginal}&searchBy=${searchByOriginal}`;


  // dispatch(fetchMoviesByServer(searchBy, se)));

  const clickAction = async () => {
    dispatch(updateData(searchInput));
  };

  useEffect(() => {
    if (firstPause.current) {
      dispatch(fetchMoviesByServer(searchUrl));
    }
    firstPause.current = true;
  }, [searchData, sortBy]);

  const changeAction = (event: any) => {
    dispatch(updateInputData(event.target.value))};


/*
  //Не включает в себя работу с изменённым url.
  const {sortBy, searchBy, searchData, searchInput} = useSelector(stateSelector);
  const firstPause = useRef(false);
  const sortByOriginal = sortBy === 'rating' ? 'vote_average' : 'release_date';
  const searchByOriginal = searchBy === 'GENRE' ? 'genres' : 'title';
  const searchUrl = `${MOVIE_URL}movies?sortBy=${sortByOriginal}&sortOrder=desc&search=${searchData.replace(' ', '%20')}&searchBy=${searchByOriginal}`;

  const dispatch = useDispatch();

  const clickAction = async () => {
    dispatch(updateData(searchInput));
  };
  
  const changeAction = (event: any) => {
    dispatch(updateInputData(event.target.value))};

  useEffect(() => {
    if (firstPause.current) {
      dispatch(fetchMoviesByServer(searchUrl));
    }
    firstPause.current = true;
  }, [searchData, sortBy]);
*/
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