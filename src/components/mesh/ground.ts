import * as THREE from 'three';

export const createGround = (material: THREE.Material) => {
  const geometry = new THREE.PlaneGeometry(5, 5);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI * 0.5;
  mesh.position.y = -0.65;

  return mesh;
};
