import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const Alga = (props) => {
  const { nodes, materials } = useGLTF('models-3d/alga.glb');
  const algaRef = useRef();

  const handleClick = () => {
    if (algaRef.current) {
      const impulse = {
        x: (Math.random() - 0.5) * 5, 
        y: (Math.random() - 0.5) * 5, 
        z: (Math.random() - 0.5) * 5, 
      };
      algaRef.current.applyImpulse(impulse, true); 
    }
  };

  return (
    <RigidBody
      ref={algaRef}
      type="dynamic" 
      colliders="hull"
      gravityScale={0} 
      onClick={handleClick} 
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ZBrush_defualt_group_default_0.geometry}
        material={materials['default']}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[10,-8,-8]}
        {...props} 
      />
    </RigidBody>
  );
};

export default Alga;

useGLTF.preload('models-3d/alga.glb');
