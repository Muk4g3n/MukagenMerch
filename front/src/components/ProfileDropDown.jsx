import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout, useUser } from "../hooks";

const ProfileDropDown = () => {
  const logout = useLogout();
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getNameLetters = (name) => {
    const names = name.split(" ");
    return `${names[0][0]}${names[1][0]}`;
  };

  const items = [
    { name: "Profile", type: "link", link: "profile", added: true },
    { name: "Settings", type: "link", link: "settings", added: false },
    { name: "Logout", type: "button", added: true },
  ];

  return (
    <div className="relative">
      <button
        className="bg-slate-200 w-[2.5rem] h-[2.5rem] text-black rounded-full focus:outline-none tracking-wider"
        onClick={toggleDropdown}
      >
        {getNameLetters(user.name)}
      </button>
      {isOpen && (
        <div className="absolute -right-1/2 mt-2 w-28 bg-white border rounded-lg shadow-lg flex flex-col z-10">
          {items.map((item, index) => {
            // <li
            //   key={index}
            //   className="py-2 px-4 text-black hover:text-gray-200 cursor-pointer"
            // >
            //   {item.name}
            // </li>

            if (item.type === "link") {
              return (
                <Link
                  to={item.added ? item.link : ""}
                  key={index}
                  className={`py-2 px-4 text-black 
                  ${
                    item.added
                      ? "hover:scale-105 hover:font-bold cursor-pointer transition-all ease-in-out"
                      : " line-through "
                  } `}
                >
                  {item.name}
                </Link>
              );
            }

            if (item.type === "button") {
              return (
                <button
                  onClick={logout}
                  key={index}
                  className=" w-full h-[2rem] bg-red-600 rounded-br-lg rounded-bl-lg hover:font-bold cursor-pointer transition-all ease-in-out"
                >
                  {item.name}
                </button>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
