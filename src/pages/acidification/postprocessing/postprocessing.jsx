import React from "react";
import { EffectComposer, Fog } from "@react-three/postprocessing";
import { Color } from "three";

const PostProcessing = () => {
  return (
    <EffectComposer>
      <Fog 
        color={new Color(0x4d648d)} 
        near={10} 
        far={100} 
      />
    </EffectComposer>
  );
};

export default PostProcessing;
