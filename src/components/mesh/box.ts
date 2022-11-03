import * as THREE from 'three';

export const createBox = () => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 'red' });
  const box = new THREE.Mesh(geometry, material);

  return { box, material };
};
