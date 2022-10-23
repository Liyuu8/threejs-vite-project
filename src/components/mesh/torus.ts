import * as THREE from 'three';

export const createTorus = () => {
  const geometry = new THREE.TorusGeometry(0.5, 0.2, 15, 100, Math.PI * 2);
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = -1.5;

  return mesh;
};
