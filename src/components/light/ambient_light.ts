import * as THREE from 'three';

export const createambientLight = (intensity: number) => {
  // 全体を照らすライト
  const ambientLight = new THREE.AmbientLight(0xffffff, intensity);

  return ambientLight;
};
