import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: [
				// 需要自動導入的插件，自訂導入的API
				'vue',
				'vue-router',
				'pinia',
			],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src'),
		},
	},
});
