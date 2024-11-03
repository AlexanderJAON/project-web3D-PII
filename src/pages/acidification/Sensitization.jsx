import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import Seabed from './models/Seabed';



const goToSensitization = () => {
  navigate("/sensitization");
};

const EarthScene = () => {
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
        <directionalLight
          castShadow
          intensity={2}
          position={[0, 10, 0]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <ambientLight />
        <OrbitControls />
        <Seabed />
      </Canvas>
    );
  };
  

const Acidification = () => {
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
              Acidificación de los Océanos
            </h1>
            <p style={{ fontSize: '1.2rem' }} className="fade-in">
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