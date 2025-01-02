/* eslint-disable prefer-destructuring */
/* eslint-disable default-case */
/* eslint-disable no-plusplus */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  PropType,
  Ref,
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { EventBase, IModal, IModalData } from '@ibiz-template/runtime';
import { debounce } from 'lodash-es';
import { NOOP, listenJSEvent } from '@ibiz-template/core';
import { MenTionController } from '../../mention';
import { HtmlUtil } from '../../utils';
import './mention.scss';

export const MenTion = defineComponent({
  name: 'MenTion',
  props: {
    controller: {
      type: Object as PropType<MenTionController>,
      required: true,
    },
    modal: { type: Object as PropType<IModal> },
  },
  setup(props) {
    const ns = useNamespace('mention');
    const c = props.controller;
    const loading: Ref<boolean> = ref(false);
    const items: Ref<IData[]> = ref([]);

    let cleanup = NOOP;

    const curUser: Ref<IData> = ref({});

    const total = ref(0);

    const curText = ref('');

    const errorLoadItems: Ref<string[]> = ref([]);

    const handleChange = (event: EventBase) => {
      const { eventArg } = event;
      if (eventArg) {
        // 第一次打开时进行存储，用于关闭时判断
        if (!curText.value) {
          curText.value = eventArg;
        }
        // 删除@时隐藏气泡
        if (curText.value.length > eventArg.length && c.overlay && c.execting) {
          curText.value = '';
          c.overlay.dismiss();
        }
        const values = eventArg.match(/(?<=\@)([^\@&^{]*?)(?=\<)/g) || [];
        if (c.execting) {
          if (values.length === 0) {
            curText.value = '';
            c.overlay!.dismiss();
          }
          c.query = values.pop() || '';
          // 输入空格隐藏气泡
          if (c.query && /\s$/.test(c.query)) {
            curText.value = '';
            c.overlay!.dismiss();
          } else if (c.query) {
            refresh({ isInitialLoad: true });
          }
        }
      } else if (c.overlay && c.execting) {
        curText.value = '';
        c.overlay.dismiss();
      }
    };

    const registerEditorEvt = () => {
      if (c.evt) {
        c.evt.on('onChange', handleChange);
      }
    };

    const load = (args: IData = {}) => {
      loading.value = true;
      c.getUsers(args)
        .then((response: IData) => {
          if (response.status !== 200 || !response.data) {
            loading.value = false;
          }
          if (response.headers['x-total']) {
            total.value = Number(response.headers['x-total']);
          }
          const isLoadMore = args.isLoadMore === true;
          if (isLoadMore) {
            items.value.push(...c.toUIData(response.data));
          } else {
            items.value = c.toUIData(response.data);
            if (items.value.length > 0) {
              curUser.value = items.value[0];
            }
          }
          loading.value = false;
        })
        .catch(() => {
          loading.value = false;
        });
    };

    const loadMore = () => {
      load({ isLoadMore: true });
    };

    // 是否可以加载更多
    const isLodeMoreDisabled = computed(() => {
      return (
        items.value.length >= total.value ||
        loading.value ||
        total.value <= c.size
      );
    });

    const refresh = debounce(load, 300, { leading: true });

    registerEditorEvt();
    load({ isInitialLoad: true });

    const setSelection = (type: 'up' | 'down' | 'enter') => {
      let index = items.value.findIndex(x => x.id === curUser.value.id);
      switch (type) {
        case 'up':
          index--;
          if (index === -1 || index === -2) {
            index = items.value.length - 1;
          }
          curUser.value = items.value[index];
          break;
        case 'down':
          index++;
          if (index === items.value.length) {
            index = 0;
          }
          curUser.value = items.value[index];
          break;
        case 'enter':
          if (items.value.length > 0) {
            onUserSelect(curUser.value);
          } else {
            curText.value = '';
            props.modal?.dismiss({ ok: false, data: [] });
          }
          break;
      }
    };

    const onUserSelect = (user: IData) => {
      if (props.modal) {
        const modalData: IModalData = { ok: true, data: [user] };
        curText.value = '';
        props.modal?.dismiss(modalData);
      }
    };

    const getAvatarDownloadUrl = (avatarUrl: string) => {
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
        c.editorParams,
      );
      const url = downloadUrl.replace('%fileId%', urlConfig[0].id);
      return url;
    };

    const avatarLoadError = (url: string) => {
      errorLoadItems.value.push(url);
    };

    const renderItem = (user: IData) => {
      const usertext: string = user.name;
      const avatarBg = HtmlUtil.stringToHexColor(usertext);
      const avatarName = HtmlUtil.avatarName(usertext);
      const userTitle: string = user.title;
      let url = '';
      if (c.operatorMap.has(user.id)) {
        const operator = c.operatorMap.get(user.id);
        if (operator.data.iconurl) {
          url = getAvatarDownloadUrl(operator.data.iconurl) || '';
        }
      }
      return (
        <div
          class={[ns.e('item'), ns.is('active', user.id === curUser.value.id)]}
          onClick={() => onUserSelect(user)}
        >
          <div class={ns.e('avatar')} style={`background: ${avatarBg};`}>
            {url && !errorLoadItems.value.includes(url) ? (
              <img src={url} onError={() => avatarLoadError(url)} />
            ) : (
              avatarName
            )}
          </div>
          <div class={ns.e('name')} title={usertext}>
            {usertext}
          </div>
          {userTitle && <div class={ns.e('title-label')}>{userTitle}</div>}
        </div>
      );
    };

    onMounted(() => {
      cleanup = listenJSEvent(window, 'keyup', event => {
        // 向下选择
        if (event.keyCode === 40) {
          setSelection('down');
          // 向上选择
        } else if (event.keyCode === 38) {
          setSelection('up');
        } else if (event.keyCode === 13) {
          setSelection('enter');
        }
      });
    });

    // 组件销毁前销毁监听
    onBeforeUnmount(() => {
      if (cleanup !== NOOP) {
        cleanup();
      }
      c.evt.off('onChange', handleChange);
    });

    return { ns, items, loading, isLodeMoreDisabled, renderItem, loadMore };
  },
  render() {
    return (
      <div
        v-infinite-scroll={() => this.loadMore()}
        infinite-scroll-distance={10}
        infinite-scroll-disabled={this.isLodeMoreDisabled}
        infinite-scroll-immediate={false}
        v-loading={this.loading}
        class={this.ns.b()}
      >
        {this.items.map((user: IData) => {
          return this.renderItem(user);
        })}
        {this.items.length === 0 && (
          <iBizNoData text={'暂无用户数据'}></iBizNoData>
        )}
      </div>
    );
  },
});
