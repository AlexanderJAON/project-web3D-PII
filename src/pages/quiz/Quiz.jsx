import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Oil from "./models/Oil"; // Modelo 3D de ejemplo
import Coral from "../home/models/Coral"; // Otro modelo de ejemplo
import IsleQuiz from "./models/IsleQuiz";
import UserDAO from "../../daos/UserDAO";
import useAuthStore from "../../stores/use-auth-store";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";
import GarbageBag from "./models/GarbageBag";
import ToxicBarrel from "./models/ToxicBarrel";

const Quiz = () => {
  const [score, setScore] = useState(0); // Puntaje del jugador
  const [previousScore, setPreviousScore] = useState(null); // Puntaje anterior del jugador
  const [questionIndex, setQuestionIndex] = useState(0); // Índice de pregunta actual
  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Seguimiento de preguntas respondidas
  const [message, setMessage] = useState(null); // Mensaje para el recuadro
  const { user, observeAuthState } = useAuthStore(); // Estado del usuario logueado

  const [removedModels, setRemovedModels] = useState([]); // Lista para modelos eliminados

  const quizData = [
    {
      model: "Oil",
      question: "¿Qué deberías hacer con el aceite usado?",
      options: [
        { text: "Tirarlo al drenaje", correct: false },
        { text: "Llevarlo a un centro de reciclaje", correct: true },
      ],
    },
    {
      model: "Coral",
      question: "¿Qué amenaza más a los corales?",
      options: [
        { text: "Pesca sostenible", correct: false },
        { text: "Blanqueamiento por cambio climático", correct: true },
      ],
    },
    {
      model: "GarbageBag",
      question: "¿Cúal es una de las principales causas de contaminación?",
      options: [
        { text: "Manejo inadecuado de residuos", correct: true },
        { text: "Uso desmesurado del agua", correct: false },
      ],
    },
    {
      model: "ToxicBarrel",
      question: "¿Qué es la acidificación de los océanos?",
      options: [
        { text: "El aumento de la temperatura de los océanos.", correct: false },
        { text: "La disminución del pH en el agua del mar debido a la absorción de CO₂.", correct: true },
        { text: "La reducción de la salinidad en los océanos.", correct: false },
      ],
    },

    // Agrega más preguntas y modelos aquí
  ];

  useEffect(() => {
    observeAuthState();

    const fetchPreviousScore = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setPreviousScore(userData.score || 0);
        }
      }
    };

    fetchPreviousScore();
  }, [user]);

  const updateScore = async () => {
    if (user) {
      const userDoc = await UserDAO.getUserById(user.uid);
      if (userDoc?.success) {
        await UserDAO.updateUser(user.uid, { score });
      } else {
        await setDoc(doc(db, "users", user.uid), {
          id: user.uid,
          name: user.displayName || "Anónimo",
          score,
        });
      }
    }
  };

  useEffect(() => {
    if (user) {
      updateScore();
    }
  }, [score]);

  const handleAnswer = (isCorrect) => {
    if (answeredQuestions.includes(questionIndex)) {
      setMessage("Ya respondiste esta pregunta.");
      return;
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setMessage("¡Respuesta correcta, Eliminaste un contaminante!");
      setRemovedModels((prev) => [...prev, quizData[questionIndex].model]); // Eliminar modelo si es correcto
    } else {
      setScore((prev) => Math.max(0, prev - 1)); // No permite puntajes negativos
      setMessage("Respuesta incorrecta");
    }

    setAnsweredQuestions((prev) => [...prev, questionIndex]); // Marcar como respondida
    setQuestionIndex((prev) => prev + 1); // Avanzar a la siguiente pregunta
  };

  useEffect(() => {
      const audio = new Audio("./sounds/cq1.mp3");
      audio.loop = true;
      audio.play();
      audio.volume=0.2;
  
      return () => {
        audio.pause();
        audio.currentTime = 0; // Resets the audio if needed
      };
    }, []);

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 150, 40], fov: 90 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <ambientLight />
        <directionalLight
          castShadow
          intensity={2}
          position={[0, 10, 0]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Physics>
          {!removedModels.includes("Oil") && <Oil position={[-200, 40, 30]} />}
          {!removedModels.includes("Coral") && <Coral position={[-100, 30, 50]} />}
          {!removedModels.includes("GarbageBag") && <GarbageBag position={[-120, 25, 30]}/>}
          {!removedModels.includes("ToxicBarrel") && <ToxicBarrel position={[-150, 20, 100]}/>}

          <IsleQuiz />
        </Physics>
        <Environment files="./hdr/sky3.hdr" background />
        <OrbitControls />
      </Canvas>

      {/* Ventana del Quiz */}
      {questionIndex < quizData.length && (
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2>{quizData[questionIndex].question}</h2>
          {quizData[questionIndex].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option.correct)}
              style={{
                display: "block",
                margin: "10px auto",
                padding: "10px 20px",
                background: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      {/* Recuadro para mensajes */}
      {message && (
        <div
          style={{
            position: "absolute",
            bottom: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <p>{message}</p>
          <button
            onClick={() => setMessage(null)}
            style={{
              marginTop: "10px",
              padding: "5px 10px",
              background: "#FF5722",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cerrar
          </button>
        </div>
      )}

      {/* Mostrar puntaje y usuario */}
      <div
        style={{
          position: "absolute",
          bottom: "2%",
          left: "1%",
          background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "8px",
          borderRadius: "4px",
          fontSize: "0.9rem",
          minWidth: "150px",
        }}
      >
        {user ? (
          <>
            <p>Usuario: {user.displayName || "Anónimo"}</p>
            <p>Puntuación: {score}</p>
            {previousScore !== null && <p>Anterior: {previousScore}</p>}
          </>
        ) : (
          <p>Cargando usuario...</p>
        )}
      </div>
    </>
  );
};

export default Quiz;
