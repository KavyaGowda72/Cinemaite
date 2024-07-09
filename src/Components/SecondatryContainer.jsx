import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondatryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-zinc-950 w-screen ">
        <div className=" mt-0 pl-4  md:-mt-56 md:pl-12 relative z-20">
          {/* -mt-40 for overlaping */}
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList
            title={"Top-Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondatryContainer;
