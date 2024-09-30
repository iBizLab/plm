/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { computePosition } from '@floating-ui/dom';
import { RuntimeError } from '@ibiz-template/core';
import { GridController, GridRowState } from '@ibiz-template/runtime';
import { ComponentPublicInstance, reactive, ref, Ref } from 'vue';

export function useRowEditPopover(
  tableRef: Ref<IData | undefined>,
  c: GridController,
): IParams {
  let popInstance: ComponentPublicInstance | undefined;
  const showPop = ref(false);
  const editingRow = ref<GridRowState | undefined>();

  const popStyle = reactive({});

  const findTrEl = (row: GridRowState): HTMLElement => {
    if (!tableRef.value) {
      throw new RuntimeError('找不到表格组件引用');
    }
    const tableEl = tableRef.value.$el as HTMLElement;

    // 找到对应那一行的element
    let selector = '.el-table__row';
    if (row.data.srfkey) {
      selector += `.id-${row.data.srfkey}`;
    }
    const trEl = tableEl.querySelector(selector);
    if (!trEl) {
      throw new RuntimeError('找不到对应的表格行dom元素');
    }
    return trEl as HTMLElement;
  };

  const showRowEditPop = async (row: GridRowState): Promise<void> => {
    const trEl = findTrEl(row);
    if (!popInstance) {
      throw new RuntimeError('拿不到pop组件的实例');
    }
    const popEl = popInstance.$el as HTMLElement;
    const { x, y } = await computePosition(trEl, popEl, {
      placement: 'bottom',
    });

    Object.assign(popStyle, {
      top: `${y}px`,
      left: `${x}px`,
    });
    editingRow.value = row;
    showPop.value = true;
  };

  const onConfirm = async (): Promise<void> => {
    if (editingRow.value) {
      c.switchRowEdit(editingRow.value, false, true);
    }
  };
  const onCancel = async (): Promise<void> => {
    if (editingRow.value) {
      c.switchRowEdit(editingRow.value, false, false);
    }
  };

  const renderPopover = (): JSX.Element[] => {
    // 显示气泡，且最后一行是开启编辑态的时候用占位撑开高度
    const showPlaceholder =
      showPop.value && c.state.rows[c.state.rows.length - 1].showRowEdit;
    return [
      <div
        class='row-edit-popover__placeholder'
        style={{ display: showPlaceholder ? 'block' : 'none' }}
      ></div>,
      <iBizRowEditPopover
        ref={(ins: ComponentPublicInstance) => {
          popInstance = ins;
        }}
        style={popStyle}
        show={showPop.value}
        onConfirm={onConfirm}
        onCancel={onCancel}
      ></iBizRowEditPopover>,
    ];
  };

  c.evt.on('onRowEditChange', event => {
    if (event.row.showRowEdit) {
      setTimeout(() => {
        showRowEditPop(event.row);
      }, 0);
    } else {
      editingRow.value = undefined;
      showPop.value = false;
      Object.assign(popStyle, {
        top: undefined,
        left: undefined,
      });
    }
  });

  return { renderPopover };
}
