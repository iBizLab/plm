/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  ref,
  watch,
  Ref,
  defineComponent,
  computed,
  VNode,
  onActivated,
  onMounted,
  onBeforeUnmount,
} from 'vue';
import {
  getDataPickerProps,
  getEditorEmits,
  getNestedRoutePath,
  renderString,
  route2routePath,
  routePath2string,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { useRoute, useRouter } from 'vue-router';
import {
  IAppRedirectView,
  ILayoutPanel,
  IUIActionGroupDetail,
} from '@ibiz/model-core';
import { openRedirectView } from '@ibiz-template/runtime';
import { IBizContext, listenJSEvent, NOOP } from '@ibiz-template/core';
import { isUndefined } from 'lodash-es';
import { RoutePickerController } from './route-picker.controller';
import './route-picker.scss';

export const RoutePicker = defineComponent({
  name: 'RoutePicker',
  props: getDataPickerProps<RoutePickerController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('route-picker');

    const c = props.controller!;

    const route = useRoute();
    const router = useRouter();
    // 当前值
    const curValue: Ref<Array<string> | string | null> = ref('');

    // 当前选中
    const curSelect: Ref<IData> = ref({});

    // dropDown
    const dropDown: Ref<IData> = ref({});

    // 实体数据集
    const items: Ref<IData[]> = ref([]);

    const query: Ref<string> = ref('');

    let curPath: string = '';

    let visible: boolean = false;
    const setCurSelect = () => {
      curSelect.value =
        items.value.find(x => x[c.textName] === curValue.value) || {};
    };

    const popper = computed(() => {
      return dropDown.value?.popperRef?.popperRef?.contentRef;
    });

    watch(
      () => props.value,
      newVal => {
        if (newVal || newVal === null) {
          curValue.value = newVal as string;
          if (newVal === null) {
            curValue.value = '';
          }
        }
        setCurSelect();
        (ibiz.util as IParams)?.setBrowserTitle(curValue.value as string);
      },
      { immediate: true },
    );

    const setScrollToOption = (timeout: number = 0) => {
      if (popper.value) {
        const container = popper.value.querySelector(
          '.ibiz-route-picker__dropdown-list',
        );
        const index = items.value.findIndex(
          x => x[c.keyName] === curSelect.value[c.keyName],
        );
        if (container && index > -1) {
          setTimeout(() => {
            const height = container.offsetHeight;
            const limit = Math.floor(height / 38);
            // 超过第一页的才出滚动条
            if (index + 1 > limit) {
              // eslint-disable-next-line prettier/prettier
              container.scrollTop = 38 * (index + 1 - limit);
            } else {
              container.scrollTop = 0;
            }
          }, timeout);
        }
      }
    };

    watch(
      () => curSelect.value,
      () => {
        setScrollToOption();
      },
    );

    /**
     * 处理直接隐藏气泡 将气泡关闭逻辑重置 由此插件逻辑调用关闭
     */
    const handleHide = () => {
      // 调用dropDown实例中的close事件会延迟销毁，导致气泡定位到页面其它位置，并且闪烁关闭
      if (dropDown.value && dropDown.value?.popperRef) {
        dropDown.value?.popperRef?.hide();
      }
    };

    /**
     * 当输入数据为空时，重新加载所有数据
     */
    const onInput = () => {
      if (!query.value) {
        onSearch(query.value);
      }
    };

    const onKeyup = (event: IParams) => {
      // 阻止搜索框按enter键冒泡，防止气泡关闭
      if (event.keyCode === 13) {
        event.stopPropagation();
        event.preventDefault();
        onSearch(query.value);
      }
      // 适配上下上下键选中项后按enter键无效
      if (event?.keyCode === 38 || event?.keyCode === 40) {
        event.target?.blur();
      }
    };

    /**
     * 下拉选实例键盘事件
     */
    const onKeydown = (event: IParams) => {
      // 监听enter、space事件，防止该组件在hover移入下拉项后按下按键直接关闭气泡
      if (event.keyCode === 13 || event.keyCode === 32) {
        event.stopPropagation();
        event.preventDefault();
      }
    };
    let cleanup = NOOP;
    onMounted(() => {
      const path = getNestedRoutePath(route, c.routeDepth);
      curPath = path.substring(0, path.lastIndexOf('/'));
      cleanup = listenJSEvent(window, 'keyup', event => {
        if (visible) {
          // esc 退出
          if (event.keyCode === 27) {
            handleHide();
          }
          if (event.keyCode === 40) {
            setSelection('down');
          } else if (event.keyCode === 38) {
            setSelection('up');
          } else if (event.keyCode === 13) {
            setSelection('enter');
          }
        }
      });

      // 清空下拉选实例监听的键盘事件 enter、space、down
      if (dropDown.value) {
        dropDown.value.triggerKeys = [];
      }
      if (popper.value) {
        popper.value.addEventListener('keydown', onKeydown, true);
      }
    });

    // 组件销毁前销毁监听
    onBeforeUnmount(() => {
      if (cleanup !== NOOP) {
        cleanup();
      }
      if (popper.value) {
        popper.value.removeEventListener('keydown', onKeydown);
      }
    });

    const setSelection = (type: 'up' | 'down' | 'enter') => {
      let index = items.value.findIndex(
        x => x[c.keyName] === curSelect.value[c.keyName],
      );
      switch (type) {
        case 'up':
          index--;
          if (index === -1 || index === -2) {
            index = items.value.length - 1;
          }
          curSelect.value = items.value[index];
          break;
        case 'down':
          index++;
          if (index === items.value.length) {
            index = 0;
          }
          curSelect.value = items.value[index];
          break;
        case 'enter':
          onACSelect(curSelect.value, false);
          break;
        default:
          break;
      }
    };

    const skipRoute = async (data: IData, isCache: boolean = false) => {
      const id = data[c.keyName];
      const routeId = await c.getRouteKey(route, items.value);
      if (routeId === id) {
        return;
      }
      let path = route.fullPath;
      if (c.valueMode && c.valueMode === 'ROUTECHANGE') {
        if (c.RedirectViewModel) {
          const fullViewModel = await ibiz.hub.getAppView(
            c.RedirectViewModel.refAppViewId,
          );
          const parentContext: IContext = {
            srfsessionid: c.context.srfsessionid,
            srfappid: c.context.srfappid,
          };
          Object.keys(c.context).forEach(key => {
            if (key !== 'srfreadonly') {
              parentContext[key] = c.context[key];
            }
          });
          const tempContext = IBizContext.create(
            { [c.routeKey]: id },
            parentContext,
          );
          return openRedirectView(
            fullViewModel as IAppRedirectView,
            tempContext,
            c.params,
            {},
          );
        }
        const routePath = route2routePath(route);
        (routePath.pathNodes[c.routeDepth - 2] as IData).context[c.routeKey] =
          id;
        routePath.pathNodes.splice(c.routeDepth);
        if (
          routePath.pathNodes[c.routeDepth - 1] &&
          routePath.pathNodes[c.routeDepth - 1].srfnav
        ) {
          delete routePath.pathNodes[c.routeDepth - 1].srfnav;
        }
        path = routePath2string(routePath);
      } else {
        const routePath = route2routePath(route);
        const pathNode = routePath.pathNodes[c.routeDepth - 1] as IData;
        if (isUndefined(pathNode.context)) {
          Object.assign(routePath.pathNodes[c.routeDepth - 1], {
            context: IBizContext.create(),
          });
        }
        (routePath.pathNodes[c.routeDepth - 1] as IData).context[c.routeKey] =
          id;
        path = routePath2string(routePath);
      }
      if (isCache) {
        router.replace({ path });
      } else {
        ibiz.openView.push(path);
      }
    };

    const setCache = (data: IData) => {
      if (c.enableCache) {
        localStorage.setItem(
          `routePick-${c.context.srfuserid}-${curPath}`,
          data.id || data.srfkey,
        );
      }
    };

    const getCache = () => {
      if (c.enableCache) {
        const id = localStorage.getItem(
          `routePick-${c.context.srfuserid}-${curPath}`,
        );
        return items.value.find(item => item.id === id || item.srfkey === id);
      }
    };

    // 处理选中数据后的处理逻辑
    const onACSelect = async (
      data: IData,
      isInitialLoad: boolean,
      isCache: boolean = false,
    ) => {
      // 关闭气泡
      handleHide();

      // 处理回填数据
      const dataItems = await c.calcFillDataItems(data);
      if (dataItems.length) {
        dataItems.forEach((dataItem: IData) => {
          emit('change', dataItem.value, dataItem.id);
        });
      }
      // 处理值项和本身的值
      const item: IData = {};
      Object.assign(item, data);
      Object.assign(item, {
        [c.keyName]: item[c.keyName] ? item[c.keyName] : item.srfkey,
        [c.textName]: item[c.textName] ? item[c.textName] : item.srfmajortext,
      });
      emit('change', data[c.textName]);
      setCache(data);
      // 上下文变化且初始化时不做路由跳转
      if (isInitialLoad && c.valueMode && c.valueMode === 'CONTEXTCHANGE') {
        return;
      }
      skipRoute(data, isCache);
    };

    // 搜索
    const onSearch = async (value: string, cb?: (_items: IData[]) => void) => {
      if (c.model.appDataEntityId) {
        let trimQuery = '';
        if (value !== props.value) {
          trimQuery = value.trim();
        }
        const res = await c.getServiceData(trimQuery, props.data);
        if (res) {
          items.value = res.data as IData[];
          if (cb && cb instanceof Function) {
            cb(items.value);
          }
        }
      }
    };

    const valueText = computed(() => {
      return renderString(curValue.value);
    });

    watch(
      valueText,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          emit('infoTextChange', newVal);
        }
      },
      { immediate: true },
    );

    const setDefaultSelect = async () => {
      const res = await c.getServiceData('', props.data);
      if (res) {
        items.value = res.data as IData[];
        const id = await c.getRouteKey(route, items.value, true);
        const item = items.value.find(_item => _item[c.keyName] === id);
        const cache = getCache();
        if (cache) {
          onACSelect(cache, false, true);
        } else if (item) {
          onACSelect(item, true);
        }
      }
    };

    if (c.enableCache) {
      setDefaultSelect();
    }

    c.currentView.evt.on('onMounted', () => {
      if (!c.enableCache) {
        setDefaultSelect();
      }
    });

    // 激活
    onActivated(async () => {
      const id = await c.getRouteKey(route, items.value, true);
      const item = items.value.find(_item => _item[c.keyName] === id);
      if (item) {
        onACSelect(item, false);
      }
    });

    const onVisibleChange = (state: boolean) => {
      visible = state;
      if (visible) {
        onSearch('');
        setScrollToOption(300);
      } else {
        query.value = '';
        setCurSelect();
      }
    };

    const onCommand = (command: IData) => {
      onACSelect(command, false);
    };

    const dropDownClick = () => {
      if (!dropDown.value) return;
      dropDown.value.handleClose();
    };

    const renderGroupAction = () => {
      const { uiactionGroup } = c.model;
      if (uiactionGroup) {
        return (
          <div class={ns.e('group-action')}>
            <iBizActionToolbar
              class={ns.be('group', 'header-actions')}
              actionDetails={uiactionGroup.uiactionGroupDetails}
              actions-state={c.groupActionState}
              onActionClick={(
                detail: IUIActionGroupDetail,
                event: MouseEvent,
              ) => {
                c.onActionClick(detail, event);
                dropDownClick();
              }}
            ></iBizActionToolbar>
          </div>
        );
      }
    };

    // 绘制项布局面板
    const renderPanelItemLayout = (
      item: IData,
      modelData: ILayoutPanel,
    ): VNode => {
      const { context, params } = c;
      return (
        <iBizControlShell
          data={item}
          modelData={modelData}
          context={context}
          params={params}
        ></iBizControlShell>
      );
    };
    return {
      ns,
      c,
      dropDown,
      curValue,
      curSelect,
      valueText,
      items,
      query,
      onACSelect,
      onSearch,
      onKeyup,
      onInput,
      onVisibleChange,
      onCommand,
      renderGroupAction,
      renderPanelItemLayout,
    };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.ns.m('route'),
          this.disabled ? this.ns.m('disabled') : '',
        ]}
      >
        <div class={[this.ns.e('dropdown')]}>
          <el-dropdown
            trigger='click'
            ref='dropDown'
            popper-class={this.ns.em('dropdown', 'transfer')}
            onVisibleChange={this.onVisibleChange}
            onCommand={this.onCommand}
          >
            {{
              default: (): VNode => (
                <div>
                  <span
                    class={this.ns.em('dropdown', 'cur-text')}
                    title={(this.curValue as string) || ''}
                  >
                    {this.curValue}
                  </span>
                  <ion-icon name={this.c.suffix}></ion-icon>
                </div>
              ),
              dropdown: (): VNode => (
                <div>
                  {this.c.enablesearch && (
                    <el-input
                      v-model={this.query}
                      placeholder='搜索'
                      onKeyup={this.onKeyup}
                      onInput={this.onInput}
                    />
                  )}
                  <div class={this.ns.e('dropdown-list')}>
                    {this.items?.length > 0 ? (
                      this.items.map((item: IData) => {
                        return (
                          <el-dropdown-item
                            class={[
                              this.ns.e('dropdown-item'),
                              this.ns.is(
                                'active',
                                item[this.c.textName] === this.curValue,
                              ),
                              this.ns.is(
                                'hover',
                                item[this.c.keyName] ===
                                  this.curSelect[this.c.keyName],
                              ),
                            ]}
                            id={item[this.c.keyName]}
                            title={item[this.c.textName]}
                            command={item}
                          >
                            {this.c.itemLayoutPanel ? (
                              this.renderPanelItemLayout(
                                item,
                                this.c.itemLayoutPanel,
                              )
                            ) : (
                              <span class={this.ns.em('dropdown-item', 'text')}>
                                {item[this.c.textName]}
                              </span>
                            )}
                          </el-dropdown-item>
                        );
                      })
                    ) : (
                      <el-dropdown-item class={this.ns.e('no-data')}>
                        <iBizNoData text={'暂无数据'}></iBizNoData>
                      </el-dropdown-item>
                    )}
                  </div>
                  {this.renderGroupAction()}
                </div>
              ),
            }}
          </el-dropdown>
        </div>
      </div>
    );
  },
});
