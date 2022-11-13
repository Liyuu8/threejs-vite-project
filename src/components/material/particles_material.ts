import * as THREE from 'three';

export const createMaterial = () => {
  return new THREE.PointsMaterial({ size: 0.02, color: 'blue' });
};
