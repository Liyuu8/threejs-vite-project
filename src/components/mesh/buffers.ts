import * as THREE from 'three';

export const createBuffers = () => {
  const geometry = new THREE.BufferGeometry();
  const count = 500;
  const positions = new Float32Array(9 * count);
  positions.set([...Array(9 * count)].map((_) => (Math.random() - 0.5) * 2));
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.MeshNormalMaterial({ wireframe: true });
  const mesh = new THREE.Mesh(geometry, material);

  return mesh;
};
