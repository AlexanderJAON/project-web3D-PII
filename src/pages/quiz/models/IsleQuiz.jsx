import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const IsleQuiz = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models-3d/isleQuiz.glb");

  return (
    <group {...props} dispose={null} scale={1}>
      <group name="Sketchfab_Scene">
        <mesh
          name="Object_2"
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.island}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object_5"
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.water_mat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object_6"
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Ship_mat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object_14"
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.Ship_mat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object_18"
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.coconut_mat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object_24"
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.coconut_mat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object_27"
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.leaf_mat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object_51"
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.leaf_mat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object_54"
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials["default"]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object_55"
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials.palm_mat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object_58"
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.rock_mat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object_72"
          castShadow
          receiveShadow
          geometry={nodes.Object_72.geometry}
          material={materials.rock_mat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Object_73"
          castShadow
          receiveShadow
          geometry={nodes.Object_73.geometry}
          material={materials.treasure_mat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

export default IsleQuiz;
useGLTF.preload("/models-3d/isleQuiz.glb");
