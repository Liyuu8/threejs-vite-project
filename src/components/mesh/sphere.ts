import * as THREE from 'three';

export const createSphere = (material: THREE.Material) => {
  const geometry = new THREE.SphereGeometry(0.5, 16, 16);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = -1.5;

  return mesh;
};
