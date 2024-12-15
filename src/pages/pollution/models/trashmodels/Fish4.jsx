import React, { useRef, forwardRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

const Fish4 = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/trashmodels/fa3.glb"
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
    <group ref={group} {...props} dispose={null} scale={1}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="5a680c44c8154a3c8825b850b700c161fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Empty"
                  position={[-250.05, -29.14, -38.59]}
                  rotation={[0, 1.571, 0]}
                  scale={100}
                />
                <group
                  name="Empty001"
                  position={[3.696, 40.085, -290.023]}
                  scale={63.409}
                />
                <group
                  name="Empty002"
                  position={[2.348, -232.563, -30.778]}
                  rotation={[-Math.PI / 2, 0, 0.015]}
                  scale={100}
                />
                <group
                  name="Model"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Armature"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_9">
                    <group
                      name="Object_10"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <primitive object={nodes.Root_01} />
                    <primitive object={nodes.Fin_Center0_L_031} />
                    <primitive object={nodes.Fin_Center0_R_034} />
                    <primitive object={nodes.FinUpB_0_037} />
                  </group>
                </group>
              </group>
            </group>
          </group>
          <skinnedMesh
            name="Object_11"
            geometry={nodes.Object_11.geometry}
            material={materials["Scene_-_Root"]}
            skeleton={nodes.Object_11.skeleton}
          />
        </group>
      </group>
    </group>
  );
});

export default Fish4;
useGLTF.preload("models-3d/trashmodels/fa3.glb");
