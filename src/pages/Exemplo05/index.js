import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";
import "./styles.scss";

const Box = ({ position }) => {
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  //useFrame((state, delta) => (refMesh.current.rotation.x += delta));

  return (
    <group position={[0, -0.65, 0]}>
      <mesh
        castShadow
        position={position}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => (event.stopPropagation(), hover(true))}
        onPointerOut={(event) => hover(false)}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          metalness={1}
          color={hovered ? "hotpink" : "orange"}
        />
      </mesh>
      <AccumulativeShadows
        temporal
        frames={200}
        color="purple"
        colorBlend={0.5}
        opacity={1}
        scale={10}
        alphaTest={0.85}
      >
        <RandomizedLight
          amount={8}
          radius={5}
          ambient={0.5}
          position={[5, 3, 2]}
          bias={0.001}
        />
      </AccumulativeShadows>
    </group>
  );
};

function Dodecahedron(props) {
  const meshRef = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame(() => (meshRef.current.rotation.x += 0.01));
  return (
    <group {...props}>
      <mesh
        ref={meshRef}
        scale={clicked ? 1.5 : 1}
        onClick={() => click(!clicked)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <dodecahedronGeometry args={[0.75]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "#5de4c7"} />
      </mesh>
    </group>
  );
}

const Exemplo05 = () => {
  return (
    <>
      <div id="canvas-container">
        <Canvas id="canvas" camera={{ position: [3, 3, 5] }} shadows>
          <ambientLight intensity={Math.PI / 2} />
          <pointLight
            position={[0, 0, 3]}
            scale={0.2}
            decay={0}
            intensity={Math.PI}
          />
          <Box position={[0, -3, 0]} />
          <Dodecahedron />
          <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
        </Canvas>
      </div>
    </>
  );
};

export default Exemplo05;
