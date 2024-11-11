import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const PileTrash = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/pileTrash.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      console.log(Object.keys(actions));
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play();
      }
    }
  }, [actions]);

  return (
    <group {...props} dispose={null} scale={10}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trash_Pile_03_GEO.geometry}
        material={materials.Pile_of_Trash}
        position={[4.582, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trash_Pile_02_GEO.geometry}
        material={materials.Pile_of_Trash}
        position={[2.568, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trahs_Pile_01_GEO.geometry}
        material={materials.Pile_of_Trash}
      />
    </group>
  );
};

useGLTF.preload("models-3d/pileTrash.glb");
export default PileTrash;
