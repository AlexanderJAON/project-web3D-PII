import React, { forwardRef } from 'react';
import { useGLTF } from "@react-three/drei";


const Moon = forwardRef((props, ref) => {
  const { nodes,materials } = useGLTF("models-3d/moon.glb");

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Mball002"
          geometry={nodes.Mball002.geometry}
          material={nodes.Mball002.material}
          position={[2.777, 2, -4]}
          scale={[0.066, 0.341, 0.161]}
          />
         
     </group>
   </group>
  );
});

export default Moon;

useGLTF.preload("models-3d/moon.glb");