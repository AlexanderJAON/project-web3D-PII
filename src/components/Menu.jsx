import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/use-auth-store.js";

const Menu = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const goToAcidification = () => navigate("/acidification");
  const goToShortage = () => navigate("/shortage");
  const goToPollution = () => navigate("/pollution");
  const goToHome = () => navigate("/");

  return (
    <nav className="nav">
      <div className="menu">
        <button className="menu-button" onClick={goToHome}>
          Inicio
        </button>
        <button className="menu-button" onClick={goToShortage}>
          Escasez
        </button>
        <button className="menu-button" onClick={goToAcidification}>
          Acidificación
        </button>
        <button className="menu-button" onClick={goToPollution}>
          Contaminación
        </button>
        <button className="menu-button" onClick={() => navigate("/quiz")}>
          Quiz
        </button>
        <button className="menu-button" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};

export default Menu;