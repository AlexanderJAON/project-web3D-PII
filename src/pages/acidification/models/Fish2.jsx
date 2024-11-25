import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

const Fish2 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('models-3d/fish2.glb');
  const { actions } = useAnimations(animations, group);
  const speed = 0.01; 
  const amplitude = 0.5; 
  const frequency = 1; 
  const direction = useRef([Math.random() * 2 - 1, 0, Math.random() * 2 - 1]); 

  useEffect(() => {
    if (actions) {
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play();
      }
    }
  }, [actions]);
  
  useFrame((state, delta) => {
    if (group.current) {
      const time = state.clock.getElapsedTime();
      const [dx, dy, dz] = direction.current;

      
      group.current.position.x += dx * speed;
      group.current.position.y += Math.sin(time * frequency) * amplitude * delta;
      group.current.position.z += dz * speed;

    
      group.current.rotation.y = Math.atan2(dz, dx) - Math.PI / 2;

     
      const limit = 5; 
      if (
        group.current.position.x > limit ||
        group.current.position.x < -limit ||
        group.current.position.z > limit ||
        group.current.position.z < -limit
      ) {
        direction.current = [
          -dx + (Math.random() - 0.5) * 0.5,
          0,
          -dz + (Math.random() - 0.5) * 0.5,
        ];
      }
    }
  });
  return (
    <>
      <RigidBody
        type="dynamic"
        colliders="hull" 
      >
        <group ref={group} dispose={null} >
          <group name="Sketchfab_Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 1.6]} position={[0,0,0]}>
              <group name="root">
                <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Armature_37" scale={0.01}>
                    <group name="GLTF_created_0">
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <skinnedMesh
                        name="Object_7"
                        geometry={nodes.Object_7.geometry}
                        material={materials.pyjama_shark_mat}
                        skeleton={nodes.Object_7.skeleton}
                        castShadow
                        receiveShadow
                      />
                      <group name="pyjama_shark_36" />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </RigidBody>
    </>
  );
};

useGLTF.preload('models-3d/fish2.glb');

export default Fish2;
