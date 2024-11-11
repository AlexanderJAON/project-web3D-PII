import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/use-auth-store.js";

const Menu = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const goToAcidification = () => navigate("/acidification");
  const goToShortage = () => navigate("/shortage");
  const goToPollution = () => navigate("/pollution");
  const goToHome = () => navigate("/"); // Redirige al home

  console.log("Menu rendered");

  return (
    <nav style={{ background: "lightblue", padding: "10px" }}>
      <div className="input">
        <button className="value" onClick={() => navigate("/introduction")}>
          Introducción
        </button>
        <button className="value">Acerca de nosotros</button>
        <button className="value">Soluciones</button>
        <button className="value">Quiz</button>
        <button className="value" onClick={logout}>
          Cerrar sesión
        </button>
        <button className="value" onClick={goToAcidification}>
          Acidificación
        </button>
        <button className="value" onClick={goToShortage}>
          Escasez
        </button>
        <button className="value" onClick={goToPollution}>
          Contaminación
        </button>
        <button className="value" onClick={goToHome}> {/* Nuevo botón de inicio */}
          Inicio
        </button>
      </div>
    </nav>
  );
};

export default Menu;