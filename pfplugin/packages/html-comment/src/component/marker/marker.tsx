/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable default-case */
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
import { MarkerController } from '../../marker';
import './marker.scss';

export const Marker = defineComponent({
  name: 'Marker',
  props: {
    controller: {
      type: Object as PropType<MarkerController>,
      required: true,
    },
    modal: { type: Object as PropType<IModal> },
  },
  setup(props) {
    const ns = useNamespace('marker');
    const c = props.controller;
    const loading: Ref<boolean> = ref(false);
    const items: Ref<IData[]> = ref([]);

    let cleanup = NOOP;

    const curItem: Ref<IData> = ref({});

    const total = ref(0);

    const handleChange = (event: EventBase) => {
      const { eventArg } = event;
      if (eventArg) {
        // 删除#时隐藏气泡
        if (!eventArg.includes('#') && c.overlay && c.execting) {
          c.overlay.dismiss();
        }
        const regex = /<svg((.|[\t\r\f\n\s])+?)<\/svg>/g;
        const value = eventArg.replace(regex, '');
        const values = value.match(/(?<=\#)([^\#&^{]*?)(?=\<)/g) || [];
        if (c.execting) {
          if (values.length === 0) {
            c.overlay!.dismiss();
          }
          c.query = values.pop() || '';
          // 输入空格隐藏气泡
          if (c.query && /\s$/.test(c.query)) {
            c.overlay!.dismiss();
          } else if (c.query) {
            refresh({ isInitialLoad: true });
          }
        }
      } else if (c.overlay && c.execting) {
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
      c.load(args)
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
              curItem.value = items.value[0];
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
      let index = items.value.findIndex(x => x.id === curItem.value.id);
      switch (type) {
        case 'up':
          index--;
          if (index === -1 || index === -2) {
            index = items.value.length - 1;
          }
          curItem.value = items.value[index];
          break;
        case 'down':
          index++;
          if (index === items.value.length) {
            index = 0;
          }
          curItem.value = items.value[index];
          break;
        case 'enter':
          onSelect(curItem.value);
          break;
      }
    };

    const onSelect = (user: IData) => {
      if (props.modal) {
        const modalData: IModalData = { ok: true, data: [user] };
        props.modal?.dismiss(modalData);
      }
    };

    const renderContent = (type: string, value: string) => {
      if (c.quoteCodelistMap.has(type)) {
        const item = c.quoteCodelistMap.get(type)!;
        return (
          <iBizCodeList
            codeListItems={item.codeListItems}
            codeList={item.codeList}
            value={value}
          ></iBizCodeList>
        );
      }
      return value;
    };

    const renderItem = (item: IData) => {
      return (
        <div
          class={[ns.e('item'), ns.is('active', item.id === curItem.value.id)]}
          onClick={() => onSelect(item)}
        >
          <div class={ns.e('type')}>{renderContent('type', item.type)}</div>
          <div class={ns.e('identifier')}>
            {renderContent('identifier', item.identifier)}
          </div>
          <div class={ns.e('name')} title={item.name}>
            {renderContent('name', item.name)}
          </div>
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
          <iBizNoData text={'暂未用户数据'}></iBizNoData>
        )}
      </div>
    );
  },
});
