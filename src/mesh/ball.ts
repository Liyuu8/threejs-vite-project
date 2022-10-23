import * as THREE from 'three';

export const createBall = () => {
  const ballGeometry = new THREE.SphereGeometry(100, 64, 32);
  // https://threejs.org/docs/index.html?q=geome#api/en/geometries/SphereGeometry

  const texture = new THREE.TextureLoader().load(
    import.meta.env.DEV
      ? 'src/images/textures/earth.jpg'
      : 'https://raw.githubusercontent.com/Liyuu8/threejs-vite-project/main/src/images/textures/earth.jpg'
  );

  const ballMaterial = new THREE.MeshPhysicalMaterial({ map: texture });
  // https://threejs.org/docs/index.html?q=MeshPhysicalMaterial#api/en/materials/MeshPhysicalMaterial

  return new THREE.Mesh(ballGeometry, ballMaterial);
};
