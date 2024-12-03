import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Moon from "./models/Moon";
import {
  OrbitControls,
  PointerLockControls,
  Text,
  Text3D, Html } from "@react-three/drei";
import { getDocs, query, where } from "firebase/firestore";
import UserDAO from "../../daos/UserDAO";
import { FirstPersonControls, PositionalAudio } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import Introduction from "../introduction/Introduction";
import "./Home.css";
import Beach from "../../components/Beach/Beach";
import Coral from "../home/models/Coral";
import FishSkeleton from "../home/models/FishSkeleton";
import Trash from "../home/models/Trash";

const SmoothCameraMovement = ({ startMoving, setMovingDone }) => {
  const { camera } = useThree();
  const targetPosition = new THREE.Vector3(
    camera.position.x,
    camera.position.y - 55,
    camera.position.z
  );

  useFrame(() => {
    if (startMoving) {
      camera.position.lerp(targetPosition, 0.1);

      if (camera.position.distanceTo(targetPosition) < 0.1) {
        setMovingDone();
      }
    }
  });

  return null;
};

// Componente para aplicar animación suave a los modelos
const FloatingAnimation = ({ children, frequency = 2, amplitude = 0.5 }) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y += Math.sin(time * frequency) * amplitude * 0.01;
      ref.current.rotation.z += Math.sin(time * frequency) * amplitude * 0.001;
    }
  });

  return <group ref={ref}>{children}</group>;
};

const Home = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [startMoving, setStartMoving] = useState(false);
  const [hoveredModel, setHoveredModel] = useState(null); 
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  useEffect(() => {
    setIsPopupVisible(true);
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };


  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const goToAcidification = () => {
    navigate("/acidification");
  };

  const goToShortage = () => {
    navigate("/shortage");
  };

  const goToPollution = () => {
    navigate("/pollution");
  };

  const goToQuiz = () => {
    navigate("/quiz");
  };
  useEffect(() => {
    const timer = setTimeout(() => setStartMoving(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const setMovingDone = () => {
    setStartMoving(false);
  };

  const handleOpenIntroduction = () => {
    setShowIntroduction(true);
  };

  const handleCloseIntroduction = () => {
    setShowIntroduction(false);
  };

  useEffect(() => {
    const getEmail = async () => {
      const queryEmail = query(
        UserDAO.collectionRef,
        where("email", "==", user.email)
      );
      const email = await getDocs(queryEmail);

      if (user && email.empty) {
        const newUser = {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        };
        UserDAO.createUser(newUser);
      }
    };
    getEmail();
  }, [user]);

  function CosineAnimation() {
    const ref = useRef();
    const frequency = 4;

    useFrame(({ clock }) => {
      const time = clock.getElapsedTime();
      if (ref.current) {
        ref.current.position.y = Math.cos(frequency * time);
      }
    });

    return <Moon ref={ref} />;
  }

  const audioRef = useRef();

  const cameraRef = useRef();

  const CameraPositionLogger = () => {
    useFrame(({ camera }) => {
      console.log("Posición de la cámara:", camera.position);
      console.log("Rotación de la cámara:", camera.rotation);
    });
    return null;
  };

  // Descripciones de cada modelo
  const descriptions = {
    pollution: "Contaminación: Impacto de los residuos en el agua.",
    acidification: "Acidificación: Efecto del CO2 en los océanos.",
    shortage: "Escasez: Reducción de recursos hídricos.",
  };
  return (
    <>
      <div className="container-home">
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Introducción</h2>
            <p>Los problemas medioambientales como la acidificación de los océanos, la escasez de agua y la pérdida de biodiversidad afectan gravemente nuestro planeta.
            Este proyecto busca crear conciencia y promover acciones para mitigar estos problemas.</p>
            <button onClick={closePopup}>Cerrar</button>
          </div>
        </div>
      )}
        <Canvas
          style={{ background: "linear-gradient(#aad1e7, #063149)" }}
          camera={{ position: [0, 60, 140], fov: 65 }}
        >
          <directionalLight intensity={0.5} position={[8, 5, -8]} />
          <directionalLight intensity={0.5} position={[-8, -2, -8]} />
          <ambientLight intensity={1} />
          <directionalLight position={[0, 10, 10]} intensity={5} />
          <OrbitControls enableRotate={false} enableZoom={false} enablePan={false}/>

          <SmoothCameraMovement
            startMoving={startMoving}
            setMovingDone={setMovingDone}
          />

          <Suspense fallback={null}>
            {" "}
            <Text3D
              font="/fonts/Impact_Club_Regular.json"
              size={8}
              height={0.2}
              position={[-160, 110, -80]}
            >
              El cuidado del medio ambiente es de vital relevancia.
              <meshStandardMaterial color="#FF533A" />
            </Text3D>
            <Text3D
              font="/fonts/Impact_Club_Regular.json"
              size={8}
              height={0.2}
              position={[-180, 100, -80]}
            >
              Súmate a nosotros y busca medidas para cuidar el planeta
              <meshStandardMaterial color="#FF533A" />
            </Text3D>
            <Beach position={[-60, -40, 0]} />
          </Suspense>

          <FloatingAnimation frequency={1.5} amplitude={0.3}>
            <FishSkeleton position={[-50, -30, 40]} onClick={goToShortage} onPointerOver={() => setHoveredModel("shortage")}
            onPointerOut={() => setHoveredModel(null)}/>
          </FloatingAnimation>
          {hoveredModel === "shortage" && (
            <Html position={[-50, 0, 40]} distanceFactor={200} style={{ pointerEvents: 'none', color: '#BFC247', background: 'rgba(0,0,0,0.6)', padding: '5px', borderRadius: '5px', fontFamily: 'Impact Club'}}>
              {descriptions.shortage}
            </Html>
          )}

          <FloatingAnimation frequency={1.2} amplitude={0.5}>
            <Coral position={[0, -30, 40]} onClick={goToAcidification} onPointerOver={() => setHoveredModel("acidification")}
            onPointerOut={() => setHoveredModel(null)}/>
          </FloatingAnimation>
          {hoveredModel === "acidification" && (
            <Html position={[0, 0, 40]} distanceFactor={200} style={{ pointerEvents: 'none', color: '#BFC247', background: 'rgba(0,0,0,0.6)', padding: '5px', borderRadius: '5px', fontFamily: 'Impact Club' }}>
              {descriptions.acidification}
            </Html>
          )}

          <FloatingAnimation frequency={1.8} amplitude={0.4}>
            <Trash position={[50, -33, 40]} onClick={goToPollution} onPointerOver={() => setHoveredModel("pollution")}
            onPointerOut={() => setHoveredModel(null)}/>
          </FloatingAnimation>
          {hoveredModel === "pollution" && (
            <Html position={[50, 0, 40]} distanceFactor={200} style={{ pointerEvents: 'none', color: '#BFC247', background: 'rgba(0,0,0,0.6)', padding: '5px', borderRadius: '5px', fontFamily: 'Impact Club' }}>
              {descriptions.pollution}
            </Html>
          )}

           <FloatingAnimation frequency={1.8} amplitude={0.4}>
            <Trash position={[50, -33, 40]} onClick={goToQuiz} onPointerOver={() => setHoveredModel("quiz")}
            onPointerOut={() => setHoveredModel(null)}/>
          </FloatingAnimation>
          {hoveredModel === "quiz" && (
            <Html position={[50, 0, 40]} distanceFactor={200} style={{ pointerEvents: 'none', color: '#BFC247', background: 'rgba(0,0,0,0.6)', padding: '5px', borderRadius: '5px', fontFamily: 'Impact Club' }}>
              {descriptions.pollution}
            </Html>
          )}

        </Canvas>
      </div>

     
      
    </>
  );
};

export default Home;
