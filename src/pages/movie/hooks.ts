import { useCallback, useEffect, useState} from "react";
import { FilmDataType } from "../../Components/MovieItem/FilmDataType";

export const useSorting = (data: FilmDataType[], setData: any) => {
    const [genre, setGenre] = useState(data[0].genres[0]);
    console.log(setGenre);
    const getFilteredData = (data: FilmDataType[] ) => {
      const returnData = data.filter((film) => film.genres[0] === genre);
      return returnData;
    }
  
    const onFilteredData = useCallback(() => {
      const updatedData = getFilteredData(data);
      setData(updatedData);
    }, [ data, setData ]);
    
    useEffect( () => {
      onFilteredData();
    }, [ setData ]);
}