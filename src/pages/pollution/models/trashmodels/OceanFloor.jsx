import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const OceanFloor = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("models-3d/trashmodels/oceanFloor.glb");

  return (
    <group {...props} dispose={null}
    rotation={[0, 0, 0]} >
    <group name="Scene">
      <group name="White_Sand_Dunes_Northern_Africa">
        <mesh
          name="White_Sand_Dunes_Northern_Africa_1"
          castShadow
          receiveShadow
          geometry={nodes.White_Sand_Dunes_Northern_Africa_1.geometry}
          material={materials.ID4}
        />
        <mesh
          name="White_Sand_Dunes_Northern_Africa_2"
          castShadow
          receiveShadow
          geometry={nodes.White_Sand_Dunes_Northern_Africa_2.geometry}
          material={materials.ID17}
        />
        <mesh
          name="White_Sand_Dunes_Northern_Africa_3"
          castShadow
          receiveShadow
          geometry={nodes.White_Sand_Dunes_Northern_Africa_3.geometry}
          material={materials.ID30}
        />
        <mesh
          name="White_Sand_Dunes_Northern_Africa_4"
          castShadow
          receiveShadow
          geometry={nodes.White_Sand_Dunes_Northern_Africa_4.geometry}
          material={materials.ID43}
        />
        <mesh
          name="White_Sand_Dunes_Northern_Africa_5"
          castShadow
          receiveShadow
          geometry={nodes.White_Sand_Dunes_Northern_Africa_5.geometry}
          material={materials.ID56}
        />
        <mesh
          name="White_Sand_Dunes_Northern_Africa_6"
          castShadow
          receiveShadow
          geometry={nodes.White_Sand_Dunes_Northern_Africa_6.geometry}
          material={materials.ID69}
        />
      </group>
    </group>
  </group>
  );
});

export default OceanFloor;
useGLTF.preload("models-3d/trashmodels/oceanFloor.glb");
