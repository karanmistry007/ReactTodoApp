import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/todo/',
	plugins: [react()],
	server: {
		port: 8080,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	build: {
		outDir: '../react_todo/public/todo',
		emptyOutDir: true,
		target: 'es2015',
	},
});
