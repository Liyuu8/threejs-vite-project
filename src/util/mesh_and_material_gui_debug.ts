import GUI from 'lil-gui';

export const useMeshAndMaterialGuiDebug = (
  mesh: THREE.Mesh<THREE.BoxGeometry, THREE.Material>,
  material: THREE.MeshBasicMaterial
) => {
  const gui = new GUI();
  const positionFolder = gui.addFolder('Position');
  const visibleFolder = gui.addFolder('Visible');

  positionFolder.add(mesh.position, 'x', -3, 3, 0.01).name('transformX');
  positionFolder.add(mesh.position, 'y', -3, 3, 0.01).name('transformY');
  positionFolder.add(mesh.position, 'z', -3, 3, 0.01).name('transformZ');
  positionFolder
    .add(mesh.rotation, 'x')
    .min(-3)
    .max(3)
    .step(0.01)
    .name('rotationX');
  visibleFolder.add(mesh, 'visible');
  visibleFolder.add(material, 'wireframe');
  gui.addColor(material, 'color');
};
