import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const FishSkeleton = forwardRef((props, ref) => {
  const { nodes } = useGLTF("models-3d/fishSkeleton.glb");

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Fish_lowobjcleanermaterialmergergles">
            <mesh
              name="Object_2"
              geometry={nodes.Object_2.geometry}
              material={materials.fish}
            />
          </group>
        </group>
      </group>
    </group>
  );
});

export default FishSkeleton;
useGLTF.preload("models-3d/fishSkeleton.glb");
