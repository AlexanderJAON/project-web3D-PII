import React from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const Stones = (props) => {
  const { nodes, materials } = useGLTF('models-3d/stones.glb');

  return (
    <group {...props} dispose={null}>
      <group scale={0.05} position={[14, -14, -20]}>
        <RigidBody type="dynamic" mass={5} colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.st1_low002_test_stone_txtr_0.geometry}
            material={materials.test_stone_txtr}
            position={[13.851, 23.146, -35.756]}
            rotation={[-1.847, -0.066, 1.827]}
            scale={100}
          />
        </RigidBody>
        <RigidBody type="dynamic" mass={5} colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.st2_low002_test_stone_txtr_0.geometry}
            material={materials.test_stone_txtr}
            position={[9.494, 51.882, -8.164]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </RigidBody>
        <RigidBody type="dynamic" mass={5} colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.st4_low002_test_stone_txtr_0.geometry}
            material={materials.test_stone_txtr}
            position={[28.271, 20.44, 21.009]}
            rotation={[-1.803, 0.079, -1.454]}
            scale={100}
          />
        </RigidBody>
        <RigidBody type="dynamic" mass={5} colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.st3_low002_test_stone_txtr_0.geometry}
            material={materials.test_stone_txtr}
            position={[-17.393, 23.82, -5.235]}
            rotation={[-1.636, -0.335, 2.834]}
            scale={100}
          />
        </RigidBody>
        {/* Agrega más RigidBodies para las otras rocas */}
      </group>
    </group>
  );
};

export default Stones;

useGLTF.preload('models-3d/stones.glb');
