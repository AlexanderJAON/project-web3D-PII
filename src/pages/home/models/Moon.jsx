import { useGLTF } from "@react-three/drei";


const Moon = (props) => {
 const {nodes, materials } = useGLTF ("models-3d/moon.glb");

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Mball002"
          geometry={nodes.Mball002.geometry}
          material={materials.Mball002}
          position={[2.777, 2.131, 0]}
          scale={[0.066, 0.341, 0.161]}
          />
          <mesh>
            <boxGeometry args={[2,2,0.1]}/>
            <meshStandardMaterial color="gray"/>
          </mesh>
         
     </group>
   </group>
  );
};
export default Moon;
useGLTF.preload("models-3d/moon.glb");