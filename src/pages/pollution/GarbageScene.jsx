import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { RigidBody, Physics } from "@react-three/rapier";
import Trash1 from "./models/trashmodels/Trash1";
import Trash2 from "./models/trashmodels/Trash2";
import Trash3 from "./models/trashmodels/Trash3";
import Trash4 from "./models/trashmodels/Trash4";
import Trash5 from "./models/trashmodels/Trash5";
import Trash7 from "./models/trashmodels/Trash7";
import Fish1 from "./models/trashmodels/Fish1"; // Modelo de tiburón
import * as THREE from "three";
import Fish2 from "./models/trashmodels/Fish2";
import Fish3 from "./models/trashmodels/Fish3";
import Fish4 from "./models/trashmodels/Fish4";
import Fish6 from "./models/trashmodels/Fish6";
import Fish7 from "./models/trashmodels/Fish7";
import Postprocessing from "../acidification/postprocessing/Postprocessing";

const InteractiveTrash = ({
  TrashModel,
  position,
  rotation,
  scale,
  onRightClick,
}) => {
  const ref = useRef();

  const handlePointerDown = (event) => {
    event.stopPropagation();
    if (event.button === 2) {
      // Clic derecho
      onRightClick(position);
    } else {
      // Aplica impulso inicial al objeto
      const impulseDirection = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize();

      const impulse = impulseDirection.multiplyScalar(1);
      ref.current.applyImpulse(
        { x: impulse.x, y: impulse.y, z: impulse.z },
        true
      );
    }
  };

  return (
    <RigidBody
      ref={ref}
      position={position}
      rotation={rotation}
      colliders="cuboid"
    >
      <mesh onPointerDown={handlePointerDown} castShadow receiveShadow>
        <TrashModel scale={scale} />
      </mesh>
    </RigidBody>
  );
};

// Genera basura aleatoria
const generateTrash = (trashComponents, trashCount) => {
  const trashElements = [];
  for (let i = 0; i < trashCount; i++) {
    const TrashModel =
      trashComponents[Math.floor(Math.random() * trashComponents.length)];
    const position = [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ];
    const rotation = [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI,
    ];
    const scale = Math.random() * 0.5 + 0.5;

    trashElements.push({ TrashModel, position, rotation, scale });
  }
  return trashElements;
};

const EarthScene = () => {
  const [trashElements, setTrashElements] = useState([]);
  const [fishElements, setFishElements] = useState([]);
  const [topicIndex, setTopicIndex] = useState(0);
  const [cameraPosition, setCameraPosition] = useState([12, 2, 0]);
  const [fishCounter, setFishCounter] = useState(1);
  const controlsRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  const trashComponents = [Trash1, Trash2, Trash3, Trash4, Trash5, Trash7];
  const fishComponents = [Fish1, Fish2, Fish3, Fish4, Fish6, Fish7];
  const trashCount = 60;

  const messages = [
    {
      title: "Efectos de la Basura en el Agua",
      text: "Los desechos plásticos y químicos contaminan los ríos y océanos, afectando la biodiversidad acuática.",
    },
    {
      title: "Impacto en los Ecosistemas",
      text: "La basura genera zonas muertas en los océanos, donde no puede sobrevivir la vida marina.",
    },
    {
      title: "Responsabilidad Humana",
      text: "El 80% de la contaminación marina proviene de actividades terrestres, como desechos mal gestionados.",
    },
    {
      title: "Contaminación por Microplásticos",
      text: "Los microplásticos, presentes en muchos productos, se acumulan en los océanos y afectan a toda la cadena alimentaria.",
    },
    {
      title: "Impacto en la Salud Humana",
      text: "Los productos químicos tóxicos en el agua pueden entrar en la cadena alimentaria, afectando la salud de los humanos a través del consumo de mariscos.",
    },
    {
      title: "Muerte de Especies Marinas",
      text: "La ingestión de plásticos y desechos provoca la muerte de miles de especies marinas cada año.",
    },
    {
      title: "Reciclaje y Reducción de Residuos",
      text: "Reducir, reutilizar y reciclar ayuda a minimizar la cantidad de desechos que terminan en los cuerpos de agua.",
    },
    {
      title: "Restauración de Hábitats Marinos",
      text: "Proyectos de limpieza y restauración de hábitats marinos son cruciales para recuperar los ecosistemas dañados por la basura.",
    },
    {
      title: "El Papel de las Empresas en la Contaminación",
      text: "Las industrias deben tomar medidas para reducir los desechos plásticos y mejorar la gestión de sus residuos.",
    },
    {
      title: "Interacción con la Basura",
      text: "Puedes interactuar con la basura. Haz clic izquierdo para empujarla y clic derecho para limpiarla y descubrir algo nuevo.",
    },
  ];

  useEffect(() => {
    const generatedTrash = generateTrash(trashComponents, trashCount);
    setTrashElements(generatedTrash);
  }, []);

  const updateTopic = (direction) => {
    if (isAnimating) return;

    setIsAnimating(true);

    const newIndex =
      (topicIndex + direction + messages.length) % messages.length;
    setTopicIndex(newIndex);

    const newCameraPosition = [
      Math.cos((newIndex * (2 * Math.PI)) / messages.length) * 12,
      2,
      Math.sin((newIndex * (2 * Math.PI)) / messages.length) * 12,
    ];

    moveCamera(newCameraPosition);
  };

  const moveCamera = (targetPosition) => {
    let startTime = null;
    const duration = 1;

    const animateCamera = (time) => {
      if (!startTime) startTime = time;
      const progress = (time - startTime) / (duration * 1000);
      if (progress < 1) {
        const currentPosition = controlsRef.current.object.position;
        currentPosition.lerp(new THREE.Vector3(...targetPosition), 0.05);
        controlsRef.current.update();
        requestAnimationFrame(animateCamera);
      } else {
        controlsRef.current.object.position.set(...targetPosition);
        controlsRef.current.update();
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animateCamera);
  };

  const handleRightClick = (TrashModel) => {
    setTrashElements((prev) =>
      prev.filter((item) => item.TrashModel !== TrashModel)
    );
    const FishModel =
      fishComponents[Math.floor(Math.random() * fishComponents.length)];
    const position = [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ];
    setFishElements((prev) => [...prev, { FishModel, position }]);
  };

  useEffect(() => {
      const audio = new Audio("./sounds/ca1.mp3");
      audio.loop = true;
      audio.play();
  
      return () => {
        audio.pause();
        audio.currentTime = 0; // Resets the audio if needed
      };
    }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {topicIndex < messages.length && (
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "3%",
            zIndex: 10,
            background: "rgba(0, 0, 0, 0.7)",
            padding: "30px",
            borderRadius: "10px",
            color: "white",
            maxWidth: "400px",
          }}
        >
          <h1 style={{ fontSize: "4rem", margin: "15px 0" }}>
            {messages[topicIndex].title}
          </h1>
          <p style={{ fontSize: "1.5rem" }}>{messages[topicIndex].text}</p>
          <button
            style={{
              marginTop: "15px",
              padding: "15px 30px",
              fontSize: "1.5rem",
              background: "#09bc86",
              border: "none",
              borderRadius: "5px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              if (topicIndex === messages.length - 1) {
                setTopicIndex(messages.length);
              } else {
                updateTopic(1);
              }
            }}
          >
            {topicIndex === messages.length - 1 ? "¡Vamos!" : "Siguiente"}
          </button>
        </div>
      )}

      <Canvas
        shadows
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Physics gravity={[0, 0, 0]}>
          <directionalLight
            castShadow
            intensity={2}
            position={[0, 10, 0]}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <ambientLight />
          {trashElements.map((element, i) => (
            <InteractiveTrash
              key={i}
              TrashModel={element.TrashModel}
              position={element.position}
              rotation={element.rotation}
              scale={element.scale}
              onRightClick={() => handleRightClick(element.TrashModel)}
            />
          ))}
          {fishElements.map((fish, i) => (
            <RigidBody key={i} position={fish.position} colliders="hull">
              <fish.FishModel scale={1} />
            </RigidBody>
          ))}
        </Physics>
        <OrbitControls
          ref={controlsRef}
          enablePan
          enableZoom
          enableRotate
          makeDefault
        />
        <Environment files="./hdr/UNDERWATER.hdr" background />
        <Postprocessing/>
      </Canvas>
    </div>
  );
};

export default EarthScene;
