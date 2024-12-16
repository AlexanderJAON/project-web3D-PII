import { useGLTF } from "@react-three/drei";
import { useRef } from "react"

const GarbageBag = (props) => {
    const group = useRef();
    const {nodes, materials} = useGLTF("/models-3d/garbage-bag.glb");

    return (
        <group {...props} dispose={null}>
          <group name="Sketchfab_Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="GarbageBagWhitefbx" rotation={[Math.PI / 2, 0, 0]} scale={0.4}>
                <group name="RootNode">
                  <group
                    name="GarbageWhiteNew_Baked"
                    position={[5.915, 35.609, 103.97]}
                    rotation={[-1.476, 0.178, -0.004]}
                    scale={100}>
                    <mesh
                      name="GarbageWhiteNew_Baked_GarbageWhiteNew_Baked_0"
                      geometry={nodes.GarbageWhiteNew_Baked_GarbageWhiteNew_Baked_0.geometry}
                      material={materials.GarbageWhiteNew_Baked}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      )
}

export default GarbageBag;
useGLTF.preload("/models-3d/garbage-bag.glb")