import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";

import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Slices/userSlice";
import { NETFLIX_LOGO } from "../Utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    onAuthStateChanged(auth, (user) => {
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
  }, []);
  return (
    <>
      <div className=" absolute flex justify-between  w-screen px-12 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44 " src={NETFLIX_LOGO} alt="netflix-logo" />

        {user && (
          <div className="flex items-center">
            <img
              className="w-9 h-9 rounded-md"
              src={user?.photoURL}
              alt="user-logo"
            />
            <button onClick={handleSignout} className="font-bold text-white">
              Log out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
