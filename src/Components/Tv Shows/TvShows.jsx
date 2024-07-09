import React from "react";
import useTvTrailer from "./Custom Hooks/useTvTrailer";
import VideoBackground from "../VideoBackground";
import { useSelector } from "react-redux";

const TvShows = () => {
  useTvTrailer();
  const tvTrailer = useSelector((store) => store.tvShows.tvTrailer);
  if (!tvTrailer) return;

  const { id } = tvTrailer;

  return (
    <div>
      <VideoBackground movieId={id} />
      <h2 className="text-black  pt-40">Hello TvShows</h2>
    </div>
  );
};

export default TvShows;
