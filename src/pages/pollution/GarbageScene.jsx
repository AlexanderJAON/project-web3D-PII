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
import SharkAnimated from "./models/trashmodels/SharkAnimated"; // Importamos el modelo de tiburón
import Fish from "../acidification/models/Fish"
import * as THREE from "three";

// Componente que maneja la interacción con el objeto de basura (y genera tiburones)
const InteractiveTrash = ({ TrashModel, position, rotation, scale, onRightClick }) => {
  const ref = useRef();

  const handlePointerDown = (event) => {
    event.stopPropagation();
    if (event.button === 2) {
      // Clic derecho
      onRightClick(); // Llamamos a la función para eliminar todos los modelos de ese tipo y generar tiburones
    } else {
      // Aplica impulso inicial al objeto (empuje)
      const impulseDirection = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize();

      const impulse = impulseDirection.multiplyScalar(1); // Fuerza del empuje
      ref.current.applyImpulse({ x: impulse.x, y: impulse.y, z: impulse.z }, true);
    }
  };

  return (
    <RigidBody ref={ref} position={position} rotation={rotation} colliders="cuboid">
      <mesh onPointerDown={handlePointerDown} castShadow receiveShadow>
        <TrashModel scale={scale} />
      </mesh>
    </RigidBody>
  );
};

// Función para generar basura aleatoria
const generateTrash = (trashComponents, trashCount) => {
  const trashElements = [];
  for (let i = 0; i < trashCount; i++) {
    const TrashModel = trashComponents[Math.floor(Math.random() * trashComponents.length)];
    const position = [
      (Math.random() - 0.5) * 10, // x posición
      (Math.random() - 0.5) * 10, // y posición
      (Math.random() - 0.5) * 10, // z posición
    ];
    const rotation = [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI,
    ];
    const scale = Math.random() * 0.5 + 0.5;

    trashElements.push({
      TrashModel,
      position,
      rotation,
      scale,
    });
  }
  return trashElements;
};

const EarthScene = () => {
  const [trashElements, setTrashElements] = useState([]); // Elementos de basura
  const [sharkElements, setSharkElements] = useState([]); // Elementos de tiburones
  const controlsRef = useRef();

  const trashComponents = [Trash1, Trash2, Trash3, Trash4, Trash5, Trash7];
  const trashCount = 60;

  // Generamos los elementos de basura solo una vez, al montar el componente
  useEffect(() => {
    const generatedTrash = generateTrash(trashComponents, trashCount);
    setTrashElements(generatedTrash);
  }, []);

  // Función que se llama al hacer clic derecho sobre un objeto de basura
  const handleRightClick = (TrashModel) => {
    // Eliminar todos los modelos de ese tipo de la escena
    setTrashElements((prevTrashElements) =>
      prevTrashElements.filter((item) => item.TrashModel !== TrashModel)
    );

    // Añadir el modelo de SharkAnimated al hacer clic derecho
    // const newSharks = [];
    // const sharkCount = 1; // Generamos un tiburón por cada clic derecho

    // for (let i = 0; i < sharkCount; i++) {
    //   newSharks.push(
    //     <SharkAnimated
    //       key={`shark-${i}-${Math.random()}`} // Usamos índice y un valor aleatorio para evitar duplicados
    //       position={[ // Posición aleatoria del tiburón
    //         (Math.random() - 0.5) * 10,
    //         (Math.random() - 0.5) * 10,
    //         (Math.random() - 0.5) * 10,
    //       ]}
    //     />
    //   );
    // }

    // setSharkElements((prevSharks) => [...prevSharks, ...newSharks]); // Agregamos los nuevos tiburones a la lista de tiburones
  };

  return (
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
            onRightClick={() => handleRightClick(element.TrashModel)} // Cuando se hace clic derecho, se eliminan los modelos de basura y se generan tiburones
          />
        ))}
      </Physics>

      <SharkAnimated position={[10,0,0]}/>
      <Fish/>
      
      <OrbitControls
        ref={controlsRef}
        enablePan={true}
        enableZoom={true}
        enableRotate={true} // Mantiene el control de la cámara
        makeDefault
      />
      <Environment files="./hdr/UNDERWATER.hdr" background />
      
    </Canvas>
  );
};

export default EarthScene;
