import React, { useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

const Desert = (props)=>{
    const group = useRef();
    const {nodes, materials, animations} = useGLTF("/models-3d/desert.glb");
    const {actions} = useAnimations(animations,group);

    return (
        <group {...props} dispose={null}>
          <group name="Scene">
            <group name="Desert" position={[0, 0.637, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Floor">
                  <mesh
                    name="defaultMaterial"
                    geometry={nodes.defaultMaterial.geometry}
                    material={materials.GROUND}
                  />
                </group>
                <group name="MiniRocks001">
                  <mesh
                    name="MiniRocks"
                    geometry={nodes.MiniRocks.geometry}
                    material={materials.KYST_02}
                  />
                </group>
                <group name="Mountains">
                  <mesh
                    name="defaultMaterial002"
                    geometry={nodes.defaultMaterial002.geometry}
                    material={materials.ROCKS_BIG}
                  />
                </group>
                <group name="Plane004">
                  <mesh
                    name="defaultMaterial013"
                    geometry={nodes.defaultMaterial013.geometry}
                    material={materials.GRASS}
                  />
                  <mesh
                    name="defaultMaterial014"
                    geometry={nodes.defaultMaterial014.geometry}
                    material={materials.GRASS}
                  />
                  <mesh
                    name="defaultMaterial015"
                    geometry={nodes.defaultMaterial015.geometry}
                    material={materials.GRASS}
                  />
                  <mesh
                    name="defaultMaterial016"
                    geometry={nodes.defaultMaterial016.geometry}
                    material={materials.GRASS}
                  />
                  <mesh
                    name="defaultMaterial017"
                    geometry={nodes.defaultMaterial017.geometry}
                    material={materials.GRASS}
                  />
                </group>
                <group name="Plane012">
                  <mesh
                    name="defaultMaterial019"
                    geometry={nodes.defaultMaterial019.geometry}
                    material={materials.CLOUDS}
                  />
                </group>
                <group name="Rocks">
                  <mesh
                    name="defaultMaterial003"
                    geometry={nodes.defaultMaterial003.geometry}
                    material={materials.ROCKS_SMALL}
                  />
                </group>
                <group name="WaterWell">
                  <mesh
                    name="defaultMaterial009"
                    geometry={nodes.defaultMaterial009.geometry}
                    material={materials.BEAMS}
                  />
                </group>
                <group name="Way">
                  <mesh
                    name="defaultMaterial001"
                    geometry={nodes.defaultMaterial001.geometry}
                    material={materials.ROAD}
                  />
                </group>
                <group name="Well">
                  <mesh
                    name="defaultMaterial008"
                    geometry={nodes.defaultMaterial008.geometry}
                    material={materials.WATER}
                  />
                </group>
              </group>
            </group>
            <group name="defaultMaterial011" />
            <mesh
              name="defaultMaterial018"
              geometry={nodes.defaultMaterial018.geometry}
              material={materials.THREE}
              position={[0, 0.61, 0]}
            />
          </group>
        </group>
      )
}


export default Desert; 
useGLTF.preload("/models-3d/desert.glb")