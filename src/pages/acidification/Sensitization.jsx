
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import RotatingCamera from './RotatingCamera';
import { useState } from 'react';

const EarthScene = ({ cameraPosition }) => {
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
      <RotatingCamera cameraPosition={cameraPosition} />
      <directionalLight
        castShadow
        intensity={2}
        position={[0, 10, 0]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight />
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      <Environment files="./hdr/UnderWater_A_4k.hdr" background />
    </Canvas>
  );
};



const Acidification = () => {
  const [topicIndex, setTopicIndex] = useState(0);
  const [cameraPosition, setCameraPosition] = useState([0, 2, 12]);

  const topics = [
    {
      title: '¿Cómo ocurre la Acidificación de los Océanos?',
      description:
        'Cuando el dióxido de carbono atmosférico se disuelve en el agua de mar, se convierte en ácido carbónico...',
    },
    {
      title: 'Impacto en los arrecifes de coral',
      description:
        'La acidificación afecta la capacidad de los corales para construir sus esqueletos...',
    },
    {
      title: 'Efectos sobre la vida marina',
      description:
        'Muchas especies marinas son vulnerables a cambios en el pH del océano...',
    },
  ];

  const handleButtonClick = () => {
    const newIndex = (topicIndex + 1) % topics.length;
    setTopicIndex(newIndex);

    
    setCameraPosition([
      Math.cos(newIndex * (2 * Math.PI) / topics.length) * 12, 
      2, 
      Math.sin(newIndex * (2 * Math.PI) / topics.length) * 12
    ]);
  };

  

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <video autoPlay muted loop className="background-video">
        <source src="/path-to-video.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translateY(-50%)',
          color: 'white',
          textAlign: 'left',
          zIndex: 1,
          padding: '20px',
          maxWidth: '400px',
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          borderRadius: '10px'
        }}
      >
        <h1 style={{ fontSize: '3rem', margin: '10px 0' }} className="fade-in">
          {topics[topicIndex].title}
        </h1>
        <p style={{ fontSize: '1.2rem' }} className="fade-in">
          {topics[topicIndex].description}
        </p>

        <button
          className="btn-primary fade-in"
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            fontSize: '1.2rem',
            borderRadius: '30px',
            background: '#09bc86',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            transition: 'background 0.3s ease, transform 0.2s ease',
          }}
          onClick={handleButtonClick}
          onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; }}
          onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
        >
          Explorar más
        </button>
      </div>

      <EarthScene cameraPosition={cameraPosition} />
    </div>
  );
};

export default Acidification;