import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GptMovieRecommendation from "./GptMovieRecommendation";

const Body = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Browse />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRoute} />
    </>
  );
};

export default Body;
