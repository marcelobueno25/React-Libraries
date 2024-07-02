import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import coracao from "../../assets/3D/coracao2.glb";

const Heart = () => {
  const { scene } = useGLTF(coracao);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive object={scene} ref={modelRef} />;
};

export default Heart;
