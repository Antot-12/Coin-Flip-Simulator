import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Coin-Flip-Simulator/',
  plugins: [react()],
})
