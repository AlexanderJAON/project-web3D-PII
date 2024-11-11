import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Exclamation = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models-3d/exclamation_point.glb');
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
    <group {...props} dispose={null}>
    <group name="Scene">
      <mesh
        name="Sphere001"
        geometry={nodes.Sphere001.geometry}
        material={materials['Material.001']}
        position={[0, 5.917, 0]}
        scale={[1.204, 4.017, 1.204]}
      />
    </group>
  </group>
  )
 
}

useGLTF.preload('models-3d/exclamation_point.glb')
export default Exclamation;