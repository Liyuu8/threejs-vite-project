import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { createCamera } from './components/camera/earth';
import { createDirectionalLight } from './components/light/directional_light';
import { createAnimatedPointLight } from './components/light/animated_point_light';
import { createEarth } from './components/mesh/earth';
import { createScene } from './components/scene/main';

const renderer = new THREE.WebGLRenderer({ alpha: true });
const ballMesh = createEarth();
const directionalLight = createDirectionalLight();
const { pointLight, pointLightHelper, pointLightAnimate } =
  createAnimatedPointLight();
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
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // 解像度の調整
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
