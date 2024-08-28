import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import libLegacy from '@qx-chitanda/vite-plugin-lib-legacy';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'mqtt',
        '@ibiz-template/core',
        '@ibiz-template/model-helper',
        '@ibiz-template/runtime',
        '@ibiz-template/theme',
        '@ibiz-template/vue3-util',
        '@ibiz-template-plugin/ai-chat',
        '@ibiz/dynamic-model-api',
        '@wangeditor/editor',
        '@wangeditor/editor-for-vue',
        'async-validator',
        'axios',
        'dayjs',
        'element-plus',
        'lodash-es',
        'pluralize',
        'qs',
        'qx-util',
        'ramda',
        'vue',
        'vue-router',
        'vuedraggable',
      ],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@ibiz-template/theme/style/global.scss";',
      },
    },
  },
  plugins: [
    // eslint({
    //   include: 'src/**/*.{ts,tsx,js,jsx}',
    // }),
    vue(),
    vueJsx(),
    libLegacy(),
    libCss(),
    dts({
      outDir: 'dist/types',
    }),
  ],
});
