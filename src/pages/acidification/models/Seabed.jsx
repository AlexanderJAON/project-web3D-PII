import React from 'react'
import { useGLTF } from '@react-three/drei'

const Seabed = (props) => {
  const { nodes, materials } = useGLTF('models-3d/seabed.glb');

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Skybox_0">
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.Skybox_mat}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Seabed;

useGLTF.preload('models-3d/seabed.glb');