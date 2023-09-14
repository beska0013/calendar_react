import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'


// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  // optimizeDeps: {
  //   include: ['sassy-datepicker/dist/styles.css'], // Specify the CSS file to import
  // },
})
