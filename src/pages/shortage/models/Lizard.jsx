import { useAnimations, useGLTF, useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"

const Lizard = (props)=>{
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/models-3d/lizard_walk_animated.glb")
  const { actions } = useAnimations(animations, group)

  const [sub, get] = useKeyboardControls();
  const lizardRef = useRef(null);

  useEffect(()=>{ 
    return sub(
      (state)=> state.forward,
      (state)=> state.back,

      (pressed) => {
        console.log("forward", pressed);
      }
    );
  });

  useFrame((state, delta)=>{
    const {forward, back, left, right} = get();


    if (forward){
      lizardRef.current.position.x += 1*delta
    }

    if(back){
      lizardRef.current.position.x -= 1*delta
    }

    if(left){
      lizardRef.current.position.y += 1*delta
    }

    if(right){
      lizardRef.current.position.y -= 1*delta
    }
  
    const pressed = get().back;
  });

  useEffect(() => {
    if (actions) {
      console.log(Object.keys(actions)); 
      console.log(animations);
      const action = actions[Object.keys(actions)[0]]; 

      if (action) {
        action.play();
      }
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group 
          ref = {lizardRef}
          name="Catwalk_Walk_Forward_03fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.0020}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials['default']}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group
                    name="Object_6"
                    position={[0, 32.761, 0]}
                    rotation={[-Math.PI / 2, 0, -1.568]}
                    scale={39.37}
                  />
                  <group
                    name="model"
                    position={[0, 32.761, 0]}
                    rotation={[-Math.PI / 2, 0, -1.568]}
                    scale={39.37}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/models-3d/lizard_walk_animated.glb")
export default Lizard;