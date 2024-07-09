import React from "react";
import usePeoplePopular from "./CustomHooks/usePeoplePopular";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  usePeoplePopular();
  const data = useSelector((store) => store.movies.peoplePopular);
  if (!data) return;
  console.log(data);
  return (
    <div className="mt-0 pl-4  md:-mt-64 md:pl-12 relative z-20 bg-black ">
      <MovieList title={"Most Liked Movies"} movies={data} />
    </div>
  );
};

export default MovieContainer;
