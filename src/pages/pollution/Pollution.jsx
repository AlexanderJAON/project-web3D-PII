import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Island from './models/Island';
import PileTrash from './models/PileTrash';
import Exclamation from './models/Exclamation_point';
const EarthScene = () => {
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 120, 150], fov: 60 }}
      style={{ background: 'linear-gradient(#aad1e7, #063149)' }}>
        <directionalLight
          castShadow
          intensity={2}
          position={[0, 10, 0]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Island />
        <OrbitControls />
        <PileTrash position={[-160 , 1.4 , 0 ]} rotation={[0, Math.PI / 18, 0]}/>
        <PileTrash position={[-177 , 1.4 , 20 ]} rotation={[0, Math.PI / -42, 0]} />
        <Exclamation position={[-177 , 10 , 20 ]} />
        <PileTrash position={[-160 , 1.4 , 40 ]} rotation={[0, Math.PI /  3.7, 0]}/>
        <PileTrash position={[-125 , 1.4 , -20 ]} rotation={[0, Math.PI / 1, 0]}/>
    </Canvas>
  );
};
const Pollution = () => {
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: '20%', left: '0', transform: 'translateY(-50%)',
        zIndex: 1, width: 'fit-content'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '3rem', margin: '20px', fontFamily: 'Impact Club', lineHeight: '1.2', 
            display: 'inline-block', color: '#664d17'  
          }} className="fade-in">
            Contaminación <br /> del <br /> Agua
          </h1>
          <p style={{
            fontSize: '1.2rem', maxWidth: '700px', margin: '20px auto 0', fontFamily: 'Impact Club',
            textAlign: 'center', color: '#7fe00a'  
          }} className="fade-in">
            La contaminación del agua es uno de los mayores desafíos medioambientales. Desde residuos plásticos hasta productos químicos tóxicos, nuestros ríos, lagos y océanos se enfrentan a una crisis sin precedentes. Más de 2 mil millones de personas carecen de acceso a agua potable, y los ecosistemas acuáticos sufren un deterioro irreversible.
          </p>
        </div>
      </div>
      <EarthScene />
    </div>
  );
};

export default Pollution;