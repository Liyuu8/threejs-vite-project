import * as THREE from 'three';

export const createPlane = () => {
  const geometry = new THREE.PlaneGeometry(10, 10);
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = -0.5;
  mesh.rotation.x = -Math.PI * 0.5;

  return mesh;
};
