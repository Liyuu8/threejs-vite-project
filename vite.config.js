import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'threejs-vite-project',
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        geometry: resolve(__dirname, 'src/tutorial/geometry/index.html'),
        ui_debug: resolve(__dirname, 'src/tutorial/ui_debug/index.html'),
        material_and_mesh: resolve(
          __dirname,
          'src/tutorial/material_and_mesh/index.html'
        ),
      },
    },
    // https://vitejs.dev/guide/build.html#multi-page-app
  },
});
