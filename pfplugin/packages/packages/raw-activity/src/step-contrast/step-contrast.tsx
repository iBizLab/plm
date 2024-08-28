/* eslint-disable no-plusplus */
import { PropType, defineComponent, computed } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { IModal } from '@ibiz-template/runtime';
import { isArray } from 'lodash-es';
import { Util } from './util';
import './step-contrast.scss';

export const StepContrast = defineComponent({
  name: 'StepContrast',
  props: {
    item: {
      type: Object as PropType<{
        name: string;
        oldValue: string;
        newValue: string;
      }>,
      required: true,
    },
    modal: { type: Object as PropType<IModal> },
  },
  setup(props) {
    const ns = useNamespace('contrast-modal');
    const util = new Util();

    const oldValue = computed(() => {
      let result: IData[] | string = props.item.oldValue;
      if (props.item.name === 'STEPS' && result) {
        result = JSON.parse(result) as IData[];
      }
      return result;
    });

    const newValue = computed(() => {
      let result: IData[] | string = props.item.newValue;
      if (props.item.name === 'STEPS' && result) {
        result = JSON.parse(result) as IData[];
      }
      return result;
    });

    const oldIndex = computed(() => {
      const result: string[] = [];
      let tempIndex: number = 0;
      let tempSubIndex: number = 0;
      if (isArray(oldValue.value)) {
        oldValue.value.forEach((data: IData, index: number) => {
          if (data.is_group || !index || !data.group_id) {
            tempIndex++;
            tempSubIndex = 0;
            result.push(`${tempIndex}`);
          } else {
            tempSubIndex++;
            result.push(`${tempIndex}.${tempSubIndex}`);
          }
        });
      }
      return result;
    });

    const newIndex = computed(() => {
      const result: string[] = [];
      let tempIndex: number = 0;
      let tempSubIndex: number = 0;
      if (isArray(newValue.value)) {
        newValue.value.forEach((data: IData, index: number) => {
          if (data.is_group || !index || !data.group_id) {
            tempIndex++;
            tempSubIndex = 0;
            result.push(`${tempIndex}`);
          } else {
            tempSubIndex++;
            result.push(`${tempIndex}.${tempSubIndex}`);
          }
        });
      }
      return result;
    });

    const getDiff = (): string => {
      // 比对字符串
      const stringVal = util.doDiff(
        (oldValue.value as string) || '',
        (newValue.value as string) || '',
      );
      return stringVal;
    };

    const renderTableContent = (
      valueType: 'oldValue' | 'newValue',
    ): JSX.Element[] => {
      const steps = (
        valueType === 'oldValue' ? oldValue.value : newValue.value
      ) as IData[];
      return steps.map((step, index) => {
        return (
          <tr>
            <td class='number-column'>
              {valueType === 'oldValue'
                ? oldIndex.value[index]
                : newIndex.value[index]}
            </td>
            <td class='description-column' colspan={step.is_group ? 2 : 1}>
              {step.is_group ? step.name : step.description}
            </td>
            {!step.is_group && (
              <td class='expected-column'>{step.expected_value}</td>
            )}
          </tr>
        );
      });
    };

    const renderStepTable = (
      valueType: 'oldValue' | 'newValue',
    ): JSX.Element => {
      return (
        <table class='steps-table'>
          <tr class='table-header'>
            <td class='number-column'>#</td>
            <td class='description-column'>步骤描述</td>
            <td class='expected-column'>预期结果</td>
          </tr>
          {renderTableContent(valueType)}
        </table>
      );
    };

    const renderHtml = (valueType: 'oldValue' | 'newValue'): JSX.Element => {
      return (
        <div
          class='html'
          v-html={valueType === 'oldValue' ? oldValue.value : getDiff()}
        ></div>
      );
    };

    const renderContainer = (
      valueType: 'oldValue' | 'newValue',
    ): JSX.Element => {
      return (
        <div class={ns.e('container')}>
          {props.item.name === 'STEPS'
            ? renderStepTable(valueType)
            : renderHtml(valueType)}
        </div>
      );
    };
    return { ns, renderContainer };
  },
  render() {
    return (
      <div class={[this.ns.b(), this.ns.e(`${this.item.name.toLowerCase()}`)]}>
        <div class={this.ns.e('modal-title')}>变更对比</div>
        <div class={this.ns.e('modal-content')}>
          <div class={this.ns.m('change-content')}>
            <div class='before-change'>
              <span>变更前</span>
            </div>
            {this.renderContainer('oldValue')}
          </div>
          <div class={this.ns.m('change-content')}>
            <div class='after-change'>
              <span>变更后</span>
              {this.item.name !== 'STEPS' && (
                <span class='inserted'>
                  新增 <span class='add state'></span>
                  删除 <span class='remove state'></span>
                </span>
              )}
            </div>
            {this.renderContainer('newValue')}
          </div>
        </div>
      </div>
    );
  },
});
