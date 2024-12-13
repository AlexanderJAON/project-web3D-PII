import React, { useRef, forwardRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Fish2 = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/trashmodels/f1.glb"
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
          name="AngelFish_Royal_Instance_Wander"
          castShadow
          receiveShadow
          geometry={nodes.AngelFish_Royal_Instance_Wander.geometry}
          material={materials.AngelFish_Royal_Instanced_Indirect}
          position={[0.556, -0.604, -0.431]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={37.253}
        />
      </group>
    </group>
  );
});

export default Fish2;
useGLTF.preload("models-3d/trashmodels/f1.glb");
