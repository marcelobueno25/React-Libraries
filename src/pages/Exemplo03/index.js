import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./styles.scss";

const Box = ({ setActive, active, position, color }) => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.003;
  });

  return (
    <mesh
      ref={ref}
      castShadow
      position={position}
      onClick={() => setActive(!active)}
    >
      <boxGeometry args={[2, 3, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Plane = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[2, -3, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="lightgray" />
    </mesh>
  );
};

const Exemplo03 = () => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const ref2 = useRef();

  return (
    <>
      <h1>Exemplo03 - {active ? "ATIVO" : "DESATIVADO"}</h1>
      <div id="canvas-container">
        {!!loading && <h3>carregando...</h3>}
        <Canvas
          id="canvas"
          dpr={[1, 2]}
          camera={{ position: [0, 0, -10] }}
          onCreated={() => setLoading(false)}
        >
          <OrbitControls />
          <ambientLight intensity={Math.PI / 2} />
          <pointLight
            ref={ref2}
            position={[0, 0, -10]}
            decay={0}
            intensity={Math.PI}
          />
          {/* <PointLightHelper args={[ref2, size]} /> */}
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          {/* <perspectiveCamera fov={75} position={[0, 0, 5]} /> */}
          <orthographicCamera makeDefault position={[0, 0, 5]} zoom={1} />
          {/* <Box
            color={"blue"}
            position={[-2, 0, 0]}
            setActive={setActive}
            active={active}
          /> */}
          <Box
            color={"green"}
            position={[2, 0, 0]}
            setActive={setActive}
            active={active}
          />
          <Plane />
        </Canvas>
      </div>
    </>
  );
};

export default Exemplo03;
