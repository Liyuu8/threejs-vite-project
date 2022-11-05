import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { createCamera } from '../../components/camera/geometry';
import { createambientLight } from '../../components/light/ambient_light';
import { createMaterial } from '../../components/material/standard_material';
import { createBox } from '../../components/mesh/box';
import { createGround } from '../../components/mesh/ground';
import { createSphere } from '../../components/mesh/sphere';
import { createTorus } from '../../components/mesh/torus';
import { createScene } from '../../components/scene/main';

const renderer = new THREE.WebGLRenderer({ alpha: true });
const material = createMaterial();
const sphere = createSphere(material);
const box = createBox(material);
const torus = createTorus(material);
const ground = createGround(material);
const meshList = [sphere, box, torus];
const ambientLight = createambientLight(0.5);
const scene = createScene(...meshList, ground, ambientLight);
const camera = createCamera(-2, 1, 4);
const clock = new THREE.Clock();

const animate = () => {
  const elapsedTime = clock.getElapsedTime();
  meshList.forEach(
    (mesh) =>
      ([mesh.rotation.x, mesh.rotation.y] = [
        elapsedTime * 0.15,
        elapsedTime * 0.1,
      ])
  );

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
