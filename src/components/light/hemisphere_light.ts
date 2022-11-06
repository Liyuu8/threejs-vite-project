import * as THREE from 'three';

export const createLight = () => {
  const light = new THREE.HemisphereLight(0x0ffff0, 0xffff00, 1);

  return light;
};
