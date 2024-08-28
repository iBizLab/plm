/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  h,
  defineComponent,
  resolveComponent,
  ref,
  computed,
  PropType,
} from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { RuntimeError } from '@ibiz-template/core';
import { GridRowState } from '@ibiz-template/runtime';
import { isNil } from 'ramda';
import { useCellEdit } from './grid-jscode.cell-edit';
import { useRowEdit } from './grid-jscode.row-edit';
import { useAllEdit } from './grid-jscode.all-edit';
import { GridJsCodeColumnController } from './grid-jscode-column.controller';

export const GridJsCodeColumn = defineComponent({
  name: 'IBizGridJsCodeColumn',
  props: {
    controller: {
      type: GridJsCodeColumnController,
      required: true,
    },
    row: {
      type: GridRowState,
      required: true,
    },
    attrs: {
      type: Object as PropType<IData>,
      required: false,
    },
  },
  setup(props) {
    const ns = useNamespace('grid-field-edit-column');
    const componentRef = ref();

    const c = props.controller;

    c.execInitScriptFn(props.row);

    // 编辑器值变更事件
    const rowDataChange = async (
      val: unknown,
      name?: string,
    ): Promise<void> => {
      ibiz.log.debug(`${c.fieldName}值变更`, val);
      await c.setRowValue(props.row, val, name);
    };

    const useByShowMode = (): {
      gridEditItemProps: IData;
      editorProps: IData;
    } => {
      switch (ibiz.config.grid.editShowMode) {
        case 'cell':
          return useCellEdit(props, componentRef);
        case 'row':
          return useRowEdit(props, componentRef);
        case 'all':
          return useAllEdit(props, componentRef);
        default:
          throw new RuntimeError(`${ibiz.config.grid.editShowMode}暂未支持`);
      }
    };
    const { gridEditItemProps, editorProps } = useByShowMode();

    const infoText = ref<string | undefined>(undefined);
    const onInfoTextChange = (text: string) => {
      infoText.value = text;
    };
    const tooltip = computed<string | undefined>(() => {
      // 非信息态不显示tooltip
      if (!editorProps.readonly) {
        return undefined;
      }
      if (isNil(infoText.value)) {
        const val = props.row.data[c.fieldName];
        return c.formatValue(val);
      }
      return infoText.value;
    });

    return {
      ns,
      c,
      componentRef,
      tooltip,
      rowDataChange,
      onInfoTextChange,
      gridEditItemProps,
      editorProps,
    };
  },
  render() {
    const val = this.row.data[this.c.fieldName];

    return (
      <iBizGridEditItem
        {...{
          ref: 'componentRef',
          required: !this.c.editItem.allowEmpty,
          error: this.row.errors[this.c.fieldName],
          overflowMode: this.controller.grid.overflowMode,
          class: [
            this.ns,
            this.ns.m(this.c.grid.overflowMode),
            this.controller.model.cellSysCss?.cssName,
          ],
          ...this.gridEditItemProps,
        }}
      >
        {this.c.editorProvider &&
          h(resolveComponent(this.c.editorProvider.gridEditor), {
            class: this.ns.e('editor'),
            value: val,
            data: this.row.data,
            controller: this.c.editor,
            overflowMode: this.c.grid.overflowMode,
            onChange: this.rowDataChange,
            onInfoTextChange: this.onInfoTextChange,
            title: this.tooltip,
            ...this.editorProps,
            ...this.attrs,
          })}
      </iBizGridEditItem>
    );
  },
});
export default GridJsCodeColumn;
