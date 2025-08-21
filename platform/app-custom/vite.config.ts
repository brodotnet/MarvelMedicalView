import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths'; // 1. Impor plugin tsconfig-paths

// https://vite.dev/config/

console.log(path.resolve(__dirname, '../../core/src'), '@ohif/core path');
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // 2. Tambahkan plugin di sini
  ],
  resolve: {
    alias: {
      // Alias yang sudah ada dari sebelumnya
      // '@ohif/core': path.resolve(__dirname, '../core/src'),
      // '@ohif/ui': path.resolve(__dirname, '../ui/src'),
      // '@ohif/extension-default': path.resolve(__dirname, '../../extensions/default/src'),

      // TAMBAHKAN BARIS INI
      '@state': path.resolve(__dirname, './src/state'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ohif/custom/type': path.resolve(__dirname, './src/types'),
    },
  },
});
