/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  downloadFileFromBlob,
  RuntimeError,
  // RuntimeModelError,
} from '@ibiz-template/core';
import {
  ControllerEvent,
  EditorController,
  EventBase,
} from '@ibiz-template/runtime';
import { IHtml } from '@ibiz/model-core';
import { Boot, IDomEditor } from '@wangeditor/editor';
import { nextTick, Ref, ref } from 'vue';
import { createUUID } from 'qx-util';
import { CustomNodeFactory } from './factory/custom-node-factory';
import { commentEvent } from './html-comment.event';
import { MentionElem } from './custom-elem';
import { paintFormatMenu } from './paint-format/paint-format-menu';

/**
 * html框编辑器控制器
 *
 * @export
 * @class HtmlCommentController
 * @extends {EditorController}
 */
export class HtmlCommentController extends EditorController<IHtml> {
  /**
   * 上传参数
   */
  public uploadParams?: IParams;

  /**
   * 下载参数
   */
  public exportParams?: IParams;

  /**
   * 最小高度
   *
   * @type {number}
   * @memberof HtmlCommentController
   */
  public minHeight: number = 48;

  /**
   * 最大高度
   *
   * @type {number}
   * @memberof HtmlCommentController
   */
  public maxHeight: number = 315;

  /**
   * 是否折叠
   *
   * @type {Ref<boolean>}
   * @memberof HtmlCommentController
   */
  public collapsed: Ref<boolean> = ref(true);

  /**
   * 是否隐藏
   *
   * @type {Ref<boolean>}
   * @memberof HtmlCommentController
   */
  public hidden: Ref<boolean> = ref(false);

  /**
   * 回复
   *
   * @type {string}
   * @memberof HtmlCommentController
   */
  public reply: Ref<string> = ref('');

  /**
   * 回复脚本
   *
   * @type {string}
   * @memberof HtmlCommentController
   */
  public replyScript: string = '';

  /**
   * 编辑器模式
   *
   * @type {('comment' | 'default')}
   * @memberof HtmlCommentController
   */
  public mode: 'comment' | 'default' = 'comment';

  /**
   * 插入工具栏项
   *
   * @type {IData[]}
   * @memberof HtmlCommentController
   */
  public insertKeys: IData[] = [];

  /**
   * 唯一标识
   *
   * @type {string}
   * @memberof HtmlCommentController
   */
  public uuid: string = createUUID();

  evt: ControllerEvent<commentEvent> = new ControllerEvent<commentEvent>(
    this.getEventArgs.bind(this),
  );

  protected getEventArgs(): Omit<EventBase, 'eventName'> {
    return {
      context: this.context,
      params: this.params,
      data: [],
      eventArg: '',
      targetName: this.model.name!,
      view: (this.parent as IData).view,
    };
  }

  protected async onInit(): Promise<void> {
    await super.onInit();

    this.registerCustomElem();
    if (this.editorParams) {
      const {
        uploadParams,
        exportParams,
        MINHEIGHT,
        MAXHEIGHT,
        REPLYSCRIPT,
        MODE,
        INSERTKEYS,
      } = this.editorParams;

      if (uploadParams) {
        try {
          this.uploadParams = JSON.parse(uploadParams);
        } catch (error) {
          ibiz.log.error(
            `编辑器[${ibiz.log.error(
              error,
            )}]编辑器参数 uploadParams 非 json 格式`,
          );
        }
      }
      if (exportParams) {
        try {
          this.exportParams = JSON.parse(exportParams);
        } catch (error) {
          ibiz.log.error(
            `编辑器[${ibiz.log.error(
              error,
            )}]编辑器参数 exportParams 非 json 格式`,
          );
        }
      }
      if (MINHEIGHT) {
        this.minHeight = Number(MINHEIGHT);
      }
      if (MAXHEIGHT) {
        this.maxHeight = Number(MAXHEIGHT);
      }
      if (REPLYSCRIPT) {
        this.replyScript = REPLYSCRIPT;
      }
      if (MODE) {
        this.mode = MODE.toLowerCase();
      }
      if (INSERTKEYS) {
        this.insertKeys = JSON.parse(INSERTKEYS);
      }
    }

    CustomNodeFactory.init(this.uuid);
  }

  /**
   * 注册自定义元素
   *
   * @private
   * @memberof HtmlCommentController
   */
  private registerCustomElem() {
    if (!window.customElements.get('mention-elem')) {
      window.customElements.define('mention-elem', MentionElem);
    }
    if (!(window as IData).paintFormatIsRegiter) {
      Boot.registerMenu(paintFormatMenu);
      (window as IData).paintFormatIsRegiter = true;
    }
  }

  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof HtmlCommentController
   */
  public onCreated(editor: IDomEditor, data: IData, toolbarConfig: IData) {
    const controllers = CustomNodeFactory.getPluginsById(this.uuid);
    controllers.forEach(controller => {
      controller.init(editor, {
        model: this.model,
        data,
        toolbarConfig,
        context: this.context,
        params: this.params,
        evt: this.evt,
      });
    });
  }

  /**
   * 组件销毁
   *
   * @memberof HtmlCollapseController
   */
  public onDestroyed() {
    const controllers = CustomNodeFactory.getPluginsById(this.uuid);
    controllers.forEach(controller => {
      controller.onDestroyed();
    });
    CustomNodeFactory.destroy(this.uuid);
  }

  /**
   * 解析所有注册节点
   *
   * @param {string} value
   * @return {*}
   * @memberof HtmlCommentController
   */
  public parseNode(value: string) {
    let result: string = value;
    const controllers = CustomNodeFactory.getPluginsById(this.uuid);
    controllers.forEach(controller => {
      result = controller.parseNode(result);
    });
    return result;
  }

  /**
   * 设置html
   *
   * @param {string} value
   * @memberof HtmlCommentController
   */
  public async setValue(value: string) {
    this.collapsed.value = false;
    // 先提前销毁，防止回显异常
    this.hidden.value = true;
    await nextTick();
    this.hidden.value = false;
    await nextTick();
    const html = this.parseNode(value);
    this.evt.emit('setHtml', {
      eventArg: html,
    });
    // this.editor.enable();
    // this.editor.focus();
  }

  /**
   * 设置回复,data: {name: string, content: string}
   *
   * @param {IData} data
   * @memberof HtmlCommentController
   */
  public setReply(data: IData) {
    this.reply.value = `${data.name}: ${data.content}`;
    this.evt.emit('onSetReply', {
      eventArg: this.reply.value,
    });
  }

  /**
   * 删除回复
   *
   * @memberof HtmlCommentController
   */
  public removeReply() {
    this.reply.value = '';
    this.evt.emit('onRemoveReply', {
      eventArg: this.reply.value,
    });
  }

  /**
   * 清空
   *
   * @memberof HtmlCommentController
   */
  public clear() {
    this.reply.value = '';
    this.evt.emit('onRemoveReply', {
      eventArg: this.reply.value,
    });
    this.evt.emit('clear', {
      eventArg: '',
    });
    this.collapsed.value = true;
  }

  /**
   * 请求url获取文件流，并用JS触发文件下载
   *
   * @author lxm
   * @date 2022-11-17 14:11:09
   * @param {string} url
   * @param {IData} file
   */
  fileDownload(file: { url: string; name: string }): void {
    // 发送get请求
    ibiz.net
      .request(file.url, {
        method: 'get',
        responseType: 'blob',
        baseURL: '', // 已经有baseURL了，这里无需再写
      })
      .then((response: IData) => {
        if (response.status !== 200) {
          throw new RuntimeError('下载文件失败');
        }
        // 请求成功，后台返回的是一个文件流
        if (!response.data) {
          throw new RuntimeError('文件流数据不存在');
        } else {
          // 获取文件名
          const fileName = file.name;
          downloadFileFromBlob(response.data, fileName);
        }
      });
  }

  /**
   * 切换折叠
   *
   * @memberof HtmlCommentController
   */
  public toggleCollapse(open?: boolean) {
    this.collapsed.value = !open && !this.collapsed.value;
  }

  // 获取主题色
  public getThemeVar() {
    const root = document.documentElement;
    if (!root) {
      return null;
    }
    const style = getComputedStyle(root);

    const primary = style.getPropertyValue('--ibiz-color-primary');
    return primary;
  }

  // 是否包含中文字符
  public isChineseCharacter(inputString: string): boolean {
    const chinesePattern = /[\u4e00-\u9fa5]/;
    return chinesePattern.test(inputString);
  }

  // 判断字符串是否同时存在英文和中文
  public hasChineseAndEnglish(str: string) {
    const regex = /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/;
    return regex.test(str);
  }

  // 字符串转16进制颜色
  public stringToHexColor(text: string): string {
    if (!text) return '';
    // 计算字符串的哈希值
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      if (this.isChineseCharacter(text)) {
        // eslint-disable-next-line no-bitwise
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
        // eslint-disable-next-line operator-assignment, no-bitwise
        hash = hash & hash;
      } else {
        const charCode = text.charCodeAt(i);
        hash += charCode.toString(16) as unknown as number;
      }
    }

    // 将哈希值转换为16进制颜色代码
    const trimmedHash = String(hash).substring(0, 6);

    const r = parseInt(trimmedHash.substring(0, 2), 16);
    const g = parseInt(trimmedHash.substring(2, 4), 16);
    const b = parseInt(trimmedHash.substring(4, 6), 16);

    const colorCode = `#${r.toString(16).padStart(2, '0')}${g
      .toString(16)
      .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    if (colorCode === '#FFFFFF') {
      return this.getThemeVar() || colorCode;
    }
    return colorCode;
  }

  // 缩写名字
  public avatarName(text: string) {
    if (text && text.toString().length < 2) {
      return text;
    }
    if (text && text.toString().length >= 2) {
      // 大于两个字符
      const tag = this.hasChineseAndEnglish(text);
      // 存在中英文混合情况，按顺序取第一个英文与第一个中文
      if (tag) {
        const engChar: string =
          text.split('').find((char: string) => {
            return /[a-zA-Z]/.test(char);
          }) || '';
        const chineseStr: string =
          text.split('').find((char: string) => {
            return /[\u4E00-\u9FA5]/.test(char);
          }) || '';
        return `${engChar}${chineseStr}`.toLowerCase();
      }
      // 只存在英文，取前两个
      const engTag = /[a-zA-Z]/.test(text);
      if (engTag) {
        return text
          .split('')
          .filter((char: string) => {
            return /[a-zA-Z]/.test(char);
          })
          .slice(0, 2)
          .join('')
          .toUpperCase();
      }
      // 只存在中文，取最后两个
      const chineseTag = /[\u4E00-\u9FA5]/.test(text);
      if (chineseTag) {
        return text
          .split('')
          .filter((char: string) => {
            return /[\u4E00-\u9FA5]/.test(char);
          })
          .slice(-2)
          .join('');
      }
      return text.replaceAll(' ', '').substring(0, 2);
    }
  }
}
