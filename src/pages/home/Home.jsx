import React, { useCallback, useEffect, useRef } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas, useFrame } from "@react-three/fiber";
import Moon from "./models/Moon";
import { OrbitControls } from "@react-three/drei";
import { getDocs, query, where } from "firebase/firestore";
import UserDAO from "../../daos/UserDAO";

const Home = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  useEffect( ()  => {
    const getEmail = async () => {
      const queryEmail = query(UserDAO.collectionRef, where("email", "==", user.email));
      const email =  await getDocs(queryEmail);
    
    if (user && email.empty) {
      
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      UserDAO.createUser(newUser);
    }

  }
  getEmail()
  }, [user]);

  function CosineAnimation() {
    const ref = useRef();
    const frequency =4;

    useFrame(({ clock }) => {
      const time = clock.getElapsedTime();
      if (ref.current) {
        ref.current.position.y = Math.cos(frequency * time);
      }
    });

    return <Moon ref={ref} />;
  }

    
    return(
        <>
        <p className="welcome-text">Bienvenido, {user.displayName}</p>
          <button className="button-logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
         <div className="container">
         <Canvas>
            <directionalLight intensity={5} position={[-5, 5, -5]} />
            <directionalLight intensity={2} position={[0, -5, 0]} />
            <ambientLight intensity={1.5} />
            <directionalLight position={[0, 10, 10]} intensity={5} />
           <PointerLockControls />
          <CosineAnimation />  
        </Canvas> 
         </div>
       
        
        </>
        
    )
}

export default Home;
