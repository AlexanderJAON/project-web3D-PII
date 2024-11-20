import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Trash7 = forwardRef((props, ref) => {
  const { nodes,materials } = useGLTF("models-3d/trashmodels/trash7.glb");

  return (
    <group {...props} dispose={null} scale={6}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Tree_Debris_vcthdcbiw_Lowfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode">
              <group name="vcthdcbiw_LOD0_TIER3_000">
                <mesh
                  name="vcthdcbiw_LOD0_TIER3_000_MatID_1_0"
                  geometry={nodes.vcthdcbiw_LOD0_TIER3_000_MatID_1_0.geometry}
                  material={materials.Tree_Debris_vcthdcbiw_Low}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
});

export default Trash7;
useGLTF.preload("models-3d/trashmodels/trash7.glb");
