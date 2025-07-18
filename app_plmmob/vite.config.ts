import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint';
import legacy from '@vitejs/plugin-legacy';
// import { visualizer } from 'rollup-plugin-visualizer'; // 打包内容分析
import IBizVitePlugin from './vite-plugins/ibiz-vite-plugin';

/**
 * 判断是否为浏览器原生组件
 *
 * @author chitanda
 * @date 2023-07-05 09:07:39
 * @param {string} tag
 * @return {*}  {boolean}
 */
function isCustomElement(tag: string): boolean {
  return tag.startsWith('ion-');
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    entries: [
      '@ibiz-template-package/vs-tree-ex',
      '@ibiz-template/core',
      '@ibiz-template/mob-theme',
      '@ibiz-template/mob-vue3-components',
      '@ibiz-template/model-helper',
      '@ibiz-template/runtime',
      '@ibiz-template/theme',
      '@ibiz-template/vue3-util',
      '@ibiz-template/devtool',
      '@ibiz/model-core',
      'async-validator',
      'dayjs',
      'echarts',
      'ionicons',
      'lodash-es',
      'pinia',
      'qs',
      'qx-util',
      'ramda',
      'interactjs',
      'vant',
      'vue',
      'vue-i18n',
      'vue3-hash-calendar',
      'vue-router',
      'vue-text-format',
      'vuedraggable',
    ],
  },
  build: {
    rollupOptions: {
      external: [
        'vant',
        'vue',
        'vue-router',
        'vue-i18n',
        'async-validator',
        'dayjs',
        'echarts',
        'axios',
        'qs',
        'ramda',
        'lodash-es',
        'qx-util',
        'interactjs',
        'pinia',
        'mqtt/dist/mqtt.min',
        'cherry-markdown',
        'quill',
        '@ibiz-template-package/vs-tree-ex',
        '@ibiz-template/core',
        '@ibiz-template/runtime',
        '@ibiz-template/vue3-util',
        '@ibiz-template/mob-theme',
        '@ibiz-template/model-helper',
        '@ibiz-template/mob-vue3-components',
        '@ibiz-template/devtool',
        'vuedraggable',
      ],
    },
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api/darm__mob': {
        target: 'http://172.16.103.146:30103',
        changeOrigin: true,
      },
      '/api/sztrainsys__mob': {
        rewrite(path) {
          return path.replace('/api', '');
        },
        target: 'http://172.16.240.140:20086',
        changeOrigin: true,
      },
      '/api/ls__lsmob/remotemodel': {
        rewrite(path) {
          return path.replace('/api/ls__lsmob/remotemodel', '/ls__lsmob/model');
        },
        target: 'http://localhost:20003',
        changeOrigin: true,
      },
      '/api/ls__lsmob': {
        rewrite(path) {
          return path.replace('/api/ls__lsmob', '/api');
        },
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
      '/api/pms__sclpmsmob': {
        target: 'http://172.16.103.158:30164/',
        changeOrigin: true,
      },
      '/api/demosys__mobvue3/portal/mqtt/mqtt': {
        rewrite(path) {
          return path.replace('/api', '');
        },
        target: 'ws://172.16.103.169:30350',
        changeOrigin: true,
      },
      '/api/demosys__mobvue3': {
        rewrite(path) {
          return path.replace('/api', '/api');
        },
        target: 'http://172.16.103.169:30350',
        changeOrigin: true,
      },
      '/api/cxfhmgmt__cxfhappmob': {
        rewrite(path) {
          return path.replace('/api', '');
        },
        target: 'http://172.16.103.158:30086',
        changeOrigin: true,
      },
      '/api/qdehr__qdehrapp/portal/mqtt/mqtt': {
        rewrite(path) {
          return path.replace('/api', '');
        },
        ws: true,
        target: 'ws://172.16.240.140:46020',
        changeOrigin: true,
      },
      '/api/qdehr__qdehrapp': {
        rewrite(path) {
          return path.replace('/api', '');
        },
        target: 'http://172.16.240.140:46020',
        changeOrigin: true,
      },
      '/api/gsldrcapmgmt__gsldrcapappmob': {
        target: 'http://172.16.103.158:30200',
        changeOrigin: true,
      },
      '/api/ibizplm__plmmob':{
        target: 'http://172.16.220.130:30515',
        changeOrigin: true,
      }
    },
    cors: true,
    fs: {
      strict: false,
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
    eslint({
      include: 'src/**/*.{ts,tsx,js,jsx}',
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement,
        },
      },
    }),
    vueJsx(),
    legacy({ externalSystemJS: true }),
    IBizVitePlugin(),
    // visualizer(),
  ],
});
