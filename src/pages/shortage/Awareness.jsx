import { Canvas } from "@react-three/fiber"
import Desert from "./models/Desert";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import Lizard from "./models/Lizard";
import { useMemo } from "react";

const EarthSceneAwa = ()=> {
    return (
        
        <Canvas shadows camera={{ position: [-20.1, -0.5, 10], fov: 55}} 
        style={{ width: "100vw", height: "100vh" }}>
            <directionalLight
                castShadow
                intensity={2}
                position={[0, 10, 0]}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <ambientLight/>
            <pointLight position={[10,10,10]}/>
            <Desert position={[-18.4, -1, 9]} rotation={[-0.03, 0.4, 0]}/>
            <Lizard castShadow position={[-18.4, -0.9, 9]}/>
            <OrbitControls/>
        </Canvas>
       
    );
};



const Awareness = ()=>{
    const map = useMemo (()=>
        [
            {name: "forward", keys: ["ArrowUp", "KeyW"]},
            {name: "back", keys: ["ArrowDown", "KeyS"]},
            {name: "left", keys: ["ArrowLeft", "KeyA"]},
            {name: "right", keys: ["ArrowRight", "KeyD"]},
        ]
        ,[]);
        
        
    return(
        <div className="conteiner-awareness">
           
            <div>
                <h1> Bienvenidos </h1>
                
            </div>
            <KeyboardControls map ={map}>
            <EarthSceneAwa/>
            </KeyboardControls>
        </div>
        
    )
}


export default Awareness;