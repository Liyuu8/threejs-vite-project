import * as THREE from 'three';

export const createPlane = (material: THREE.Material) => {
  const geometry = new THREE.PlaneGeometry(1, 1);
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
};
