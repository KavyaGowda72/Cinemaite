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
      <div className="absolute w-screen  bg-black  h-20  px-8 py-2 z-20 flex flex-col justify-between md:flex-row ">
        <img className="w-44  md:mx-0" src={NETFLIX_LOGO} alt="netflix-logo" />

        {user && (
          <>
            <div className="flex justify-between ">
              <ul className="text-white flex  items-center space-x-5 cursor-pointer">
                <li className="hover:text-gray-300 active:font-bold active:text-purple-900">
                  <Link to="/browse">Home</Link>
                </li>

                <li className="hover:text-gray-300">Movies</li>
                <li className="hover:text-gray-300">New & Popular</li>
                <li className="hover:text-gray-300">My List</li>
                <li className="hover:text-gray-300">Browse by Language</li>
              </ul>
            </div>

            <div className="flex p-2  items-center space-x-6 ">
              {gptSearch && (
                <select
                  className=" rounded-md px-2 outline-none"
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
                  className="text-white font-semibold hover:text-gray-200"
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
