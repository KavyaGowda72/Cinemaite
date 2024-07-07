import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // if (!movies) return;
  return (
    <div className="px-6 ">
      <h1 className="text-lg font-semibold  pt-6 pb-2 text-white">{title}</h1>
      <div className="flex  overflow-x-scroll scrollbar-hide  mt-1">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard movieData={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
