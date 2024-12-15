import React, { useRef, forwardRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

const Fish3 = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/trashmodels/fa2.glb"
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
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Shark_Armature_44"
                position={[-0.038, 0, 0]}
                rotation={[-1.584, -Math.PI / 2, 0]}
                scale={1.766}
              >
                <group name="GLTF_created_0">
                  <group name="BT_Shark__0_42" />
                  <group name="BT_Shark__1_43" />
                  <group
                    name="Shark_Armature_rootJoint_41"
                    position={[-12.35, 0.174, -0.415]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="Master_Bone_Shark_Armature_40"
                      rotation={[1.608, 0, -Math.PI / 2]}
                    >
                      <group
                        name="CTRL_L_Body_Shark_Armature_0"
                        position={[0, 1.611, 0.708]}
                        rotation={[-3.127, 0.083, -Math.PI]}
                      />
                      <group
                        name="CTRL_Tail_Shark_Armature_1"
                        position={[0.007, 1.613, -0.424]}
                        rotation={[-3.127, -0.136, -Math.PI]}
                      />
                      <primitive object={nodes.Body_Shark_Armature_4} />
                      <group
                        name="CTRL_Secondary'_Shark_Armature_5"
                        position={[0, 1.613, -1.45]}
                        rotation={[-3.127, -0.34, -Math.PI]}
                        scale={[1, 1.001, 1]}
                      />
                      <group
                        name="CTRL_Tail_End_Shark_Armature_6"
                        position={[-0.007, 1.812, -1.42]}
                        rotation={[-3.127, -0.885, Math.PI]}
                        scale={[1, 1.001, 1]}
                      />
                      <group
                        name="CTRL_L_Body001_Shark_Armature_7"
                        position={[0, 1.612, 0.098]}
                        rotation={[-3.127, 0.056, -Math.PI]}
                        scale={[1, 0.998, 1]}
                      />
                      <primitive object={nodes.Body001_Shark_Armature_33} />
                      <primitive object={nodes.Body002_Shark_Armature_35} />
                      <primitive object={nodes.Body003_Shark_Armature_37} />
                      <group
                        name="CTRL_Head_Shark_Armature_38"
                        position={[0, 1.618, 2.041]}
                        rotation={[0.014, 0.035, 0]}
                      />
                      <group
                        name="CTRL_Mid_Shark_Armature_39"
                        position={[0, 1.611, 1.641]}
                        rotation={[-3.127, -0.06, -Math.PI]}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
          <skinnedMesh
            name="Object_6"
            geometry={nodes.Object_6.geometry}
            material={materials.Diffuse}
            skeleton={nodes.Object_6.skeleton}
          />
          <skinnedMesh
            name="Object_8"
            geometry={nodes.Object_8.geometry}
            material={materials.Diffuse_Eye}
            skeleton={nodes.Object_8.skeleton}
          />
        </group>
      </group>
    </group>
  );
});

export default Fish3;
useGLTF.preload("models-3d/trashmodels/fa2.glb");
