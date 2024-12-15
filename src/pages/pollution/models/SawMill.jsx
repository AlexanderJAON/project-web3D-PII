import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const SawMill = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/saw_mill.glb");
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
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="4b98d6f304c34c87beafa08c621538c1fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group
                name="polySurface62"
                position={[0.25, 0.527, 0.219]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={3.533}>
                <mesh
                  name="polySurface62_blinn1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface62_blinn1_0.geometry}
                  material={materials.blinn1}
                />
              </group>
              <group
                name="polySurface109"
                position={[-5.957, -0.106, -0.357]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={2.632}>
                <mesh
                  name="polySurface109_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface109_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="polySurface108" position={[0, -0.139, -2.175]} scale={2.632}>
                <mesh
                  name="polySurface108_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface108_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group
                name="polySurface107"
                position={[-0.401, 0.183, -3.228]}
                rotation={[-Math.PI, 0, -2.997]}
                scale={0.621}>
                <mesh
                  name="polySurface107_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface107_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group
                name="pCylinder2"
                position={[-0.405, 0.177, -2.334]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.27}>
                <mesh
                  name="pCylinder2_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder2_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group
                name="pCube24"
                position={[4.497, 5.356, -5.678]}
                rotation={[Math.PI / 4, 0, 0]}
                scale={[0.357, 5.339, 0.357]}>
                <mesh
                  name="pCube24_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube24_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube25"
                position={[4.497, 5.356, -1.923]}
                rotation={[-Math.PI / 4, 0, 0]}
                scale={[0.357, 5.339, 0.357]}>
                <mesh
                  name="pCube25_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube25_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube26"
                position={[1.983, 5.356, -5.678]}
                rotation={[Math.PI / 4, 0, 0]}
                scale={[0.357, 5.339, 0.357]}>
                <mesh
                  name="pCube26_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube26_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube27"
                position={[1.983, 5.356, -1.923]}
                rotation={[-Math.PI / 4, 0, 0]}
                scale={[0.357, 5.339, 0.357]}>
                <mesh
                  name="pCube27_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube27_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube28"
                position={[-0.731, 5.356, -5.678]}
                rotation={[Math.PI / 4, 0, 0]}
                scale={[0.357, 5.339, 0.357]}>
                <mesh
                  name="pCube28_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube28_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube29"
                position={[-0.731, 5.356, -1.923]}
                rotation={[-Math.PI / 4, 0, 0]}
                scale={[0.357, 5.339, 0.357]}>
                <mesh
                  name="pCube29_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube29_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube30"
                position={[-6.142, 5.356, -5.678]}
                rotation={[Math.PI / 4, 0, 0]}
                scale={[0.357, 5.339, 0.357]}>
                <mesh
                  name="pCube30_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube30_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube31"
                position={[-6.142, 5.356, -1.923]}
                rotation={[-Math.PI / 4, 0, 0]}
                scale={[0.357, 5.339, 0.357]}>
                <mesh
                  name="pCube31_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube31_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube32"
                position={[-0.81, 7.073, -3.806]}
                rotation={[-Math.PI / 4, 0, Math.PI / 2]}
                scale={[0.624, 9.668, 0.624]}>
                <mesh
                  name="pCube32_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube32_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube35"
                position={[-0.463, 2.018, -2.365]}
                rotation={[-Math.PI / 4, 0, Math.PI / 2]}
                scale={[0.272, 4.069, 0.272]}>
                <mesh
                  name="pCube35_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube35_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube36"
                position={[-0.463, 2.018, -3.651]}
                rotation={[Math.PI / 4, 0, Math.PI / 2]}
                scale={[0.272, 4.069, 0.272]}>
                <mesh
                  name="pCube36_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube36_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube37"
                position={[-0.463, 1.87, -3.69]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.272, 4.069, 0.272]}>
                <mesh
                  name="pCube37_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube37_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube38"
                position={[-0.463, 1.87, -2.336]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.272, 4.069, 0.272]}>
                <mesh
                  name="pCube38_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube38_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube39"
                position={[1.993, 1.794, -3]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.272, 4.069, 0.272]}>
                <mesh
                  name="pCube39_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube39_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube40" position={[3.227, 1.403, -2.466]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube40_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube40_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube41" position={[2.398, 1.403, -2.466]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube41_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube41_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube42" position={[1.296, 1.403, -2.466]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube42_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube42_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube43" position={[1.296, 1.403, -3.529]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube43_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube43_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube44" position={[2.398, 1.403, -3.529]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube44_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube44_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube45" position={[3.227, 1.403, -3.529]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube45_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube45_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube46"
                position={[-2.928, 1.403, -3.529]}
                scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube46_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube46_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube47"
                position={[-1.827, 1.403, -3.529]}
                scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube47_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube47_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube48"
                position={[-0.998, 1.403, -3.529]}
                scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube48_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube48_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube49"
                position={[-0.998, 1.403, -2.466]}
                scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube49_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube49_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube50"
                position={[-1.827, 1.403, -2.466]}
                scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube50_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube50_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube51"
                position={[-2.928, 1.403, -2.466]}
                scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube51_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube51_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube52"
                position={[-2.231, 1.794, -3]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.272, 4.069, 0.272]}>
                <mesh
                  name="pCube52_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube52_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube53"
                position={[-4.205, 1.403, -2.466]}
                scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube53_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube53_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube54"
                position={[-4.205, 1.403, -3.529]}
                scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube54_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube54_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube55" position={[0.013, 1.403, -3.529]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube55_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube55_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube56" position={[0.013, 1.403, -2.466]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube56_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube56_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube57"
                position={[-3.395, 5.356, -1.923]}
                rotation={[-Math.PI / 4, 0, 0]}
                scale={[0.357, 5.339, 0.357]}>
                <mesh
                  name="pCube57_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube57_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube58"
                position={[-0.672, 4.052, -6.7]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.357, 5.339, 0.357]}>
                <mesh
                  name="pCube58_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube58_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube59"
                position={[-0.672, 4.052, -0.875]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.357, 5.339, 0.357]}>
                <mesh
                  name="pCube59_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube59_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCylinder24" position={[-0.409, 0.176, 0.658]}>
                <mesh
                  name="pCylinder24_blinn1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder24_blinn1_0.geometry}
                  material={materials.blinn1}
                />
              </group>
              <group
                name="pCube60"
                position={[-0.463, 3.922, -3.011]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.272, 1.894, 0.272]}>
                <mesh
                  name="pCube60_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube60_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube64" position={[0, -0.957, 1.047]} scale={[14.52, 1, 5.416]}>
                <mesh
                  name="pCube64_lambert3_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube64_lambert3_0.geometry}
                  material={materials.lambert3}
                />
              </group>
              <group
                name="pCube65"
                position={[-3.517, 3.103, -8.978]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.357, 1.561, 0.357]}>
                <mesh
                  name="pCube65_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube65_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube66"
                position={[-2.121, 3.661, -8.01]}
                rotation={[1.134, 0, 0]}
                scale={[0.357, 3.232, 0.357]}>
                <mesh
                  name="pCube66_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube66_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube67"
                position={[-4.908, 3.661, -8.01]}
                rotation={[1.134, 0, 0]}
                scale={[0.357, 3.232, 0.357]}>
                <mesh
                  name="pCube67_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube67_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube68"
                position={[1.101, 1.794, -5.935]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.272, 4.069, 0.272]}>
                <mesh
                  name="pCube68_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube68_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube69" position={[2.335, 1.403, -6.464]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube69_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube69_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube70" position={[2.335, 1.403, -5.401]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube70_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube70_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube71" position={[1.505, 1.403, -6.464]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube71_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube71_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube72" position={[1.505, 1.403, -5.401]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube72_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube72_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube73" position={[0.404, 1.403, -6.464]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube73_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube73_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCube74" position={[0.404, 1.403, -5.401]} scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube74_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube74_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube75"
                position={[-0.879, 1.403, -6.464]}
                scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube75_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube75_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube76"
                position={[-0.879, 1.403, -5.401]}
                scale={[0.108, 1.617, 0.108]}>
                <mesh
                  name="pCube76_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube76_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="pCylinder25" position={[-0.409, -3.057, 0.658]}>
                <mesh
                  name="pCylinder25_blinn1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCylinder25_blinn1_0.geometry}
                  material={materials.blinn1}
                />
              </group>
              <group name="polySurface110" position={[0.237, 0.532, 0.217]}>
                <mesh
                  name="polySurface110_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface110_lambert1_0.geometry}
                  material={materials.lambert1}
                />
                <mesh
                  name="polySurface110_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface110_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube77"
                position={[-0.81, 5.53, -5.631]}
                rotation={[-Math.PI / 4, 0, Math.PI / 2]}
                scale={[0.037, 9.33, 5.369]}>
                <mesh
                  name="pCube77_lambert4_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube77_lambert4_0.geometry}
                  material={materials.lambert4}
                />
              </group>
              <group
                name="pCube78"
                position={[-0.81, 5.564, -1.974]}
                rotation={[Math.PI / 4, 0, Math.PI / 2]}
                scale={[0.037, 9.33, 5.369]}>
                <mesh
                  name="pCube78_lambert4_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube78_lambert4_0.geometry}
                  material={materials.lambert4}
                />
              </group>
              <group
                name="pCube79"
                position={[-3.549, 3.804, -8.014]}
                rotation={[-0.436, 0, Math.PI / 2]}
                scale={[0.037, 2.662, 2.852]}>
                <mesh
                  name="pCube79_lambert4_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube79_lambert4_0.geometry}
                  material={materials.lambert4}
                />
              </group>
              <group
                name="pCube80"
                position={[6.087, 1.129, -2.959]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.646, 2.687, 0.598]}>
                <mesh
                  name="pCube80_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube80_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pCube83"
                position={[0.435, 1.192, -4.176]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.272, 13.33, 0.272]}>
                <mesh
                  name="pCube83_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube83_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface130">
                <mesh
                  name="polySurface130_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface130_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface129">
                <mesh
                  name="polySurface129_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface129_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface128">
                <mesh
                  name="polySurface128_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface128_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface127">
                <mesh
                  name="polySurface127_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface127_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface126">
                <mesh
                  name="polySurface126_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface126_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface125">
                <mesh
                  name="polySurface125_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface125_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface124">
                <mesh
                  name="polySurface124_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface124_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface123">
                <mesh
                  name="polySurface123_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface123_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface122">
                <mesh
                  name="polySurface122_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface122_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface121">
                <mesh
                  name="polySurface121_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface121_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface120">
                <mesh
                  name="polySurface120_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface120_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface119">
                <mesh
                  name="polySurface119_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface119_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface118">
                <mesh
                  name="polySurface118_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface118_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface117">
                <mesh
                  name="polySurface117_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface117_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface116">
                <mesh
                  name="polySurface116_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface116_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface112">
                <mesh
                  name="polySurface112_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface112_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface111">
                <mesh
                  name="polySurface111_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface111_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group name="polySurface115">
                <mesh
                  name="polySurface115_blinn1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface115_blinn1_0.geometry}
                  material={materials.blinn1}
                />
              </group>
              <group
                name="pasted__pasted__Floor"
                position={[-1.164, -1.444, -13.017]}
                scale={[0.919, 0.201, 1.204]}>
                <mesh
                  name="pasted__pasted__Floor_pasted__pasted__Ground_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pasted__Floor_pasted__pasted__Ground_0.geometry}
                  material={materials.pasted__pasted__Ground}
                />
              </group>
              <group name="pasted__pCube17" position={[2.565, 1.856, -6.092]} scale={0.054}>
                <mesh
                  name="pasted__pCube17_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube17_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group
                name="pasted__pCube16"
                position={[0.242, 1.839, -6.218]}
                rotation={[-Math.PI, 0.885, -Math.PI]}
                scale={[0.036, 0.002, 0.65]}>
                <mesh
                  name="pasted__pCube16_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube16_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pasted__pCube15" position={[1.621, 1.856, -6.092]} scale={0.054}>
                <mesh
                  name="pasted__pCube15_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube15_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group
                name="pasted__pCylinder30"
                position={[1.615, 1.842, -6.737]}
                rotation={[0, 0.599, 0]}
                scale={0.029}>
                <mesh
                  name="pasted__pCylinder30_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCylinder30_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group
                name="pasted__pCube7"
                position={[-0.222, 1.854, -6.334]}
                rotation={[0, 0, Math.PI / 2]}
                scale={[0.06, 0.067, 0.067]}>
                <mesh
                  name="pasted__pCube7_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube7_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pCube85" position={[3.223, 0.468, -7.06]} scale={[1.967, 1, 1]}>
                <mesh
                  name="pCube85_lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube85_lambert2_0.geometry}
                  material={materials.lambert2}
                />
              </group>
              <group
                name="pasted__pCube11"
                position={[3.194, 1.841, -6.449]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.02}>
                <mesh
                  name="pasted__pCube11_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube11_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group
                name="pasted__pCylinder31"
                position={[2.631, 1.842, -5.078]}
                rotation={[Math.PI / 2, 0, 0.696]}
                scale={0.02}>
                <mesh
                  name="pasted__pCylinder31_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCylinder31_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group name="pasted__pCylinder33" position={[1.756, 1.837, -5.521]} scale={0.02}>
                <mesh
                  name="pasted__pCylinder33_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCylinder33_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group
                name="pasted__pCylinder34"
                position={[2.555, 1.842, -6.23]}
                rotation={[Math.PI / 2, 0, 0.262]}
                scale={0.013}>
                <mesh
                  name="pasted__pCylinder34_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCylinder34_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group
                name="pasted__pCube18"
                position={[2.788, 1.841, -6.467]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.013}>
                <mesh
                  name="pasted__pCube18_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube18_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group
                name="pasted__pCylinder35"
                position={[3.403, 1.842, -6.466]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.024}>
                <mesh
                  name="pasted__pCylinder35_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCylinder35_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
              <group
                name="pasted__pCube22"
                position={[1.083, -0.199, -7.506]}
                rotation={[0, -1.316, 0]}
                scale={0.276}>
                <mesh
                  name="pasted__pCube22_pasted__lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube22_pasted__lambert2_0.geometry}
                  material={materials.pasted__lambert2}
                />
                <mesh
                  name="pasted__pCube22_pasted__blinn1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube22_pasted__blinn1_0.geometry}
                  material={materials.pasted__blinn1}
                />
              </group>
              <group
                name="pasted__pCube21"
                position={[0.695, -0.199, -6.897]}
                rotation={[0, -0.667, 0]}
                scale={0.276}>
                <mesh
                  name="pasted__pCube21_pasted__lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube21_pasted__lambert2_0.geometry}
                  material={materials.pasted__lambert2}
                />
                <mesh
                  name="pasted__pCube21_pasted__blinn1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube21_pasted__blinn1_0.geometry}
                  material={materials.pasted__blinn1}
                />
              </group>
              <group name="pasted__pCube20" position={[2.634, 1.157, -5.681]} scale={0.15}>
                <mesh
                  name="pasted__pCube20_pasted__lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube20_pasted__lambert2_0.geometry}
                  material={materials.pasted__lambert2}
                />
                <mesh
                  name="pasted__pCube20_pasted__blinn1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube20_pasted__blinn1_0.geometry}
                  material={materials.pasted__blinn1}
                />
              </group>
              <group name="pasted__pCube4" position={[2.634, 1.157, -6.142]} scale={0.15}>
                <mesh
                  name="pasted__pCube4_pasted__lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube4_pasted__lambert2_0.geometry}
                  material={materials.pasted__lambert2}
                />
                <mesh
                  name="pasted__pCube4_pasted__blinn1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube4_pasted__blinn1_0.geometry}
                  material={materials.pasted__blinn1}
                />
              </group>
              <group
                name="pasted__pCube3"
                position={[1.408, -0.199, -6.897]}
                rotation={[0, 0.578, 0]}
                scale={0.276}>
                <mesh
                  name="pasted__pCube3_pasted__lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube3_pasted__lambert2_0.geometry}
                  material={materials.pasted__lambert2}
                />
                <mesh
                  name="pasted__pCube3_pasted__blinn1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube3_pasted__blinn1_0.geometry}
                  material={materials.pasted__blinn1}
                />
              </group>
              <group name="pasted__pCube2" position={[-1.294, 1.107, -2.619]} scale={0.216}>
                <mesh
                  name="pasted__pCube2_pasted__lambert2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube2_pasted__lambert2_0.geometry}
                  material={materials.pasted__lambert2}
                />
                <mesh
                  name="pasted__pCube2_pasted__blinn1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube2_pasted__blinn1_0.geometry}
                  material={materials.pasted__blinn1}
                />
              </group>
              <group
                name="pasted__pCube19"
                position={[3.52, 1.841, -6.44]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.024}>
                <mesh
                  name="pasted__pCube19_lambert1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pCube19_lambert1_0.geometry}
                  material={materials.lambert1}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("models-3d/saw_mill.glb");
export default SawMill;
