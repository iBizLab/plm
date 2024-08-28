/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  getNestedRoutePath,
  route2routePath,
  useControlController,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { defineComponent, PropType, reactive, ref, watch } from 'vue';
import { IDEDRTab } from '@ibiz/model-core';
import { useRoute, useRouter } from 'vue-router';
import { IControlProvider, hasSubRoute } from '@ibiz-template/runtime';
import { TabExpSelectController } from './tab-exp-select.controller';
import './tab-exp-select.scss';
import { LeftArrowSvg } from './icons';

export const TabExpSelect = defineComponent({
  name: 'IBizTabExpSelect',
  props: {
    modelData: { type: Object as PropType<IDEDRTab>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
  },
  setup() {
    const c = useControlController(
      (...args) => new TabExpSelectController(...args),
    );
    const ns = useNamespace('tab-exp-select');
    const router = useRouter();
    const controlRef = ref();

    const secondaryShows = ref<IData>({});
    const topPropShow = ref(false);
    const showMap = reactive<IData>({});
    c.groupTabPages.forEach((item: IData) => {
      Object.assign(showMap, { [item.tag]: false });
    });

    c.setRouter(router);

    const handlePopoverHide = () => {
      c.groupTabPages.forEach((item: IData) => {
        Object.assign(showMap, { [item.tag]: false });
      });
    };

    const handleTabClick = (item: IData) => {
      handlePopoverHide();
      const time = setTimeout(() => {
        topPropShow.value = false;
        secondaryShows.value = {};
        const index = c.state.drTabPages.findIndex(
          (item2: IData) => item2.tag === item.tag,
        );
        if (index !== -1) {
          c.state.activeName = item.tag;
          c.handleTabChange();
        }
        clearTimeout(time);
      }, 100);
    };

    const route = useRoute();

    let expViewRoutePath = '';
    if (c.routeDepth) {
      expViewRoutePath = getNestedRoutePath(route, c.routeDepth);
    }

    // 子级显示
    const handleSecondaryShow = (item: IData) => {
      secondaryShows.value = item;
    };

    // 子级显示关闭
    const handleSecondaryHide = () => {
      secondaryShows.value = {};
    };

    // 判断子级是否显示
    const isSecondaryShow = (item: IData) => {
      return secondaryShows.value.tag && secondaryShows.value.tag === item.tag;
    };

    // 移入
    const handleMouseEnter = (item: IData) => {
      handlePopoverHide();
      showMap[item.tag] = true;
      showMap[item.pid] = true;
    };

    // 移出
    const handleMouseLeave = (item: IData) => {
      showMap[item.tag] = false;
      showMap[item.pid] = false;
    };

    watch(
      () => route.fullPath,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          const depth = c.routeDepth;
          if (depth) {
            const currentRoutePath = getNestedRoutePath(route, c.routeDepth);
            if (currentRoutePath === expViewRoutePath) {
              const routePath = route2routePath(route);
              const { srfnav } = routePath.pathNodes[depth! - 1];
              // 路由模式下，且有子路由的时候不需要navpos跳转路由，只要做呈现
              const isRoutePushed = !!c.routeDepth && hasSubRoute(c.routeDepth);
              if (
                srfnav &&
                c.state.activeName &&
                c.state.activeName !== srfnav
              ) {
                c.state.activeName = srfnav;

                c.handleTabChange(isRoutePushed);
              } else if (!srfnav) {
                // 路由模式下，且没有子路由的时候，需要触发tab变更还原分页
                const routeNoSub = !!c.routeDepth && !hasSubRoute(c.routeDepth);
                // 空的时候跳转默认分页
                const doTabChange =
                  c.state.activeName !== c.state.defaultName || routeNoSub;
                if (doTabChange) {
                  c.state.activeName = c.state.defaultName;
                  c.handleTabChange(isRoutePushed);
                }
              }
            }
          }
        }
      },
      { immediate: true },
    );

    const renderItem = (item: IData) => {
      const titleState = item.caption
        ? String(item.caption).length > 10
        : false;
      return (
        <div
          class={[
            ns.be('popper', 'item'),
            ns.is('activated', c.state.activeName === item.tag),
            ns.is('secondary-show', isSecondaryShow(item)),
          ]}
          onClick={() => handleTabClick(item)}
          onMouseenter={() => handleMouseEnter(item)}
          onMouseleave={() => handleMouseLeave(item)}
        >
          {item.sysImage && (
            <iBizIcon
              class={[ns.bem('popper', 'item', 'icon')]}
              icon={item.sysImage}
            />
          )}
          {item.caption && (
            <span
              title={titleState ? item.caption : ''}
              class={[ns.bem('popper', 'item', 'caption')]}
            >
              {item.caption}
            </span>
          )}
          {item.children && (
            <span class={[ns.bem('popper', 'item', 'left-arrow')]}>
              {LeftArrowSvg()}
            </span>
          )}
        </div>
      );
    };

    const renderGroup = (item: IData) => {
      return (
        <el-popover
          trigger='hover'
          offset={0}
          popper-class={[ns.b('popper'), ns.b('secondary-popper')]}
          placement='right-start'
          hide-after={0}
          v-model:visible={showMap[item.tag]}
          onShow={() => handleSecondaryShow(item)}
          onHide={() => handleSecondaryHide()}
        >
          {{
            reference: () => renderItem(item),
            default: () => {
              return (
                <div
                  class={[
                    ns.be('popper', 'content'),
                    ns.be('popper', 'secondary-popper'),
                  ]}
                >
                  {item.children.map((item2: IData) => {
                    if (item2.children) {
                      return renderGroup(item2);
                    }
                    return renderItem(item2);
                  })}
                </div>
              );
            },
          }}
        </el-popover>
      );
    };

    const renderContent = () => {
      return (
        <el-popover
          trigger='click'
          placement='bottom-start'
          v-model:visible={topPropShow.value}
          popper-class={ns.b('popper')}
          onHide={() => handlePopoverHide()}
        >
          {{
            reference: () => (
              <div
                class={ns.b('content')}
                onClick={() => topPropShow.value === true}
              >
                <span class={ns.be('content', 'hashtag')}>#</span>
                <span class={ns.be('content', 'caption')}>维度</span>
              </div>
            ),
            default: () => {
              return (
                <div class={ns.be('popper', 'content')}>
                  {c.groupTabPages.map((item: IData) => {
                    if (item.children) {
                      return renderGroup(item);
                    }
                    return renderItem(item);
                  })}
                </div>
              );
            },
          }}
        </el-popover>
      );
    };

    return {
      c,
      ns,
      controlRef,
      renderContent,
    };
  },
  render() {
    return (
      <iBizControlBase
        ref='controlRef'
        controller={this.c}
        class={[this.ns.b()]}
      >
        {this.renderContent()}
      </iBizControlBase>
    );
  },
});
