import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

const Pipe = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/liquid.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      console.log(Object.keys(actions));
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play();
      }
    }
  }, [actions]);

  return (
    <group {...props} dispose={null} scale={5}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Cylinder_2"
                position={[0.336, 5.478, 0.052]}
                rotation={[0.837, 0.089, -0.054]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={new THREE.MeshStandardMaterial({ color: 'green' })}
                />
              </group>
              <group name="Cylinder001_3" position={[0.397, 0.916, 1.931]}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={new THREE.MeshStandardMaterial({ color: 'green' })}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("models-3d/liquid.glb");
export default Pipe;
