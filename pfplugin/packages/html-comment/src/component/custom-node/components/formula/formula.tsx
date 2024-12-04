import { defineComponent, ref, watch, onUnmounted } from 'vue';
import { IOverlayPopoverContainer } from '@ibiz-template/runtime';
import { useNamespace } from '@ibiz-template/vue3-util';
import { createUUID } from 'qx-util';
import './formula.scss';
import { getCustomNodeProps, onCreatePopover } from '../../utils';
import FormulaEditor, { MathJax } from './formula-editor';

MathJax.loadMathJax();

export const FormulaSelect = defineComponent({
  name: 'IBizFormula',
  props: getCustomNodeProps(),
  setup(props) {
    const ns = useNamespace('formula-elem');
    const formulaEditor = ref();
    // 节点编辑弹框
    const nodeOverlay = ref<IOverlayPopoverContainer | null>(null);
    // 公式编辑弹框
    const formulaOverlay = ref<IOverlayPopoverContainer | null>(null);
    const formulaNodeId = ref('');
    const nodeRef = ref();
    const curVal = ref('');
    if (props.data) {
      curVal.value = props.data;
    }

    // 处理销毁
    const handleDestroy = async (): Promise<void> => {
      await nodeOverlay.value?.dismiss();
      await formulaOverlay.value?.dismiss();
      await formulaEditor.value?.destroyDom();
    };

    // 处理绘制公式
    const handleFormulaRender = (): void => {
      if (curVal.value) {
        const text = curVal.value.replace(/&nbsp;/g, ' ').trim();
        const htmlText = `$ ${text} $`;
        nodeRef.value.innerHTML = htmlText;
        MathJax.renderFormula(nodeRef.value);
      } else {
        nodeRef.value.innerHTML = `输入 LaTeX 公式`;
      }
    };

    // 公式编辑区创建完成后回调
    const createCallback = (): void => {
      if (curVal.value) {
        formulaEditor.value?.append(curVal.value);
      }
    };

    const init = (): void => {
      handleFormulaRender();
      formulaEditor.value = new FormulaEditor();
      formulaEditor.value.config = {
        width: 570,
        height: 184,
        menuHeight: 40,
      };
      formulaEditor.value.change = (value: string): void => {
        if (!value) {
          formulaEditor.value.$textLatexElem.addClass('is-no-data');
        } else {
          formulaEditor.value.$textLatexElem.removeClass('is-no-data');
        }
        curVal.value = value;
        handleFormulaRender();
      };
    };

    // 工具栏绘制数据
    const toolBars = ref([
      {
        type: 'edit',
        text: '编辑',
        icon: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false"><g id="ajbaction/edit" stroke-width="1" fill-rule="evenodd"><path d="M2 8.34L10.71 0 15 4.17 6.538 13H2V8.34zm1.2.512V11.8h2.826l7.283-7.6-2.606-2.533L3.2 8.852zM0 16v-1.2h16V16H0z"></path></g></svg>`,
      },
      {
        type: 'delete',
        text: '删除',
        icon: `<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' height='1em' width='1em'> <g stroke-width='1' fill-rule='evenodd'> <path d='M4.002 3.403V1a1 1 0 0 1 1-1h6.003a1 1 0 0 1 1 1v2.403h3.396a.6.6 0 1 1 0 1.2h-1.395V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.603H.6a.6.6 0 1 1 0-1.2h3.4zm8.804 1.205H3.2V14.8h9.605V4.608zM5.202 1.2v2.155h5.603V1.2H5.202zm.6 6.417a.6.6 0 0 1 1.201 0v4.758a.6.6 0 0 1-1.2 0V7.617zm3.202 0a.6.6 0 0 1 1.2 0v4.758a.6.6 0 0 1-1.2 0V7.617z'></path> </g></svg>`,
      },
    ]);

    // 处理提示弹框的删除
    const handleDelete = async (): Promise<void> => {
      await handleDestroy();
      props.change('', { isDelete: true });
    };

    // 处理确认按钮
    const handleConfirm = (): void => {
      formulaOverlay.value?.dismiss();
    };

    const renderFormulaEdit = (): JSX.Element => {
      return (
        <div class={ns.b('edit-popover')}>
          <div
            id={formulaNodeId.value}
            class={ns.be('edit-popover', 'editor')}
          ></div>
          <div class={ns.be('edit-popover', 'confirm')} onClick={handleConfirm}>
            <button class={['el-button el-button--default']}>确定</button>
          </div>
        </div>
      );
    };

    // 打开公式编辑弹框
    const onOpenFormulaPopover = async (): Promise<void> => {
      // 每次打开重新创建id
      formulaNodeId.value = createUUID();
      if (!formulaOverlay.value) {
        formulaOverlay.value = onCreatePopover(renderFormulaEdit(), {
          placement: 'top-start',
        });
      }
      await formulaOverlay.value.present(nodeRef.value as HTMLElement);
      // 创建公式编辑区
      formulaEditor.value.create(
        document.getElementById(formulaNodeId.value),
        createCallback,
      );
      await formulaOverlay.value.onWillDismiss();
      props.change(curVal.value);
      // 销毁公式编辑区
      formulaEditor.value.destroyDom();
      formulaEditor.value = null;
      nodeOverlay.value = null;
    };

    // 处理工具栏项点击
    const handleToolItemClick = async (item: IData): Promise<void> => {
      if (item.type === 'separator') {
        return;
      }
      switch (item.type) {
        case 'edit':
          await nodeOverlay.value!.dismiss();
          onOpenFormulaPopover();
          break;
        case 'delete':
          handleDelete();
          break;
        default:
          break;
      }
    };

    // 绘制工具栏
    const renderToolBar = (): JSX.Element => {
      return (
        <div class={ns.b('tool-popover')}>
          {toolBars.value.map((item: IData) => {
            return (
              <div
                class={[ns.be('tool-popover', 'item'), ns.is(item.type, true)]}
                title={item.text}
                onClick={() => handleToolItemClick(item)}
              >
                <div
                  class={ns.bem('popover', 'item', 'content')}
                  v-html={item.icon || item.text}
                ></div>
              </div>
            );
          })}
        </div>
      );
    };

    // 打开节点弹框
    const openNodeOverlay = async (): Promise<void> => {
      nodeOverlay.value = onCreatePopover(renderToolBar(), {
        placement: 'top-start',
      });
      await nodeOverlay.value.present(nodeRef.value as HTMLElement);
      await nodeOverlay.value.onWillDismiss();
      nodeOverlay.value = null;
    };

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;
    // 创建一个 MutationObserver 实例
    let observer: ResizeObserver | null = new ResizeObserver(() => {
      // 检查是否有子节点变化，通常表明元素已经渲染
      if (nodeRef.value && nodeRef.value.offsetWidth !== 0) {
        init.bind(_this)();
        // 如果只需要触发一次，可以调用 observer.disconnect() 停止监听
        // 第一次创建时，需要打开弹窗
        if (props.isFocus) {
          onOpenFormulaPopover();
        }
        observer!.disconnect();
        observer = null;
      }
    });

    watch(nodeRef, newVal => {
      if (newVal && newVal.click) {
        observer!.observe(nodeRef.value);
      }
    });

    onUnmounted(() => {
      handleDestroy();
    });

    return {
      ns,
      nodeRef,
      openNodeOverlay,
    };
  },
  render() {
    return (
      <div
        ref='nodeRef'
        class={[this.ns.b(), this.readonly ? this.ns.m('readonly') : '']}
        onClick={this.openNodeOverlay}
      ></div>
    );
  },
});
