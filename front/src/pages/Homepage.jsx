import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import CanvasModel from "../canvas";
import { useCanvas } from "../hooks";

const Homepage = () => {
  const { canvasOptions } = useCanvas();

  return (
    <>
      {/* <div>Homepage</div>
      <button onClick={() => removeUser()}>Logout</button> */}

      <div className="w-full h-full overflow-hidden relative">
        <Navbar />
        <div className=" w-full h-[90vh] relative">
          {/* <CanvasModel
            targetPosition={[0.4, 0, -1.6]}
            targetRotation={[0, -0.5, 0]}
            dark={true}
          /> */}
          <CanvasModel
            targetPosition={canvasOptions.targetPosition}
            targetRotation={canvasOptions.targetRotation}
            dark={canvasOptions.dark}
            editable={canvasOptions.editable}
          />
          <div className="absolute w-full h-full left-0 top-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
