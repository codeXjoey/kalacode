import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// vite.config.js
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: '/src/index.html', // Adjust the path based on your project structure
  //     },
  //   },
  // },
});
