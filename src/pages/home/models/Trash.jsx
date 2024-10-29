import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Trashbag = forwardRef((props, ref) => {
  const { nodes } = useGLTF("models-3d/trashBag.glb");

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="b9e59cd1503c493994e413735d066248objcleanermaterialmergergles">
            <mesh
              name="Object_2"
              geometry={nodes.Object_2.geometry}
              material={materials.wire_204204204}
            />
          </group>
        </group>
      </group>
    </group>
  );
});

export default Trashbag;
useGLTF.preload("models-3d/trashBag.glb");
