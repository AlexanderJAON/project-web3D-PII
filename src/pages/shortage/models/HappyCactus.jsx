import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const HappyCactus = (props) =>{
    const group = useRef();
    const {nodes, materials} = useGLTF("/models-3d/happy-cactus.glb");

    return (
        <RigidBody colliders={false}>
        <group {...props} dispose={null}>
          <group name="Sketchfab_model" position={[0, 1.726, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="65a7d52e299d4abab25eff6749b23542fbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.02}>
              <group name="Cactus_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="Cactus_Body_Cactus_Skin_0"
                  geometry={nodes.Cactus_Body_Cactus_Skin_0.geometry}
                  material={materials.Cactus_Skin}
                />
                <mesh
                  name="Cactus_Body_Creases_0"
                  geometry={nodes.Cactus_Body_Creases_0.geometry}
                  material={materials.Creases}
                />
                <mesh
                  name="Cactus_Body_Mouth_0"
                  geometry={nodes.Cactus_Body_Mouth_0.geometry}
                  material={materials.Mouth}
                />
              </group>
              <group
                name="Head_petals"
                position={[-14.771, 152.216, -21.094]}
                rotation={[-1.105, 0.305, 0.538]}
                scale={100}>
                <mesh
                  name="Head_petals_Petals_0"
                  geometry={nodes.Head_petals_Petals_0.geometry}
                  material={materials.Petals}
                />
                <mesh
                  name="Head_petals_Upper_Petals_0"
                  geometry={nodes.Head_petals_Upper_Petals_0.geometry}
                  material={materials.Upper_Petals}
                />
              </group>
              <group name="left_arm" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="left_arm_Cactus_Skin_0"
                  geometry={nodes.left_arm_Cactus_Skin_0.geometry}
                  material={materials.Cactus_Skin}
                />
                <mesh
                  name="left_arm_Creases_0"
                  geometry={nodes.left_arm_Creases_0.geometry}
                  material={materials.Creases}
                />
              </group>
              <group name="right_arm" rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100}>
                <mesh
                  name="right_arm_Cactus_Skin_0"
                  geometry={nodes.right_arm_Cactus_Skin_0.geometry}
                  material={materials.Cactus_Skin}
                />
                <mesh
                  name="right_arm_Spike_0"
                  geometry={nodes.right_arm_Spike_0.geometry}
                  material={materials.Spike}
                />
              </group>
              <mesh
                name="Cheeks_Bulb_0"
                geometry={nodes.Cheeks_Bulb_0.geometry}
                material={materials.Bulb}
                position={[30.087, 78.881, 38.404]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={27.595}
              />
              <mesh
                name="Circle_Dirt_0"
                geometry={nodes.Circle_Dirt_0.geometry}
                material={materials.Dirt}
                position={[0, -58.032, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                name="Cone001_Spike_0"
                geometry={nodes.Cone001_Spike_0.geometry}
                material={materials.Spike}
                position={[14.848, 118.697, 46.525]}
                rotation={[-0.37, 0.292, 0.048]}
                scale={5.768}
              />
              <mesh
                name="Cone002_Spike_0"
                geometry={nodes.Cone002_Spike_0.geometry}
                material={materials.Spike}
                position={[14.848, 118.697, 46.525]}
                rotation={[-0.37, 0.292, 0.048]}
                scale={5.768}
              />
              <mesh
                name="Cone003_Spike_0"
                geometry={nodes.Cone003_Spike_0.geometry}
                material={materials.Spike}
                position={[14.848, 118.697, 46.525]}
                rotation={[-0.37, 0.292, 0.048]}
                scale={5.768}
              />
              <mesh
                name="Eyes_Eyes_0"
                geometry={nodes.Eyes_Eyes_0.geometry}
                material={materials.Eyes}
                position={[30.087, 78.881, 38.404]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={27.595}
              />
              <mesh
                name="Head_bauble_Bulb_0"
                geometry={nodes.Head_bauble_Bulb_0.geometry}
                material={materials.Bulb}
                position={[0, 145.418, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                name="pot_Clay_0"
                geometry={nodes.pot_Clay_0.geometry}
                material={materials.Clay}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                name="rock_Rock_0"
                geometry={nodes.rock_Rock_0.geometry}
                material={materials.Rock}
                position={[-49.898, -62.695, 13.582]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={4.555}
              />
              <mesh
                name="rock001_Rock_0"
                geometry={nodes.rock001_Rock_0.geometry}
                material={materials.Rock}
                position={[13.541, -62.144, 51.846]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={4.555}
              />
              <mesh
                name="rock002_Rock_0"
                geometry={nodes.rock002_Rock_0.geometry}
                material={materials.Rock}
                position={[6.068, -64.998, 47.244]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={4.555}
              />
              <mesh
                name="rock003_Rock_0"
                geometry={nodes.rock003_Rock_0.geometry}
                material={materials.Rock}
                position={[55.722, -64.394, 8.655]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={4.555}
              />
              <mesh
                name="rock004_Rock_0"
                geometry={nodes.rock004_Rock_0.geometry}
                material={materials.Rock}
                position={[-48.501, -63.913, -22.86]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={4.555}
              />
              <mesh
                name="tongue_Tongue_0"
                geometry={nodes.tongue_Tongue_0.geometry}
                material={materials.Tongue}
                position={[0.511, 49.241, 37.391]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
            </group>
          </group>
        </group>
        <CuboidCollider args={[2, 2, 2]} position={props.position}/>
        </RigidBody>
      )
}

export default HappyCactus;
useGLTF.preload("/models-3d/happy-cactus.glb")