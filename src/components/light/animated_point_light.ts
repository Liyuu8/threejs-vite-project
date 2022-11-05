import * as THREE from 'three';

export const createAnimatedPointLight = () => {
  const pointLight = new THREE.PointLight(0xffffff, 1);
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 30);

  const pointLightAnimate = () =>
    pointLight.position.set(
      200 * Math.sin(Date.now() / 500),
      200 * Math.sin(Date.now() / 1000),
      200 * Math.cos(Date.now() / 1000)
    );

  return { pointLight, pointLightHelper, pointLightAnimate };
};
