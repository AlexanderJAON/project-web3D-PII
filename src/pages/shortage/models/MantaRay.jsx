import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"

const MantaRay =(props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF ("models-3d/manta-ray.glb");
    const { actions } = useAnimations(animations, group)

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
        <group ref={group} {...props} dispose={null}>
          <group name="Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="d7eb557a935c47aba0900c0845ab9c8cfbx" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Object_2">
                  <group name="RootNode">
                    <group name="Object_4">
                      <group name="MantaRayBirostris" rotation={[-Math.PI / 2, 0, 0]} />
                      <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                      <skinnedMesh
                        name="Object_7"
                        geometry={nodes.Object_7.geometry}
                        material={materials.MantaRay}
                        skeleton={nodes.Object_7.skeleton}
                        castShadow
                        receiveShadow
                      />
                      <primitive object={nodes._rootJoint} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      )
    }
    
    export default MantaRay; 
    useGLTF.preload('models-3d/manta-ray.glb')
    