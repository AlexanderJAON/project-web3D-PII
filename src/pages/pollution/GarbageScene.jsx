import React, { useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { RigidBody, Physics } from "@react-three/rapier";
import Trash1 from './models/trashmodels/Trash1';
import Trash2 from './models/trashmodels/Trash2';
import Trash3 from './models/trashmodels/Trash3';
import Trash4 from './models/trashmodels/Trash4';
import Trash5 from './models/trashmodels/Trash5';
import Trash7 from './models/trashmodels/Trash7';
import Fish from '../acidification/models/Fish';
import * as THREE from 'three';

const InteractiveTrash = ({ TrashModel, position, rotation, scale }) => {
  const ref = useRef();

  // Este es el evento cuando el ratón hace clic en el objeto
  const handlePointerDown = (event) => {
    event.stopPropagation();

    // Aplica impulso inicial al objeto (empuje)
    const impulseDirection = new THREE.Vector3(
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2
    ).normalize();

    const impulse = impulseDirection.multiplyScalar(1); // Fuerza del empuje
    ref.current.applyImpulse({ x: impulse.x, y: impulse.y, z: impulse.z }, true);
  };

  return (
    <RigidBody ref={ref} position={position} rotation={rotation} colliders="cuboid">
      <mesh
        onPointerDown={handlePointerDown}
        castShadow
        receiveShadow
      >
        <TrashModel scale={scale} />
      </mesh>
    </RigidBody>
  );
};

const generateTrash = () => {
  const trashComponents = [Trash1, Trash2, Trash3, Trash4, Trash5, Trash7];
  const trashElements = [];
  const trashCount = 60; // Ajusta la cantidad de basura

  for (let i = 0; i < trashCount; i++) {
    const TrashModel = trashComponents[Math.floor(Math.random() * trashComponents.length)];
    const position = [
      (Math.random() - 0.5) * 10, // x posición
      (Math.random() - 0.5) * 10, // y posición
      (Math.random() - 0.5) * 10  // z posición
    ];
    const rotation = [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    ];
   

    trashElements.push(
      <InteractiveTrash
        key={i}
        TrashModel={TrashModel}
        position={position}
        rotation={rotation}
        
      />
    );
  }

  return trashElements;
};

const EarthScene = () => {
  const controlsRef = useRef();

  // Genera los modelos de basura solo una vez
  const trashElements = useMemo(() => generateTrash(), []);

  return (
    <Canvas
      shadows
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
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
        <Fish />
        {trashElements}
      </Physics>
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
