import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateData } from "../Utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonCLick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(fullName.current.value);
    const message = ValidateData(email.current.value, password.current.value);

    setErrorMessage(message);
  };

  const handleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <div>
        <Header />

        <div className="absolute ">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="back-logo"
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="  bg-black text-white  absolute w-4/12 bg-opacity-85 p-10 my-32  mx-auto right-0 left-0 flex flex-col"
        >
          <h1 className="text-white font-bold text-3xl my-5 mx-2 text-start">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 m-2 bg-neutral-800 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-4 m-2 bg-neutral-800 rounded-lg"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 m-2 bg-neutral-800 rounded-lg"
          />
          <p className="text-red-700 py-2 m-2 font-semibold">{errorMessage}</p>
          <button
            className="p-2 m-2 bg-red-600 rounded-lg"
            onClick={handleButtonCLick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            onClick={handleSignInForm}
            className="text-white font-thin p-2 my-3 cursor-pointer"
          >
            {isSignIn
              ? "New to Netflix? Sign Up"
              : "Alredy Registered? Sign In"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
