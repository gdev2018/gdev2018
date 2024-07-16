import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
    base: '/gdev2018/', //https://vitejs.dev/guide/static-deploy.html#github-pages
    plugins: [
        react()
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setupTests.js'],
    },
});
