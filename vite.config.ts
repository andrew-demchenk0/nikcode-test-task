import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			App: '/src/App',
			assets: '/src/assets',
			components: '/src/components',
			helpers: '/src/helpers',
			pages: '/src/pages',
			reduxSlice: '/src/reduxSlice',
			services: '/src/services',
			styles: '/src/styles',
			utils: '/src/utils',
		},
	},
});
