import React, { useEffect, useState  } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Island from './models/Island';
import PileTrash from './models/PileTrash';
import Exclamation from './models/Exclamation_point';
import { Html } from '@react-three/drei';

function CameraControls() {
  const { camera } = useThree();

 

  useEffect(() => {
    const handleKeyDown = (event) => {
      const step = 5; // Tamaño del paso de movimiento de la cámara

      switch (event.key) {
        case 'ArrowUp': // Mover hacia adelante
          camera.position.z -= step;
          break;
        case 'ArrowDown': // Mover hacia atrás
          camera.position.z += step;
          break;
        case 'ArrowLeft': // Mover hacia la izquierda
          camera.position.x -= step;
          break;
        case 'ArrowRight': // Mover hacia la derecha
          camera.position.x += step;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [camera]);

  return null;
}

const EarthScene = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleExclamationClick = () => {
    setShowPopup(true);
  }; 
  
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
        <CameraControls /> {/* Agrega los controles de cámara aquí */}
        <PileTrash position={[-160 , 1.4 , 0 ]} rotation={[0, Math.PI / 18, 0]} />
        <PileTrash position={[-177 , 1.4 , 20 ]} rotation={[0, Math.PI / -42, 0]} />
        {/* Exclamation model with clickable Html text */}
        <Exclamation position={[-177 , 10 , 20 ]} onClick={handleExclamationClick} />
        <Html position={[-177, 22, 20]} center>
          <div style={{ color: '#ff0000', fontSize: '2rem', fontWeight: 'bold', cursor: 'pointer' }}>
            Descubre
          </div>
        </Html>

        {/* Popup that appears on click */}
        {showPopup && (
          <Html position={[0, 50, 0]} center>
            <div style={{
              padding: '20px', background: 'rgba(0, 0, 0, 0.8)', color: '#ffffff',
              borderRadius: '8px', fontSize: '1.5rem', textAlign: 'center'
            }}>
              Próximamente
            </div>
          </Html>
        )}
        <Exclamation position={[-177 , 10 , 20 ]} />
        <PileTrash position={[-160 , 1.4 , 40 ]} rotation={[0, Math.PI / 3.7, 0]} />
        <PileTrash position={[-125 , 1.4 , -20 ]} rotation={[0, Math.PI / 1, 0]} />
    </Canvas>
  );
};

const Pollution = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Función para manejar el clic en el modelo de exclamación
  const handleExclamationClick = () => {
    setShowPopup(true);
  };

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      {/* Contenido de introducción y descripción */}
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
      
      {/* Escena 3D con la funcionalidad de exclamación y texto emergente */}
      <EarthScene onExclamationClick={handleExclamationClick} />

      {/* Recuadro emergente "Próximamente" */}
      {showPopup && (
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          padding: '20px', background: 'rgba(0, 0, 0, 0.8)', color: '#ffffff',
          borderRadius: '8px', fontSize: '1.5rem', textAlign: 'center', zIndex: 2
        }}>
          Próximamente
        </div>
      )}
    </div>
  );
};

export default Pollution;