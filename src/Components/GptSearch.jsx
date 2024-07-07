import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieRecommendation from "./GptMovieRecommendation";
import { Background_Image } from "../Utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={Background_Image}
          alt="back-image"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieRecommendation />
      </div>
    </>
  );
};

export default GptSearch;
