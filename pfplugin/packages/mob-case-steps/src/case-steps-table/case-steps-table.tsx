/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { PropType, defineComponent } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { IDEFormItem } from '@ibiz/model-core';
import { clone } from 'ramda';
import { CaseStepsCell } from './case-steps-cell';
import { columnProps } from './case-steps-table-props';
import './case-steps-table.scss';

export const CaseStepsTable = defineComponent({
  name: 'CaseStepsTable',
  props: {
    data: {
      type: Array<IData>,
      required: true,
    },
    model: {
      type: Object as PropType<IData>,
      required: true,
    },
    columns: {
      type: Array<IDEFormItem>,
    },
    indexProps: {
      type: Object as PropType<columnProps>,
    },
  },
  emits: {
    dragChange: (data: IData[]) => true,
  },
  setup(props, { emit, slots }) {
    const ns = useNamespace('case-steps-table');

    const onChange = (data: IData) => {
      const tempData = clone(props.data);
      if (data.moved) {
        const { oldIndex, newIndex } = data.moved;
        const newData = tempData[newIndex];
        const dragData = tempData.splice(oldIndex, 1);
        if (newData.group_id) {
          dragData[0].group_id = newData.group_id;
        } else {
          delete dragData[0].group_id;
        }
        tempData.splice(newIndex, 0, ...dragData);
        emit('dragChange', tempData);
      }
    };

    const renderRows = (item: IData, $index: number) => {
      return (
        <div class={[ns.e('row'), ns.is('group', item.is_group)]} key={item.id}>
          {slots.index && (
            <CaseStepsCell
              class={ns.em('cell', 'index')}
              width={props.indexProps?.width}
              align={props.indexProps?.align}
            >
              <ion-icon
                class={ns.em('cell', 'icon')}
                name='menu-sharp'
              ></ion-icon>
              {slots.index?.({ $index })}
            </CaseStepsCell>
          )}
          {props.columns &&
            props.columns.map(column => {
              if (column.hidden) {
                return;
              }
              return (
                <CaseStepsCell key={item.id}>
                  {slots[column.id!]?.({ $index, row: item })}
                </CaseStepsCell>
              );
            })}
        </div>
      );
    };

    return { ns, onChange, renderRows };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        <div class={this.ns.e('header')}>
          <div class={this.ns.e('row')}>
            {this.$slots.index && (
              <CaseStepsCell
                class={this.ns.em('cell', 'index')}
                width={this.indexProps?.width}
                align={this.indexProps?.align}
              >
                #
              </CaseStepsCell>
            )}
            {this.columns &&
              this.columns.map(column => {
                if (column.hidden || !column.caption) {
                  return;
                }
                const { width } = column;
                const style: IData = {};
                if (width) {
                  style.width = `${width}px`;
                  style.flex = 'none';
                }
                return (
                  <CaseStepsCell style={style} align='center'>
                    <span>{column.caption}</span>
                  </CaseStepsCell>
                );
              })}
          </div>
        </div>
        <div class={this.ns.e('body')}>
          {this.data.map((item: IData, index: number) => {
            return this.renderRows(item, index);
          })}
        </div>
      </div>
    );
  },
});