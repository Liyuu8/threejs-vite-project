import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { createCamera } from '../../components/camera/geometry';
import { createMaterial } from '../../components/material/material';
import { createOctahedron } from '../../components/mesh/octahedron';
import { createPlane } from '../../components/mesh/plane';
import { createSphere } from '../../components/mesh/sphere';
import { createScene } from '../../components/scene/main';

const renderer = new THREE.WebGLRenderer({ alpha: true });
const material = createMaterial('brick');
const sphere = createSphere(material);
const plane = createPlane(material);
const octahedron = createOctahedron(material);
const meshList = [sphere, plane, octahedron];
const scene = createScene(...meshList);
const camera = createCamera();
const clock = new THREE.Clock();

const animate = () => {
  const elapsedTime = clock.getElapsedTime();
  meshList.forEach(
    (mesh) => ([mesh.rotation.x, mesh.rotation.y] = [elapsedTime, elapsedTime])
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
