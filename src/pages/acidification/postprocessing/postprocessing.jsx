import React from "react";
import { EffectComposer, Bloom, DepthOfField, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Color } from "three";
import { RenderPass } from "postprocessing";


const Postprocessing = () => {
  return (
    <EffectComposer>
 

<Bloom intensity={0.1} luminanceThreshold={0.1} luminanceSmoothing={0.9} />



    </EffectComposer>
  );
};

export default Postprocessing;
