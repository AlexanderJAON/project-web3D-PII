import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const WaterTap = (props) =>{
    const group = useRef();
    const { nodes, materials } = useGLTF("/models-3d/water-tap.glb")
    return (
        <RigidBody type="dynamic" colliders={false} >
        <group {...props} dispose={null} scale={5.7}>
          <group name="Sketchfab_Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="Scaniverseobjcleanermaterialmergergles">
                <mesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials.main} />
              </group>
            </group>
          </group>
        </group>
        <CuboidCollider args={[2, 2, 2]} position={[-20, 20, 28]}/>
        </RigidBody>
      )
    }

export default WaterTap;
useGLTF.preload("/models-3d/water-tap.glb")

