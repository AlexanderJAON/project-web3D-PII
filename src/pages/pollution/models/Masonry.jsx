import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Masonry = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/masonry_of_firewood.glb");
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
    <group {...props} dispose={null} scale={0.01}>
    <group name="Sketchfab_Scene">
      <mesh
        name="Line053_07_-_Default_0"
        castShadow
        receiveShadow
        geometry={nodes['Line053_07_-_Default_0'].geometry}
        material={materials['07_-_Default']}
        position={[-72.682, 127.958, 20.689]}
        rotation={[0, -0.009, 1.935]}
        scale={[0.727, 0.807, 0.93]}
      />
    </group>
  </group>
  );
};

useGLTF.preload("models-3d/masonry_of_firewood.glb");
export default Masonry;
