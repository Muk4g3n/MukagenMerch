import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";

const CanvasModel = ({
  targetRotation = [0, 0, 0],
  targetPosition = [0, 0, -1.5],
  dark,
  editable,
  defaultColor,
}) => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className={`absolute w-full max-w-full h-full transition-all ease-in -z-10
      ${dark ? "bg-gradient-dark" : "bg-gradient"}`}
    >
      <ambientLight intensity={0.6} />
      <Environment preset="city" />
      <CameraRig
        targetRotation={targetRotation}
        targetPosition={targetPosition}
      >
        <Backdrop />
        <Center>
          <Shirt editable={editable} defaultColor={defaultColor} />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
