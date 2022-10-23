import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { createCamera } from '../components/camera/geometry';
import { createambientLight } from '../components/light/ambient_light';
import { createBox } from '../components/mesh/box';
import { createPlane } from '../components/mesh/plane';
import { createSphere } from '../components/mesh/sphere';
import { createTorus } from '../components/mesh/torus';
import { createScene } from '../components/scene/main';

const renderer = new THREE.WebGLRenderer({ alpha: true });
const box = createBox();
const sphere = createSphere();
const plane = createPlane();
const torue = createTorus();
const light = createambientLight();
const scene = createScene(box, sphere, plane, torue, light);
const camera = createCamera();

const animate = () => {
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
