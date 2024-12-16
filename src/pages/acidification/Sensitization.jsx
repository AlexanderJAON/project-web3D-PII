
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import RotatingCamera from './RotatingCamera';
import { useState, useEffect } from 'react';
import Fish from './models/Fish';
import Stones from './models/Stones';
import { Physics, RigidBody } from '@react-three/rapier';
import Alga from './models/Alga';
import Fish2 from './models/Fish2';
import Dolphin from './models/Dolphin';
import VideoModal from './VideoModal';
import Postprocessing from './postprocessing/Postprocessing';


const Modal = ({ onClose }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '15px',
        padding: '30px',
        textAlign: 'center',
        maxWidth: '500px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: '#09bc86' }}>
        ¡Bienvenido a la Sección de Acidificación de los Océanos!
      </h1>
      <p style={{ fontSize: '1rem', color: '#333' }}>
        Aquí encontrarás información detallada sobre la acidificación de los
        océanos y su impacto en la vida marina. 
      </p>
      <p style={{ fontSize: '1rem', color: '#333', marginTop: '10px' }}>
        Navega usando las flechas del teclado <b>adelante</b> y <b>atrás</b>.
        También puedes interactuar con algunos objetos al hacer clic en ellos.
      </p>
      <button
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
        onClick={onClose}
        onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; }}
        onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
      >
        ¡Comencemos!
      </button>
    </div>
  </div>
);




const EarthScene = ({ cameraPosition }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleFishClick = () => {
    setShowVideoModal(true);
  };
  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      {showVideoModal && <VideoModal onClose={() => setShowVideoModal(false)} />}
      <Canvas
        shadows
        
        camera={{ position: [0, 2, 12], fov: 45 }}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
      
        <Physics gravity={[0, 0, 0]} >
          <RotatingCamera cameraPosition={cameraPosition} />
          <directionalLight
            castShadow
            intensity={1}
            position={[0, 10, 0]}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <ambientLight />
          <Fish  onClick={handleFishClick}/>
          <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
          <Environment files="./hdr/UnderWater_A_4k.hdr" background />
          <Alga />
          <Fish2/>
          <Stones/>
          <Dolphin/>
        </Physics>
        <Postprocessing/>
      </Canvas>
      </div>
    );
    
};



const Acidification = () => {
  const [topicIndex, setTopicIndex] = useState(0);
  const [cameraPosition, setCameraPosition] = useState([0, 2, 12]);
  const [showModal, setShowModal] = useState(true);
  const topics = [
    {
      title: '¿Cómo ocurre la Acidificación de los Océanos?',
      description:
        'Cuando el dióxido de carbono (CO₂) atmosférico se disuelve en el agua del mar, forma ácido carbónico, lo que reduce el pH del agua. Este proceso, conocido como acidificación de los océanos, tiene efectos devastadores sobre la vida marina, especialmente en los corales, moluscos y organismos que dependen del carbonato de calcio para formar sus esqueletos y conchas.',
    },
    {
      title: 'Impacto en los Arrecifes de Coral',
      description:
        'La acidificación dificulta la capacidad de los corales para formar esqueletos de carbonato de calcio. Esto debilita los arrecifes, que son vitales para la biodiversidad marina. Además, los arrecifes de coral protegen las costas de tormentas y erosionan.',
    },
    {
      title: 'Efectos sobre la Vida Marina',
      description:
        'La disminución del pH afecta a muchas especies marinas. Los moluscos y crustáceos tienen dificultades para formar conchas, lo que afecta la cadena alimentaria. Las especies de peces también sufren alteraciones en su comportamiento y capacidad de reproducción.',
    },
    {
      title: 'Desplazamiento de Ecosistemas Marinos',
      description:
        'A medida que los océanos se acidifican, algunas especies se desplazan a aguas más profundas o a otras áreas donde las condiciones son menos agresivas. Esto puede alterar los ecosistemas marinos y las pesquerías locales.',
    },
    {
      title: 'Soluciones Propuestas para Mitigar la Acidificación',
      description:
        'Para mitigar la acidificación de los océanos, es crucial reducir las emisiones de CO₂. Algunas soluciones incluyen la transición hacia energías renovables, la reforestación para absorber CO₂, y el fomento de prácticas agrícolas sostenibles que reduzcan la liberación de gases de efecto invernadero.',
    },
    {
      title: 'Restauración de Ecosistemas Marinos',
      description:
        'La restauración de arrecifes de coral mediante la plantación de corales cultivados en viveros marinos y el fortalecimiento de las áreas protegidas ayudan a mejorar la resistencia de los arrecifes a la acidificación. Los programas de restauración y protección de ecosistemas como los manglares y praderas marinas también son esenciales.',
    },
    {
      title: '¿Qué Puedo Hacer como Individuo?',
      description:
        'Puedes reducir tu huella de carbono adoptando prácticas como el uso de transporte público, la reducción de residuos y el consumo responsable de energía. Apoya políticas públicas que promuevan la protección de los océanos y la reducción de emisiones de gases de efecto invernadero.',
    },
    {
      title: 'Reducir el Uso de Plásticos',
      description:
        'El plástico es una de las principales amenazas para la vida marina. Evita el uso de plásticos de un solo uso, elige productos biodegradables o reciclables y participa en iniciativas de limpieza de playas y océanos.',
    },
    {
      title: 'Apoyo a la Investigación y Conservación',
      description:
        'Apoya organizaciones que investigan los efectos de la acidificación de los océanos y participan en proyectos de conservación marina. Donar a estas causas ayuda a promover soluciones basadas en la ciencia para proteger los ecosistemas marinos.',
    },
    {
      title: 'Educación y Sensibilización sobre el Cambio Climático',
      description:
        'Educar a otros sobre los efectos del cambio climático y la acidificación de los océanos es una manera poderosa de generar conciencia y movilizar a la sociedad. Organiza eventos, comparte información en redes sociales y participa en actividades educativas.',
    },
  ];
  
  
  

  const updateTopic = (direction) => {
    let newIndex = (topicIndex + direction + topics.length) % topics.length;
    setTopicIndex(newIndex);

    setCameraPosition([
      Math.cos(newIndex * (2 * Math.PI) / topics.length) * 12, 
      2, 
      Math.sin(newIndex * (2 * Math.PI) / topics.length) * 12
    ]);
  };

  const handleButtonClick = () => {
    updateTopic(1);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      updateTopic(1); 
    } else if (event.key === 'ArrowLeft') {
      updateTopic(-1); 
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [topicIndex]);

  return (
    
    <div style={{ height: '100vh', position: 'relative' }} >
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
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <EarthScene cameraPosition={cameraPosition} />
    </div>
  );
};

export default Acidification;