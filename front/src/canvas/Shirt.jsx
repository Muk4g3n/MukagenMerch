import React from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useColor } from "../hooks";
import { Euler } from "three";

const Shirt = ({ editable = false, defaultColor = "#F9F8FF" }) => {
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  const { color } = useColor();

  useFrame((state, delta) => {
    easing.dampC(
      materials.lambert1.color,
      editable ? color : defaultColor,
      0.25,
      delta
    );
  });

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      ></mesh>
    </group>
  );
};

export default Shirt;
