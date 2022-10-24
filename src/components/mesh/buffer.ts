import * as THREE from 'three';

export const createBuffer = () => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(9);
  positions.set([...[0, 0, 0], ...[0, 1, 0], ...[1, 0, 0]]);
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.MeshNormalMaterial({ wireframe: true });
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
};
