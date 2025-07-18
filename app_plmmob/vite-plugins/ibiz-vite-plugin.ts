/* eslint-disable import/no-extraneous-dependencies */
import {
  copyFileSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
} from 'node:fs';
import { resolve, join } from 'node:path';
import { HtmlTagDescriptor, Plugin } from 'vite';
import cpy from 'cpy';

function IBizVitePlugin(): Plugin[] {
  const p: Plugin = {
    name: 'iBizSys:System',
    apply: 'build',
    closeBundle() {
      // 模板底包
      const templatePackages = ['core', 'runtime', 'model-helper'];
      // 组件底包
      const componentPackages = [
        'vue3-util',
        'mob-vue3-components',
        'mob-theme',
        'devtool',
      ];
      const cwd = process.cwd();
      const baseModule = join(cwd, 'node_modules/@ibiz-template');
      const baseOutModule = join(cwd, 'dist/extras/js/@ibiz-template');
      // 创建目录
      mkdirSync(baseOutModule, { recursive: true });
      // eslint-disable-next-line no-lone-blocks
      {
        // 拷贝模板底包并修改文件名称
        templatePackages.forEach(pkg => {
          if (!existsSync(join(baseOutModule, pkg))) {
            mkdirSync(join(baseOutModule, pkg), { recursive: true });
          }
          const cpFile = join(baseModule, pkg, 'dist/index.system.min.js');
          const outFile = join(baseOutModule, pkg, 'index.system.min.js');
          copyFileSync(cpFile, outFile);
        });
      }
      // eslint-disable-next-line no-lone-blocks
      {
        // 拷贝组件底包并修改文件名称
        componentPackages.forEach(pkg => {
          if (!existsSync(join(baseOutModule, pkg))) {
            mkdirSync(join(baseOutModule, pkg), { recursive: true });
          }
          const cpDir = join(baseModule, pkg, 'dist/**');
          const outDir = join(baseOutModule, pkg);
          cpy(cpDir, outDir);
        });
      }
      // 重新改写 index.html 部分代码
      const htmlFilePath = join(cwd, 'dist/index.html');
      let html = readFileSync(htmlFilePath, 'utf-8');
      html = html
        .replace(
          '<script type="module">try{import.meta.url;import("_").catch(()=>1);}catch(e){}window.__vite_is_modern_browser=true;</script>',
          '',
        )
        .replace(
          `<script type="module">!function(){if(window.__vite_is_modern_browser)return;console.warn("vite: loading legacy build because dynamic import or import.meta.url is unsupported, syntax error above should be ignored");var e=document.getElementById("vite-legacy-polyfill"),n=document.createElement("script");n.src=e.src,n.onload=function(){System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src'))},document.body.appendChild(n)}();</script>`,
          '',
        );
      // 标准 vite 编译后脚本
      const rootJsReg =
        /<script type="module" crossorigin src=".\/assets\/index.(.*).js"><\/script>/;
      html = html.replace(rootJsReg, '');
      html = html.replace('<script nomodule', '<script');
      html = html.replace('<script nomodule', '<script');
      html = html.replace('<script nomodule', '<script');
      html = html.replace('<script nomodule', '<script');
      html = html.replace(
        '<script src="./assets/ionicons/ionicons/ionicons.js"></script>',
        '<script nomodule src="./assets/ionicons/ionicons/ionicons.js"></script>',
      );
      writeFileSync(htmlFilePath, html, 'utf-8');
      // 重新修改 system-import.json 补充时间戳
      {
        const systemImportPath = join(
          cwd,
          'dist/extras/json/system-import.json',
        );
        const content = readFileSync(systemImportPath, 'utf-8');
        if (content) {
          const json = JSON.parse(content);
          const items = json.imports as Record<string, string>;
          const styles = json.styles as Record<string, string | string[]>;
          const date = new Date();
          // eslint-disable-next-line no-restricted-syntax, guard-for-in
          for (const key in items) {
            const val = items[key];
            items[key] = `${val}?time=${date.getTime()}`;
          }
          // eslint-disable-next-line no-restricted-syntax, guard-for-in
          for (const key in styles) {
            const val = styles[key];
            if (Array.isArray(val)) {
              styles[key] = val.map(v => `${v}?time=${date.getTime()}`);
            } else {
              styles[key] = `${val}?time=${date.getTime()}`;
            }
          }
          writeFileSync(
            systemImportPath,
            JSON.stringify(json, null, 2),
            'utf-8',
          );
        }
      }
      // 修改 dist/environments/environment.js 把 dev 模式改为 false
      {
        const envPath = join(cwd, 'dist/environments/environment.js');
        let env = readFileSync(envPath, 'utf-8');
        if (env) {
          env = env.replace(/dev:(.*)true/, 'dev: false');
          env = env.replace(/logLevel:(.*)'TRACE'/, `logLevel: 'ERROR'`);
          writeFileSync(envPath, env, 'utf-8');
        }
      }
    },
  };

  const devP: Plugin = {
    name: 'iBizSys:System:Dev',
    apply: 'serve',
    configResolved() {
      const baseModule = resolve(__dirname, '../node_modules');
      if (!existsSync(baseModule)) {
        return;
      }
      // vue/runtime-core 包有扩展修改，开发态拷贝到 node_modules 避免功能缺失
      const cpDir = join(__dirname, 'extras/@vue/runtime-core/3.3.4/**');
      const outDir = join(
        baseModule,
        '.pnpm/@vue+runtime-core@3.3.4/node_modules/@vue/runtime-core/dist',
      );
      cpy(cpDir, outDir);
    },
    transformIndexHtml(html) {
      const tags: HtmlTagDescriptor[] = [];
      const extraPath = resolve(__dirname, '../public/extras');
      const json = JSON.parse(
        readFileSync(resolve(extraPath, 'json/system-import.json'), 'utf-8'),
      ) as Record<string, unknown>;
      const styles = json.styles as Record<string, string | string[]>;
      if (styles) {
        // eslint-disable-next-line no-restricted-syntax
        for (const key in styles) {
          if (Object.prototype.hasOwnProperty.call(styles, key)) {
            const val = styles[key];
            if (Array.isArray(val)) {
              val.forEach(v => {
                tags.push({
                  tag: 'link',
                  attrs: {
                    type: 'text/css',
                    rel: 'stylesheet',
                    href: v.replace('../', './extras/'),
                  },
                  injectTo: 'head',
                });
              });
            } else {
              tags.push({
                tag: 'link',
                attrs: {
                  type: 'text/css',
                  rel: 'stylesheet',
                  href: val.replace('../', './extras/'),
                },
                injectTo: 'head',
              });
            }
          }
        }
      }
      return {
        html,
        tags,
      };
    },
  };

  return [p, devP];
}

export default IBizVitePlugin;
