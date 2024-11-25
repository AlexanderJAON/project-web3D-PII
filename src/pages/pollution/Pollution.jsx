import React, { useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import Island from "./models/Island";
import PileTrash from "./models/PileTrash";
import Exclamation from "./models/Exclamation_point";

function CameraControls() {
  const { camera } = useThree();

  useEffect(() => {
    const handleKeyDown = (event) => {
      const step = 5; // Tamaño del paso de movimiento de la cámara

      switch (event.key) {
        case "ArrowUp": // Mover hacia adelante
          camera.position.z -= step;
          break;
        case "ArrowDown": // Mover hacia atrás
          camera.position.z += step;
          break;
        case "ArrowLeft": // Mover hacia la izquierda
          camera.position.x -= step;
          break;
        case "ArrowRight": // Mover hacia la derecha
          camera.position.x += step;
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [camera]);

  return null;
}

const EarthScene = ({ onExclamationClick }) => {
  const navigate = useNavigate();

  const handleExclamationClick = () => {
    onExclamationClick(); // Llama la función recibida como prop
  };

  const goToGarbageScene = () => {
    navigate("/GarbageScene");
  };

  return (
    <Canvas shadows camera={{ position: [0, 120, 150], fov: 60 }}>
      <directionalLight
        castShadow
        intensity={0.2}
        position={[0, 20, 400]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Island />
      <OrbitControls />
      <CameraControls />
      <PileTrash position={[-160, 1.4, 0]} rotation={[0, Math.PI / 18, 0]} />
      <PileTrash position={[-177, 1.4, 20]} rotation={[0, Math.PI / -42, 0]} />
      <Exclamation position={[-177, 10, 20]} onClick={handleExclamationClick} />
      <Html position={[-177, 22, 20]} center>
        <div
          style={{
            color: "#ff0000",
            fontSize: "2rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Descubre
        </div>
      </Html>
      <Exclamation position={[-177, 10, 20]} onClick={goToGarbageScene} />
      <PileTrash position={[-160, 1.4, 40]} rotation={[0, Math.PI / 3.7, 0]} />
      <PileTrash position={[-125, 1.4, -20]} rotation={[0, Math.PI / 1, 0]} />
      <Environment files="./hdr/sky3.hdr" background />
    </Canvas>
  );
};

const Pollution = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isBoxVisible, setIsBoxVisible] = useState(true); // Estado para controlar visibilidad

  const handleButtonClick = () => {
    setIsBoxVisible(false); // Oculta el cuadro de texto
  };

  const handleExclamationClick = () => {
    setShowPopup(true);
  };

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      {/* Cuadro de texto */}
      {isBoxVisible && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "3%",
            transform: "translateY(-50%)",
            color: "white",
            textAlign: "left",
            zIndex: 1,
            padding: "20px",
            maxWidth: "400px",
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "3rem", margin: "10px 0" }}>
            Contaminación del Agua
          </h1>
          <p style={{ fontSize: "1.2rem" }}>
            La contaminación del agua es uno de los mayores desafíos
            medioambientales. Desde residuos plásticos hasta productos químicos
            tóxicos, nuestros ríos, lagos y océanos se enfrentan a una crisis
            sin precedentes. Más de 2 mil millones de personas carecen de acceso
            a agua potable, y los ecosistemas acuáticos sufren un deterioro
            irreversible.
          </p>
          <button
            className="btn-primary fade-in"
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              fontSize: "1.2rem",
              borderRadius: "30px",
              background: "#09bc86",
              color: "white",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              transition: "background 0.3s ease, transform 0.2s ease",
            }}
            onClick={handleButtonClick}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            Explora
          </button>
        </div>
      )}

      
      <EarthScene onExclamationClick={handleExclamationClick} />
    </div>
  );
};

export default Pollution;
