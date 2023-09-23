import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'dialog', replacement: path.resolve(__dirname, 'src/_common/components/CustomDialog') },
      { find: 'common', replacement: path.resolve(__dirname, 'src/_common') },
      { find: 'libraries', replacement: path.resolve(__dirname, 'src/_libraries-config') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/_pages') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
