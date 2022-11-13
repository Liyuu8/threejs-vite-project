import * as THREE from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

export const createRectAreaLight = () => {
  const rectAreaLight = new THREE.RectAreaLight(0x4eff00, 1, 3, 4);
  rectAreaLight.position.set(1.5, 0, 1.5);
  rectAreaLight.lookAt(0, 0, 0);

  const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight);

  return { rectAreaLight, rectAreaLightHelper };
};
