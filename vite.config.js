import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodePolyfills from 'rollup-plugin-node-polyfills';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [nodePolyfills()],
  resolve: {
    alias: {
      path: 'path-browserify',
      url: 'rollup-plugin-node-polyfills/polyfills/url',
      'source-map-js': 'source-map',
    },
  },
  plugins: [react()],
})
