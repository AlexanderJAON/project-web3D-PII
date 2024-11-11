import { Canvas } from "@react-three/fiber";
import Desert from "./models/Desert";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import Lizard from "./models/Lizard";
import { useEffect, useMemo, useState } from "react";
import "./Awareness.css";
import WelcomeText from "./WelcomeText";

const EarthSceneAwa = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [-20.1, -0.5, 10], fov: 55 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <directionalLight
        castShadow
        intensity={2}
        position={[0, 10, 0]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <WelcomeText/>
      <Desert position={[-18.4, -1, 9]} rotation={[-0.03, 0.4, 0]} />
      <Lizard castShadow position={[-18.4, -0.9, 9]} />
    </Canvas>
  );
};

const Awareness = () => {
  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "back", keys: ["ArrowDown", "KeyS"] },
      { name: "left", keys: ["ArrowLeft", "KeyA"] },
      { name: "right", keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );

  const conversationMessages = [
    "Bienvenido al mundo de la conciencia ambiental",
    "Soy Pepe el lagarto y te acompañaré en ésta aventura",
    "La escasez de agua es la falta de suficiente agua dulce disponible para satisfacer las necesidades humanas y ambientales y ocurre cuando el consumo supera la capacidad de fuentes de agua",
    "¿Sabías que el agua es un recurso finito?",
    "Millones de personas no tienen acceso a agua potable.",
    "¿Estás listo para ayudar a crear un cambio positivo?",
    "¡Vamos a comenzar nuestra misión para proteger el agua!",
  ];

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    setIsPopupVisible(true);
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleNextMessage = () => {
    if (messageIndex < conversationMessages.length - 1) {
      setMessageIndex(messageIndex + 1);
    } else {
      setIsPopupVisible(false);
    }
  };

  return (
    <div className="conteiner-awareness">
        
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
          <img src="/images/lizard-pepe.png" class= "img-lizard" width="80px" height="100px" alt=""></img>
            <p>{conversationMessages[messageIndex]}</p>
            <button onClick={handleNextMessage}>
              {messageIndex < conversationMessages.length - 1
                ? "Siguiente"
                : "Cerrar"}
            </button>
          </div>
          
        </div>
      )}

      <KeyboardControls map={map}>
        <EarthSceneAwa />
      </KeyboardControls>
    </div>
  );
};

export default Awareness;
