import { useAnimations, useGLTF, useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useEffect, useRef } from "react"

const Lizard = (props)=>{
  const lizardRef = useRef(null);
  const { nodes, materials, animations } = useGLTF("/models-3d/lizard_walk_animated.glb")
  const { actions } = useAnimations(animations, lizardRef)

  const [sub, get] = useKeyboardControls();
  
  

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


    if (right){
      lizardRef.current.position.x += 2*delta
    }

    if(left){
      lizardRef.current.position.x -= 2*delta
    }

    if(forward){
      lizardRef.current.position.z += 2*delta
    }

    if(back){
      lizardRef.current.position.z -= 2*delta
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
    <RigidBody colliders={false} >
   
    <group ref = {lizardRef} position={[0, -1, 0]} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group 
          
          name="Catwalk_Walk_Forward_03fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
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
                    scale={0.1}
                  />
                  <group
                    name="model"
                    position={[0, 32.761, 0]}
                    rotation={[-Math.PI / 2, 0, -1.568]}
                    scale={0.1}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    <CuboidCollider args={[3, 0.2, 3]} position={props.position}/>
    </RigidBody>
  )
  
}

useGLTF.preload("/models-3d/lizard_walk_animated.glb")
export default Lizard;