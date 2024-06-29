import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Heart2 = () => {
  const heartShape = new THREE.Shape();

  const x = 0,
    y = 0;
  heartShape.moveTo(x, y);
  heartShape.bezierCurveTo(x, y - 3, x - 5, y - 3, x - 5, y);
  heartShape.bezierCurveTo(x - 5, y + 3, x - 2.5, y + 5, x, y + 7);
  heartShape.bezierCurveTo(x + 2.5, y + 5, x + 5, y + 3, x + 5, y);
  heartShape.bezierCurveTo(x + 5, y - 3, x, y - 3, x, y);

  const geometry = new THREE.ShapeGeometry(heartShape);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      scale={0.1}
      rotation={[0, 0, 0]}
    />
  );
};

export default Heart2;
