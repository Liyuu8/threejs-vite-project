import * as THREE from 'three';

export const createMaterial = () => {
  return new THREE.MeshStandardMaterial({ roughness: 0.3 });
};
