import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useEffect } from "react";
import "./Login.css";

export default function Login() {
  const { user, loginGoogleWithPopUp, logout, observeAuthState } =
    useAuthStore();

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  useEffect(() => {
    observeAuthState();
    console.log(user);
  }, [observeAuthState, user, handleLogin]);

  return (
    <div className="container-login">
      {user ? (
        <>
          <p className="welcome-text">Bienvenido, {user.displayName}</p>
          <button className="button-logout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </>
      ) : (
        <>
          <p className="welcome-text">Inicia sesión para continuar</p>
          <button className="button-login" onClick={handleLogin}>
            Iniciar Sesión
          </button>
        </>
      )}
    </div>
  );
}
