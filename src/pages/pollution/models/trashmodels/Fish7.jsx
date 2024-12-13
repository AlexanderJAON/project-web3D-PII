import React, { useRef, forwardRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Fish1 = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/trashmodels/f6.glb"
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
          name="Body"
          castShadow
          receiveShadow
          geometry={nodes.Body.geometry}
          material={materials["PufferFish.004"]}
          position={[-3.052, 0.421, -0.024]}
          rotation={[Math.PI / 2, 0, -1.569]}
        />
      </group>
    </group>
  );
});

export default Fish1;
useGLTF.preload("models-3d/trashmodels/f6.glb");
