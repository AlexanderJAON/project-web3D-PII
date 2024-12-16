import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Island = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/island.glb");
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
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="ferns"
          castShadow
          receiveShadow
          geometry={nodes.ferns.geometry}
          material={materials.default_ferns}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group name="house" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="house_1"
            castShadow
            receiveShadow
            geometry={nodes.house_1.geometry}
            material={materials.default_house}
          />
          <mesh
            name="house_2"
            castShadow
            receiveShadow
            geometry={nodes.house_2.geometry}
            material={materials.default_walls}
          />
        </group>
        <mesh
          name="island_bridge"
          castShadow
          receiveShadow
          geometry={nodes.island_bridge.geometry}
          material={materials.default_island_bridge}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="island_sec1"
          castShadow
          receiveShadow
          geometry={nodes.island_sec1.geometry}
          material={materials["default"]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="palm_leaves"
          castShadow
          receiveShadow
          geometry={nodes.palm_leaves.geometry}
          material={materials.default_palm_leaves}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="palm_stems"
          castShadow
          receiveShadow
          geometry={nodes.palm_stems.geometry}
          material={materials.default_palm_stems}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Default}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="rocks2"
          castShadow
          receiveShadow
          geometry={nodes.rocks2.geometry}
          material={materials.default_rocks2}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Small_Palms"
          castShadow
          receiveShadow
          geometry={nodes.Small_Palms.geometry}
          material={materials.default_Small_Palms}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("models-3d/island.glb");
export default Island;
