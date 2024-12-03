import LagoonHouse from "./models/LagoonHouse"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Quiz = () => {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ width: "100vw", height: "100vh" }}
        >
        <directionalLight
            castShadow
            intensity={2}
            position={[0, 10, 0]}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />
        <LagoonHouse />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls/>
        </Canvas>
    )
}
export default Quiz;