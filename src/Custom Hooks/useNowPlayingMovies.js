import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Slices/movieSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();

    const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
  
   
  
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      //Memoization reduces api calls / calls when store is empty
      if(!nowPlayingMovies) getNowPlayingMovies();
    }, []);
  };
  
  export default useNowPlayingMovies;