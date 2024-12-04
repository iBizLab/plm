/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { AnchoHtml } from './ancho-html';
import { AnchoHtmlProvider } from './provider';
import { AnchoHtmlNavBar } from './component/rawitem';
import { MathJax } from './mathjax';

MathJax.loadMathJax();

export default {
  install(v: App) {
    v.component(AnchoHtmlNavBar.name, AnchoHtmlNavBar);
    v.component(AnchoHtml.name, AnchoHtml);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_ANCHO_HTML',
      () => new AnchoHtmlProvider(),
    );
  },
};
