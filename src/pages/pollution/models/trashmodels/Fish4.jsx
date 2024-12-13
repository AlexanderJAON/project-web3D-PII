import React, { useRef, forwardRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Fish1 = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/trashmodels/f3.glb");
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
          name="DevilRay"
          castShadow
          receiveShadow
          geometry={nodes.DevilRay.geometry}
          material={materials['DevilRay.001']}
          position={[-4.155, 0.297, 0.243]}
          rotation={[1.578, 0, -1.571]}
          scale={3.258}
        />
      </group>
    </group>
  );
});

export default Fish1;
useGLTF.preload("models-3d/trashmodels/f3.glb");