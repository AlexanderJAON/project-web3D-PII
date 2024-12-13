import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Tree = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/tree.glb");
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
    <group {...props} dispose={null} scale={5}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="Tree_Stump_qegv3_Lowfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode">
              <group name="qegv3_LOD0_TIER3_000">
                <mesh
                  name="qegv3_LOD0_TIER3_000_MatID_1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.qegv3_LOD0_TIER3_000_MatID_1_0.geometry}
                  material={materials.Tree_Stump_qegv3_Low}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("models-3d/tree.glb");
export default Tree;
