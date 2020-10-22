import React, { FunctionComponent } from "react";
import { optionsType } from "../../Types/OptionsType";
import { CompanyName } from "../CompanyName/CompanyName";
import { MovieCard } from "../MovieCard/MovieCard";
import { SearchForm } from "../SearchForm/SearchForm";
import "./Header.scss";

const filmTest = {id: 1111, time: 234, name: 'Film1', rate: 6.7, year: 1994, genre: 'Action', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquid iste ipsam mollitia! Distinctio, id? Corrupti recusandae dolor, quidem aliquam quaerat, vitae doloremque corporis incidunt accusamus deleniti optio facere molestias?'};

interface HeaderProps {
  options: optionsType[];
}

export const Header: FunctionComponent<HeaderProps> = ({ options }) => {
  return (
    <header>
      <CompanyName />
      <SearchForm options={options}/>
      <MovieCard {...filmTest} />
    </header>
  );
  //      <MovieCard {...filmTest} />
};