import React from 'react'
import { useGLTF } from '@react-three/drei'

const OceanFloor = (props) => {
  const { nodes, materials } = useGLTF('models-3d/ocean_floor.glb');

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 1.6]}>
          <group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0.001, 0]}>
            <group name="SmallRock_low">
              <mesh
                name="defaultMaterial"
                geometry={nodes.defaultMaterial.geometry}
                material={materials.Rocks}
                receiveShadow 
              />
            </group>
            <group name="LargeRock_low">
              <mesh
                name="defaultMaterial_1"
                geometry={nodes.defaultMaterial_1.geometry}
                material={materials.Rocks}
                receiveShadow 
              />
            </group>
            <group name="Ground_low">
              <mesh
                name="defaultMaterial_2"
                geometry={nodes.defaultMaterial_2.geometry}
                material={materials.Ground}
                receiveShadow
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default OceanFloor;

useGLTF.preload('models-3d/ocean_floor.glb');
