import * as THREE from 'three';

export const createMaterial = (textureImage: string) => {
  const rowContentEndpoint =
    'https://raw.githubusercontent.com/Liyuu8/threejs-vite-project/main/src/';
  const imagePath = `images/textures/${textureImage}.jpg`;
  const texture = new THREE.TextureLoader().load(
    (import.meta.env.DEV ? '../../' : rowContentEndpoint) + imagePath
  );

  return new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
};
