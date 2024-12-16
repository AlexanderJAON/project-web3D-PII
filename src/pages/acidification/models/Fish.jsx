import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const Fish = ({ onClick, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('models-3d/fish.glb');
  const { actions } = useAnimations(animations, group);
  const direction = useRef(new Vector3(0.02, 0, 0));
  const initialRotation = [0, Math.PI / 2, 0];

  useEffect(() => {
    if (actions) {
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play();
      }
    }
  }, [actions]);

  useFrame(() => {
    group.current.position.add(direction.current);

    const xLimit = 8;
    const zLimit = 8;

    if (Math.random() < 0.01) {
      direction.current.x = (Math.random() - 0.5) * 0.04;
    }
    if (Math.random() < 0.01) {
      direction.current.z = (Math.random() - 0.5) * 0.04;
    }

    if (group.current.position.x > xLimit || group.current.position.x < -xLimit) {
      direction.current.x = -direction.current.x;
      group.current.rotation.y += Math.PI;
    }

    if (group.current.position.z > zLimit || group.current.position.z < -zLimit) {
      direction.current.z = -direction.current.z;
      group.current.rotation.y += Math.PI;
    }

    group.current.rotation.y += (Math.sin(group.current.position.x * 0.1) + Math.sin(group.current.position.z * 0.1)) * 0.001;
  });

  return (
    <group ref={group} {...props} dispose={null} rotation={initialRotation} onClick={onClick}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="EmperorAngelfish_FBXfbx" rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.03}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="EmperorAngelfish">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.mt_EmperorAngelfish}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.mt_EmperorAngelfish}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.mt_EmperorAngelfish}
                      skeleton={nodes.Object_11.skeleton}
                    />
                    <skinnedMesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials.mt_EmperorAngelfish}
                      skeleton={nodes.Object_13.skeleton}
                    />
                    <skinnedMesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials.mt_EmperorAngelfish}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.mt_EmperorAngelfish}
                      skeleton={nodes.Object_17.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('models-3d/fish.glb');

export default Fish;
