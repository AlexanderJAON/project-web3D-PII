import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const Stones = (props) => {
  const { nodes, materials } = useGLTF('models-3d/stones.glb');

  // Referencias para los RigidBody
  const stoneRef1 = useRef(null);
  const stoneRef2 = useRef(null);
  const stoneRef3 = useRef(null);
  const stoneRef4 = useRef(null);

  // Función para aplicar impulso
  const handleClick = (stoneRef) => {
    if (stoneRef.current) {
      // Aplica un impulso aleatorio
      const impulse = {
        x: (Math.random() - 0.5) * 10, // Variación aleatoria en X
        y: (Math.random() - 0.5) * 10, // Variación aleatoria en Y
        z: (Math.random() - 0.5) * 10, // Variación aleatoria en Z
      };
      stoneRef.current.applyImpulse(impulse, true); // Aplica el impulso
    }
  };

  return (
    <group {...props} dispose={null}>
      <group scale={0.02} position={[10, -3, -8]}>
        <RigidBody ref={stoneRef1} type="dynamic" mass={5} colliders="hull" gravityScale={0} onClick={() => handleClick(stoneRef1)}>
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

        <RigidBody ref={stoneRef2} type="dynamic" mass={5} colliders="hull" gravityScale={0} onClick={() => handleClick(stoneRef2)}>
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

        <RigidBody ref={stoneRef3} type="dynamic" mass={5} colliders="hull" gravityScale={0} onClick={() => handleClick(stoneRef3)}>
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

        <RigidBody ref={stoneRef4} type="dynamic" mass={5} colliders="hull" gravityScale={0} onClick={() => handleClick(stoneRef4)}>
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
      </group>
    </group>
  );
};

export default Stones;

useGLTF.preload('models-3d/stones.glb');
