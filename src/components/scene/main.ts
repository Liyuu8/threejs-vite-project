import * as THREE from 'three';

export const createScene = (...object: THREE.Object3D<THREE.Event>[]) => {
  const scene = new THREE.Scene();
  scene.add(...object);

  return scene;
};
