import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser, removeUser } from "../Slices/userSlice";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
  User_Logo,
} from "../Utils/constants";
import { clearMovies, toggleGptSearchView } from "../Slices/GptSlice";
import { changeLanguage } from "../Slices/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user sign-in/sign-up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe;
  }, []);

  const handleGptSearchClick = () => {
    //Toggle Gpt Search
    dispatch(toggleGptSearchView());
    dispatch(clearMovies());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <>
      <div className=" absolute w-screen h-20  px-8 py-2 z-20  justify-between bg-black sm:bg-slate-950 md:bg-black flex sm:flex-row md:flex-row ">
        <img
          className=" w-28 md:w-44 sm:w-44  md:mx-0  "
          src={NETFLIX_LOGO}
          alt="netflix-logo"
        />

        {user && (
          <>
            <div className="flex p-2  items-center space-x-3 md:space-x-6 sm:space-x-6 ">
              {gptSearch && (
                <select
                  className=" w-22 rounded-md px-2 outline-none"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              <button
                className="text-white space-x-3 rounded-lg px-2 py-1 mx-3 my-2 left-0 hover:text-gray-300 "
                onClick={handleGptSearchClick}
              >
                {gptSearch ? "Home" : "GPT Search "}
              </button>
              <div className="flex items-center space-x-1 right-0">
                <img className="w-9 h-9 rounded-md" src={User_Logo} alt="" />

                <button
                  className="text-white  hover:text-gray-200"
                  onClick={handleSignout}
                >
                  Sign out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
