import { computed, defineComponent } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './grid-personal-info-column.scss';
import {
  GridFieldColumnController,
  GridRowState,
} from '@ibiz-template/runtime';

export const GridPersonalInfoColumn = defineComponent({
  name: 'IBizGridPersonalInfoColumn',
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
    const ns2 = useNamespace('grid-personal-info-column');
    const c = props.controller;

    /**
     * 人员UI转化
     */
    const userFilterMap = { id: 'assignee_id', name: 'assignee_name' };

    const { userParam } = c.model;
    if (userParam) {
      if (userParam.USERFILTERMAP) {
        try {
          const tempUserMap = JSON.parse(userParam.USERFILTERMAP);
          Object.assign(userFilterMap, tempUserMap);
        } catch (error) {
          ibiz.log.error(error);
        }
      }
    }

    /**
     * 单元格点击事件
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
     * 当前属性列数据
     */
    const fieldValue = computed(
      () => props.row.data[props.controller.fieldName] || {},
    );

    /**
     * 用户名称
     */
    const userName = computed(() => fieldValue.value[userFilterMap.name] || '');

    /**
     * 用户id
     */
    const userId = computed(() => fieldValue.value[userFilterMap.id] || '');

    /**
     * 获取用户头像路径
     */
    const getUsrAvatarUrl = (): string => {
      const dataItems = c.codeListItems;
      if (!dataItems || dataItems.length === 0) {
        return '';
      }

      const operator: IData =
        dataItems.find(
          item =>
            (item.value && userId.value && item.value === userId.value) ||
            (item.text && userName.value && item.text === userName.value),
        ) || {};
      if (operator.data && operator.data.iconurl) {
        const urlConfig = JSON.parse(operator.data.iconurl);
        if (urlConfig.length > 0) {
          const { downloadUrl } = ibiz.util.file.calcFileUpDownUrl(
            c.context,
            c.params,
            props.row.data,
            {},
          );
          return downloadUrl.replace('%fileId%', urlConfig[0].id);
        }
      }
      return '';
    };

    /**
     * 绘制人员头像
     */
    const renderUserAvatar = (): JSX.Element | string => {
      const avatarUrl = getUsrAvatarUrl();
      if (avatarUrl) {
        return (
          <img
            class={ns2.bem('content', 'head-sculpture', 'avatar-icon')}
            src={avatarUrl}
            alt=''
          />
        );
      }
      return (ibiz.util.text as IParams)?.abbreviation(userName.value) || '';
    };

    /**
     * 绘制内容
     */
    const renderContent = (): JSX.Element | string => {
      if (!userName.value) {
        return '---';
      }
      return (
        <div class={ns2.b('content')}>
          <div
            class={ns2.be('content', 'head-sculpture')}
            style={`background-color:${(
              ibiz.util.text as IParams
            )?.stringToHexColor(userName.value)}`}
          >
            {renderUserAvatar()}
          </div>
          {userName.value ? (
            <div class={ns2.be('content', 'tip')}>{userName.value}</div>
          ) : null}
        </div>
      );
    };

    return {
      ns,
      c,
      fieldValue,
      onCellClick,
      renderContent,
    };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.c.clickable(this.row) && this.ns.m('clickable'),
          this.ns.m(this.controller.grid.overflowMode),
          this.controller.model.cellSysCss?.cssName,
          this.ns.is('has-action', !!this.c.model.deuiactionGroup),
        ]}
        onClick={this.onCellClick}
      >
        {this.renderContent()}
      </div>
    );
  },
});
export default GridPersonalInfoColumn;
