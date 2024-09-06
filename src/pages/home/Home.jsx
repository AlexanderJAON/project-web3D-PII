import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";

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
        </>
    )
}

export default Home;