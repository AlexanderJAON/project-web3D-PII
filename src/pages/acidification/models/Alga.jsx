import React from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const Alga = (props) => {
  const { nodes, materials } = useGLTF('models-3d/alga.glb');

  return (
    <RigidBody colliders="hull" gravityScale={0}>
      <mesh
        position={[10,-3,-8]}
        castShadow
        receiveShadow
        geometry={nodes.ZBrush_defualt_group_default_0.geometry}
        material={materials['default']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </RigidBody>
  );
};

export default Alga;

useGLTF.preload('models-3d/alga.glb');