import { Html } from "@react-three/drei"

const WelcomeText = ()=>{
    return(
        <Html
        center
        distanceFactor={30}
        transform
        position={[-1, 8, 0]}
        >
            <h1> Bienvenido </h1>
        </Html>
    );
};

export default WelcomeText;