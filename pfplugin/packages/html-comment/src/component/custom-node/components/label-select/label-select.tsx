import { defineComponent, ref, reactive, watch } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './label-select.scss';
import { getCustomNodeProps } from '../../utils';

export const LabelSelect = defineComponent({
  name: 'IBizLabelSelect',
  props: getCustomNodeProps(),
  setup(props) {
    const ns = useNamespace('label-select');

    // 计算透明度
    const calcAlpha = (color: string): string => color.replace(')', ',0.196)');

    // 标签颜色
    const labelConfig = [
      'rgba(207, 207, 207)',
      'rgb(255, 117, 117)',
      'rgb(246, 198, 89)',
      'rgb(115, 216, 151)',
      'rgb(210, 135, 248)',
      'rgb(86, 171, 251)',
    ];

    // 输入框实例
    const inputRef = ref();
    // 弹框实例
    const popoverRef = ref();
    // 弹框激活元素实例
    const referenceRef = ref();
    // 当前绘制数据, 赋值默认颜色
    const curData = reactive({
      color: labelConfig[0],
      bgColor: calcAlpha(labelConfig[0]),
      labelName: '',
    });

    // 弹框内输入框的值
    const inputVal = ref('');
    if (props?.data) {
      Object.assign(curData, props?.data);
      inputVal.value = props?.data.labelName;
    }

    // 第一次创建时，需要打开弹窗
    if (props.isFocus) {
      watch(referenceRef, newVal => {
        if (newVal && newVal.click) {
          newVal.click();
        }
      });
    }

    // 自定义抛值逻辑
    const customEmit = (): void => {
      let value;
      if (inputVal.value) {
        value = {
          color: curData.color,
          bgColor: curData.bgColor,
          labelName: inputVal.value,
        };
      }
      props.change(value, { isDelete: !inputVal.value });
    };

    // 处理标签颜色项点击
    const handleColorItemClick = (color: string): void => {
      curData.color = color;
      curData.bgColor = calcAlpha(color);
    };

    // 监听输入框值变化，并赋值给标签
    const onInput = (): void => {
      curData.labelName = inputVal.value;
    };

    // 处理弹框打开动画之前逻辑
    const handleAfterEnter = (): void => {
      // 当元素第一次创建时，需获取焦点
      if (props.isFocus && inputRef.value) {
        inputRef.value.focus();
      }
    };

    const handleAfterLeave = async (): Promise<void> => {
      customEmit();
    };

    return {
      ns,
      curData,
      inputVal,
      inputRef,
      popoverRef,
      labelConfig,
      referenceRef,
      onInput,
      handleColorItemClick,
      handleAfterEnter,
      handleAfterLeave,
      calcAlpha,
    };
  },
  render() {
    const reference = (
      <div
        ref='referenceRef'
        class={this.ns.e('reference')}
        style={{
          backgroundColor: `${this.curData.bgColor}`,
          color:
            this.curData.color === this.labelConfig[0]
              ? ''
              : this.curData.color,
        }}
      >
        {this.curData.labelName || '设置标签'}
      </div>
    );
    const editContent = (
      <el-popover
        trigger='click'
        ref='popoverRef'
        width='200px'
        hide-after={0}
        popper-class={[this.ns.e('popover'), `${this.nodeKey}`]}
        onAfterEnter={this.handleAfterEnter}
        onAfterLeave={this.handleAfterLeave}
      >
        {{
          default: () => {
            return (
              <div class={this.ns.em('popover', 'content')}>
                {
                  <input
                    ref='inputRef'
                    class={this.ns.em('popover', 'input')}
                    type='text'
                    v-model={this.inputVal}
                    onInput={(): void => this.onInput()}
                    placeholder={'输入标签名称'}
                  />
                }
                <div class={this.ns.em('popover', 'color-box')}>
                  {this.labelConfig.map((item: string, index: number) => {
                    return (
                      <div
                        class={this.ns.em('popover', 'color-item')}
                        style={`background-color: ${
                          index === 0 ? this.calcAlpha(item) : item
                        }`}
                        onClick={(): void => this.handleColorItemClick(item)}
                      >
                        {item === this.curData.color ? (
                          <svg
                            viewBox='0 0 16 16'
                            xmlns='http://www.w3.org/2000/svg'
                            height='1em'
                            width='1em'
                          >
                            <g stroke-width='1' fill-rule='evenodd'>
                              <path d='M13.993 3l1.364 1.364-9.311 9.31-.01-.01-.008.01L0 7.645l1.362-1.363 4.674 4.673L13.993 3z'></path>
                            </g>
                          </svg>
                        ) : (
                          ''
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          },
          reference: () => reference,
        }}
      </el-popover>
    );
    return (
      <div class={[this.ns.b(), this.readonly ? this.ns.m('readonly') : '']}>
        {this.readonly ? reference : editContent}
      </div>
    );
  },
});
