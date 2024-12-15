import React, { useRef, forwardRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

const Fish2 = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/trashmodels/fa1.glb");
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
    <group ref={group} {...props} dispose={null} scale={0.015}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="67b77fc155b1449d95115068b2518b63fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Armature"
                  position={[-0.649, 51.892, 231.713]}
                  rotation={[-3.012, 0, 0]}
                  scale={243.077}
                >
                  <group name="Object_5">
                    <primitive object={nodes.Bone_00} />
                    <group name="Object_28" scale={100} />
                  </group>
                </group>
                <group name="Group20873" scale={100} />
              </group>
            </group>
          </group>
          <skinnedMesh
            name="Object_29"
            geometry={nodes.Object_29.geometry}
            material={materials.defaultMat}
            skeleton={nodes.Object_29.skeleton}
          />
        </group>
      </group>
    </group>
  );
});

export default Fish2;
useGLTF.preload("models-3d/trashmodels/fa1.glb");
