import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import Error from "./Error";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        <Error />;
      });
  };
  return (
    <>
      <div className=" absolute flex justify-between  w-screen px-12 py-2 bg-gradient-to-b from-black z-10">
        <img
          className="w-44 "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
        {user && (
          <div className="flex items-center">
            <img className="w-9 h-9" src={user?.photoURL} alt="user-logo" />
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
