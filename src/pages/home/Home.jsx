import React, { Suspense, useCallback, useEffect, useRef , useState } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas, useFrame, useThree} from "@react-three/fiber";
import * as THREE from 'three';
import Moon from "./models/Moon";
import {OrbitControls,PointerLockControls,Text,Text3D} from "@react-three/drei";
import { getDocs, query, where } from "firebase/firestore";
import UserDAO from "../../daos/UserDAO";
import { FirstPersonControls, PositionalAudio } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Beach from "../../components/Beach/Beach";




const Home = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [startMoving, setStartMoving] = useState(false);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const goToAcidification = () => {
    navigate("/acidification");
  };

  const goToShortage = () => {
    navigate("/shortage");
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

  return (
    <>
      <div className="container-home">
        <Canvas camera={{ position: [0, 60, 140], fov: 65 }}>
          <directionalLight intensity={2} position={[8, 5, -8]} />
          <directionalLight intensity={2} position={[-8, -2, -8]} />
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 10, 10]} intensity={5} />
          <OrbitControls />
          
          <Suspense fallback={null}>
            {" "}     
            <Text3D
              font="/fonts/Impact_Club_Regular.json"
              size={8}
              height={0.2}
              position={[-160, 110, -80]}
            >
              El cuidado del medio ambiente es de vital relevancia.
              <meshStandardMaterial color="#7c5634" />
            </Text3D>
            <Text3D
              font="/fonts/Impact_Club_Regular.json"
              size={8}
              height={0.2}
              position={[-180, 100, -80]}
            >
              Sumate a nosotros y busca medidas para cuidar el planeta
              <meshStandardMaterial color="#7c5634" />
            </Text3D>
            <Beach position={[-60, -40, 0]} />
          </Suspense>
          <CameraPositionLogger />
          <PositionalAudio autoplay ref={audioRef} loop url="/sounds/cancion.mp3" />
        </Canvas>
        <nav>
          <div className="input">
            <button className="value">Introducción</button>
            <button className="value">Acerca de nosotros</button>
            <button className="value">Soluciones</button>
            <button className="value">Quiz</button>
            <button className="value" onClick={handleLogout}>
              Cerrar sesión
            </button>
            <button className="value" onClick={goToAcidification}>
              Acidificación
            </button>
            <button className="value" onClick={goToShortage}>
              Escasez
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Home;
