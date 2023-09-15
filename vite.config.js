// vite.config.js
import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [glsl()],
  // build: [
  //   {
  //     from: '/resources/textures',
  //     to: '/assets'
  //   }
  // ]
});