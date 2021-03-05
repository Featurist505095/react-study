import MOVIE_URL from "../const";

export const GET_MOVIES_BY_GENRE_ENDPOINT = (genre: string) => 
    `https://reactjs-cdp.herokuapp.com/movies?search=${genre}&searchBy=genres`;

export const GET_MOVIES_BY_ALL_ENPOINTS = (sortBy: string, searchBy: string, text: string) => 
    `${MOVIE_URL}movies?sortBy=${sortBy}&sortOrder=desc&search=${text}&searchBy=${searchBy}`;

    export default GET_MOVIES_BY_ALL_ENPOINTS;
