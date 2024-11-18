import { Environment } from "@react-three/drei"

const Staging = () => {
    return (
        <>
        <Environment
        
            
            files={["nx.png", "ny.png", "nz.png", "px.png", "py.png", "pz.png"]}
            path="/cubemap/desert-sky/"
            background={true}
        />
        </>
    )
}

export default Staging;