import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useEffect } from "react";
import "./Login.css";

export default function Login() {
  const { user, loginGoogleWithPopUp, observeAuthState } =
    useAuthStore();

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

 
  useEffect(() => {
    observeAuthState();
    console.log(user);
  }, [observeAuthState, user, handleLogin]);

  return (
    <div className="container-login">
      <>
        <p className="welcome-text">Inicia sesión para continuar</p>
        <button className="button-login" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </>
    </div>
  );
}
