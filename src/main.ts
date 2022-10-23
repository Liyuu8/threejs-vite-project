import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { createCamera } from './camera/main';
import { createDirectionalLight } from './light/directional_light';
import { createPointLight } from './light/point_light';
import { createBall } from './mesh/ball';
import { createScene } from './scene/main';

const renderer = new THREE.WebGLRenderer({ alpha: true });
const ballMesh = createBall();
const directionalLight = createDirectionalLight();
const { pointLight, pointLightHelper, pointLightAnimate } = createPointLight();
const scene = createScene(
  ballMesh,
  directionalLight,
  pointLight,
  pointLightHelper
);
const camera = createCamera();

const animate = () => {
  pointLightAnimate();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

const init = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio); // 解像度の調整
  document.body.appendChild(renderer.domElement);

  new OrbitControls(camera, renderer.domElement);
  animate();
};

const onWindowResize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera.aspect = window.innerWidth / window.innerHeight; // カメラのアスペクト修正
  camera.updateProjectionMatrix();
};

window.addEventListener('load', init);
window.addEventListener('resize', onWindowResize);
