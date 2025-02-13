// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  optimizeDeps: {
    include: ['react-router-dom']
  }
}
