import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { createCamera } from '../../components/camera/tutorial';
import { createAmbientLight } from '../../components/light/ambient_light';
import { createMaterial } from '../../components/material/basic_material';
import { createBox } from '../../components/mesh/box';
import { createScene } from '../../components/scene/main';
import { useMeshAndMaterialGuiDebug } from '../../util/mesh_and_material_gui_debug';

const renderer = new THREE.WebGLRenderer({ alpha: true });
const material = createMaterial();
const box = createBox(material);
const light = createAmbientLight(0.7);
const scene = createScene(box, light);
const camera = createCamera(1, 1, 2);

useMeshAndMaterialGuiDebug(box, material);

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
