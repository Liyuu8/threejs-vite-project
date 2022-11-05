import * as THREE from 'three';

export const createMaterial = () => {
  return new THREE.MeshPhongMaterial({ shininess: 100, specular: 'blue' });
};
