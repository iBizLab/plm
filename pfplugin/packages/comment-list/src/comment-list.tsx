/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { defineComponent, onBeforeUnmount, ref, watch } from 'vue';
import {
  useNamespace,
  getInputProps,
  getEditorEmits,
} from '@ibiz-template/vue3-util';
import { renderTextPhoto, stringToHexColor } from './comment-list.utils';
import './comment-list.scss';
import { CommentListComtroller } from './comment-list.controller';

export const CommentList = defineComponent({
  name: 'CommentList',
  props: {
    ...getInputProps<CommentListComtroller>(),
    value: {
      type: Array<IData>,
      default: () => [],
    },
  },
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('comment-list');
    const c = props.controller;
    const commentInput = ref('');
    const items = ref<IData[]>([]);
    const errorLoadItems = ref<string[]>([]);

    watch(
      () => props.value,
      async newVal => {
        if (c.isLocal) {
          items.value = [];
          const service = await c.getLocalTempData();
          if (service) {
            const res = await service.fetchDefault(c.context);
            if (res.data && Array.isArray(res.data)) {
              items.value = res.data;
            }
          }
        } else if (!newVal) {
          items.value = [];
        } else if (Array.isArray(newVal)) {
          items.value = [...newVal];
        } else {
          items.value = [];
        }
      },
      {
        immediate: true,
        deep: true,
      },
    );
    const handleDelete = (event: IData) => {
      const { eventArg } = event;
      if (eventArg) {
        const index = items.value.findIndex((_item: IData) => {
          return _item.id === eventArg;
        });
        if (index >= 0) {
          items.value.splice(index, 1);
          // ibiz.message.success('已删除');
        }
      }
    };

    const handleAdd = (event: IData) => {
      items.value.push(event.eventArg);
    };

    c.evt.on('deleteItem', handleDelete);

    c.evt.on('addItem', handleAdd);

    // 删除评论
    const deleteComment = async (item: IData) => {
      const del = await ibiz.confirm.error({
        title: '是否删除',
      });
      if (del) {
        c.deleteComment(item);
      }
    };

    // 发送评论
    const sendComment = () => {
      c.sendComment(commentInput.value, props.data);
      commentInput.value = '';
    };

    // 头像加载失败
    const avatarLoadError = (avatarUrl: string) => {
      console.log('头像加载失败');
      errorLoadItems.value.push(avatarUrl);
    };

    // 获取用户头像
    const getUserAvatar = (avatarUrl: string) => {
      if (!avatarUrl) {
        return null;
      }
      const urlConfig = JSON.parse(avatarUrl);
      if (urlConfig.length === 0) {
        return null;
      }
      const { downloadUrl } = ibiz.util.file.calcFileUpDownUrl(
        c.context,
        c.params,
        props.data,
        c.editorParams,
      );
      const url = downloadUrl.replace('%fileId%', urlConfig[0].id);
      return (
        <img src={url} onError={() => avatarLoadError(avatarUrl)} alt='' />
      );
    };

    // 绘制头部
    const renderHeader = () => {
      return (
        <div class={ns.e('header')}>
          <div>{items.value.length}条评论</div>
          <el-divider></el-divider>
        </div>
      );
    };

    // 绘制当前用户头像
    const renderCurrentAvatar = () => {
      const { avatar, srfusername } = c.context;
      if (avatar) {
        return getUserAvatar(avatar);
      }
      return (
        <div
          class={ns.em('input', 'current-label')}
          style={`background-color:${stringToHexColor(srfusername)}`}
        >
          {renderTextPhoto(srfusername)}
        </div>
      );
    };

    // 绘制评论框
    const renderInput = () => {
      return (
        <div class={ns.e('input')}>
          <div class={ns.em('input', 'left')}>
            <div class={ns.em('input', 'avatar')}>{renderCurrentAvatar()}</div>
          </div>
          <el-input
            class={ns.em('input', 'input')}
            v-model={commentInput.value}
            type='textarea'
            rows={1}
            autosize={commentInput.value.length > 0 ? true : false}
          ></el-input>
          <div class={ns.em('input', 'right')}>
            <el-button onClick={sendComment}>发送</el-button>
          </div>
        </div>
      );
    };

    // 绘制头像，用户名
    const renderAvatar = (id: string) => {
      const user = c.operatorMap.get(id);
      let avatar;
      let text = id;
      if (user) {
        const { label, iconurl } = user.data;
        text = label;
        if (iconurl) {
          avatar = getUserAvatar(iconurl);
        } else {
          avatar = renderTextPhoto(label);
        }
      } else {
        avatar = renderTextPhoto(id);
      }
      return (
        <div class={ns.em('item', 'avatar')}>
          <div
            class={ns.em('item', 'img')}
            style={`background-color:${stringToHexColor(text)}`}
          >
            {avatar}
          </div>
          <div class={ns.em('item', 'label')}>{text}</div>
        </div>
      );
    };

    // 解析时间
    const formatTime = (time: string) => {
      const tempDate = time.split(' ');
      if (tempDate.length === 2) {
        const dates = tempDate[0].split('-');
        const tempTime = new Date();
        const year = tempTime.getFullYear() - Number(dates[0]);
        const month = tempTime.getMonth() + 1 - Number(dates[1]);
        const day = tempTime.getDate() - Number(dates[2]);
        if (year === 0) {
          if (month === 0) {
            if (day === 0) {
              return `今天 ${time.slice(11, -3)}`;
            }
            if (day === 1) {
              return `昨天 ${time.slice(11, -3)}`;
            }
            if (day === 2) {
              return `前天 ${time.slice(11, -3)}`;
            }
          }
          return time.slice(5, -3);
        }
        return time.slice(0, -3);
      }
    };

    // 绘制列表项
    const renderListItem = (item: IData) => {
      return (
        <div class={ns.e('item')}>
          <div class={ns.em('item', 'header')}>
            {renderAvatar(item.create_man)}
            <span class={ns.em('item', 'time')}>
              {formatTime(item.create_time)}
            </span>
            {item.create_man === c.context.srfuserid ? (
              <span
                class={ns.em('item', 'delicon')}
                onClick={() => deleteComment(item)}
              >
                <i class='fa fa-trash-o' aria-hidden='true'></i>
              </span>
            ) : null}
          </div>
          <div class={ns.em('item', 'content')}>{item.content}</div>
        </div>
      );
    };

    // 绘制列表
    const renderList = () => {
      return (
        <div class={ns.e('list')}>
          {items.value.map((item: IData) => {
            return renderListItem(item);
          })}
        </div>
      );
    };

    const stopClick = (event: MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();
    };

    onBeforeUnmount(() => {
      c.evt.off('addItem', handleAdd);
      c.evt.off('deleteItem', handleDelete);
    });

    return { ns, c, renderHeader, renderInput, renderList, stopClick };
  },
  render() {
    return (
      <div class={this.ns.b()} onClick={this.stopClick}>
        {this.renderHeader()}
        {this.renderInput()}
        {this.renderList()}
      </div>
    );
  },
});
