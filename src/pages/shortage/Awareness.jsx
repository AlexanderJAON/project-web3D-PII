import { Canvas } from "@react-three/fiber"
import Desert from "./models/Desert";
import { OrbitControls } from "@react-three/drei";

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
            <OrbitControls/>
        </Canvas>
    );
};

const Awareness = ()=>{
    return(
        <div className="conteiner-awareness">
           
            <div>
                <h1> Hola mai pepople</h1>
                
            </div>
            <EarthSceneAwa/>
        </div>
        
    )
}


export default Awareness;