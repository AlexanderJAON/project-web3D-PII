import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const  ToxicBarrel = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models-3d/toxic_barrel.glb");

  return (
    <group {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={30}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.281}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Barrel_1_Toxic_Barrel_0.geometry}
              material={materials.Toxic_Barrel}
              position={[22.943, 19.322, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

export default ToxicBarrel;
useGLTF.preload("/models-3d/toxic_barrel.glb");