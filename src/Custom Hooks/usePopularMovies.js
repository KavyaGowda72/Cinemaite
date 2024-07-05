import { useEffect } from "react";
import { addPopularMovies } from "../Slices/movieSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

 

  const getPopularMovies = async () => {
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
    const json=await data.json()
   // console.log("json", json)
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;