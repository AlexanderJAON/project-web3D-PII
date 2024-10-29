import React from 'react';
import './Introduction.css';

const Introduction = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Introducción a los Problemas Medioambientales</h2>
        <p>
          Los problemas medioambientales como la acidificación de los océanos, la escasez de agua y la pérdida de biodiversidad afectan gravemente nuestro planeta.
          Este proyecto busca crear conciencia y promover acciones para mitigar estos problemas.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
