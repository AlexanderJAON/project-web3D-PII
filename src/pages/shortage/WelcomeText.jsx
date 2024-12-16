import { Html } from "@react-three/drei"

const WelcomeText = ()=>{
    return(
        <Html
        center
        distanceFactor={30}
        transform
        position={[0.3, 18, 0]}
        >
            <h1>  La escasez </h1>
        </Html>
    );
};

export default WelcomeText;