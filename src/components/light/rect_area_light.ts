import * as THREE from 'three';

export const createLight = () => {
  const light = new THREE.RectAreaLight(0x4eff00, 1, 3, 4);
  light.position.set(1.5, 0, 1.5);
  light.lookAt(0, 0, 0);

  return light;
};
