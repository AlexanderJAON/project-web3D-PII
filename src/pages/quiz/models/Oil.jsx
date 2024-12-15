import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const  Oil = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models-3d/oil2.glb");

  return (
    <group {...props} dispose={null} scale={40}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.PP_Oil_stain_Material_0.geometry}
      material={materials.Material}
      position={[1.166, -0.706, 1.402]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.PP_Oil_barrel_red_Material_0.geometry}
      material={materials.Material}
      position={[-0.183, -0.311, -0.259]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.PP_Oil_barrel_blue_Material_0.geometry}
      material={materials.Material}
      position={[-0.662, -0.311, 0.562]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.PP_Oil_barrel_yellow02_Material_0.geometry}
      material={materials.Material}
      position={[0.221, -0.311, 0.636]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.PP_Oil_barrel_yellow01_Material_0.geometry}
      material={materials.Material}
      position={[0.095, -0.444, 1.422]}
      rotation={[-2.286, 0, -Math.PI / 2]}
    />
  </group>
  );
};

export default Oil;
useGLTF.preload("/models-3d/oil2.glb");
