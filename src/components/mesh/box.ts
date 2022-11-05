import * as THREE from 'three';

export const createBox = (material: THREE.Material) => {
  const geometry = new THREE.BoxGeometry(0.75, 0.75, 0.75);

  return new THREE.Mesh(geometry, material);
};
