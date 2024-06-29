import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Heart2 from "../../components/Heart2";
import "./styles.scss";

const Framer3D = () => {
  return (
    <>
      <div className="container">
        <Canvas
          camera={{ position: [0, 0, 700], fov: 50 }}
          gl={{ alpha: true }}
        >
          {/* <ambientLight intensity={0.5} /> */}
          {/* <directionalLight position={[10, 10, 5]} intensity={0} /> */}
          <Heart2 />
          <OrbitControls
            //enableDamping={false}
            enableRotate={true}
            enableZoom={false}
            enablePan={false}
            // minAzimuthAngle={-1}
            // maxAzimuthAngle={1}
            minPolarAngle={1.5}
            maxPolarAngle={false}
          />
        </Canvas>
      </div>
    </>
  );
};

export default Framer3D;
