import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-gray-400 min-h-screen   w-screen flex flex-col    p-20 cursor-pointer    ">
        <div className=" mt-10 ml-20  space-y-5 ">
          <a
            target="blank"
            className="hover:text-gray-500"
            href="https://github.com/KavyaGowda72/Cinemaite"
          >
            Github
          </a>

          <ul className="flex flex-row space-x-7  ">
            <li className="hover:text-gray-500">Privacy</li>
            <li className="hover:text-gray-500">Contact Us</li>
            <li className="hover:text-gray-500">Help Center</li>
          </ul>

          <div className=" block hover:text-gray-500">
            <p>©️ 2024-♾️ Cinemaite, Inc.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
