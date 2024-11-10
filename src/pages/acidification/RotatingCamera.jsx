
import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const RotatingCamera = ({ cameraPosition }) => {
  const { camera } = useThree();
  const targetPosition = useRef(new Vector3(...cameraPosition));

  useEffect(() => {
    targetPosition.current.set(...cameraPosition);
  }, [cameraPosition]);

  useFrame(() => {
    camera.position.lerp(targetPosition.current, 0.009); 
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default RotatingCamera;

