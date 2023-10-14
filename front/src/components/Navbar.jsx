import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks";

import ProfileDropDown from "./ProfileDropDown";

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav className="w-full h-[10vh] bg-[#1E1E2B] text-white flex items-center justify-center gap-[68vw] ">
      <Link to={"/"}>
        <div className="h-fit ">Mukagen Merch</div>
      </Link>
      {user ? (
        <ul className="flex items-center justify-around h-16 w-[20%]">
          <li className="z-20">
            <Link to={"/create"}>Create design</Link>
          </li>
          <li className="z-20">
            <Link to={"/mydesigns"}>My design</Link>
          </li>
          <li className="z-20">
            <ProfileDropDown />
          </li>
        </ul>
      ) : (
        <Link
          type="button"
          to={"/login"}
          className="text-white
          font-medium rounded-full
          text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700   border-gray-700"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
