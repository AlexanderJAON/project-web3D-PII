import React, { useRef, forwardRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

const Fish6 = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/trashmodels/fa6.glb"
  );
  const { actions } = useAnimations(animations, group);

const direction = useRef(
    new Vector3(Math.random() * 0.05 - 0.025, 0, Math.random() * 0.05 - 0.025)
  ); // Dirección aleatoria
  const initialRotation = [0, Math.PI / 2, 0]; // Rotación inicial del pez

  // Cargar la animación del pez
  useEffect(() => {
    if (actions) {
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play(); // Reproducir animación del pez
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
    <group ref={group} {...props} dispose={null} scale={0.01}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="b3dd9cdc131c440094761f9424874928fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Armature"
                  position={[0, -2.717, 239.96]}
                  rotation={[-2.646, 0, 0]}
                  scale={192.907}>
                  <group name="Object_5">
                    <primitive object={nodes.Bone_00} />
                    <group name="Object_23" scale={100} />
                  </group>
                </group>
                <group name="Visje1Group60119" scale={100} />
              </group>
            </group>
          </group>
          <skinnedMesh
            name="Object_24"
            geometry={nodes.Object_24.geometry}
            material={materials.Visje1defaultMat}
            skeleton={nodes.Object_24.skeleton}
          />
        </group>
      </group>
    </group>
  );
});

export default Fish6;
useGLTF.preload("models-3d/trashmodels/fa6.glb");
