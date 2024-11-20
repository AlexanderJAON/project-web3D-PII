import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Trash3 = forwardRef((props, ref) => {
  const { nodes,materials } = useGLTF("models-3d/trashmodels/trash3.glb");

  return (
    <group {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Oil_Barell_GEO_oil_barell_0.geometry}
      material={materials.oil_barell}
    />
  </group>
  );
});

export default Trash3;
useGLTF.preload("models-3d/trashmodels/trash3.glb");
