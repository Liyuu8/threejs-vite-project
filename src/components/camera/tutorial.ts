import * as THREE from 'three';

export const createCamera = (x: number, y: number, z: number) => {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(x, y, z);

  return camera;
};
