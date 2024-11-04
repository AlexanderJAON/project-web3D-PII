import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Coral = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("models-3d/coral.glb");
  console.log("Coral nodes:", nodes);
  console.log("Coral materials:", materials);

  return (
    <group {...props} dispose={null} scale={60}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="Thai_Beach_Coral_ufilajjfa_Lowfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode">
              <group name="ufilajjfa_LOD0_TIER3_000">
                <mesh
                  name="ufilajjfa_LOD0_TIER3_000_MatID_1_0"
                  geometry={nodes.ufilajjfa_LOD0_TIER3_000_MatID_1_0.geometry}
                  material={materials?.Thai_Beach_Coral_ufilajjfa_Low}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
});

export default Coral;
useGLTF.preload("models-3d/coral.glb");
