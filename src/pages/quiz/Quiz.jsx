import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, FirstPersonControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Oil from "./models/Oil"; // Modelo 3D de ejemplo
import Coral from "../home/models/Coral"; // Otro modelo de ejemplo
import IsleQuiz from "./models/IsleQuiz";
import UserDAO from "../../daos/UserDAO";
import useAuthStore from "../../stores/use-auth-store";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";

const Quiz = () => {
  const [score, setScore] = useState(0); // Puntaje del jugador
  const [previousScore, setPreviousScore] = useState(null); // Puntaje anterior del jugador
  const [questionIndex, setQuestionIndex] = useState(0); // Índice de pregunta actual
  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Seguimiento de preguntas respondidas
  const { user, observeAuthState } = useAuthStore(); // Estado del usuario logueado

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
    // Agrega más preguntas y modelos aquí
  ];

  // Obtener estado de autenticación y cargar puntaje anterior
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

  // Actualizar puntaje en Firestore
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
      alert("Ya respondiste esta pregunta.");
      return;
    }

    if (isCorrect) {
      setScore((prev) => prev + 1);
      alert("¡Respuesta correcta!");
    } else {
      setScore((prev) => Math.max(0, prev - 1)); // No permite puntajes negativos
      alert("Respuesta incorrecta. Pasando a la siguiente pregunta...");
    }

    setAnsweredQuestions((prev) => [...prev, questionIndex]); // Marcar como respondida
    setQuestionIndex((prev) => prev + 1); // Avanzar a la siguiente pregunta
  };

    useEffect(() => {
        const audio = new Audio("./sounds/cq1.mp3");
        audio.loop = true;
        audio.play();
    
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
          {/* Renderizar modelo correspondiente */}
          {quizData[questionIndex]?.model === "Oil" && (
            <Oil position={[-200, 40, 30]} />
          )}
          {quizData[questionIndex]?.model === "Coral" && (
            <Coral position={[-100, 30, 50]} />
          )}
          <IsleQuiz />
        </Physics>
        <Environment files="./hdr/sky3.hdr" background />
        <OrbitControls/>
      </Canvas>

      {/* Ventana del Quiz */}
      {questionIndex < quizData.length && (
        <div
          style={{
            position: "absolute",
            top: "10%",
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
