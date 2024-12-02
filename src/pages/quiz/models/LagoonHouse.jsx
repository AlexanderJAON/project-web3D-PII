import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const LagoonHouse = (props) =>{
    const group = useRef();
    const {nodes, materials} = useGLTF("/models-3d/lagoon-house.glb");

    return (
        <group {...props} dispose={null}>
          <group name="Sketchfab_Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="root">
                <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Cube_0" position={[0, 0.201, 0]}>
                    <mesh
                      name="Object_4"
                      geometry={nodes.Object_4.geometry}
                      material={materials['Material.008']}
                    />
                  </group>
                  <group name="Cube001_3" position={[0, 0.201, 0]} scale={[1.003, 1, 1.003]}>
                    <mesh
                      name="Object_6"
                      geometry={nodes.Object_6.geometry}
                      material={materials.Material}
                    />
                    <mesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.Material}
                    />
                  </group>
                  <group
                    name="Cube002_4"
                    position={[0.291, 0.498, 0.143]}
                    rotation={[-0.001, 0.749, -0.012]}>
                    <mesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cylinder_5"
                    position={[0.665, 0.299, 0.699]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={[-0.116, 0.549, 0.116]}>
                    <mesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cylinder001_6"
                    position={[0.81, 0.299, 0.559]}
                    rotation={[-Math.PI, 0, 0]}
                    scale={[-0.116, 0.549, 0.116]}>
                    <mesh
                      name="Object_13"
                      geometry={nodes.Object_13.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group
                    name="Cube003_7"
                    position={[-0.297, 0.473, 0.352]}
                    rotation={[-2.669, 0.15, -3.064]}
                    scale={[0.819, 0.751, 0.805]}>
                    <mesh
                      name="Object_15"
                      geometry={nodes.Object_15.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Cube005_8"
                    position={[-0.474, 0.287, 0.52]}
                    rotation={[2.932, 0.358, 1.605]}
                    scale={0.618}>
                    <mesh
                      name="Object_17"
                      geometry={nodes.Object_17.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Cube004_9"
                    position={[-0.625, 0.153, 0.809]}
                    rotation={[0.411, -0.051, -3.012]}
                    scale={0.362}>
                    <mesh
                      name="Object_19"
                      geometry={nodes.Object_19.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Cube006_10"
                    position={[-0.835, 0.288, 0.679]}
                    rotation={[2.994, 0.778, -1.42]}
                    scale={0.568}>
                    <mesh
                      name="Object_21"
                      geometry={nodes.Object_21.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Cube007_11"
                    position={[-0.64, 0.3, 0.702]}
                    rotation={[-3.037, 0.145, 1.371]}
                    scale={0.398}>
                    <mesh
                      name="Object_23"
                      geometry={nodes.Object_23.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Cube008_12"
                    position={[0.344, 0.49, -0.311]}
                    rotation={[-3.078, 0.453, 1.334]}
                    scale={0.618}>
                    <mesh
                      name="Object_25"
                      geometry={nodes.Object_25.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Cube009_13"
                    position={[0.319, 0.504, -0.652]}
                    rotation={[-2.018, 0.519, -3.13]}
                    scale={[0.637, 0.584, 0.626]}>
                    <mesh
                      name="Object_27"
                      geometry={nodes.Object_27.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group name="Cube010_14" position={[-0.577, 0.712, -0.467]} rotation={[0, 0.463, 0]}>
                    <mesh
                      name="Object_29"
                      geometry={nodes.Object_29.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <group name="Cube011_15" position={[-0.577, 0.712, -0.467]} rotation={[0, 0.463, 0]}>
                    <mesh
                      name="Object_31"
                      geometry={nodes.Object_31.geometry}
                      material={materials['Material.004']}
                    />
                  </group>
                  <group name="Cube012_16" position={[-0.577, 1.067, -0.467]} rotation={[0, 0.463, 0]}>
                    <mesh
                      name="Object_33"
                      geometry={nodes.Object_33.geometry}
                      material={materials['Material.004']}
                    />
                  </group>
                  <group
                    name="Cylinder003_17"
                    position={[-0.577, 0.712, -0.467]}
                    rotation={[0, 0.463, 0]}
                    scale={[0.925, 1.054, 0.993]}>
                    <mesh
                      name="Object_35"
                      geometry={nodes.Object_35.geometry}
                      material={materials['Material.009']}
                    />
                  </group>
                  <group
                    name="Cube013_18"
                    position={[-0.511, 0.63, -0.158]}
                    rotation={[-Math.PI, -0.463, -Math.PI]}
                    scale={[0.017, 0.152, 0.027]}>
                    <mesh
                      name="Object_37"
                      geometry={nodes.Object_37.geometry}
                      material={materials['Material.005']}
                    />
                  </group>
                  <group name="Cube015_19" position={[-0.526, 0.665, -0.116]} rotation={[0, 0.463, 0]}>
                    <mesh
                      name="Object_39"
                      geometry={nodes.Object_39.geometry}
                      material={materials['Material.004']}
                    />
                  </group>
                  <group
                    name="Cube016_20"
                    position={[-0.326, 0.638, -0.216]}
                    rotation={[0, 0.463, -Math.PI]}
                    scale={[-1, 1.196, 1]}>
                    <mesh
                      name="Object_41"
                      geometry={nodes.Object_41.geometry}
                      material={materials['Material.004']}
                    />
                  </group>
                  <group
                    name="Cube017_21"
                    position={[-0.423, 0.805, -0.155]}
                    rotation={[0, 0.463, -Math.PI / 2]}
                    scale={[-1, 1.061, 1]}>
                    <mesh
                      name="Object_43"
                      geometry={nodes.Object_43.geometry}
                      material={materials['Material.004']}
                    />
                  </group>
                  <group
                    name="Torus_22"
                    position={[-0.487, 0.653, -0.14]}
                    rotation={[-Math.PI / 2, 0, 0.463]}
                    scale={[-0.011, 0.011, 0.011]}>
                    <mesh
                      name="Object_45"
                      geometry={nodes.Object_45.geometry}
                      material={materials['Material.006']}
                    />
                  </group>
                  <group name="Cube014_23" position={[-0.488, 0.663, -0.141]} rotation={[0, 0.463, 0]}>
                    <mesh
                      name="Object_47"
                      geometry={nodes.Object_47.geometry}
                      material={materials['Material.006']}
                    />
                  </group>
                  <group name="Cube018_24" position={[-0.577, 0.712, -0.467]} rotation={[0, 0.463, 0]}>
                    <mesh
                      name="Object_49"
                      geometry={nodes.Object_49.geometry}
                      material={materials['Material.004']}
                    />
                  </group>
                  <group
                    name="Circle_25"
                    position={[0.294, 0.148, 0.606]}
                    rotation={[-2.542, -0.362, 0.031]}
                    scale={0.044}>
                    <mesh
                      name="Object_51"
                      geometry={nodes.Object_51.geometry}
                      material={materials['Material.003']}
                    />
                  </group>
                  <group
                    name="Plane_26"
                    position={[-0.802, 0.471, 0.225]}
                    rotation={[-0.731, 0.263, 0.321]}
                    scale={0.559}>
                    <mesh
                      name="Object_53"
                      geometry={nodes.Object_53.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane001_27"
                    position={[-0.799, 0.471, 0.233]}
                    rotation={[-1.238, -0.853, -1.044]}
                    scale={0.559}>
                    <mesh
                      name="Object_55"
                      geometry={nodes.Object_55.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane002_28"
                    position={[-0.799, 0.471, 0.233]}
                    rotation={[-2.276, -0.433, -2.622]}
                    scale={0.559}>
                    <mesh
                      name="Object_57"
                      geometry={nodes.Object_57.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane003_29"
                    position={[-0.814, 0.471, 0.241]}
                    rotation={[-2.33, 0.308, 2.893]}
                    scale={0.559}>
                    <mesh
                      name="Object_59"
                      geometry={nodes.Object_59.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane004_30"
                    position={[-0.799, 0.471, 0.233]}
                    rotation={[-1.331, 0.626, 1.3]}
                    scale={0.559}>
                    <mesh
                      name="Object_61"
                      geometry={nodes.Object_61.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane005_31"
                    position={[0.292, 0.516, -0.019]}
                    rotation={[0.288, -0.507, -0.13]}
                    scale={0.083}>
                    <mesh
                      name="Object_63"
                      geometry={nodes.Object_63.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane006_32"
                    position={[-0.186, 0.527, -0.824]}
                    rotation={[-2.276, 0.56, 2.676]}
                    scale={0.559}>
                    <mesh
                      name="Object_65"
                      geometry={nodes.Object_65.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane007_33"
                    position={[-0.181, 0.527, -0.829]}
                    rotation={[-0.818, 0.552, 0.608]}
                    scale={0.559}>
                    <mesh
                      name="Object_67"
                      geometry={nodes.Object_67.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane008_34"
                    position={[-0.181, 0.527, -0.829]}
                    rotation={[-0.827, -0.351, -0.296]}
                    scale={0.559}>
                    <mesh
                      name="Object_69"
                      geometry={nodes.Object_69.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane009_35"
                    position={[-0.166, 0.527, -0.819]}
                    rotation={[-1.548, -0.808, -1.478]}
                    scale={0.559}>
                    <mesh
                      name="Object_71"
                      geometry={nodes.Object_71.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane010_36"
                    position={[-0.181, 0.527, -0.829]}
                    rotation={[-2.231, -0.085, -2.907]}
                    scale={0.559}>
                    <mesh
                      name="Object_73"
                      geometry={nodes.Object_73.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane011_37"
                    position={[0.068, 0.536, -0.361]}
                    rotation={[-1.923, -0.813, -1.948]}
                    scale={0.559}>
                    <mesh
                      name="Object_75"
                      geometry={nodes.Object_75.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane012_38"
                    position={[0.061, 0.536, -0.364]}
                    rotation={[-2.434, 0.299, 2.992]}
                    scale={0.559}>
                    <mesh
                      name="Object_77"
                      geometry={nodes.Object_77.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane013_39"
                    position={[0.061, 0.536, -0.364]}
                    rotation={[-1.526, 0.807, 1.57]}
                    scale={0.559}>
                    <mesh
                      name="Object_79"
                      geometry={nodes.Object_79.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane014_40"
                    position={[0.063, 0.536, -0.381]}
                    rotation={[-0.821, 0.337, 0.402]}
                    scale={0.559}>
                    <mesh
                      name="Object_81"
                      geometry={nodes.Object_81.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Plane015_41"
                    position={[0.061, 0.536, -0.364]}
                    rotation={[-1.159, -0.538, -0.74]}
                    scale={0.559}>
                    <mesh
                      name="Object_83"
                      geometry={nodes.Object_83.geometry}
                      material={materials['Material.002']}
                    />
                  </group>
                  <group
                    name="Circle001_42"
                    position={[-0.754, 0.476, 0.675]}
                    rotation={[-2.413, -0.343, 0.975]}
                    scale={[0.028, 0.026, 0.026]}>
                    <mesh
                      name="Object_85"
                      geometry={nodes.Object_85.geometry}
                      material={materials['Material.003']}
                    />
                  </group>
                  <group
                    name="Circle002_43"
                    position={[0.379, 0.486, -0.104]}
                    rotation={[-2.978, 0.071, 0.504]}
                    scale={[-0.037, 0.034, 0.034]}>
                    <mesh
                      name="Object_87"
                      geometry={nodes.Object_87.geometry}
                      material={materials['Material.003']}
                    />
                  </group>
                  <group
                    name="Circle003_44"
                    position={[0.84, 0.14, -0.535]}
                    rotation={[-2.99, 0.188, 0.275]}
                    scale={[-0.037, 0.034, 0.034]}>
                    <mesh
                      name="Object_89"
                      geometry={nodes.Object_89.geometry}
                      material={materials['Material.003']}
                    />
                  </group>
                  <group
                    name="Plane016_45"
                    position={[0.192, 0.514, 0.105]}
                    rotation={[1.864, 1.481, -1.311]}
                    scale={0.055}>
                    <mesh
                      name="Object_91"
                      geometry={nodes.Object_91.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane017_46"
                    position={[0.147, 0.526, 0.015]}
                    rotation={[-2.29, -1.202, -1.871]}
                    scale={0.047}>
                    <mesh
                      name="Object_93"
                      geometry={nodes.Object_93.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane018_47"
                    position={[0.106, 0.516, 0.096]}
                    rotation={[0.68, -0.802, 0.095]}
                    scale={0.055}>
                    <mesh
                      name="Object_95"
                      geometry={nodes.Object_95.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane019_48"
                    position={[-0.059, 0.515, 0.092]}
                    rotation={[3.089, 0.728, -3.042]}
                    scale={0.068}>
                    <mesh
                      name="Object_97"
                      geometry={nodes.Object_97.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane020_49"
                    position={[-0.176, 0.533, 0.085]}
                    rotation={[-0.103, -0.109, -0.125]}
                    scale={0.083}>
                    <mesh
                      name="Object_99"
                      geometry={nodes.Object_99.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane021_50"
                    position={[-0.322, 0.557, 0.075]}
                    rotation={[-3.066, 0.076, 3.098]}
                    scale={0.055}>
                    <mesh
                      name="Object_101"
                      geometry={nodes.Object_101.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane022_51"
                    position={[-0.419, 0.55, 0.037]}
                    rotation={[-3.043, 0.701, 3.04]}
                    scale={0.063}>
                    <mesh
                      name="Object_103"
                      geometry={nodes.Object_103.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane023_52"
                    position={[-0.097, 0.543, -0.008]}
                    rotation={[-2.836, 0.496, 2.965]}
                    scale={0.063}>
                    <mesh
                      name="Object_105"
                      geometry={nodes.Object_105.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane024_53"
                    position={[-0.499, 0.549, -0.029]}
                    rotation={[-2.756, 0.285, 3.026]}
                    scale={0.037}>
                    <mesh
                      name="Object_107"
                      geometry={nodes.Object_107.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane025_54"
                    position={[-0.246, 0.534, -0.012]}
                    rotation={[-2.253, -1.474, -2.294]}
                    scale={0.055}>
                    <mesh
                      name="Object_109"
                      geometry={nodes.Object_109.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane026_55"
                    position={[-0.339, 0.538, -0.046]}
                    rotation={[-0.173, 0.628, -0.24]}
                    scale={0.055}>
                    <mesh
                      name="Object_111"
                      geometry={nodes.Object_111.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane027_56"
                    position={[-0.415, 0.539, -0.071]}
                    rotation={[-0.551, -0.39, -0.249]}
                    scale={0.032}>
                    <mesh
                      name="Object_113"
                      geometry={nodes.Object_113.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane028_57"
                    position={[-0.339, 0.532, -0.119]}
                    rotation={[-2.974, -0.527, 3.035]}
                    scale={0.032}>
                    <mesh
                      name="Object_115"
                      geometry={nodes.Object_115.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane029_58"
                    position={[-0.165, 0.522, -0.031]}
                    rotation={[-2.816, -0.567, 3.052]}
                    scale={0.032}>
                    <mesh
                      name="Object_117"
                      geometry={nodes.Object_117.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane030_59"
                    position={[-0.255, 0.547, -0.112]}
                    rotation={[1.652, -1.434, 1.305]}
                    scale={0.063}>
                    <mesh
                      name="Object_119"
                      geometry={nodes.Object_119.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane031_60"
                    position={[0.011, 0.542, 0.034]}
                    rotation={[-2.817, 0.072, 3.066]}
                    scale={0.061}>
                    <mesh
                      name="Object_121"
                      geometry={nodes.Object_121.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane032_61"
                    position={[-0.191, 0.538, -0.082]}
                    rotation={[-2.283, 0.961, 2.787]}
                    scale={0.032}>
                    <mesh
                      name="Object_123"
                      geometry={nodes.Object_123.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane033_62"
                    position={[-0.136, 0.548, -0.072]}
                    rotation={[-2.659, 0.481, 2.937]}
                    scale={0.032}>
                    <mesh
                      name="Object_125"
                      geometry={nodes.Object_125.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane034_63"
                    position={[0.24, 0.502, 0.044]}
                    rotation={[-0.172, 0.323, -0.308]}
                    scale={0.032}>
                    <mesh
                      name="Object_127"
                      geometry={nodes.Object_127.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane035_64"
                    position={[-0.395, 0.532, -0.124]}
                    rotation={[-3.066, -0.127, 3.113]}
                    scale={0.032}>
                    <mesh
                      name="Object_129"
                      geometry={nodes.Object_129.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane036_65"
                    position={[0.026, 0.501, 0.118]}
                    rotation={[2.998, 0.801, -2.86]}
                    scale={0.032}>
                    <mesh
                      name="Object_131"
                      geometry={nodes.Object_131.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane037_66"
                    position={[0.105, 0.485, 0.138]}
                    rotation={[0.332, -0.035, -0.053]}
                    scale={0.032}>
                    <mesh
                      name="Object_133"
                      geometry={nodes.Object_133.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane038_67"
                    position={[-0.114, 0.522, 0.118]}
                    rotation={[-3.016, 0.954, -3.139]}
                    scale={0.032}>
                    <mesh
                      name="Object_135"
                      geometry={nodes.Object_135.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane039_68"
                    position={[0.09, 0.545, 0.009]}
                    rotation={[-0.124, 0.189, -0.189]}
                    scale={0.032}>
                    <mesh
                      name="Object_137"
                      geometry={nodes.Object_137.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane040_69"
                    position={[-0.249, 0.168, 0.689]}
                    rotation={[-2.803, 0.861, 3.129]}
                    scale={0.068}>
                    <mesh
                      name="Object_139"
                      geometry={nodes.Object_139.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane041_70"
                    position={[-0.153, 0.174, 0.669]}
                    rotation={[-2.857, 0.769, -3.065]}
                    scale={0.043}>
                    <mesh
                      name="Object_141"
                      geometry={nodes.Object_141.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane042_71"
                    position={[-0.153, 0.153, 0.749]}
                    rotation={[-2.91, 0.961, 3.01]}
                    scale={0.043}>
                    <mesh
                      name="Object_143"
                      geometry={nodes.Object_143.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane043_72"
                    position={[-0.077, 0.161, 0.716]}
                    rotation={[-3.089, 0.855, -3.091]}
                    scale={0.043}>
                    <mesh
                      name="Object_145"
                      geometry={nodes.Object_145.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane044_73"
                    position={[0.807, 0.125, 0.716]}
                    rotation={[3.104, 0.684, -3.101]}
                    scale={0.043}>
                    <mesh
                      name="Object_147"
                      geometry={nodes.Object_147.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane045_74"
                    position={[0.807, 0.128, 0.791]}
                    rotation={[2.991, 0.487, -2.991]}
                    scale={0.043}>
                    <mesh
                      name="Object_149"
                      geometry={nodes.Object_149.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane046_75"
                    position={[0.876, 0.125, 0.755]}
                    rotation={[3.104, 0.684, -3.101]}
                    scale={0.043}>
                    <mesh
                      name="Object_151"
                      geometry={nodes.Object_151.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane047_76"
                    position={[0.906, 0.138, 0.547]}
                    rotation={[-2.963, -0.059, 3.034]}
                    scale={0.061}>
                    <mesh
                      name="Object_153"
                      geometry={nodes.Object_153.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane048_77"
                    position={[0.906, 0.149, 0.394]}
                    rotation={[3.096, -0.364, 3.013]}
                    scale={0.061}>
                    <mesh
                      name="Object_155"
                      geometry={nodes.Object_155.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane049_78"
                    position={[0.885, 0.151, -0.686]}
                    rotation={[0.448, 1.271, -0.463]}
                    scale={0.043}>
                    <mesh
                      name="Object_157"
                      geometry={nodes.Object_157.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane050_79"
                    position={[0.899, 0.15, -0.767]}
                    rotation={[-0.298, -1.265, -0.293]}
                    scale={0.043}>
                    <mesh
                      name="Object_159"
                      geometry={nodes.Object_159.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane051_80"
                    position={[0.809, 0.169, -0.77]}
                    rotation={[0.044, 0.277, -0.296]}
                    scale={0.043}>
                    <mesh
                      name="Object_161"
                      geometry={nodes.Object_161.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                  <group
                    name="Plane052_81"
                    position={[0.852, 0.155, -0.842]}
                    rotation={[-3.088, -0.424, -2.929]}
                    scale={0.043}>
                    <mesh
                      name="Object_163"
                      geometry={nodes.Object_163.geometry}
                      material={materials['Material.001']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      )
}

export default LagoonHouse;
useGLTF.preload("/models-3d/lagoon-house.glb")