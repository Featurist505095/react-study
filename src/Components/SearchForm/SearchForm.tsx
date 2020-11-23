import React, { FunctionComponent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_URL } from "../../const";
import { fetchMoviesByServer, updateData, updateInputData } from "../../store/actionCreators";
import { stateSelector } from "../../store/reducers";
import { SearchButton } from "../SearchButton";
import { SearchFormInput } from "../SearchFormInput";
import { SearchOptionBlock } from "../SearchOptionBlock";
import "./SearchForm.scss";

/*interface ISearchForm {
  sortBy: SortType;
  searchBy: SearchType;
  searchData: string;
  searchInput: string;
  movies: FilmDataType[];
}*/

export const SearchForm: FunctionComponent = () => {
  const {sortBy, searchBy, searchData, searchInput} = useSelector(stateSelector);
  let firstPause = useRef(false);
  const sortByOriginal = sortBy === 'rating' ? 'vote_average' : 'release_date';
  const searchByOriginal = searchBy === 'GENRE' ? 'genres' : 'title';
  const searchUrl = `${MOVIE_URL}movies?sortBy=${sortByOriginal}&sortOrder=desc&search=${searchData.replace(' ', '%20')}&searchBy=${searchByOriginal}`;

  //dispatch(fetchMoviesByServer(searchBy, se)));

  const dispatch = useDispatch();

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
      <SearchButton clickAction={clickAction} />
    </form>
  );
};