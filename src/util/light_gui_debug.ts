import GUI from 'lil-gui';

export const useLigthGuiDebug = (light: THREE.AmbientLight) => {
  const gui = new GUI();

  gui.add(light, 'intensity', 0, 1, 0.001);
};
