import { defineComponent, ref, computed, PropType } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { RuntimeError } from '@ibiz-template/core';
import { GridRowState } from '@ibiz-template/runtime';
import { isNil } from 'ramda';
import { isArray, isUndefined } from 'lodash-es';
import { useCellEdit } from './cell-edit';
import { useRowEdit } from './row-edit';
import { useAllEdit } from './all-edit';
import { GridReviewResultsColumnController } from './grid-review-results-column.controller';
import './grid-review-results-column.scss';

const officialSealIcon = (): JSX.Element => (
  <svg
    class='icon'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    height='1em'
    width='1em'
    focusable='false'
  >
    <g stroke-width='1' fill-rule='evenodd'>
      <g transform='translate(.9 .5)' fill-rule='nonzero'>
        <path d='M13.6 13.9a.6.6 0 0 1 0 1.2H.6a.6.6 0 0 1 0-1.2h13zM7.065 0c2.232 0 4.043 1.8 4.043 4.017 0 1.468-.789 2.75-1.97 3.45a.934.934 0 0 0-.361.738c0 .48.364.878.836.932l.11.006c.017 0 .034.005.049.01h3.006c.415 0 .755.339.755.751v2.248c0 .412-.34.75-.755.75H1.355a.755.755 0 0 1-.755-.75V9.904c0-.412.34-.75.755-.75h3.223a.935.935 0 1 0 .418-1.684 4.012 4.012 0 0 1-1.973-3.45C3.023 1.8 4.832 0 7.065 0zm0 1.2a2.83 2.83 0 0 0-2.842 2.82c0 .933.463 1.788 1.22 2.311L5.7 6.5a2.134 2.134 0 0 1-.955 3.843l-.168.012-2.778-.001v1.349h10.533v-1.349H9.527l-.062-.026-.045-.005a2.142 2.142 0 0 1-1.838-1.964l-.005-.153c0-.665.307-1.279.82-1.681l.129-.089a2.804 2.804 0 0 0 1.382-2.418c0-1.553-1.272-2.817-2.843-2.817z'></path>
      </g>
    </g>
  </svg>
);

const successIcon = (): JSX.Element => (
  <svg
    class='icon'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    height='1em'
    width='1em'
    focusable='false'
  >
    <g stroke-width='1' fill-rule='evenodd'>
      <path d='M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm7.097.758L5.199 6.905l-.978 1.001 2.9 2.833 4.563-4.685-1.003-.977-3.584 3.68z'></path>
    </g>
  </svg>
);

const failIcon = (): JSX.Element => (
  <svg
    class='icon'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    height='1em'
    width='1em'
    focusable='false'
  >
    <g stroke-width='1' fill-rule='evenodd'>
      <path d='M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm9.005.021l1.777-1.793-.994-.986-1.769 1.784L6.28 5.27l-.995.985 1.75 1.767-1.766 1.782.995.985 1.756-1.772 1.702 1.718.995-.985L9.005 8.02z'></path>
    </g>
  </svg>
);

const gtIcon = (): JSX.Element => (
  <svg
    class='icon'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    height='1em'
    width='1em'
    focusable='false'
  >
    <g stroke-width='1' fill-rule='evenodd'>
      <path
        d='M7.978 11.498l-.005.005L2.3 5.831 3.13 5l4.848 4.848L12.826 5l.83.831-5.673 5.672-.005-.005z'
        transform='rotate(-90 7.978 8.252)'
      ></path>
    </g>
  </svg>
);

export const GridReviewResultsColumn = defineComponent({
  name: 'IBizGridReviewResultsColumn',
  props: {
    controller: {
      type: GridReviewResultsColumnController,
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
    const ns = useNamespace('grid-review-results-column');
    const componentRef = ref();
    const c = props.controller;
    /**
     * 评审阶段
     */
    const reviewStage = computed(() => c.context.curstage_id);
    /**
     * 评审最终结果
     */
    const finalStageResults = computed(() => {
      return props.row.data[c.finalResultsField];
    });

    /**
     * 当前数据
     */
    const curItems = computed(() => {
      const val = props.row.data[c.fieldName];
      return isArray(val) ? val : [];
    });

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
          throw new RuntimeError(
            ibiz.i18n.t('control.common.noSupportItem', {
              name: ibiz.config.grid.editShowMode,
            }),
          );
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
        const val = props.row.data[c.fieldName];
        return c.formatValue(val);
      }
      return infoText.value;
    });

    /**
     * 是否可评审
     */
    const isReview = (item: IData): boolean => {
      return (
        item[c.isReviewedField] === '1' &&
        c.context.cur_reviewer_id === c.context.srfuserid &&
        c.context._parent.curstage_state === '20'
      );
    };

    /**
     * 获取代码表项
     */
    const getCodeListItem = (item: IData): IData => {
      if (c.codeList) {
        return (
          c.codeList.codeItems?.find(
            (codeItem: IData) =>
              String(codeItem.value) === String(item[c.reviewResultField]),
          ) || {}
        );
      }
      return {};
    };

    const onReviewClick = (event: MouseEvent): void => {
      event.stopPropagation();
      props.controller.triggerAction(props.row, event);
    };

    /**
     * 绘制默认及是否通过
     */
    const renderBlock = (item: IData): JSX.Element => {
      const { color } = getCodeListItem(item);
      return <div class={[ns.b('block')]} style={{ background: color }}></div>;
    };

    /**
     * 绘制最终结果，通过或拒绝图标
     */
    const renderFinalResult = (): JSX.Element => {
      const state = String(finalStageResults.value) === '1';
      return (
        <div class={[ns.b('final-result'), ns.is('fail', !state)]}>
          {state ? successIcon() : failIcon()}
        </div>
      );
    };

    /**
     * 绘制单个评审结果
     */
    const renderSingleStageResults = (item: IData = {}): JSX.Element => {
      const { text } = getCodeListItem(item);
      return (
        <div class={[ns.b('single-stage-results')]}>
          {isReview(item) && Number(item[c.reviewResultField]) < 3
            ? officialSealIcon()
            : renderBlock(item)}
          <span class={ns.be('single-stage-results', 'caption')}>{text}</span>
        </div>
      );
    };

    /**
     * 绘制评审结果
     */
    const renderStageResults = (): JSX.Element => {
      return (
        <div class={[ns.b('stage-results')]}>
          {curItems.value?.map((item: IData) => {
            return renderBlock(item);
          })}
          {!isUndefined(finalStageResults.value) ? renderFinalResult() : ''}
        </div>
      );
    };

    /**
     * 绘制评审内容
     */
    const renderContent = (): JSX.Element | string => {
      if (curItems.value.length === 0) {
        return '---';
      }
      const item = curItems.value.find(
        _item => _item[c.reviewStageField] === reviewStage.value,
      );

      // 判断当前节点是否为不可评审并且评审结果状态小于3
      if (item && !isReview(item) && Number(item[c.reviewResultField]) < 3) {
        return '---';
      }

      // 绘制默认
      return (
        <div class={[ns.b('content')]} onClick={onReviewClick}>
          {item ? renderSingleStageResults(item) : renderStageResults()}
          <div class={ns.be('content', 'icon')}>{gtIcon()}</div>
        </div>
      );
    };

    return {
      ns,
      c,
      componentRef,
      tooltip,
      rowDataChange,
      onInfoTextChange,
      gridEditItemProps,
      editorProps,
      renderContent,
    };
  },
  render() {
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
          showEditMask: false,
        }}
      >
        {this.renderContent()}
      </iBizGridEditItem>
    );
  },
});
export default GridReviewResultsColumn;
