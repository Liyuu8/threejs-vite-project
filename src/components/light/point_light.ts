import * as THREE from 'three';

export const createPointLight = () => {
  const pointLight = new THREE.PointLight(0xffffff, 1);
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
  pointLight.position.set(1, 2, 3);

  return { pointLight, pointLightHelper };
};
