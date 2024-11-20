import React, { useRef } from 'react';
import { Canvas, useFrame  } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import RotatingCamera from '../acidification/RotatingCamera';
import Trash1 from './models/trashmodels/Trash1';
import Trash2 from './models/trashmodels/Trash2';
import Trash3 from './models/trashmodels/Trash3';
import Trash4 from './models/trashmodels/Trash4';
import Trash5 from './models/trashmodels/Trash5';
import Trash6 from './models/trashmodels/Trash6';
import Trash7 from './models/trashmodels/Trash7';
import Fish from '../acidification/models/Fish';
import OceanFloor from './models/trashmodels/OceanFloor';

const EarthScene = ({ cameraPosition }) => {

  const FloatingTrash = ({ TrashModel, position, rotation, scale }) => {
    const ref = useRef();
  
    // Hook para animar la posición y rotación
    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();
  
      // Movimiento tipo flotación en el eje Y
      if (ref.current) {
        ref.current.position.y = position[1] + Math.sin(elapsedTime + position[0]) * 0.5;
  
        // Rotación lenta en los ejes
        ref.current.rotation.x = rotation[0] + Math.sin(elapsedTime * 0.1) * 0.1;
        ref.current.rotation.y = rotation[1] + Math.cos(elapsedTime * 0.1) * 0.1;
      }
    });
  
    return (
      <group ref={ref} position={position} rotation={rotation} scale={scale}>
        <TrashModel />
      </group>
    );
  };
  
  const generateTrash = () => {
    const trashComponents = [Trash1, Trash2, Trash3, Trash4, Trash5, Trash7];
    const trashElements = [];
    const trashCount = 220; // Incrementa la cantidad para más basura
  
    for (let i = 0; i < trashCount; i++) {
      const Trash = trashComponents[Math.floor(Math.random() * trashComponents.length)];
      const position = [
        (Math.random() - 0.5) * 40, // x posición: rango más amplio
        (Math.random() - 0.5) * 40, // y posición: rango amplio para dispersión vertical
        (Math.random() - 0.5) * 40  // z posición: rango más amplio
      ];
      const rotation = [
        Math.random() * Math.PI,   // x rotation
        Math.random() * Math.PI,   // y rotation
        Math.random() * Math.PI    // z rotation
      ];
      const scale = Math.random() * 0.5 + 0.5;
  
      trashElements.push(
        <FloatingTrash
          key={i}
          TrashModel={Trash}
          position={position}
          rotation={rotation}
          scale={scale}
        />
      );
    }
  
    return trashElements;
  };

  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 12], fov: 45 }}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >

      <RotatingCamera cameraPosition={cameraPosition || [0, 2, 12]} />
      <directionalLight
        castShadow
        intensity={2}
        position={[0, 10, 0]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight />
      <Fish />
      {generateTrash()}
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Environment files="./hdr/UNDERWATER.hdr" background />
    </Canvas>
  );
};

export default EarthScene;