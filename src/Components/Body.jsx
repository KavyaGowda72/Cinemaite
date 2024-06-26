import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={appRoute} />
    </>
  );
};

export default Body;
