import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Custom Hooks/useNowPlayingMovies";
import usePopularMovies from "../Custom Hooks/usePopularMovies";
import useTopRatedMovies from "../Custom Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Custom Hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";

import MainContainer from "./MainContainer";
import SecondatryContainer from "./SecondatryContainer";

const Browse = () => {
  const gptSerach = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="">
      {gptSerach ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondatryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
