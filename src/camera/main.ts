import * as THREE from 'three';

export const createCamera = () => {
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  );
  camera.position.set(0, 0, 500);

  return camera;
};
