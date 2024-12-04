import { IUIActionGroupDetail } from '@ibiz/model-core';
import { computed, defineComponent, ref } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import {
  GridFieldColumnController,
  GridRowState,
  CodeListItem,
} from '@ibiz-template/runtime';
import { isNotNil } from 'ramda';
import './icon-grid-column.scss';

export const IconGridColumn = defineComponent({
  name: 'IBizIconGridColumn',
  props: {
    controller: {
      type: GridFieldColumnController,
      required: true,
    },
    row: {
      type: GridRowState,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('grid-field-column');

    /**
     * 单元格点击事件
     *
     * @author lxm
     * @date 2022-09-28 18:09:27
     * @param {MouseEvent} event
     */
    const onCellClick = (event: MouseEvent): void => {
      if (props.controller.hasAction) {
        event.stopPropagation();
        // 阻止触发行点击
        props.controller.triggerAction(props.row, event);
      }
    };

    /**
     * 文本点击事件
     *
     * @author zk
     * @date 2023-07-13 12:07:53
     * @param {MouseEvent} event
     */
    const onTextClick = (event: MouseEvent): void => {
      // 阻止触发行点击
      if (props.controller.isLinkColumn) {
        event.stopPropagation();
        props.controller.openLinkView(props.row, event);
      }
    };

    /**
     * 获取脚本代码html
     * @param {*} computed
     * @return {*}
     * @author: zhujiamin
     * @Date: 2023-08-15 11:34:31
     */
    const CustomHtml = computed(() => {
      return props.controller.getCustomHtml(props.row);
    });

    const fieldValue = computed(
      () => props.row.data[props.controller.model.codeName!.toLowerCase()],
    );

    const formatValue = computed(() =>
      props.controller.formatValue(fieldValue.value),
    );

    // 代码表翻译文本
    const codeListText = ref('');
    const onInfoTextChange = (text: string): void => {
      codeListText.value = text;
    };

    // tooltip相关
    const tooltip = computed(() => {
      // ellipsis模式且属性有值的时候显示tooltip
      if (
        props.controller.grid.overflowMode === 'ellipsis' &&
        isNotNil(fieldValue.value) &&
        fieldValue.value !== ''
      ) {
        return props.controller.codeList
          ? codeListText.value
          : formatValue.value + (props.controller.model.unitName || '');
      }
      return undefined;
    });

    // 代码表相关
    const findCodeListItem = (
      codelist: CodeListItem[] | undefined,
      value: string | number,
    ): CodeListItem | void => {
      if (codelist) {
        // eslint-disable-next-line eqeqeq
        const findItem = codelist.find(item => item.value == value);
        if (findItem) {
          return findItem;
        }
        for (let i = 0; i < codelist.length; i++) {
          const childrenItem = findCodeListItem(
            codelist[i].children,
            value,
          ) as CodeListItem;
          if (childrenItem) {
            return childrenItem;
          }
        }
      }
    };

    const codeListIcon = computed(() => {
      const findItem = findCodeListItem(
        props.controller.codeListItems as CodeListItem[],
        `${String(fieldValue.value)?.toLowerCase()}`,
      );
      return findItem?.sysImage;
    });

    const onActionClick = async (
      detail: IUIActionGroupDetail,
      event: MouseEvent,
    ): Promise<void> => {
      await props.controller.onActionClick(detail, props.row, event);
    };
    return {
      ns,
      onCellClick,
      onTextClick,
      onInfoTextChange,
      onActionClick,
      CustomHtml,
      fieldValue,
      formatValue,
      tooltip,
      codeListIcon,
    };
  },
  render() {
    const c = this.controller;

    const actionToolbar = c.model.deuiactionGroup ? (
      <iBizActionToolbar
        class={this.ns.e('toolbar')}
        action-details={c.model.deuiactionGroup.uiactionGroupDetails}
        actions-state={
          this.row.uiActionGroupStates[this.controller.model.codeName!]
        }
        groupLevelKeys={[50, 100]}
        onActionClick={this.onActionClick}
      ></iBizActionToolbar>
    ) : null;

    let content = null;
    if (c.isCustomCode) {
      content = (
        <span class={this.ns.e('script')} v-html={this.CustomHtml}></span>
      );
    } else if (c.codeList) {
      content = (
        <div class={this.ns.em('text', 'icon')}>
          <iBizIcon icon={this.codeListIcon}></iBizIcon>
        </div>
      );
    } else {
      content = (
        <span
          class={this.ns.e('text')}
          title={this.tooltip}
          onClick={this.onTextClick}
        >
          {this.formatValue}
          {this.fieldValue != null && c.model.unitName}
        </span>
      );
    }

    return (
      <div
        class={[
          this.ns.b(),
          c.clickable(this.row) && this.ns.m('clickable'),
          this.ns.m(this.controller.grid.overflowMode),
          this.controller.model.cellSysCss?.cssName,
          this.ns.is('has-action', !!c.model.deuiactionGroup),
        ]}
        onClick={this.onCellClick}
      >
        {c.model.deuiactionGroup
          ? [
              <div class={this.ns.b('text-container')}>{content}</div>,
              <div class={this.ns.b('toolbar-container')}>{actionToolbar}</div>,
            ]
          : content}
      </div>
    );
  },
});
export default IconGridColumn;
