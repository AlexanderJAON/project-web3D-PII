import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { Canvas } from "@react-three/fiber";
import Moon from "./models/Moon";
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
         
        <Canvas>
          <Moon /> 
        </Canvas> 
        
        </>
        
    )
}

export default Home;