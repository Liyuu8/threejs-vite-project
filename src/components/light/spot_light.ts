import * as THREE from 'three';

export const createSpotLight = () => {
  const spotLight = new THREE.SpotLight(
    0xffffff,
    0.7,
    6,
    Math.PI * 0.1,
    0.1,
    1
  );
  spotLight.position.set(0, 2, 3);
  spotLight.target.position.x = -1;

  const spotLightHelper = new THREE.SpotLightHelper(spotLight, 'blue');
  window.requestAnimationFrame(() => spotLightHelper.update()); // update target

  return { spotLight, spotLightHelper };
};
