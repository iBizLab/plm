import { OnClickOutsideResult } from '@ibiz-template/core';
import { GridRowState, Srfuf } from '@ibiz-template/runtime';
import { useClickOutside } from '@ibiz-template/vue3-util';
import { computed, reactive, ref, Ref } from 'vue';
import { GridEditColumnController } from './grid-edit-column.controller';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export function useCellEdit(
  props: {
    readonly row: GridRowState;
    readonly controller: GridEditColumnController;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentRef: Ref<any>,
) {
  const c = props.controller;

  // * 表格列相关
  /** 列的禁用状态 */
  const disabled = computed(() => {
    return props.row.editColStates[c.fieldName].disabled;
  });
  /** 列的只读状态 */
  const readonly = computed(() => {
    return props.row.editColStates[c.fieldName].readonly;
  });
  /** 列是否有错误信息 */
  const hasError = computed(() => !!props.row.errors[c.fieldName]);
  /** 列的编辑状态 */
  const editable = computed(
    () => props.row.editColStates[c.fieldName].editable,
  );
  const setEditable = (flag: boolean): void => {
    props.row.editColStates[c.fieldName].editable = flag;
  };

  // * 编辑器相关
  /** 单元格是否可以编辑 */
  const cellEditable = computed(() => {
    // 列不禁用，不只读，且没有报错时
    return !disabled.value && !readonly.value && !hasError.value;
  });
  /** 当单元格可编辑且编辑开关状态为true的时候编辑器呈现为编辑态, 有报错的直接显示编辑态 */
  const editorShowEdit = computed(() => {
    return hasError.value || (cellEditable.value && editable.value);
  });

  // 当编辑器不呈现为编辑态的时候就是只读态该模式下没有禁用态
  const editorReadOnly = computed(() => {
    return !editorShowEdit.value;
  });
  // 单元格行编辑下，编辑器没有禁用
  const editorDisabled = false;
  // 单元格行编辑下，需要自动聚焦，每次变更编辑态的时候就需要聚焦到对应的编辑器内部。
  const isAutoFocus = true;

  // * GridEditItem相关
  /** 是否显示遮罩 */
  const showEditMask = computed(() => {
    // 可编辑且编辑状态变量为false的时候显示遮罩
    return cellEditable.value && !editable.value;
  });

  /** 是否阻止内部点击冒泡 */
  const stopPropagation = computed(() => {
    // 可编辑的时候不管是遮罩还是编辑态的编辑器都不能触发行点击事件。
    return editable.value;
  });

  // 点击遮罩后，开启编辑，然后监听外部点击，外部点击之后关闭编辑
  let funcs: OnClickOutsideResult;
  const onMaskClick = (): void => {
    setEditable(true);
    funcs = useClickOutside(componentRef, async _evt => {
      setEditable(false);
      funcs.stop();
    });
  };

  // * 编辑器事件处理
  // 聚焦事件，关闭外部点击监听，由编辑器的blur关闭编辑
  const onFocus = (): void => {
    if (funcs) {
      funcs.stop();
    }
    ibiz.log.debug(`${c.fieldName}属性编辑器focus事件`);
  };

  // 原始值，用于编辑取消时还原值
  let oldValue = props.row.data[c.fieldName];

  // 是否在保存过程中
  const saveProcessing = ref(false);

  const onBlur = (): void => {
    ibiz.log.debug(`${c.fieldName}属性编辑器blur事件`);
    if (saveProcessing.value || c.hasDropdown) {
      return;
    }
    setEditable(false);
    // 保存为blur模式时失去焦点就保存
    if (c.model.userParam?.SAVEMODE === 'BLUR') {
      c.grid.save(props.row.data);
    } else {
      // 保存模式为enter模式时，失去焦点就取消操作
      // 新建的行取消时删除这一行的数据
      // eslint-disable-next-line no-lonely-if
      if (props.row.data.srfuf === Srfuf.CREATE) {
        c.grid.remove({ data: [props.row.data], silent: true });
      } else {
        c.setRowValue(props.row, oldValue);
      }
    }
  };

  const onEnter = async (): Promise<void> => {
    c.setPickerValue(props.row);
    saveProcessing.value = true;
    ibiz.log.debug(`${c.fieldName}属性编辑器enter事件`);
    await c.grid.save(props.row.data);
    // 重新设置最新值为原始值
    oldValue = props.row.data[c.fieldName];
    setEditable(false);
    saveProcessing.value = false;
  };

  // 按下了ESC --直接关闭编辑态，不保存更改
  const onKeydown = (event: IParams): void => {
    if (event.keyCode === 27) {
      setEditable(false);
    }
  };

  const gridEditItemProps = reactive({
    showEditMask,
    stopPropagation,
  });

  const editorProps = reactive({
    autoFocus: isAutoFocus,
    disabled: editorDisabled,
    readonly: editorReadOnly,
    onFocus,
    onBlur,
    onEnter,
    onKeydown,
  });

  return {
    gridEditItemProps,
    editorProps,
    onMaskClick,
  };
}
