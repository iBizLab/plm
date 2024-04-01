/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  onBeforeUnmount,
  ref,
  shallowRef,
  onMounted,
  watch,
  Ref,
  defineComponent,
  nextTick,
  onUnmounted,
} from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import {
  IEditorConfig,
  IToolbarConfig,
  SlateEditor,
  SlateElement,
  SlateNode,
} from '@wangeditor/editor';
import type { IDomEditor } from '@wangeditor/editor';
import { getCookie } from 'qx-util';
import { isNil } from 'ramda';
import {
  getEditorEmits,
  getHtmlProps,
  useClickOutside,
  useNamespace,
} from '@ibiz-template/vue3-util';
import {
  CoreConst,
  OnClickOutsideResult,
  awaitTimeout,
  debounce,
} from '@ibiz-template/core';
import { ElMessageBox } from 'element-plus';
import { defaultToolbars } from '../html-comment-toolbars';
import { HtmlCommentController } from '../html-comment.controller';
import { ModalUtil } from '../utils/modal-utils';

type InsertFnType = (_url: string, _alt: string, _href: string) => void;

const IBizHtmlCollapse = defineComponent({
  name: 'IBizHtmlCollapse',
  props: getHtmlProps<HtmlCommentController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('html');

    const c = props.controller!;

    // HTML ref
    const htmlContent = ref();

    // 样式变量
    const cssVars = ref({});

    // 浏览器ResizeObserver对象
    let resizeObserver: ResizeObserver | null = null;

    // 上次工具栏高度
    let lastToolbarHeight = 0;

    // 工具栏ref
    const toolbarRef = ref();

    // 编辑器实例，必须用 shallowRef，重要！
    const editorRef = shallowRef();

    // 富文本ref
    const htmlRef = ref();

    // 图片预览ref
    const previewRef = ref();

    const containerRef = ref();

    // 内容 HTML
    const valueHtml = ref('');

    // 请求头
    const headers: Ref<IData> = ref({
      Authorization: `Bearer ${getCookie(CoreConst.TOKEN)}`,
    });

    // 上传文件路径
    const uploadUrl: Ref<string> = ref('');

    // 下载文件路径
    const downloadUrl: Ref<string> = ref('');

    // 允许编辑
    const enableEdit = ref(true);

    // 是否存在编辑器参数enableEdit
    const hasEnableEdit = ref(false);

    // 只读状态
    const readonlyState = ref(false);

    // 允许全屏打开
    const enableFullScreen = ref(false);

    // 是否全屏
    const isFullScreen = ref(false);

    // 是否折叠
    const collapse = ref(true);

    const showExpand = ref(false);

    // 预览图片地址
    const previewUrl = ref('');

    // 点击外部
    let funcs: OnClickOutsideResult;

    // 预览图片集合,此变量用于控制图片模态的显示隐藏,为空时会关闭模态,element图片组件未支持控制是否显示的属性
    const previewUrlList: Ref<string[] | []> = ref([]);

    const editorModel = c.model;
    if (editorModel.editorParams) {
      if (editorModel.editorParams.enableEdit) {
        hasEnableEdit.value = true;
        readonlyState.value = true;
        enableEdit.value =
          c.toBoolean(editorModel.editorParams.enableEdit) &&
          !props.readonly &&
          !props.disabled;
      }
      if (editorModel.editorParams.enableFullScreen) {
        enableFullScreen.value = c.toBoolean(
          editorModel.editorParams.enableFullScreen,
        );
      }
    }

    if (props.readonly) {
      hasEnableEdit.value = false;
      readonlyState.value = true;
    }

    // data响应式变更基础路径
    watch(
      () => props.data,
      newVal => {
        if (newVal) {
          const urls = ibiz.util.file.calcFileUpDownUrl(
            c.context,
            c.params,
            newVal,
            c.editorParams,
          );
          uploadUrl.value = urls.uploadUrl;
          downloadUrl.value = urls.downloadUrl;
        }
      },
      { immediate: true, deep: true },
    );

    // 自定义校验链接
    const customCheckLinkFn = (
      text: string,
      url: string,
    ): string | boolean | undefined => {
      if (!url) {
        return;
      }
      // if (url.indexOf('http') !== 0) {
      //   return '链接必须以 http/https 开头';
      // }
      return true;

      // 返回值有三种选择：
      // 1. 返回 true ，说明检查通过，编辑器将正常插入链接
      // 2. 返回一个字符串，说明检查未通过，编辑器会阻止插入。会 alert 出错误信息（即返回的字符串）
      // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止插入。但不会提示任何信息
    };

    // 自定义转换链接 url
    const customParseLinkUrl = (url: string): string => {
      // if (url.indexOf('http') !== 0) {
      //   return `http://${url}`;
      // }
      return url;
    };

    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = {
      toolbarKeys: defaultToolbars,
    };

    if (c.insertKeys.length > 0 && toolbarConfig.toolbarKeys) {
      c.insertKeys.forEach((item: IData) => {
        if (item.keys) {
          item.keys.forEach((key: string, i: number) => {
            toolbarConfig.toolbarKeys!.splice(item.index + i, 0, key);
          });
        }
      });
    }

    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {
      placeholder: c.placeHolder,
      readOnly: hasEnableEdit.value ? readonlyState.value : props.readonly,
      MENU_CONF: {
        // 图片上传
        uploadImage: {
          // 上传地址
          server: uploadUrl.value,

          // form-data fieldName ，默认值 'wangeditor-uploaded-image'
          fieldName: 'file',

          // 单个文件的最大体积限制，默认为 2M
          maxFileSize: 10 * 1024 * 1024, // 10M

          // 最多可上传几个文件，默认为 100
          maxNumberOfFiles: 10,

          // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
          allowedFileTypes: [],

          // 自定义增加 http  header
          headers: headers.value,

          // 跨域是否传递 cookie ，默认为 false
          withCredentials: true,

          // 上传之前触发
          onBeforeUpload(file: File) {
            // TS 语法
            // onBeforeUpload(file) {    // JS 语法
            // file 选中的文件，格式如 { key: file }
            return file;

            // 可以 return
            // 1. return file 或者 new 一个 file ，接下来将上传
            // 2. return false ，不上传这个 file
          },

          // 上传进度的回调函数
          onProgress(progress: number) {
            console.log('progress', progress);
          },

          // 单个文件上传成功之后
          onSuccess(file: File, res: IData) {
            console.log(`${file.name} 上传成功`, res);
          },

          // 单个文件上传失败
          onFailed(file: File, res: IData) {
            console.log(`${file.name} 上传失败`, res);
          },

          // 上传错误，或者触发 timeout 超时
          onError(file: File, err: IData, res: IData) {
            console.log(`${file.name} 上传出错`, err, res);
          },

          // 自定义插入图片
          async customInsert(res: IData, insertFn: InsertFnType) {
            const url = downloadUrl.value.replace('%fileId%', res.id);
            const alt = res.filename;
            // 从 res 中找到 url alt href ，然后插入图片
            insertFn(url, alt, '');
          },
        },
        // 插入链接
        insertLink: {
          checkLink: customCheckLinkFn, // 也支持 async 函数
          parseLinkUrl: customParseLinkUrl, // 也支持 async 函数
        },
        // 更新链接
        editLink: {
          checkLink: customCheckLinkFn, // 也支持 async 函数
          parseLinkUrl: customParseLinkUrl, // 也支持 async 函数
        },
      },
    };

    // 组件销毁时，也及时销毁编辑器，重要！
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;

      editor.destroy();
    });

    // 判断是否折叠
    const handleExpand = async (editor: IDomEditor) => {
      if (c.maxHeight) {
        const container = editor.getEditableContainer();
        showExpand.value = (container as IData).offsetHeight > c.maxHeight;
      }
    };

    // 图片预览
    const handlePreview = async (el: IData) => {
      const url: string = el.src;
      if (readonlyState.value) {
        openPreview(url);
      } else {
        // 需先选中后点击才是预览
        const nodeEntries = SlateEditor.nodes(editorRef.value, {
          match: (node: SlateNode) => {
            if (SlateElement.isElement(node)) {
              if ((node as IData).type === 'image') {
                return true; // 匹配 image
              }
            }
            return false;
          },
          universal: true,
        });

        if (nodeEntries) {
          for (const nodeEntry of nodeEntries) {
            const [node] = nodeEntry;
            if ((node as IData).type === 'image') {
              // 确保点击图片与选中图片一致
              if (url.endsWith((node as IData).src)) {
                openPreview((node as IData).src);
              }
            }
          }
        }
      }
    };

    /**
     * 打开图片预览框
     *
     * @param {string} url
     */
    const openPreview = async (url: string) => {
      previewUrl.value = url;
      // 打开预览图片模态
      previewUrlList.value = [url];
      await nextTick();
      if (previewRef.value) {
        const { container } = previewRef.value.$refs;
        if (container) {
          container.children[0].click();
        }
      }
    };

    // 设置图片hook
    const setImageHook = (editor: IDomEditor) => {
      const editorContainer = editor.getEditableContainer();
      if (editorContainer) {
        const imgs = editorContainer.querySelectorAll('img');
        imgs.forEach(img => {
          img.onload = () => {
            handleExpand(editor);
          };
          img.onclick = event => {
            const el: IData | null = event.target;
            if (el) {
              handlePreview(el);
            }
          };
        });
      }
    };

    /**
     * 处理绑定或卸载事件
     */
    const handleEventListener = (funcName: string) => {
      if (previewRef.value) {
        const { container } = previewRef.value.$refs;
        if (container) {
          const imgEl = container.querySelector('.el-image-viewer__wrapper');
          // eslint-disable-next-line no-use-before-define
          imgEl?.[funcName]('keydown', handleKeyPress);
        }
      }
    };

    /**
     * 处理键盘事件
     */
    const handleKeyPress = async (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.keyCode === 27) {
        event.stopPropagation(); // 阻止事件冒泡到其他元素
        event.preventDefault(); // 阻止事件的默认行为
        await nextTick();
        handleEventListener('removeEventListener');
        // 关闭预览图片模态
        previewUrlList.value = [];
      }
    };

    /**
     * 打开图片预览
     */
    const onShow = async () => {
      await nextTick();
      handleEventListener('addEventListener');
    };

    /**
     * 绘制模式为json时，处理抛值逻辑
     */
    const handleEmit = (): void => {
      let emitValue = valueHtml.value;
      emitValue = emitValue
        .replaceAll('class="rich-html-table"', '')
        .replace(/<table/g, '<table class="rich-html-table"');
      // 绘制模式为JSON
      if (c.renderMode === 'JSON') {
        const editor = editorRef.value;
        emitValue = c.toJson(editor.children);
      }
      if (props.value !== emitValue) {
        emit('change', emitValue);
      }
    };

    /**
     * 抛值事件支持防抖
     */
    const debounceEmit = debounce(handleEmit, c.saveInterval);

    // 编辑器回调函数
    // 编辑器创建完毕时的回调函数
    const handleCreated = (editor: IDomEditor) => {
      editorRef.value = editor; // 记录 editor 实例，重要！
      const html = c.parseNode(valueHtml.value);
      editor.setHtml(html);
      c.onCreated(editorRef.value, props.data, toolbarConfig);

      let modalUtil: ModalUtil;
      // 模态打开
      editor.on('modalOrPanelShow', modalOrPanel => {
        modalUtil = new ModalUtil(modalOrPanel, htmlRef.value);
      });
      // 模态关闭
      editor.on('modalOrPanelHide', () => {
        if (modalUtil) {
          modalUtil.destroy();
        }
      });
    };
    // 编辑器内容、选区变化时的回调函数
    const handleChange = (editor: IDomEditor) => {
      // console.log('change:', editor.getHtml());
      const html = editor.getHtml();
      handleExpand(editor);
      setImageHook(editor);
      // wangEditor初始值抛空字符串给后台
      let emitValue = html === '<p><br></p>' ? '' : html;
      if (
        emitValue === props.value ||
        (emitValue === '' && isNil(props.value))
      ) {
        return;
      }
      // 修复初始化有值编辑器也会抛值导致表单脏值检查异常问题
      emitValue = emitValue
        .replaceAll('class="rich-html-table"', '')
        .replace(/<table/g, '<table class="rich-html-table"');
      if (!hasEnableEdit.value && editor.isFocused()) {
        if (c.emitMode === 'AUTOMATIC') {
          debounceEmit();
        } else {
          handleEmit();
        }
      }
      c.evt.emit('onChange', {
        eventArg: emitValue,
      });
    };
    // 编辑器销毁时的回调函数。调用 editor.destroy() 即可销毁编辑器
    const handleDestroyed = (_editor: IDomEditor) => {
      // console.log('destroyed', _editor);
      c.onDestroyed();
    };
    // 编辑器 focus 时的回调函数
    const handleFocus = (_editor: IDomEditor) => {
      // console.log('focus', _editor);
      emit('focus');
      c.evt.emit('onFocus', {
        eventArg: props.value,
      });
    };
    // 编辑器 blur 时的回调函数。
    const handleBlur = (_editor: IDomEditor) => {
      // console.log('blur', _editor);
      emit('blur');
      c.evt.emit('onBlur', { eventArg: props.value });
    };
    // 自定义编辑器 alert
    const customAlert = (info: string, type: string) => {
      // eslint-disable-next-line no-alert
      alert(`【自定义提示】${type} - ${info}`);
    };
    // 自定义粘贴。可阻止编辑器的默认粘贴，实现自己的粘贴逻辑
    const customPaste = (
      editor: IDomEditor,
      event: ClipboardEvent,
      callback: (_n: boolean) => void,
    ) => {
      // 返回值（注意，vue 事件的返回值，不能用 return）
      // callback(false); // 返回 false ，阻止默认粘贴行为
      callback(true); // 返回 true ，继续默认的粘贴行为
    };

    // 插入文本
    const insertText = (str: string) => {
      const editor = editorRef.value;
      if (editor == null) return;

      editor.insertText(str);
    };

    // 获取非格式化的 html
    const printHtml = () => {
      const editor = editorRef.value;
      if (editor == null) return;
      console.log(editor.getHtml());
    };

    // 禁用编辑器
    const disable = () => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.disable();
    };

    // 取消禁用编辑器
    const enable = () => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.enable();
    };

    const calcHtmlStyle = () => {
      awaitTimeout(0, () => {
        if (htmlContent.value && toolbarRef.value) {
          const htmlContentHeight = htmlContent.value.offsetHeight;

          // 监听工具栏高度变化动态去算
          resizeObserver = new ResizeObserver(entries => {
            // 处理组件高度变化
            const { height } = entries[0].contentRect;
            if (height !== lastToolbarHeight) {
              const tempCssVars = {
                height: `${
                  htmlContentHeight - entries[0].contentRect.height
                }px`,
              };
              cssVars.value = ns.cssVarBlock(tempCssVars);
              lastToolbarHeight = height;
            }
          });
          resizeObserver.observe(toolbarRef.value.selector);
        }
      });
    };

    // 光标移动到第一行末尾
    const moveToLastStr = () => {
      if (props.value) {
        const index = props.value.indexOf('</p>');
        if (index >= 0) {
          const offset = editorRef.value.selection.anchor?.offset;
          const path = editorRef.value.selection.anchor?.path;
          if (offset === 0 && path.length > 0 && path[0] === 0) {
            editorRef.value.move(index - 3);
          }
        }
      }
    };

    // 更改编辑状态
    const changeEditState = () => {
      readonlyState.value = !readonlyState.value;
      if (!readonlyState.value) {
        enable();
        editorRef.value.focus();
        moveToLastStr();
        collapse.value = true;
      } else {
        // 取消编辑时内容滚动到顶部
        if (htmlRef.value) {
          const { box } = htmlRef.value.$refs;
          box.scroll(0, 0);
        }
        disable();
      }
    };

    // 绘制取消消息盒子
    const renderCancelMessage = () => {
      return (
        <div class={ns.be('message', 'message-content')}>
          <p>确定要取消编辑吗？</p>
          <p class={ns.bem('message', 'message-content', 'message-tip')}>
            取消编辑将无法保存修改的内容，且不能找回。
          </p>
        </div>
      );
    };

    // 取消编辑
    const cancelEdit = () => {
      if (props.value !== valueHtml.value) {
        ElMessageBox({
          title: '确认取消',
          type: 'warning',
          customClass: ns.b('message'),
          message: renderCancelMessage(),
          showCancelButton: true,
          cancelButtonClass: ns.be('message', 'message-cancel'),
          confirmButtonClass: ns.be('message', 'message-comfire'),
        })
          .then(() => {
            if (props.value) {
              const html = c.parseNode(props.value);
              valueHtml.value = html;
            } else {
              valueHtml.value = '';
            }
            changeEditState();
          })
          .catch(() => {
            // 重新聚焦
            editorRef.value.focus();
          });
      } else {
        changeEditState();
      }
    };

    // 确认保存
    const save = () => {
      readonlyState.value = true;
      editorRef.value.disable();
      const value = valueHtml.value
        .replaceAll('class="rich-html-table"', '')
        .replace(/<table/g, '<table class="rich-html-table"');
      if (c.renderMode !== 'JSON') {
        emit('change', value);
      }
      if (isFullScreen.value) {
        isFullScreen.value = false;
      }
    };

    // 绘制底部取消确认按钮
    const renderFooter = () => {
      if (hasEnableEdit.value && c.emitMode !== 'AUTOMATIC') {
        return (
          <div
            class={[
              ns.b('footer'),
              { [ns.b('footer-dialog')]: isFullScreen.value },
            ]}
          >
            <div class={ns.be('footer', 'cancel')} onClick={() => cancelEdit()}>
              取消
            </div>
            <div class={ns.be('footer', 'save')} onClick={() => save()}>
              保存
            </div>
          </div>
        );
      }
      return null;
    };

    // 更新全屏状态
    const changeFullScreenState = () => {
      isFullScreen.value = !isFullScreen.value;
      collapse.value = !isFullScreen.value;
      nextTick(() => {
        if (readonlyState.value) {
          disable();
        } else {
          enable();
          editorRef.value.focus();
        }
      });
    };

    // 绘制全屏图标
    const isAllowRenderFullScreen = () => {
      if (enableFullScreen.value) {
        if (isFullScreen.value) {
          return (
            <i
              class='fa fa-compress'
              aria-hidden='true'
              onClick={() => changeFullScreenState()}
            ></i>
          );
        }
        return (
          <i
            class='fa fa-expand'
            aria-hidden='true'
            onClick={() => changeFullScreenState()}
          ></i>
        );
      }
      return null;
    };

    // 绘制头部工具栏
    const renderHeaserToolbar = () => {
      if (hasEnableEdit.value || enableFullScreen.value) {
        return (
          <div class={ns.b('custom-toolbar')}>
            {hasEnableEdit.value && enableEdit.value && readonlyState.value ? (
              <i
                class='fa fa-edit'
                aria-hidden='true'
                onClick={() => changeEditState()}
              ></i>
            ) : null}
            {isAllowRenderFullScreen()}
          </div>
        );
      }
      return null;
    };

    const renderToggle = () => {
      if (!showExpand.value) {
        return null;
      }
      if (!collapse.value) {
        return (
          <div
            class={ns.e('toggle')}
            onClick={() => {
              collapse.value = !collapse.value;
            }}
          >
            收起更多 <ion-icon name='arrow-up-outline'></ion-icon>
          </div>
        );
      }
      return (
        <div
          class={ns.e('toggle')}
          onClick={() => {
            collapse.value = !collapse.value;
          }}
        >
          展开更多 <ion-icon name='arrow-down-outline'></ion-icon>
        </div>
      );
    };

    // 绘制编辑器内容
    const renderEditorContent = () => {
      const tempStyle = { ...cssVars.value };
      if (collapse.value && c.maxHeight) {
        Object.assign(tempStyle, {
          maxHeight: `${c.maxHeight}px`,
        });
      }
      return (
        <div class={ns.b('content')} ref='htmlContent' style={tempStyle}>
          <Toolbar
            ref='toolbarRef'
            editor={editorRef.value}
            default-config={toolbarConfig}
            mode='default'
            class={ns.b('toolbar')}
          />
          <Editor
            ref='htmlRef'
            class={ns.b('editor')}
            v-model={valueHtml.value}
            default-config={editorConfig}
            mode='default'
            onOnCreated={handleCreated}
            onOnChange={handleChange}
            onOnDestroyed={handleDestroyed}
            onOnFocus={handleFocus}
            onOnBlur={handleBlur}
            oncustomAlert={customAlert}
            oncustomPaste={customPaste}
          />
        </div>
      );
    };

    // 绘制预览框
    const renderPreview = () => {
      return (
        <el-image
          class={ns.e('preview')}
          ref='previewRef'
          zoom-rate={1.1}
          src={previewUrl.value}
          preview-src-list={previewUrlList.value}
          hide-on-click-modal={true}
          onShow={onShow}
          fit='cover'
        />
      );
    };

    onMounted(() => {
      if (containerRef.value) {
        funcs = useClickOutside(containerRef, async () => {
          if (editorRef.value) {
            editorRef.value.emit('clickOutside');
          }
        });
      }
      calcHtmlStyle();
      // 监听值变化赋值
      watch(
        () => props.value,
        (newVal, oldVal) => {
          if (
            newVal !== oldVal &&
            (typeof props.value === 'string' || newVal == null)
          ) {
            if (newVal == null) {
              valueHtml.value = '';
            } else if (c.renderMode === 'JSON') {
              valueHtml.value = c.jsonToHtml(newVal) as string;
            } else {
              valueHtml.value = newVal as string;
            }
          }
        },
        { immediate: true },
      );

      // 监听disabled禁用
      watch(
        () => props.disabled,
        (newVal, oldVal) => {
          if (newVal !== oldVal) {
            if (newVal === true) {
              disable();
            } else {
              enable();
            }
          }
        },
        { immediate: true },
      );
    });

    onUnmounted(() => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (funcs && funcs.stop) {
        funcs.stop();
      }
    });

    return {
      ns,
      editorRef,
      previewRef,
      containerRef,
      htmlRef,
      mode: 'default',
      valueHtml,
      toolbarConfig,
      editorConfig,
      handleCreated,
      handleChange,
      handleDestroyed,
      handleFocus,
      handleBlur,
      customAlert,
      customPaste,
      insertText,
      printHtml,
      disable,
      enable,
      renderHeaserToolbar,
      renderEditorContent,
      renderToggle,
      renderFooter,
      htmlContent,
      hasEnableEdit,
      cssVars,
      toolbarRef,
      isFullScreen,
      readonlyState,
      collapse,
      changeFullScreenState,
      renderPreview,
    };
  },
  render() {
    return !this.isFullScreen ? (
      <div
        ref='containerRef'
        class={[
          this.ns.b(),
          this.ns.is('allow-collapse', true),
          { [this.ns.b('editor-readonly')]: this.readonlyState },
        ]}
      >
        {this.renderHeaserToolbar()}
        {this.renderEditorContent()}
        {this.readonlyState ? this.renderToggle() : null}
        {this.hasEnableEdit && !this.readonlyState ? this.renderFooter() : null}
        {this.renderPreview()}
      </div>
    ) : (
      <el-dialog
        v-model={this.isFullScreen}
        width='80%'
        top='10vh'
        class={this.ns.b('dialog-full-screen')}
        onClose={() => this.changeFullScreenState()}
      >
        <div
          ref='containerRef'
          class={[
            this.ns.b(),
            this.ns.b('collapse'),
            { [this.ns.b('editor-readonly')]: this.readonlyState },
          ]}
        >
          {this.renderHeaserToolbar()}
          {this.renderEditorContent()}
          {this.hasEnableEdit && !this.readonlyState
            ? this.renderFooter()
            : null}
        </div>
      </el-dialog>
    );
  },
});

export default IBizHtmlCollapse;
