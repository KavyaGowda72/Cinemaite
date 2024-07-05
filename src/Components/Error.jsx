import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex justify-center items-center bg-slate-50 h-80 m-10 p-6">
      <h2 className="text-bold text-3xl  ">
        {err.status} {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
