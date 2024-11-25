import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const SheriffCactus = (props)=>{
    const group = useRef();
    const {nodes, materials} = useGLTF("/models-3d/cactus-sherif.glb");
   
    return (
      <RigidBody type="dynamic" colliders={false}>
        <group {...props} dispose={null}>
          <group name="Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.2}>
              <group name="root">
                <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                  <group
                    name="Cactus_Sheriff_Geo001_4"
                    position={[0, 10.441, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.02}>
                    <mesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials.Cape}
                    />
                    <mesh
                      name="Object_18"
                      geometry={nodes.Object_18.geometry}
                      material={materials.Sheriff_Mat}
                    />
                    <mesh
                      name="Object_19"
                      geometry={nodes.Object_19.geometry}
                      material={materials.Outline_Shader}
                    />
                  </group>
                  <group
                    name="Cactus_Sheriff_Geo_0"
                    position={[0, 10.441, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.02}>
                    <mesh
                      name="Object_4"
                      geometry={nodes.Object_4.geometry}
                      material={materials.Sheriff_Mat}
                    />
                    <mesh
                      name="Object_5"
                      geometry={nodes.Object_5.geometry}
                      material={materials.Sheriff_Mat}
                    />
                    <mesh
                      name="Object_6"
                      geometry={nodes.Object_6.geometry}
                      material={materials.Outline_Shader}
                    />
                    <mesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.Outline_Shader}
                    />
                  </group>
                  <group name="Cube004_3" />
                  <group name="Gun_1">
                    <mesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials.Outline_Shader}
                    />
                    <mesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.Gun_Mat}
                    />
                  </group>
                  <group name="Plane_2" />
                  <group name="Rocks_5" />
                </group>
              </group>
            </group>
          </group>
        </group>
        <CuboidCollider args={[2, 2, 2]} position={props.position}/>
        </RigidBody>
      )
}

export default SheriffCactus;
useGLTF.preload("/models-3d/cactus-sherif.glb")
