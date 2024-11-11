import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MantaRay from "./models/MantaRay";
import MiniOcean from "./models/MiniOcean";
import "./Shortage.css";
import { useNavigate } from "react-router-dom";


const EarthScene = () => {
  return (
    <Canvas shadows camera={{ position: [-1, 0, 17], fov: 55 }}>
      <directionalLight
        castShadow
        intensity={2}
        position={[0, 10, 0]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MantaRay castShadow position={[-1, -5.2, 0]} onClick={() => window.open('https://youtu.be/2qxhlCuTe4w?si=gj_XhZsGQLzpevBt', '_blank')} />
      <MiniOcean position={[0, -10.2, 0]} />
      <OrbitControls />
    </Canvas>
  );
};



const Shortage = () => {

  const navigate = useNavigate();

  const goToAwareness = () => {
    navigate("/awareness");
  };
 
  return (
    <div
      class="container-shortage"
      style={{ height: "100vh", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          color: "black",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: "20px 0" }} className="fade-in">
          Escasez del agua
        </h1>
        <p
          style={{ fontSize: "1.5rem", maxWidth: "700px", margin: "0 auto" }}
          className="fade-in"
        >
          ¿Sabías que miles de millones de personas en el mundo no tienen acceso
          a agua potable? La escasez de agua es uno de los mayores desafíos de
          nuestro tiempo.
        </p>
        <button className="btn-awareness" onClick={goToAwareness}> continuar </button>
      </div>
      <EarthScene />
    </div>
  );
};

export default Shortage;
