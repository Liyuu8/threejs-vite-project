import * as THREE from 'three';

export const createambientLight = () => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);

  return ambientLight;
};
