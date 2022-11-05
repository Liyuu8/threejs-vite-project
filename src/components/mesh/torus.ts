import * as THREE from 'three';

export const createTorus = (material: THREE.Material) => {
  const geometry = new THREE.TorusGeometry(0.5, 0.2, 15, 100, Math.PI * 2);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = 1.5;

  return mesh;
};
