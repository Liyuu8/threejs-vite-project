import * as THREE from 'three';

export const createambientLight = () => {
  // 全体を照らすライト
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);

  return ambientLight;
};
