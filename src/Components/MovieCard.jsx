import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ movieData }) => {
  //console.log("movie", movieData);
  const { poster_path } = movieData;
  if (!poster_path) return null;

  return (
    <div className="w-32 md:w-36 pr-4 cursor-pointer">
      <img src={IMG_CDN_URL + poster_path} alt="poster-logo" />
    </div>
  );
};

export default MovieCard;
