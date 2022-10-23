import * as THREE from 'three';

export const createEarth = () => {
  const geometry = new THREE.SphereGeometry(100, 64, 32);
  // https://threejs.org/docs/index.html?q=geome#api/en/geometries/SphereGeometry

  const rowContentEndpoint =
    'https://raw.githubusercontent.com/Liyuu8/threejs-vite-project/main/src/';
  const imagePath = 'images/textures/earth.jpg';
  const texture = new THREE.TextureLoader().load(
    (import.meta.env.DEV ? '' : rowContentEndpoint) + imagePath
  );

  const material = new THREE.MeshPhysicalMaterial({ map: texture });
  // https://threejs.org/docs/index.html?q=MeshPhysicalMaterial#api/en/materials/MeshPhysicalMaterial

  return new THREE.Mesh(geometry, material);
};
