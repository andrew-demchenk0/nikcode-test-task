import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			public: 'public',
			App: 'src/App',
			components: 'src/components',
			helpers: 'src/helpers',
			assets: 'src/assets',
			pages: 'src/pages',
			styles: 'src/styles',
			services: 'src/services',
		},
	},
});
