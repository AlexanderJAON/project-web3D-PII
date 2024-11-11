import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import Tortoise from './models/Tortoise';
import OceanFloor from './models/OceanFloor';
import { useNavigate } from 'react-router-dom';

const EarthScene = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 12], fov: 45 }}
      style={{ background: 'linear-gradient(#1e3d59, #1c2541)', marginTop: '50px' }}
    >
      <directionalLight
        castShadow
        intensity={2}
        position={[0, 10, 0]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight />
      <Stars />
        <Tortoise castShadow onClick={() => window.open('https://youtu.be/HOIB_Yda8Xo?si=Ad9tT-ECet9TlWvD', '_blank')} />
      <OceanFloor position={[0, -1.2, 0]} />
    </Canvas>
  );
  
};

const Acidification = () => {
  const navigate = useNavigate();

  const goToSensitization = () => {
    navigate("/sensitization");
  };

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <video autoPlay muted loop className="background-video">
        <source src="/path-to-video.mp4" type="video/mp4" />
      </video>

      <div style={{ position: 'absolute', top: '0', width: '100%', color: 'black', textAlign: 'center', zIndex: 1 }}>
        <h1 style={{ fontSize: '4rem', margin: '20px 0' }} className="fade-in">
          Acidificación de los Océanos
        </h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '700px', margin: '0 auto' }} className="fade-in">
          Los océanos están absorbiendo dióxido de carbono a niveles alarmantes, provocando cambios drásticos en el equilibrio del pH y afectando la vida marina.
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
          onClick={goToSensitization}
          onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; }} 
          onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }} 
        >
          Explorar más
        </button>

      </div>
      <EarthScene />
    </div>
  );
};

export default Acidification;