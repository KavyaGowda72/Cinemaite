import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video  pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl ">{title}</h1>
      <p className="py-6 w-1/3 font-semibold">
        {overview.substring(0, 200)}...
      </p>
      <div className="flex justify-start space-x-3">
        <button className="bg-white text-black hover:bg-opacity-80 p-2 w-[120px]  rounded-lg font-semibold text-xl">
          {" "}
          Play
        </button>
        <button className="bg-gray-500 text-white hover:bg-opacity-50 p-2 py-0  w-[150px]  rounded-lg font-semi-bold text-xl">
          {" "}
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
