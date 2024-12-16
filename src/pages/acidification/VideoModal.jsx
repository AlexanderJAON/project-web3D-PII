import React from 'react';

const VideoModal = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '80%',
          maxWidth: '800px',
          backgroundColor: '#000',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <video controls autoPlay style={{ width: '100%' }}>
          <source src="/videos/video_acidificacion.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de este video.
        </video>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '10px 15px',
            fontSize: '1rem',
            backgroundColor: 'red',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
