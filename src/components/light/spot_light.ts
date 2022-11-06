import * as THREE from 'three';

export const createLight = () => {
  const light = new THREE.SpotLight(0xffffff, 0.7, 6, Math.PI * 0.1, 0.1, 1);
  light.position.set(0, 2, 3);
  light.target.position.x = 1;

  return light;
};
