import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Loader } from "@react-three/drei";
import { RigidBody, Physics } from "@react-three/rapier";
import { RGBELoader } from "three-stdlib";
import * as THREE from "three";
import Trash1 from "./models/trashmodels/Trash1";
import Trash2 from "./models/trashmodels/Trash2";
import Trash3 from "./models/trashmodels/Trash3";
import Trash4 from "./models/trashmodels/Trash4";
import Trash5 from "./models/trashmodels/Trash5";
import Trash7 from "./models/trashmodels/Trash7";
import Fish1 from "./models/trashmodels/Fish1";
import Fish2 from "./models/trashmodels/Fish2";
import Fish3 from "./models/trashmodels/Fish3";
import Fish4 from "./models/trashmodels/Fish4";
import Fish6 from "./models/trashmodels/Fish6";
import Fish7 from "./models/trashmodels/Fish7";

const InteractiveTrash = ({ TrashModel, position, rotation, scale, onRightClick }) => {
  const ref = useRef();

  const handlePointerDown = (event) => {
    event.stopPropagation();
    if (event.button === 2) {
      onRightClick(position);
    } else {
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

const generateTrash = (trashComponents, trashCount) => {
  const trashElements = [];
  for (let i = 0; i < trashCount; i++) {
    const TrashModel = trashComponents[Math.floor(Math.random() * trashComponents.length)];
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
  const controlsRef = useRef();

  const trashComponents = [Trash1, Trash2, Trash3, Trash4, Trash5, Trash7];
  const fishComponents = [Fish1, Fish2, Fish3, Fish4, Fish6, Fish7];
  const trashCount = 60;

  const hdrTexture = useLoader(RGBELoader, "./hdr/UNDERWATER.hdr");

  // Aplicar un tono verde al HDR
  useEffect(() => {
    if (hdrTexture) {
      hdrTexture.encoding = THREE.sRGBEncoding;
      hdrTexture.magFilter = THREE.LinearFilter;
      hdrTexture.minFilter = THREE.LinearFilter;

      hdrTexture.onUpdate = () => {
        const colorFilter = new THREE.Color(0.5, 1, 0.5); // Verde
        for (let i = 0; i < hdrTexture.image.data.length; i += 4) {
          hdrTexture.image.data[i] *= colorFilter.r;     // Rojo
          hdrTexture.image.data[i + 1] *= colorFilter.g; // Verde
          hdrTexture.image.data[i + 2] *= colorFilter.b; // Azul
        }
      };
    }
  }, [hdrTexture]);

  useEffect(() => {
    const generatedTrash = generateTrash(trashComponents, trashCount);
    setTrashElements(generatedTrash);
  }, []);

  const handleRightClick = (TrashModel) => {
    setTrashElements((prev) => prev.filter((item) => item.TrashModel !== TrashModel));

    const FishModel = fishComponents[Math.floor(Math.random() * fishComponents.length)];
    const position = [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ];
    setFishElements((prev) => [...prev, { FishModel, position }]);
  };

  return (
    <Canvas shadows style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0 }}>
      <Physics gravity={[0, 0, 0]}>
        <directionalLight castShadow intensity={2} position={[0, 10, 0]} shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
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
            <fish.FishModel />
          </RigidBody>
        ))}

      </Physics>

      <OrbitControls ref={controlsRef} enablePan enableZoom enableRotate makeDefault />
      {hdrTexture && <Environment background map={hdrTexture} />}
    </Canvas>
  );
};

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <EarthScene />
    </Suspense>
  );
};

export default App;
