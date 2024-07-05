import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateData } from "../Utils/validate";
import { auth } from "../Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../Slices/userSlice";
import { Background_Image, User_Logo } from "../Utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonCLick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    // console.log(fullName.current.value);
    const message = ValidateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: User_Logo,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // console.log("auth.currentUser", auth.currentUser);
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <div>
        <Header />

        <div className="absolute ">
          <img src={Background_Image} alt="back-logo" />
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
              ref={name}
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
            className="p-2 m-2 bg-red-600 rounded-lg hover:bg-red-700"
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
