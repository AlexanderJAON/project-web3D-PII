import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Exclamation = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("models-3d/exclamation_point.glb");

  // Ref para almacenar la posición inicial
  const initialPosition = useRef(props.position ? props.position[1] : 0);

  useFrame(({ clock }) => {
    if (group.current) { // Verifica que group.current no sea undefined
      const elapsedTime = clock.getElapsedTime();
      // Actualiza la posición en el eje Y con un movimiento sinusoidal
      group.current.position.y =
        initialPosition.current + Math.sin(elapsedTime * 5) * 4; // Ajusta la frecuencia y amplitud aquí
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Sphere001"
          geometry={nodes.Sphere001.geometry}
          material={materials["Material.001"]}
          position={[0, 5.917, 0]}
          scale={[1.204, 4.017, 1.204]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("models-3d/exclamation_point.glb");
export default Exclamation;
