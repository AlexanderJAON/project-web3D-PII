import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Trash2 = forwardRef((props, ref) => {
  const { nodes,materials } = useGLTF("models-3d/trashmodels/trash2.glb");

  return (
    <group {...props} dispose={null} scale={3}>
    <group name="Sketchfab_Scene">
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
        <group name="2ba8187fbfa749de9b76a4f80b870cebfbx" rotation={[Math.PI / 2, 0, 0]}>
          <group name="RootNode">
            <group name="Plastic_Bottle_03_GEO" position={[0.59, 0, 0]}>
              <mesh
                name="Plastic_Bottle_03_GEO_Plastic_Bottles_0"
                geometry={nodes.Plastic_Bottle_03_GEO_Plastic_Bottles_0.geometry}
                material={materials.Plastic_Bottles}
              />
            </group>
           
           
          </group>
        </group>
      </group>
    </group>
  </group>
  );
});

export default Trash2;
useGLTF.preload("models-3d/trashmodels/trash2.glb");
