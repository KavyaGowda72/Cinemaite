import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen px-10 aspect-video  pt-[15%] sm:px-16  md:px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="mt-[25%] font-bold sm:mt-[15%] sm:text-2xl md:text-3xl md:mt-0 ">
        {title}
      </h1>
      <p className="text-sm w-1/3 hidden  md:block  md:py-6 md:w-1/3 md:font-semibold">
        {overview.substring(0, 200)}...
      </p>
      <div className="flex justify-start space-x-3 mt-2">
        <button className="w-14 rounded-md bg-white text-black hover:bg-opacity-80  sm:p-1 sm:w-[100px] sm:text-lg md:p-2 sm:rounded-lg md:w-[120px] md:rounded-lg font-semibold md:text-xl">
          {" "}
          Play
        </button>
        <button className=" px-1 rounded-md bg-gray-500 text-white hover:bg-opacity-50 sm:p-2 sm:py-0 sm:w-[150px] sm:text-xl    font-semi-bold md:p-2 md:text-xl md:w-[150px]  md:py-0   md:rounded-lg">
          {" "}
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
