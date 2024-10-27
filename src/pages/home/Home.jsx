import React, { useCallback, useEffect, useRef } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas, useFrame } from "@react-three/fiber";
import Moon from "./models/Moon";
import { PointerLockControls } from "@react-three/drei";
import { getDocs, query, where } from "firebase/firestore";
import UserDAO from "../../daos/UserDAO";
import { FirstPersonControls, PositionalAudio } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Beach from "../../components/Beach/Beach";

const Home = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const goToAcidification = () => {
    navigate("/acidification");
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
  

  return (
    <>
      <div className="container-home">
        
      <Canvas camera={{position:[200, 200, 200], fov: 40}}>
      <directionalLight intensity={5} position={[-5, 5, -5]} />
        <directionalLight intensity={2} position={[0, -5, 0]} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 10]} intensity={5} />
        <PointerLockControls />
        <Beach/>
          <PositionalAudio autoplay ref={audioRef} loop url="/sounds/cancion.mp3" />
        </Canvas>
        <div class="input">
          <button class="value">Introducción</button>
          <button class="value">Acerca de nosotros</button>
          <button class="value">Soluciones</button>
          <button class="value" >Quiz</button>
          <button class="value" onClick={handleLogout} >Cerrar sesión</button>
        </div>
      </div>
      
    </>

  );
};

export default Home;
