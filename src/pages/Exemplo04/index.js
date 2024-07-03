import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import CardMercedes from "../../components/CardMercedes";
import "./styles.scss";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % carregado</Html>;
}

function Scene() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <CardMercedes />
      </Suspense>
      <OrbitControls onChange={(e) => console.log(e.target.object)} />
    </>
  );
}

const Exemplo04 = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Carro</h1>
        <h2 className="subtitle">Mercedes</h2>
        <Canvas
          camera={{
            position: [2, 1, 3],
          }}
          gl={{ alpha: true }}
          id="poisson"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Scene />
        </Canvas>
      </div>
    </>
  );
};

export default Exemplo04;
