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


// Componente de basura interactiva
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
      title: "Interacción con la Basura",
      text: "Puedes interactuar con la basura. Haz clic izquierdo para empujarla y clic derecho para limpiarla y descubrir algo nuevo.",
    },
  ];

  useEffect(() => {
    const generatedTrash = generateTrash(trashComponents, trashCount);
    setTrashElements(generatedTrash);
  }, []);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.object.position.set(...cameraPosition);
      controlsRef.current.update();
    }
  }, [cameraPosition]);

  const updateTopic = (direction) => {
    const newIndex =
      (topicIndex + direction + messages.length) % messages.length;
    setTopicIndex(newIndex);

    setCameraPosition([
      Math.cos((newIndex * (2 * Math.PI)) / messages.length) * 12,
      2,
      Math.sin((newIndex * (2 * Math.PI)) / messages.length) * 12,
    ]);
  };

  const handleRightClick = (TrashModel) => {
    // Filtra los elementos de basura para eliminar los del tipo clicado
    setTrashElements((prev) =>
      prev.filter((item) => item.TrashModel !== TrashModel)
    );

    // Selecciona un pez aleatorio
    const FishModel =
      fishComponents[Math.floor(Math.random() * fishComponents.length)];
    const position = [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ];

    // Agrega el nuevo pez al estado
    setFishElements((prev) => [...prev, { FishModel, position }]);
  };
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
            padding: "20px",
            borderRadius: "10px",
            color: "white",
            maxWidth: "300px",
          }}
        >
          <h1 style={{ fontSize: "3rem", margin: "10px 0" }}>
            {messages[topicIndex].title}
          </h1>
          <p style={{ fontSize: "1.2rem" }}>{messages[topicIndex].text}</p>
          <button
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "#09bc86",
              border: "none",
              borderRadius: "5px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              if (topicIndex === messages.length - 1) {
                setTopicIndex(messages.length); // Cierra el cuadro
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

          {/* Renderizar basura */}
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

          {/* Renderizar peces */}
          {fishElements.map((fish, i) => (
            <RigidBody key={i} position={fish.position} colliders="hull">
              <fish.FishModel scale={1} />{" "}
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
      </Canvas>
    </div>
  );
};

export default EarthScene;