import React from "react";
import { EffectComposer, Bloom, } from "@react-three/postprocessing";

const Postprocessing = () => {
  return (
    <EffectComposer>
 

<Bloom intensity={0.1} luminanceThreshold={0.1} luminanceSmoothing={0.9} />



    </EffectComposer>
  );
};

export default Postprocessing;
