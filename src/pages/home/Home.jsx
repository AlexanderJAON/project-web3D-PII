import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas } from "@react-three/fiber";
import Moon from "./models/Moon";
import { OrbitControls } from "@react-three/drei";
const Home = () => {
    const { user, logout } =
    useAuthStore();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

    
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

       <pointLight intensity={1} position={[-5, 0, 0]} />
          <ambientLight intensity={1.0} />
          <directionalLight position={[10, 10, 10]} intensity={5} />
          <OrbitControls />
          <Moon />
           
        </Canvas> 
         </div>
       
        
        </>
        
    )
}

export default Home;
