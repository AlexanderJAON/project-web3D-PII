import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import Tortoise from './models/Tortoise';
import OceanFloor from './models/OceanFloor';

const EarthScene = () => {
  return (
    <Canvas
      shadows camera={{ position: [0, 2, 12], fov: 45 }}
      style={{ background: 'linear-gradient(#1e3d59, #1c2541)', marginTop: '50px' }}>
      <directionalLight
        castShadow
        intensity={2}
        position={[0, 10, 0]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}

      />
      <ambientLight />
      <Stars />
      <Tortoise castShadow />
      <OrbitControls />
      <OceanFloor position={[0, -1.2, 0]} />
    </Canvas>
  );
};

const Acidification = () => {
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
        <button className="btn-primary fade-in" style={{ marginTop: '20px' }}>
          Explorar más
        </button>
      </div>
      <EarthScene />
    </div>
  );
};

export default Acidification;
