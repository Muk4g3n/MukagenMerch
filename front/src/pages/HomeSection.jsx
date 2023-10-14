import React from "react";
import Card from "../components/Card";
import CanvasModel from "../canvas";

const HomeSection = () => {
  return (
    <div className="w-[100%] h-[90vh] flex flex-col items-center gap-10 overflow-x-hidden relative bg-red-500">
      {/* <div className="w-full h-[10%] mt-4 flex items-center">
        <div className="w-[45%] h-[2px] rounded-full bg-black"></div>
        <h1 className="text-3xl text-center w-[14%]  font-bold">
          Your Designs
        </h1>
        <div className="w-[45%] h-[2px] rounded-full bg-black"></div>
      </div>
      <div className="w-[92%] flex justify-center gap-6 flex-wrap mb-6">
        {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((e) => (
          <Card />
        ))}
      </div> */}
      <CanvasModel
        targetPosition={[0.4, 0, -1.6]}
        targetRotation={[0, -0.5, 0]}
        dark={true}
      />
      <div className="absolute w-full h-full left-0 flex items-center">
        <div className=" w-1/2 h-2/3 flex flex-col items-center text-white gap-3">
          <h1 className="text-4xl font-bold mt-[6rem] w-2/3">
            The best 3D preview
          </h1>
          <p className="w-2/3 text-xl">
            Create your unique and exclusive shirt with our brand-new 3D
            custimization tool. <strong>Unleash your imagination</strong> and
            define your own style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
