import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Trash1 = forwardRef((props, ref) => {
  const { nodes,materials } = useGLTF("models-3d/trashmodels/trash1.glb");

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Trash_Lid_GEO_0">
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.Trash_bin}
                />
              </group>
              <group name="Trash_Bin_GEO_1">
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.Trash_bin}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
});

export default Trash1;
useGLTF.preload("models-3d/trashmodels/trash1.glb");
