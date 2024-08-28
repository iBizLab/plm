import { h, defineComponent, resolveComponent, ref, computed } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { RuntimeError } from '@ibiz-template/core';
import {
  TreeGridExNodeColumnController,
  TreeGridExRowState,
} from '@ibiz-template/runtime';
import { isNil } from 'ramda';
import { useCellEdit } from './cell-edit';
import { useRowEdit } from './row-edit';
import { useAllEdit } from './all-edit';

export const TreeGridExEditColumn = defineComponent({
  name: 'TreeGridExEditColumn',
  props: {
    controller: {
      type: TreeGridExNodeColumnController,
      required: true,
    },
    row: {
      type: TreeGridExRowState,
      required: true,
    },
  },
  setup(props) {
    /** 行数据对应属性列的值 */
    const fieldValue = computed(() => {
      // 非实体节点行的第一列显示文本值
      return (props.row.data as IData)[props.controller.name];
    });

    const ns = useNamespace('tree-grid-ex-edit-column');
    const componentRef = ref();

    const c = props.controller;

    // 编辑器值变更事件
    const rowDataChange = async (
      val: unknown,
      name?: string,
    ): Promise<void> => {
      ibiz.log.debug(`${c.name}值变更`, val);
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
    const onInfoTextChange = (text: string): void => {
      infoText.value = text;
    };
    const tooltip = computed<string | undefined>(() => {
      // 非信息态不显示tooltip
      if (!editorProps.readonly) {
        return undefined;
      }
      if (isNil(infoText.value)) {
        return c.formatValue(fieldValue.value);
      }
      return infoText.value;
    });

    return {
      ns,
      fieldValue,
      componentRef,
      tooltip,
      rowDataChange,
      onInfoTextChange,
      gridEditItemProps,
      editorProps,
    };
  },
  render() {
    return (
      <iBizGridEditItem
        {...{
          ref: 'componentRef',
          required: !this.controller.nodeEditItem!.allowEmpty,
          overflowMode: this.controller.overflowMode,
          class: [this.ns, this.ns.m(this.controller.overflowMode)],
          ...this.gridEditItemProps,
        }}
      >
        {this.controller.editorProvider &&
          h(resolveComponent(this.controller.editorProvider.gridEditor), {
            class: this.ns.e('editor'),
            value: this.fieldValue,
            data: this.row.data,
            controller: this.controller.editor,
            overflowMode: this.controller.overflowMode,
            onChange: this.rowDataChange,
            onInfoTextChange: this.onInfoTextChange,
            title: this.tooltip,
            ...this.editorProps,
          })}
      </iBizGridEditItem>
    );
  },
});
export default TreeGridExEditColumn;
