import React from "react";
import useMovieTrailer from "../../Custom Hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import VideoBackground from "../VideoBackground";
import VideoTitle from "../VideoTitle";
import SecondatryContainer from "../SecondatryContainer";
import MovieContainer from "./MovieContainer";

const Movies = () => {
  const movies = useSelector((store) => store.movies?.popularMovies);
  if (!movies) return;
  const mainMovie = movies[3];

  //same as if(!movies) return;
  const { original_title, overview, id } = mainMovie;
  return (
    <>
      <div className=" ">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
        <MovieContainer />
      </div>
    </>
  );
};

export default Movies;
