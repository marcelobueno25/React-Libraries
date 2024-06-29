import React, { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import coracao from "../../assets/3D/coracao2.glb";

const Heart = () => {
  // const gltf = useLoader(GLTFLoader, "./Poimandres.gltf");
  const { scene } = useGLTF(coracao);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Ajuste a velocidade da rotação conforme necessário
    }
  });

  return (
    <>
      <Suspense fallback={null}>
        <primitive object={scene} ref={modelRef} />;
      </Suspense>
    </>
  );
};

export default Heart;
