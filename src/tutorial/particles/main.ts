import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { createCamera } from '../../components/camera/tutorial';
import { createMaterial } from '../../components/material/particles_material';
import { createParticles } from '../../components/mesh/particles';
import { createScene } from '../../components/scene/main';

const renderer = new THREE.WebGLRenderer({ alpha: true });
const material = createMaterial();
const particles = createParticles(material);
const scene = createScene(particles);
const camera = createCamera(1, 1, 2);

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
