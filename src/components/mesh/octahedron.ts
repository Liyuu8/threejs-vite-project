import * as THREE from 'three';

export const createOctahedron = (material: THREE.Material) => {
  const geometry = new THREE.OctahedronGeometry(0.5);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = 1.5;

  return mesh;
};
