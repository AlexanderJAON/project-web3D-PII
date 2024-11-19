import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Trash4 = forwardRef((props, ref) => {
  const { nodes,materials } = useGLTF("models-3d/trashmodels/trash4.glb");
  const group = useRef()
  return (
    <group ref={group} {...props} dispose={null}>
    <group name="Sketchfab_Scene">
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
        <group name="root">
          <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Forky_2" rotation={[-0.174, 0, 0]}>
              <mesh
                name="mesh_2"
                geometry={nodes.mesh_2.geometry}
                material={materials.Rough}
                morphTargetDictionary={nodes.mesh_2.morphTargetDictionary}
                morphTargetInfluences={nodes.mesh_2.morphTargetInfluences}
              />
              <group name="EyeBig_0" position={[-0.162, 3.712, 0.273]} rotation={[1.601, 0, 0]}>
                <mesh
                  name="mesh_0"
                  geometry={nodes.mesh_0.geometry}
                  material={materials['Rough.001']}
                />
                <mesh
                  name="mesh_0_1"
                  geometry={nodes.mesh_0_1.geometry}
                  material={materials['Glass.001']}
                />
              </group>
              <group name="EyeSmall_1" position={[0.185, 3.63, 0.276]} rotation={[1.601, 0, 0]}>
                <mesh
                  name="mesh_1"
                  geometry={nodes.mesh_1.geometry}
                  material={materials['Rough.001']}
                />
                <mesh
                  name="mesh_1_1"
                  geometry={nodes.mesh_1_1.geometry}
                  material={materials['Glass.001']}
                />
              </group>
            </group>
            <group
              name="Pupil001_3"
              position={[-0.196, 3.748, -0.365]}
              rotation={[1.49, 0, 0]}
              scale={0.184}>
              <mesh
                name="Object_12"
                geometry={nodes.Object_12.geometry}
                material={materials['Rough.001']}
              />
            </group>
            <group
              name="Pupil002_4"
              position={[0.209, 3.666, -0.342]}
              rotation={[1.427, 0, 0]}
              scale={0.096}>
              <mesh
                name="Object_14"
                geometry={nodes.Object_14.geometry}
                material={materials['Rough.001']}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  </group>
  );
});

export default Trash4;
useGLTF.preload("models-3d/trashmodels/trash4.glb");
