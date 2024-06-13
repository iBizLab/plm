/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { EditorController } from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
import { resource } from './global';

/**
 * json格式化编辑器控制器
 *
 * @export
 * @class JsonSchemaController
 * @extends {EditorController<ITextBox>}
 */
export class JsonSchemaController extends EditorController<ITextBox> {
  public enableAdvancedSetting: boolean = true;

  get disabled(): boolean {
    return !!this.model.disabled;
  }

  protected async onInit(): Promise<void> {
    await super.onInit();
    if (this.editorParams) {
      const { ENABLEADVANCEDSETTING } = this.editorParams;
      if (ENABLEADVANCEDSETTING) {
        this.enableAdvancedSetting = this.toBoolean(ENABLEADVANCEDSETTING);
      }
    }
    await this.loadAmis();
  }

  /**
   * 加载amis静态资源
   *
   * @return {*}
   * @memberof JsonSchemaController
   */
  public loadAmis() {
    return new Promise<void>((resolve, reject) => {
      const loadResource = [
        this.loadStyle(resource.dir('assets/amis/sdk.css')),
        this.loadStyle(resource.dir('assets/amis/helper.css')),
        this.loadScript(resource.dir('assets/amis/sdk.js')),
      ];
      Promise.all(loadResource)
        .then(() => {
          resolve();
        })
        .catch(() => {
          ibiz.message.error('加载amis静态资源失败,请确认静态资源是否存在！');
          reject();
        });
    });
  }

  /**
   * 动态加载脚本
   *
   * @return {*}
   * @memberof JsonSchemaController
   */
  public loadScript(url: string) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  /**
   * 动态加载样式
   *
   * @return {*}
   * @memberof JsonSchemaController
   */
  public loadStyle(url: string) {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }
}
