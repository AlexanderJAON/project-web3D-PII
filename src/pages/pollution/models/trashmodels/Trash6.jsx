import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Trash6 = forwardRef((props, ref) => {
  const { nodes,materials } = useGLTF("models-3d/trashmodels/trash6.glb");

  return (
    <group {...props} dispose={null}>
    <group name="Sketchfab_Scene">
      <mesh
        name="boxes_1_pallet_and_boxes_0"
        castShadow
        receiveShadow
        geometry={nodes.boxes_1_pallet_and_boxes_0.geometry}
        material={materials.pallet_and_boxes}
        position={[-0.695, 0.222, -0.029]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="bottles_2_bottles_0"
        castShadow
        receiveShadow
        geometry={nodes.bottles_2_bottles_0.geometry}
        material={materials.bottles}
        position={[0.526, 0.415, 0.796]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="cart_cart_0"
        castShadow
        receiveShadow
        geometry={nodes.cart_cart_0.geometry}
        material={materials.cart}
        position={[0.321, 0.475, 0.825]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  </group>
  );
});

export default Trash6;
useGLTF.preload("models-3d/trashmodels/trash6.glb");
