import React, { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";
import mercedes from "../../assets/3D/car-mersedes.glb";

const CardMercedes = () => {
  const { scene } = useGLTF(mercedes);
  const modelRef = useRef();

  return (
    <Center>
      <primitive object={scene} ref={modelRef} />
    </Center>
  );
};

export default CardMercedes;
