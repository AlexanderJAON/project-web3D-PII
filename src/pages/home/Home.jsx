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
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 10, 10]} intensity={5} />
        <OrbitControls />
          <Moon />
           
        </Canvas> 
         </div>
       
        
        </>
        
    )
}

export default Home;