import * as THREE from 'three';

export const createMaterial = () => {
  return new THREE.MeshNormalMaterial({ flatShading: true });
};
