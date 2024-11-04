
import React, { useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'


const MiniOcean = (props)=>{
    const group = useRef();
    const {nodes, materials, animations} = useGLTF("/models-3d/mini-ocean.glb");
    const {actions} = useAnimations(animations,group);

    return (
        <group {...props} dispose={null}>
          <group name="Scene">
            <group
              name="MiniOcean"
              position={[7.198, 36.511, 96.421]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={0.01}>
              <group name="projectnewobjcleanermaterialmergergles">
                <mesh
                  name="Alga"
                  geometry={nodes.Alga.geometry}
                  material={materials.wire_000009010}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Alga2"
                  geometry={nodes.Alga2.geometry}
                  material={materials.wire_000009011}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral1"
                  geometry={nodes.Coral1.geometry}
                  material={materials.wire_001023027}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral10"
                  geometry={nodes.Coral10.geometry}
                  material={materials.wire_093038060}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral11"
                  geometry={nodes.Coral11.geometry}
                  material={materials.wire_133064090}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral12"
                  geometry={nodes.Coral12.geometry}
                  material={materials.wire_133064090}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral13"
                  geometry={nodes.Coral13.geometry}
                  material={materials.wire_139104009}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral14"
                  geometry={nodes.Coral14.geometry}
                  material={materials.wire_150121044}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral14001"
                  geometry={nodes.Coral14001.geometry}
                  material={materials.wire_177088027}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral15"
                  geometry={nodes.Coral15.geometry}
                  material={materials.wire_168138057}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral16"
                  geometry={nodes.Coral16.geometry}
                  material={materials.wire_191146022}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral2"
                  geometry={nodes.Coral2.geometry}
                  material={materials.wire_007057062}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral3"
                  geometry={nodes.Coral3.geometry}
                  material={materials.wire_007057062}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral4"
                  geometry={nodes.Coral4.geometry}
                  material={materials.wire_017083090}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral5"
                  geometry={nodes.Coral5.geometry}
                  material={materials.wire_024000005}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral6"
                  geometry={nodes.Coral6.geometry}
                  material={materials.wire_024000005}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral7"
                  geometry={nodes.Coral7.geometry}
                  material={materials.wire_045009019}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral8"
                  geometry={nodes.Coral8.geometry}
                  material={materials.wire_057001017}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Coral9"
                  geometry={nodes.Coral9.geometry}
                  material={materials.wire_078019035}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Floor"
                  geometry={nodes.Floor.geometry}
                  material={materials.wire_165144082}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Leaves"
                  geometry={nodes.Leaves.geometry}
                  material={materials.wire_000016011}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Leaves2"
                  geometry={nodes.Leaves2.geometry}
                  material={materials.wire_001033027}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="MiniRocks"
                  geometry={nodes.MiniRocks.geometry}
                  material={materials.wire_033025009}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Rock"
                  geometry={nodes.Rock.geometry}
                  material={materials.wire_069057024}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Rocks"
                  geometry={nodes.Rocks.geometry}
                  material={materials.wire_069057024}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Rowing"
                  geometry={nodes.Rowing.geometry}
                  material={materials.wire_066001018}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="SeaStar"
                  geometry={nodes.SeaStar.geometry}
                  material={materials.wire_057001017}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="SeaStar2"
                  geometry={nodes.SeaStar2.geometry}
                  material={materials.wire_058015030}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="SeaStar3"
                  geometry={nodes.SeaStar3.geometry}
                  material={materials.wire_078019035}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Ship"
                  geometry={nodes.Ship.geometry}
                  material={materials.wire_003100072}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Stems"
                  geometry={nodes.Stems.geometry}
                  material={materials.wire_001023027}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Stems2"
                  geometry={nodes.Stems2.geometry}
                  material={materials.wire_002039044}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Stems3"
                  geometry={nodes.Stems3.geometry}
                  material={materials.wire_002062044}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="SuperCoral"
                  geometry={nodes.SuperCoral.geometry}
                  material={materials.wire_033025009}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="SuperFloor"
                  geometry={nodes.SuperFloor.geometry}
                  material={materials.wire_017083090}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Wood"
                  geometry={nodes.Wood.geometry}
                  material={materials.wire_023000004}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Wood2"
                  geometry={nodes.Wood2.geometry}
                  material={materials.wire_066001018}
                  position={[8392.15, 703.217, -3631.711]}
                />
                <mesh
                  name="Wood3"
                  geometry={nodes.Wood3.geometry}
                  material={materials.wire_130104036}
                  position={[8392.15, 703.217, -3631.711]}
                />
              </group>
            </group>
          </group>
        </group>
      )
}

useGLTF.preload("/models-3d/mini-ocean.glb")
export default MiniOcean;