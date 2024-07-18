import { defineConfig, loadEnv } from 'vite';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, fileURLToPath(new URL('./', import.meta.url)));
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: [
          // 需要自動導入的插件，自訂導入的API
          'vue',
          'vue-router',
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      open: true,
      host: env.VITE_SERVER_HOST,
      port: Number(env.VITE_SERVER_PORT),
      strictPort: true,
      cors: true,
    },
    build: {
      rollupOptions: {
        plugins: [
          nodeResolve({
            mainFields: ['modules', 'main', 'jsnext:main'],
            browser: true,
            extensions: ['.js', '.json'],
            preferBuiltins: false,
          }),
        ],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "quill/dist/quill.core.css"; @import "quill/dist/quill.snow.css";`,
        },
      },
    },
  };
});
