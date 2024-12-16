import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Loader } from "@react-three/drei";
import { RigidBody, Physics } from "@react-three/rapier";
import * as THREE from "three";
import SawMill from "./models/SawMill";
import Masonry from "./models/Masonry";
import Forest from "./models/Forest";
import Tree from "./models/Tree";
import Postprocessing from "../acidification/postprocessing/Postprocessing";

const EarthScene = () => {
  const [topicIndex, setTopicIndex] = useState(0);
  const [cameraPosition, setCameraPosition] = useState([12, 2, 0]);
  const [isAnimating, setIsAnimating] = useState(false);  // Estado para controlar la animación
  const controlsRef = useRef();

  const messages = [
    {
      title: "Efectos de la Deforestación en el Agua",
      text: "La deforestación reduce la capacidad de los bosques para filtrar el agua, lo que provoca la contaminación de ríos y lagos.",
    },
    {
      title: "Destrucción de Ecosistemas Acuáticos",
      text: "La pérdida de árboles aumenta la erosión del suelo, lo que eleva la sedimentación en ríos y afecta la calidad del agua.",
    },
    {
      title: "Aumento de la Temperatura del Agua",
      text: "La deforestación contribuye al cambio climático, elevando las temperaturas del agua y afectando la biodiversidad acuática.",
    },
    {
      title: "Impacto en el Ciclo del Agua",
      text: "Los árboles juegan un papel clave en el ciclo del agua, y su desaparición reduce la capacidad de la atmósfera para generar lluvias, afectando el suministro de agua.",
    },
    {
      title: "Contaminación por Sedimentos",
      text: "La deforestación aumenta la cantidad de sedimentos que llegan a los cuerpos de agua, lo que deteriora los hábitats acuáticos y dificulta la vida marina.",
    },
    {
      title: "Reducción de la Calidad del Agua",
      text: "La deforestación afecta la calidad del agua al reducir la filtración natural y aumentar la presencia de contaminantes como pesticidas y metales pesados.",
    },
    {
      title: "Pérdida de Biodiversidad Acuática",
      text: "La alteración de los ecosistemas terrestres y acuáticos debido a la deforestación pone en peligro muchas especies que dependen de estos hábitats.",
    },
    {
      title: "Erosión del Suelo",
      text: "Los árboles y las plantas protegen el suelo. Sin ellos, el agua de lluvia arrastra tierra y escombros hacia los cuerpos de agua, lo que reduce su calidad.",
    },
    {
      title: "Acción para Combatir la Deforestación",
      text: "Reducir la deforestación y promover la reforestación son acciones clave para proteger los ecosistemas acuáticos y garantizar un agua limpia para todos.",
    },
    {
      title: "El Rol de las Comunidades Locales",
      text: "Las comunidades locales deben ser parte activa en la preservación de los bosques, ya que dependen directamente de la calidad del agua para su sustento.",
    },
  ];

  const updateTopic = (direction) => {
    if (isAnimating) return; 

    setIsAnimating(true);  

    const newIndex =
      (topicIndex + direction + messages.length) % messages.length;
    setTopicIndex(newIndex);

   
    const newCameraPosition = [
      Math.cos((newIndex * (2 * Math.PI)) / messages.length) * 12,
      2,
      Math.sin((newIndex * (2 * Math.PI)) / messages.length) * 12,
    ];

  
    moveCamera(newCameraPosition);
  };

  
  const moveCamera = (targetPosition) => {
    let startTime = null;
    const duration = 1; 

    const animateCamera = (time) => {
      if (!startTime) startTime = time;
      const progress = (time - startTime) / (duration * 1000); 
      if (progress < 1) {
        const currentPosition = controlsRef.current.object.position;
        currentPosition.lerp(
          new THREE.Vector3(...targetPosition),
          0.05 
        );
        controlsRef.current.update();
        requestAnimationFrame(animateCamera); 
      } else {
        controlsRef.current.object.position.set(...targetPosition);
        controlsRef.current.update();
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animateCamera);
  };

  useEffect(() => {
        const audio = new Audio("./sounds/cs1.mp3");
        audio.loop = true;
        audio.play();
    
        return () => {
          audio.pause();
          audio.currentTime = 0; // Resets the audio if needed
        };
      }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {topicIndex < messages.length && (
        <div
          style={{
            position: "absolute",
            top: "25%", 
            left: "5%", 
            zIndex: 10,
            background: "rgba(0, 0, 0, 0.7)",
            padding: "30px",
            borderRadius: "10px",
            color: "white",
            maxWidth: "400px", 
          }}
        >
          <h1 style={{ fontSize: "4rem", margin: "15px 0" }}>
            {" "}
           
            {messages[topicIndex].title}
          </h1>
          <p style={{ fontSize: "1.5rem" }}>
            {" "}
       
            {messages[topicIndex].text}
          </p>
          <button
            style={{
              marginTop: "15px", 
              padding: "15px 30px", 
              background: "#09bc86",
              border: "none",
              borderRadius: "5px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              if (topicIndex === messages.length - 1) {
                setTopicIndex(messages.length);
              } else {
                updateTopic(1);
              }
            }}
          >
            {topicIndex === messages.length - 1 ? "¡Vamos!" : "Siguiente"}
          </button>
        </div>
      )}

      <Canvas
        shadows
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        camera={{
          position: [0, 40, 16],
          rotation: [0, Math.PI / 2.5, 0],
          fov: 90,
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
        </Physics>

        <OrbitControls
          ref={controlsRef}
          enablePan
          enableZoom
          enableRotate
          makeDefault
        />
        <Environment files="./hdr/beach.hdr" background />
        <Forest position={[0, -3, 0]} />
        <Forest position={[25, -3, 0]} />
        <Forest position={[-25, -3, 0]} />
        <Forest position={[50, -3, 0]} />
        <Forest position={[-50, -3, 0]} />
        <Forest position={[0, -3, 60]} />
        <Forest position={[25, -3, 60]} />
        <Forest position={[-25, -3, 60]} />
        <Forest position={[50, -3, 60]} />
        <Forest position={[-50, -3, 60]} />
        <Forest position={[0, -3, -60]} />
        <Forest position={[25, -3, -60]} />
        <Forest position={[-25, -3, -60]} />
        <Forest position={[50, -3, -60]} />
        <Forest position={[-50, -3, -60]} />

        <Tree position={[15, -5, 10]} />
        <Tree position={[-10, -6, 15]} />
        <Tree position={[30, -6, 30]} />
        <Tree position={[-40, -6, 35]} />
        <Tree position={[12, -4, 18]} />

        <Tree position={[20, -7, -25]} />
        <Tree position={[-30, -6, -40]} />
        <Tree position={[40, -6, -20]} />

        <Tree position={[7, -6, 50]} />
        <Tree position={[18, -5, 60]} />
        <Tree position={[-15, -5, 50]} />
        <Tree position={[35, -8, 55]} />
        <Tree position={[-25, -6, 70]} />

        <Tree position={[30, -7, 75]} />
        <Tree position={[-35, -6, 80]} />
        <Tree position={[10, -6, 80]} />
        <Tree position={[-5, -5, 90]} />

        <Tree position={[12, -5, -70]} />
        <Tree position={[22, -6, -75]} />
        <Tree position={[-20, -6, -65]} />
        <Tree position={[35, -7, -50]} />
        <Tree position={[-10, -5, -40]} />
        <Tree position={[25, -6, -35]} />
        <Tree position={[-40, -7, -20]} />
        <Tree position={[15, -6, -15]} />
        <Tree position={[-30, -6, -10]} />
        <Tree position={[40, -5, -5]} />
        <Masonry position={[0, -0, 20]} />
        <Masonry position={[20, 0, 40]} />
        <Masonry position={[-20, 0, -20]} />
        <Masonry position={[30, 0, 60]} />
        <Masonry position={[-40, 0, 40]} />
        <SawMill />
        <Masonry />
        <Postprocessing/>
      </Canvas>
    </div>
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
