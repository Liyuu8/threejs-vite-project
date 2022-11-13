import * as THREE from 'three';

export const createParticles = (material: THREE.Material) => {
  const geometry = new THREE.SphereGeometry(1, 16, 32);
  const points = new THREE.Points(geometry, material);

  return points;
};
