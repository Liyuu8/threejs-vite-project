import * as THREE from 'three';

export const createBox = () => {
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshNormalMaterial();

  return new THREE.Mesh(boxGeometry, material);
};
