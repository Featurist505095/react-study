import React, { FunctionComponent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MOVIE_URL } from "../../const";
import { fetchMoviesByServer, updateData, updateInputData } from "../../store/actionCreators";
import { stateSelector } from "../../store/reducers";
import { SearchButton } from "../SearchButton";
import { SearchFormInput } from "../SearchFormInput";
import { SearchOptionBlock } from "../SearchOptionBlock";
import "./SearchForm.scss";

const useQuery = () => new URLSearchParams(useLocation().search);

export const SearchForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const {sortBy, searchBy, searchData, searchInput} = useSelector(stateSelector);
  let firstPause = useRef(false);
  let firstUrl = useRef(true);
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

  const searchUrl = `${MOVIE_URL}movies?sortBy=${sortByOriginal}&sortOrder=desc&search=${searchDataOriginal}&searchBy=${searchByOriginal}`;


  //dispatch(fetchMoviesByServer(searchBy, se)));

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

  return (
    <form className="search-form">
      <SearchFormInput changeAction={changeAction} />
      <SearchOptionBlock />
      <SearchButton clickAction={clickAction} sortBy={sortBy} searchBy={searchBy} searchInput={searchInput} />
    </form>
  );
};