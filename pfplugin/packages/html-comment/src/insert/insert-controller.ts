/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { h, VNode } from 'vue';
import {
  DomEditor,
  IDomEditor,
  Boot,
  SlateTransforms,
  SlateNode,
  SlateEditor,
} from '@wangeditor/editor';
import {
  IModal,
  IModalData,
  IOverlayPopoverContainer,
} from '@ibiz-template/runtime';
import { IEditor } from '@ibiz/model-core';
import { NOOP, listenJSEvent } from '@ibiz-template/core';
import InsertModule from './insert-node-module';
import { InsertSelect, insertItemsDefault } from '../component/insert';
import {
  deleteNodes,
  getLastTextLineBeforeSelection,
  isCurrentLineEmpty,
  isInsertLocation,
  isInsertsLocation,
  isInsertTypeInside,
  isNextLineEmpty,
  isSelectedEmpty,
  updateNodes,
  isCursorAtStartOfColumn,
  isCursorAtEndOfColumn,
  isSelectionWrap,
  isSelectionEmpty,
} from './insert-utils';
import { UploadCustom } from '../component/insert/upload/upload';

/**
 * 用户列表适配器
 *
 * @export
 * @class InsertController
 * @extends {InsertController}
 */
export class InsertController {
  /**
   * 模型
   *
   * @type {IEditor}
   * @memberof MenTionController
   */
  public model!: IEditor;

  /**
   * 上下文
   *
   * @type {IContext}
   */
  public context!: IContext;

  /**
   * 视图参数
   *
   * @type {IParams}
   */
  public params!: IParams;

  /**
   * 表单数据
   *
   * @type {IData}
   * @memberof MenTionController
   */
  public data: IData = {};

  /**
   * 编辑器示例
   *
   * @type {IDomEditor}
   * @memberof MenTionController
   */
  public editor!: IDomEditor;

  /**
   * 编辑器参数
   *
   * @type {IData}
   * @memberof MenTionController
   */
  public editorParams: IData | undefined;

  /**
   * 编辑器示例
   *
   * @type {IDomEditor}
   * @memberof InsertController
   */
  public wangEditor!: IDomEditor;

  /**
   * 编辑内容区
   */
  public container!: any;

  /**
   * 气泡容器
   *
   * @type {IOverlayPopoverContainer}
   * @memberof InsertController
   */
  public overlay: IOverlayPopoverContainer | null = null;

  /**
   * 预定义阻止捕获事件code
   *
   * @type {number[]}
   * @memberof InsertController
   */
  public presetPreventEvents: number[] = [13, 38, 40];

  /**
   * 预定义阻止冒泡事件code
   *
   * @type {number[]}
   * @memberof InsertController
   */
  public presetPreventPropEvents: number[] = [27];

  /**
   * 插入项
   *
   * @type {number[]}
   * @memberof InsertController
   */
  public insertMap = insertItemsDefault();

  /**
   * 删除回调
   *
   * @type {NOOP}
   * @memberof InsertController
   */
  public cleanup = NOOP;

  /**
   * 声明插件
   *
   * @template T
   * @param {T} editor
   * @return {*}
   * @memberof InsertController
   */
  public insertPlugin<T extends IDomEditor>(editor: T): IDomEditor {
    const {
      isInline,
      isVoid,
      insertBreak,
      insertNode,
      deleteBackward,
      normalizeNode,
      deleteForward,
    } = editor;

    /**
     * 根据节点类型定义是否为行内元素
     * @param elem
     * @returns
     */
    editor.isInline = elem => {
      const type = DomEditor.getNodeType(elem);
      if (type === 'insert') {
        return true;
      }
      return isInline(elem);
    };

    /**
     * 根据节点类型定义是否为 void 节点
     * @param elem
     * @returns
     */
    editor.isVoid = elem => {
      const type = DomEditor.getNodeType(elem);
      if (type === 'insert') {
        return true;
      }
      return isVoid(elem);
    };

    // 重写换行操作
    editor.insertBreak = () => {
      const layoutNode = DomEditor.getSelectedNodeByType(editor, 'layout');
      if (layoutNode) {
        // 回车时，根据当前行的空格，自动插入空格
        const lastLineBeforeSelection = getLastTextLineBeforeSelection(
          layoutNode,
          editor,
        );
        if (lastLineBeforeSelection) {
          const arr = lastLineBeforeSelection.match(/^\s+/); // 行开始的空格
          if (arr !== null && arr[0] != null) {
            const spaces = arr[0];
            editor.insertText(`\n${spaces}`); // 换行后插入空格
            return;
          }
        }

        // 普通换行
        editor.insertText('\n');
        return;
      }
      insertBreak(); // 执行默认的换行
    };

    // 处理 node
    editor.insertNode = (node: SlateNode) => {
      const { maxLength } = editor.getConfig();

      // TODO 布局内不能再插入布局 后续补充将布局换行后插入到顶级
      const layoutNode = DomEditor.getSelectedNodeByType(editor, 'layout');
      if (
        layoutNode &&
        (node as IParams).type &&
        (node as IParams).type === 'layout'
      ) {
        return;
      }

      if (layoutNode) {
        const insertItem = this.insertMap.find(
          (item: IData) => item.type === (node as IData).data.type,
        );

        // 处理布局内有换行符时导致插入行类项自动换行导致样式异常
        // 判断插入项为行类元素，光标位置为换行符\n或者为第一行并且内容为空时，加空格
        if (
          insertItem &&
          insertItem.isInline &&
          (isSelectionWrap(editor) ||
            (isCursorAtStartOfColumn(editor) && isSelectionEmpty(editor)))
        ) {
          editor.insertText(' ');
        }
      }

      if (!maxLength) {
        insertNode(node);
        return;
      }

      const leftLength = DomEditor.getLeftLengthOfMaxLength(editor);
      if (leftLength <= 0) {
        // 已经触发 maxLength ，不再插入
        return;
      }

      const text = SlateNode.string(node);
      if (leftLength < text.length) {
        // 剩余长度，不够 node text 长度，不再插入
        return;
      }

      insertNode(node);
    };

    // 重新 normalize
    editor.normalizeNode = ([node, path]) => {
      const type = DomEditor.getNodeType(node);
      if (type === 'layout') {
        // -------------- 为行级元素时 editor 最后一个节点，需要后面插入 p --------------
        const isLast = DomEditor.isLastNode(editor, node);
        if (isLast) {
          const p = DomEditor.genEmptyParagraph();
          SlateTransforms.insertNodes(editor, p, { at: [path[0] + 1] });
          return;
        }
      }
      // 未命中 layout ，执行默认的 normalizeNode
      return normalizeNode([node, path]);
    };

    // 重写 backspace 删除，不删除 node
    editor.deleteBackward = unit => {
      const layoutNode = DomEditor.getSelectedNodeByType(editor, 'layout');
      // 防止从 layout 后面的 p 删除时，删除最后一个 cell
      const { selection } = editor;
      if (!layoutNode && selection) {
        const before = SlateEditor.before(editor, selection); // 前一个 location
        if (before) {
          const isLayoutOnBeforeLocation = isInsertLocation(
            editor,
            before,
            'layout',
          );
          // 前面是 layout
          if (
            isLayoutOnBeforeLocation ||
            (!layoutNode &&
              isInsertsLocation(this.insertMap, before.path, editor.children))
          ) {
            deleteNodes(editor, [before.path[0]]);
            return;
          }
        }
      }
      // 如果删除的是 layout-column
      if (
        (layoutNode && isSelectedEmpty(editor, 'layout-column')) ||
        isCursorAtStartOfColumn(editor)
      ) {
        return;
      }
      deleteBackward(unit);
    };

    // 处理 delete 删除
    editor.deleteForward = unit => {
      const layoutNode = DomEditor.getSelectedNodeByType(editor, 'layout');
      const { selection } = editor;
      if (!layoutNode && selection) {
        const after = SlateEditor.after(editor, selection); // 前一个 location
        if (after) {
          const isLayoutOnBeforeLocation = isInsertLocation(
            editor,
            after,
            'layout',
          );
          const curLineEmpty = isCurrentLineEmpty(editor);
          const deletePath = curLineEmpty
            ? selection.focus.path[0]
            : after.path[0];
          // 前面是 layout
          if (isLayoutOnBeforeLocation) {
            deleteNodes(editor, [deletePath]);
            return;
          }
          if (isInsertsLocation(this.insertMap, after.path, editor.children)) {
            deleteNodes(editor, [deletePath]);
            if (curLineEmpty) {
              editor.moveReverse(1);
            }
            this.handleMove(39);
            return;
          }
        }
      }

      // 如果删除的是 layout-column
      if (
        (layoutNode && isSelectedEmpty(editor, 'layout-column')) ||
        isCursorAtEndOfColumn(editor)
      ) {
        return;
      }
      // 执行默认的删除
      deleteForward(unit);
    };

    return editor;
  }

  /**
   * Creates an instance of InsertController.
   * @memberof InsertController
   */
  constructor() {
    this.registerNode();
  }

  public registerNode(): void {
    if (!(window as IData).insertIsRegiter) {
      Boot.registerModule(InsertModule);
      (window as IData).insertIsRegiter = true;
    }
    Boot.registerPlugin(this.insertPlugin.bind(this) as any);
  }

  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof InsertController
   */
  public async init(wangEditor: IDomEditor, option: IData): Promise<void> {
    this.model = option.model;
    this.context = option.context;
    this.params = option.params;
    this.data = option.data;
    this.editorParams = this.model.editorParams;
    this.wangEditor = wangEditor;
    this.listenEvent();
  }

  /**
   * 监听事件
   *
   * @private
   * @memberof InsertController
   */
  listenEvent(): void {
    const container = this.wangEditor.getEditableContainer();
    this.cleanup = listenJSEvent(container, 'keydown', event => {
      if (this.overlay && this.presetPreventEvents.includes(event.keyCode)) {
        event.preventDefault();
      }
      // 监听esc按键，销毁弹框
      if (
        this.overlay &&
        this.presetPreventPropEvents.includes(event.keyCode)
      ) {
        event.stopPropagation();
        this.overlay?.dismiss();
      }
    });

    // 键盘抬起
    container.addEventListener('keyup', this.handleKeyup.bind(this));
    // 鼠标抬起
    container.addEventListener('mouseup', this.handleMouseup.bind(this));
    // 监听菜单抛值
    this.wangEditor.on('openInsertSelect', () => this.openInsertSelect());
    // 监听文件上传抛值
    this.wangEditor.on('openFilesUpload', () => this.openFilesUpload());
    // 时间改变
    container.addEventListener(
      'dateElemEvent',
      this.handleInsertChange.bind(this),
    );
    // 标签改变
    container.addEventListener(
      'labelElemEvent',
      this.handleInsertChange.bind(this),
    );
    // 提示框改变
    container.addEventListener(
      'promptBoxElemEvent',
      this.handleInsertChange.bind(this),
    );
    // 思维导图改变
    container.addEventListener(
      'mindMapElemEvent',
      this.handleInsertChange.bind(this),
    );
    // 音频文件改变
    container.addEventListener(
      'audioElemEvent',
      this.handleInsertChange.bind(this),
    );
    // 本地文件改变
    container.addEventListener(
      'filesElemEvent',
      this.handleInsertChange.bind(this),
    );
    // 公式改变
    container.addEventListener(
      'formulaElemEvent',
      this.handleInsertChange.bind(this),
    );
    // 布局改变
    container.addEventListener(
      'layoutElemEvent',
      this.handleInsertChange.bind(this),
    );

    this.container = container;
  }

  /**
   * 处理按键抬起
   */
  handleKeyup(event: any): void {
    this.handleMove(event.keyCode);
  }

  /**
   * 处理鼠标抬起
   */
  handleMouseup(): void {
    this.handleMove(39);
  }

  /**
   * 处理移动
   * 37, 38, 39, 40 上下左右键
   */
  handleMove(keyCode: number): void {
    if (![37, 38, 39, 40].includes(keyCode)) {
      return;
    }
    if (this.wangEditor.selection) {
      const { children, selection } = this.wangEditor;
      if (selection && selection.focus.path) {
        if (
          !isInsertLocation(this.wangEditor, selection.focus.path, 'layout') &&
          isInsertsLocation(this.insertMap, selection.focus.path, children)
        ) {
          if ([37, 38].includes(keyCode)) {
            this.wangEditor.moveReverse(2);
          } else if ([39, 40].includes(keyCode)) {
            this.wangEditor.move(2);
          }
          if (selection.focus.path[0] === 0) {
            this.handleMove(39);
            return;
          }
          this.handleMove(keyCode);
        }
      }
    }
  }

  /**
   * 处理插入项值改变
   */
  handleInsertChange(e: IParams): void {
    const path = this.getCustomNodePath(e.target);
    const { params } = e.detail;
    if (params && params.isDelete) {
      deleteNodes(this.wangEditor, path);
      return;
    }
    if (e.detail) {
      updateNodes(this.wangEditor, path, e.detail);
    }
  }

  /**
   * 获取自定义元素path
   *
   * @param {Element} element 自定义元素节点
   * @memberof InsertController
   * @returns {number[]}
   */
  getCustomNodePath(element: Element): number[] {
    // 使用 DomEditor 将 HTML 节点转换为 Slate Node
    const slateNode = DomEditor.toSlateNode(this.wangEditor, element);
    return DomEditor.findPath(this.wangEditor, slateNode);
  }

  /**
   * 打开插入选择
   *
   * @memberof InsertController
   */
  async openInsertSelect(): Promise<void> {
    let toolbarItemNode;
    const toolbar = DomEditor.getToolbar(this.wangEditor);
    if (toolbar) {
      // 获取工具栏触发模态的行为项元素
      const toolbarItems = (toolbar as unknown as IParams)
        .toolbarItems as IData[];
      const toolBarItem = toolbarItems.find(item => {
        const { $elem } = item;
        const dom = $elem[0];
        const buttonDom = dom.querySelectorAll('[data-menu-key]')[0];
        const menuKey = buttonDom
          ? buttonDom.getAttribute('data-menu-key')
          : '';
        if (menuKey === 'insert') {
          return buttonDom;
        }
        return false;
      });
      toolbarItemNode = toolBarItem
        ? (toolBarItem as unknown as IParams).$button[0]
        : false;
    }

    if (toolbarItemNode) {
      const result: IModalData = await this.openPopover(
        toolbarItemNode as HTMLElement,
      );
      if (result.ok && result.data && result.data.length > 0) {
        // 处理插入多个时如果下一行有内容样式异常
        if (result.data.length > 1) {
          this.wangEditor.focus();
          if (
            !isNextLineEmpty(this.wangEditor) &&
            !isInsertTypeInside(this.wangEditor, 'layout')
          ) {
            this.wangEditor.insertBreak();
            this.wangEditor.moveReverse(1);
          }
        }
        result.data.forEach((item: IData, index: number) => {
          // 处理插入多个时如果下一行有内容样式异常
          setTimeout(() => {
            this.addNode(item, 'insert');
          }, 200 * index);
        });
      }
      this.overlay = null;
    }
  }

  /**
   * 打开文件上传
   *
   * @memberof InsertController
   */
  async openFilesUpload(): Promise<void> {
    const res: IModalData = await ibiz.overlay.modal(
      (modal: IModal): VNode => {
        return h(UploadCustom, {
          modal,
          context: this.context,
          viewParams: this.params,
          actionParams: this.editorParams,
        });
      },
      undefined,
      { width: 'auto', height: 'auto' },
    );
    if (res.ok && res.data && res.data.length > 0) {
      this.wangEditor.focus();
      res.data.forEach((item2: IData, index: number) => {
        const tempItem = {
          type: 'files',
          value: item2,
          params: { isAdd: true },
        };
        // 处理插入多个时如果下一行有内容样式异常
        setTimeout(() => {
          this.addNode(tempItem, 'insert');
        }, 200 * index);
      });
    }
  }

  /**
   * 添加节点
   *
   * @param {IData} data
   * @param {string} type
   * @memberof InsertController
   */
  addNode(data: IData, type: string): void {
    const insertNode = { data, type, children: [{ text: '' }] };
    this.wangEditor.restoreSelection();
    switch (data.type) {
      case 'prompt-box':
      case 'mind-map':
      case 'audio':
        // 实现行类块级元素独占一行时适配wangEditor样式 采用换行实现独占一行的效果及适配删除逻辑
        if (
          !isCurrentLineEmpty(this.wangEditor) &&
          !isInsertTypeInside(this.wangEditor, 'layout')
        ) {
          this.wangEditor.insertBreak();
        }
        this.wangEditor.insertNode(insertNode);
        if (
          isNextLineEmpty(this.wangEditor) &&
          !isInsertTypeInside(this.wangEditor, 'layout')
        ) {
          this.wangEditor.insertBreak();
        }
        break;
      case 'layout':
        Object.assign(insertNode, {
          type: 'layout',
          children: [
            { type: 'layout-column', children: [{ text: '' }] },
            { type: 'layout-column', children: [{ text: '' }] },
          ],
        });
        this.wangEditor.insertNode(insertNode);
        break;
      default:
        this.wangEditor.insertNode(insertNode);
        this.wangEditor.move(1);
        break;
    }
    this.handleMove(39);
  }

  /**
   * 打开弹窗
   *
   * @param {HTMLElement} target
   * @returns {Promise<IModalData>}
   */
  async openPopover(
    target: HTMLElement,
    params: IParams = {},
  ): Promise<IModalData> {
    this.overlay = ibiz.overlay.createPopover(
      this.createOverlayView(),
      undefined,
      {
        width: 'auto',
        noArrow: true,
        autoClose: true,
        placement: 'bottom-start',
        ...params,
      },
    );
    await this.overlay.present(target);
    const result: IModalData = await this.overlay.onWillDismiss();
    return result;
  }

  /**
   * 创建弹窗内元素
   *
   * @param {JSX.Element | string} component
   * @returns {VNode}
   */
  createOverlayView(): (modal: IModal) => VNode {
    return (modal: IModal): VNode => {
      return h(InsertSelect as unknown as JSX.Element, {
        modal,
        context: this.context,
        viewParams: this.params,
        actionParams: this.editorParams,
      });
    };
  }

  /**
   * 解析emoji节点
   *
   * @param {string} value
   * @return {*}
   * @memberof InsertController
   * @memberof InsertController
   */
  public parseNode(value: string): string {
    return value;
  }

  /**
   * 销毁
   *
   * @memberof InsertController
   */
  onDestroyed(): void {
    if (this.container) {
      // 键盘抬起
      this.container.removeEventListener('keyup', this.handleKeyup.bind(this));
      // 鼠标抬起
      this.container.removeEventListener(
        'mouseup',
        this.handleMouseup.bind(this),
      );
      // 时间改变
      this.container.removeEventListener(
        'dateElemEvent',
        this.handleInsertChange.bind(this),
      );
      // 标签改变
      this.container.removeEventListener(
        'labelElemEvent',
        this.handleInsertChange.bind(this),
      );
      // 提示框改变
      this.container.removeEventListener(
        'promptBoxElemEvent',
        this.handleInsertChange.bind(this),
      );
      // 思维导图改变
      this.container.removeEventListener(
        'mindMapElemEvent',
        this.handleInsertChange.bind(this),
      );
      // 音频文件改变
      this.container.removeEventListener(
        'audioElemEvent',
        this.handleInsertChange.bind(this),
      );
      // 本地文件改变
      this.container.removeEventListener(
        'filesElemEvent',
        this.handleInsertChange.bind(this),
      );
      // 公式改变
      this.container.removeEventListener(
        'formulaElemEvent',
        this.handleInsertChange.bind(this),
      );
      // 布局改变
      this.container.removeEventListener(
        'layoutElemEvent',
        this.handleInsertChange.bind(this),
      );
      this.container = null;
    }
    if (this.cleanup !== NOOP) {
      this.cleanup();
    }
    if (this.overlay) {
      this.overlay.dismiss();
    }
  }
}
