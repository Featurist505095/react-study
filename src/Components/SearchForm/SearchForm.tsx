import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_URL } from "../../const";
import { SearchType, SortType } from "../../pages/home/StateType";
import { fetchMoviesByServer, updateData, updateInputData } from "../../store/actionCreators";
import { FilmDataType } from "../MovieItem/FilmDataType";
import { SearchButton } from "../SearchButton";
import { SearchFormInput } from "../SearchFormInput";
import { SearchOptionBlock } from "../SearchOptionBlock";
import "./SearchForm.scss";

interface ISearchForm {
  sortBy: SortType;
  searchBy: SearchType;
  searchData: string;
  searchInput: string;
  movies: FilmDataType[];
}

export const SearchForm: FunctionComponent = () => {
  const sortBy = useSelector((state: ISearchForm) => state.sortBy);
  const searchBy = useSelector((state: ISearchForm) => state.searchBy);
  const searchData = useSelector((state: ISearchForm) => state.searchData);
  const searchInput = useSelector((state: ISearchForm) => state.searchInput);
  const sortByOriginal = sortBy === 'rating' ? 'vote_average' : 'release_date';
  const searchByOriginal = searchBy === 'GENRE' ? 'genres' : 'title';
  const searchUrl = `${MOVIE_URL}movies?sortBy=${sortByOriginal}&sortOrder=desc&search=${searchData.replace(' ', '%20')}&searchBy=${searchByOriginal}`;
  const dispatch = useDispatch();

  const clickAction = async () => {
    dispatch(updateData(searchInput));
  };
  useEffect(() => {
    dispatch(fetchMoviesByServer(searchUrl));
  }, [searchData, searchBy, sortBy])

  const changeAction = (event: any) => {
    dispatch(updateInputData(event.target.value))};

  return (
    <form className="search-form">
      <SearchFormInput changeAction={changeAction}/>
      <SearchOptionBlock />
      <SearchButton clickAction={clickAction} />
    </form>
  );
};