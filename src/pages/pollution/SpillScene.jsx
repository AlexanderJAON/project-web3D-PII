import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Loader } from "@react-three/drei";
import { RigidBody, Physics } from "@react-three/rapier";
import { RGBELoader } from "three-stdlib";
import * as THREE from "three";
import Trash1 from "./models/trashmodels/Trash1";
import Trash2 from "./models/trashmodels/Trash2";
import Trash3 from "./models/trashmodels/Trash3";
import Trash4 from "./models/trashmodels/Trash4";
import Trash5 from "./models/trashmodels/Trash5";
import Trash7 from "./models/trashmodels/Trash7";
import Fish1 from "./models/trashmodels/Fish1";
import Fish2 from "./models/trashmodels/Fish2";
import Fish3 from "./models/trashmodels/Fish3";
import Fish4 from "./models/trashmodels/Fish4";
import Fish6 from "./models/trashmodels/Fish6";
import Fish7 from "./models/trashmodels/Fish7";

const InteractiveTrash = ({
  TrashModel,
  position,
  rotation,
  scale,
  onRightClick,
}) => {
  const ref = useRef();

  const handlePointerDown = (event) => {
    event.stopPropagation();
    if (event.button === 2) {
      onRightClick(position);
    } else {
      const impulseDirection = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize();

      const impulse = impulseDirection.multiplyScalar(1);
      ref.current.applyImpulse(
        { x: impulse.x, y: impulse.y, z: impulse.z },
        true
      );
    }
  };

  return (
    <RigidBody
      ref={ref}
      position={position}
      rotation={rotation}
      colliders="cuboid"
    >
      <mesh onPointerDown={handlePointerDown} castShadow receiveShadow>
        <TrashModel scale={scale} />
      </mesh>
    </RigidBody>
  );
};

const generateTrash = (trashComponents, trashCount) => {
  const trashElements = [];
  for (let i = 0; i < trashCount; i++) {
    const TrashModel =
      trashComponents[Math.floor(Math.random() * trashComponents.length)];
    const position = [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ];
    const rotation = [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI,
    ];
    const scale = Math.random() * 0.5 + 0.5;

    trashElements.push({ TrashModel, position, rotation, scale });
  }
  return trashElements;
};

const EarthScene = () => {
  const [trashElements, setTrashElements] = useState([]);
  const [fishElements, setFishElements] = useState([]);
  const [topicIndex, setTopicIndex] = useState(0);
  const [cameraPosition, setCameraPosition] = useState([12, 2, 0]);
  const controlsRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  const trashComponents = [Trash1, Trash2, Trash3, Trash4, Trash5, Trash7];
  const fishComponents = [Fish1, Fish2, Fish3, Fish4, Fish6, Fish7];
  const trashCount = 60;

  const hdrTexture = useLoader(RGBELoader, "./hdr/UNDERWATER.hdr");

  const messages = [
    {
      title: "Derrame de Petróleo",
      text: "El derrame de petróleo afecta gravemente a la fauna marina, cubriendo superficies de agua y dañando los ecosistemas acuáticos.",
    },
    {
      title: "Consecuencias del Petróleo en el Agua",
      text: "El petróleo puede alterar la cadena alimenticia marina, afectando tanto a los animales acuáticos como a las especies que dependen de ellos.",
    },
    {
      title: "Desechos Químicos Industriales",
      text: "Las empresas vierten productos químicos tóxicos en los ríos y océanos, contaminando las aguas y poniendo en peligro la vida acuática.",
    },
    {
      title: "Contaminación Química",
      text: "Los desechos químicos pueden causar mutaciones y enfermedades en los seres vivos, alterando el equilibrio de los ecosistemas acuáticos.",
    },
    {
      title: "Aguas Negras en los Ríos",
      text: "Las aguas negras contienen desechos humanos y químicos que alteran la calidad del agua y representan un grave riesgo para la salud pública.",
    },
    {
      title: "Impacto de las Aguas Negras",
      text: "El vertido de aguas negras sin tratar contribuye a la propagación de enfermedades y la pérdida de biodiversidad acuática.",
    },
    {
      title: "Protege los Ecosistemas Acuáticos",
      text: "Al reducir el uso de plásticos y exigir un manejo adecuado de los desechos industriales, puedes ayudar a preservar la vida marina.",
    },
    {
      title: "Unidos por los Océanos",
      text: "La lucha contra la contaminación del agua requiere esfuerzos conjuntos de gobiernos, empresas y ciudadanos. ¡Actúa ahora!",
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
        currentPosition.lerp(new THREE.Vector3(...targetPosition), 0.05);
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
    if (hdrTexture) {
      hdrTexture.encoding = THREE.sRGBEncoding;
      hdrTexture.magFilter = THREE.LinearFilter;
      hdrTexture.minFilter = THREE.LinearFilter;

      hdrTexture.onUpdate = () => {
        const colorFilter = new THREE.Color(0.5, 1, 0.5); // Verde
        for (let i = 0; i < hdrTexture.image.data.length; i += 4) {
          hdrTexture.image.data[i] *= colorFilter.r; // Rojo
          hdrTexture.image.data[i + 1] *= colorFilter.g; // Verde
          hdrTexture.image.data[i + 2] *= colorFilter.b; // Azul
        }
      };
    }
  }, [hdrTexture]);

  useEffect(() => {
    const generatedTrash = generateTrash(trashComponents, trashCount);
    setTrashElements(generatedTrash);
  }, []);

  const handleRightClick = (TrashModel) => {
    setTrashElements((prev) =>
      prev.filter((item) => item.TrashModel !== TrashModel)
    );

    const FishModel =
      fishComponents[Math.floor(Math.random() * fishComponents.length)];
    const position = [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ];
    setFishElements((prev) => [...prev, { FishModel, position }]);
  };

  useEffect(() => {
        const audio = new Audio("./sounds/ca1.mp3");
        audio.loop = true;
        audio.play();
    
        return () => {
          audio.pause();
          audio.currentTime = 0;
        };
      }, []);


  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {topicIndex < messages.length && (
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "3%",
            zIndex: 10,
            background: "rgba(0, 0, 0, 0.7)",
            padding: "30px",
            borderRadius: "10px",
            color: "white",
            maxWidth: "400px",
          }}
        >
          <h1 style={{ fontSize: "4rem", margin: "15px 0" }}>
            {messages[topicIndex].title}
          </h1>
          <p style={{ fontSize: "1.5rem" }}>{messages[topicIndex].text}</p>
          <button
            style={{
              marginTop: "15px",
              padding: "15px 30px",
              fontSize: "1.5rem",
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

          {/* Renderizar basura */}
          {trashElements.map((element, i) => (
            <InteractiveTrash
              key={i}
              TrashModel={element.TrashModel}
              position={element.position}
              rotation={element.rotation}
              scale={element.scale}
              onRightClick={() => handleRightClick(element.TrashModel)}
            />
          ))}

          {/* Renderizar peces */}
          {fishElements.map((fish, i) => (
            <RigidBody key={i} position={fish.position} colliders="hull">
              <fish.FishModel />
            </RigidBody>
          ))}

          <Fish2 scale={1} position={[2, 1, -3]} />
          <Fish3 scale={1} position={[-1, 2, 4]} />
          <Fish4 scale={1} position={[0, -1, 2]} />
          <Fish6 scale={1} position={[3, -2, -5]} />
          <Fish7 scale={1} position={[-3, 0, -2]} />
        </Physics>

        <OrbitControls
          ref={controlsRef}
          enablePan
          enableZoom
          enableRotate
          makeDefault
        />
        {hdrTexture && <Environment background map={hdrTexture} />}
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
