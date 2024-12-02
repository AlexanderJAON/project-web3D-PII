import { Canvas } from "@react-three/fiber";
import Desert from "./models/Desert";
import { Html, KeyboardControls, OrbitControls, Text } from "@react-three/drei";
import Lizard from "./models/Lizard";
import { useEffect, useMemo, useState } from "react";
import "./Awareness.css";
import WelcomeText from "./WelcomeText";
import { Physics } from "@react-three/rapier";
import Staging from "./staging/Staging";
import SheriffCactus from "./models/SheriffCactus";
import HappyCactus from "./models/HappyCactus";
import WaterTap from "./models/WaterTap";

const EarthSceneAwa = () => {
  const [hovered, setHovered] = useState(false);
  const description = {
    happyCactus: "Te voy a presentar uno de los proyectos",
    sheriffCactus: "hello", 
    waterTap: "mailove",
  };
  return (
    <Canvas
      shadows
      camera={{ position: [1, 40, 80], fov: 45 }}
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
      <Physics debug>
      <Desert position={[-18.4, 0, 9]} rotation={[-0.2, 1.6, 0]} recieveShadows/>
      <Lizard castShadow position={[-18.4, 10, 7]} />
      <SheriffCactus position={[-37, 17, 30]} onPointerOver={() => setHovered("sheriffCactus")}
          onPointerOut={() => setHovered(null)} />
          {hovered === "sheriffCactus" && (
            <Text position={[-37, 19, 30]} distanceFactor={30} fontSize={1.1} color={"White"} outlineWidth={0.9} outlineColor="Black"  outlineOpacity={0.5} 
           
            >{"Desalación:\n- La desalación (o desalinización) es \n el proceso de eliminar la sal y otros \n minerales del agua salada, convirtiéndola \n en agua apta para consumo humano"}</Text>
          )} 
      <HappyCactus position={[-30, 10, 9]} onPointerOver={() => setHovered("happyCactus")}
          onPointerOut={() => setHovered(null)} />
          
          {hovered === "happyCactus" && (
            <Text position={[-30, 13, 9]} distanceFactor={30} fontSize={1.1} color={"White"} outlineWidth={0.9} outlineColor="Black"  outlineOpacity={0.5} 
           
            >{"Soluciones a la escasez de agua:\n- Desalación eficiente.\n- Energías renovables.\n- Reutilización de aguas residuales."}</Text>
          )} 
      <WaterTap position={[-20, 17, 30]} onPointerOver={() => setHovered("waterTap")}
          onPointerOut={() => setHovered(null)} />
          
          {hovered === "waterTap" && (
            <Text position={[-20, 17, 30]} distanceFactor={30} fontSize={1.1} color={"White"} outlineWidth={0.9} outlineColor="Black"  outlineOpacity={0.5} 
           
            >{"Energías renovables: \n ncorporar energía solar, \n eólica o geotérmica para alimentar \nlas plantas desalinizadoras, \nreduciendo el impacto ambiental \n y los costos operativos"}</Text>
          )} 
      <Staging/>
      </Physics>
      
      <OrbitControls/>
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
    "Hols, Soy Pepe el lagarto y te acompañaré en ésta aventura",
    "La escasez de agua es la falta de suficiente agua dulce disponible para satisfacer las necesidades humanas y ambientales y ocurre cuando el consumo supera la capacidad de fuentes de agua",
    "¿Sabías que el agua es un recurso finito?, Millones de personas no tienen acceso a agua potable.",
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
