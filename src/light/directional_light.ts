import * as THREE from 'three';

export const createDirectionalLight = () => {
  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(1, 1, 1);

  return light;
};
