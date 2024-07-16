import {defineConfig} from 'vite';
// import singlefile from 'vite-plugin-singlefile';
import { viteSingleFile } from "vite-plugin-singlefile"
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';


export default defineConfig({
    plugins: [
        cssInjectedByJsPlugin(),
        viteSingleFile()
    ],
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            input: {
                main: './src/index.jsx',
            },
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setupTests.js'],
    },
});
