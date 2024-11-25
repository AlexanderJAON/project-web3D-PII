import React, { useRef, forwardRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Fish1 = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/trashmodels/sharkAnimated.glb");
  const { actions } = useAnimations(animations, group);

  // Reproducir la animación al cargar
  useEffect(() => {
    if (actions) {
      // Asumiendo que la animación está en la primera acción
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play(); // Reproducir la animación
      }
    }
  }, [actions]); // Dependencia de actions para reproducir una vez cargado

  return (
    <group ref={group} {...props} dispose={null} scale={0.01}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="ff18141b020e473b85ea3f3c0efcc205fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Shark_Player"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group name="Core" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_6">
                    <group
                      name="Object_7"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Bone_00"
                      position={[0, -0.181, 0.103]}
                      rotation={[1.564, 0.064, 0]}
                    >
                      <primitive object={nodes.Head_01} />
                      <primitive object={nodes.Spine01_04} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
          <skinnedMesh
            name="Object_8"
            geometry={nodes.Object_8.geometry}
            material={materials["Scene_-_Root"]}
            skeleton={nodes.Object_8.skeleton}
          />
        </group>
      </group>
    </group>
  );
});

export default Fish1;
useGLTF.preload("models-3d/trashmodels/sharkAnimated.glb");