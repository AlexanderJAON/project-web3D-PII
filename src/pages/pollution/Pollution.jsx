import React, { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, FirstPersonControls,Text3D } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { VideoTexture } from "three";
import Island from "./models/Island";
import PileTrash from "./models/PileTrash";
import Exclamation from "./models/Exclamation_point";
import Pipe from "./models/Pipe";
import Liquid from "./models/Liquid";
import Tree from "./models/Tree";

// Componente que proyecta el video como textura
const YouTubeScreen = ({ videoUrl, onTogglePlayPause }) => {
  const videoRef = useRef();
  const videoTextureRef = useRef();

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Reanudar si está pausado
        videoRef.current.muted = false; // Rehabilitar el sonido al reproducir
      } else {
        videoRef.current.pause(); // Pausar si está reproduciendo
      }
      onTogglePlayPause(); // Llama la función para actualizar el estado de los controles
    }
  };

  useEffect(() => {
    // Crear elemento <video>
    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "anonymous"; // Asegura que no haya problemas con CORS
    video.loop = true;
    video.muted = true; // Inicialmente silenciado para cumplir políticas de autoplay
    video.play();

    videoRef.current = video; // Guardar referencia al video

    // Crear textura de video
    const texture = new VideoTexture(video);
    videoTextureRef.current = texture;
  }, [videoUrl]);

  return (
    <mesh
      position={[-19, 40, 12.7]} // Posición del marco en la escena
      rotation={[0, Math.PI / 2.5, 0]} // Rotación para que quede hacia el espectador
      onClick={togglePlayPause} // Alternar reproducción al hacer clic
    >
      <planeGeometry args={[16, 9]} />
      {videoTextureRef.current && (
        <meshBasicMaterial map={videoTextureRef.current} />
      )}
    </mesh>
  );
};

const EarthScene = ({ onExclamationClick }) => {
  const navigate = useNavigate();
  const [controlsEnabled, setControlsEnabled] = useState(true); // Estado para habilitar/deshabilitar los controles de la cámara

  const handleExclamationClick = () => {
    onExclamationClick(); // Llama la función recibida como prop
  };

  const goToGarbageScene = () => {
    navigate("/GarbageScene");
  };

  const goToSpillScene = () => {
    navigate("/SpillScene");
  };

  const toggleControls = () => {
    setControlsEnabled((prev) => !prev); // Alternar estado de los controles de la cámara
  };

  // Ruta del video (debe ser local o de un servidor accesible)
  const videoUrl = "/videos/v1.mp4";

  return (
    <Canvas shadows camera={{ position: [-5, 40, 16],rotation: [0, Math.PI / 2.5, 0], fov: 90 }}>
      {/* Iluminación */}
      <directionalLight
        castShadow
        intensity={0.5}
        position={[0, 100, 100]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight intensity={0.3} />

      {/* Modelos */}
      <Island />
      <PileTrash position={[-160, 1.4, 0]} rotation={[0, Math.PI / 18, 0]} />
      <PileTrash position={[-177, 1.4, 20]} rotation={[0, Math.PI / -42, 0]} />
      <Exclamation position={[-177, 10, 20]} onClick={handleExclamationClick} />
      <Exclamation position={[-177, 10, 20]} onClick={goToGarbageScene} />
      <PileTrash position={[-160, 1.4, 40]} rotation={[0, Math.PI / 3.7, 0]} />
      <PileTrash position={[-125, 1.4, -20]} rotation={[0, Math.PI / 1, 0]} />
      <Pipe position={[140, 4, 106]} rotation={[0, Math.PI / 0.6, 0]} />
      <Liquid position={[146.1, -15, 120]} rotation={[0, Math.PI / 7, 0]} />
      <Liquid position={[147, 8, 138]} rotation={[Math.PI, Math.PI / 7, 0]} />
      <Exclamation position={[145, 20, 115]} onClick={goToSpillScene} />
      <Tree position={[10, 0, -100]} />
      <Tree position={[25, 1, -110]} />
      <Tree position={[16, 2, -112]} />
      <Tree position={[20, -1, -120]} />
      <Tree position={[3, 2, -100]} />
      <Tree position={[3, 1, -128]} />
      <Exclamation position={[6, 8, -120]} onClick={goToGarbageScene} />

      {/* Proyección del video como textura */}
      <YouTubeScreen videoUrl={videoUrl} onTogglePlayPause={toggleControls} />

      {/* Controles de la cámara estilo FPS */}
      <FirstPersonControls
        movementSpeed={12}
        lookSpeed={0.1}
        lookVertical={true}
        position={[0, 200, 100]}

      />

      <Text3D
        font="/fonts/Impact_Club_Regular.json"
        size={0.5}
        height={0.2}
        position={[-19, 35, 17]}
        rotation={[0, Math.PI / 2.5, 0]}
      >
        Clic para reproducir.
        <meshStandardMaterial color="black" />
      </Text3D>

      {/* Ambiente HDR */}
      <Environment files="./hdr/sky3.hdr" background />
    </Canvas>
  );
};

const Pollution = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isBoxVisible, setIsBoxVisible] = useState(true);

  const handleButtonClick = () => {
    setIsBoxVisible(false);
  };

  const handleExclamationClick = () => {
    setShowPopup(true);
  };

  return (
    <div style={{ height: "100vh", position: "relative" }}>
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
