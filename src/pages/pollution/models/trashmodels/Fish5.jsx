import React, { useRef, forwardRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Fish1 = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/trashmodels/f4.glb");
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
          name="JohnDory_01"
          castShadow
          receiveShadow
          geometry={nodes.JohnDory_01.geometry}
          material={materials.JohnDory}
          position={[0.323, -0.345, -0.063]}
          rotation={[Math.PI / 2, 0, -1.56]}
          scale={11.932}
        />
      </group>
    </group>
  );
});

export default Fish1;
useGLTF.preload("models-3d/trashmodels/f4.glb");
