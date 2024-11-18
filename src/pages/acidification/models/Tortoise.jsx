import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Tortoise = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('models-3d/tortoise.glb');
  const { actions } = useAnimations(animations, group);
  const { camera, gl } = useThree();

  useEffect(() => {
    if (actions) {
      const action = actions[Object.keys(actions)[0]]; 
      if (action) {
        action.play();
      }
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.003} position={[4, 0.5, 0]}>
          <group name="65da75f46dd245e49f6cb513d196054ffbx" rotation={[Math.PI / 2, 4, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.pasted__tortugaRetopo1_blinn}
                    skeleton={nodes.Object_7.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <group name="Object_6" />
                  <group name="group">
                    <group name="pasted__tortugaRetopo1" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      
    </group>
  );
}

useGLTF.preload('models-3d/tortoise.glb');

export default Tortoise;
