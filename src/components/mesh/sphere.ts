import * as THREE from 'three';

export const createSphere = () => {
  const geometry = new THREE.SphereGeometry(0.5, 32, 16);
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = 1.5;

  return mesh;
};
