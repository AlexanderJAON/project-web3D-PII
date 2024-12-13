import React, { useRef, forwardRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Fish3 = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/trashmodels/f2.glb"
  );
  const { actions } = useAnimations(animations, group);

  // Reproducir la animación al cargar
  useEffect(() => {
    if (actions) {
      // Asumiendo que la animación está en la primera acción
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play(); // Reproducir la animación
      }
    }
  }, [actions]); // Dependencia de actions para reproducir una vez cargado

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="BackwedgedButterflyfish_Instance_Wander"
          castShadow
          receiveShadow
          geometry={nodes.BackwedgedButterflyfish_Instance_Wander.geometry}
          material={materials["material tortuga"]}
          position={[0.387, -0.364, 0.592]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={21.122}
        />
      </group>
    </group>
  );
});

export default Fish3;
useGLTF.preload("models-3d/trashmodels/f2.glb");
