import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      {/* <div>Homepage</div>
      <button onClick={() => removeUser()}>Logout</button> */}

      <div className="w-full h-full ">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Homepage;
