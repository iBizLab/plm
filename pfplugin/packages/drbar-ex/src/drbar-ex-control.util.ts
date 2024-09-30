import { Ref, onUnmounted, ref, watch, watchEffect, computed } from 'vue';
import { defaultNamespace } from '@ibiz-template/core/out/utils/namespace/namespace';
import { IDRBarItemsState } from '@ibiz-template/runtime';
import { DRBarExController } from './drbar-ex.controller';

export function useAppDrBar(
  c: DRBarExController,
  controlRef: Ref<IData | undefined>,
  counterData: IData,
): {
  visibleItems: Ref<IData>;
  moreItems: Ref<IData>;
} {
  // 浏览器ResizeObserver对象
  let resizeObserver: ResizeObserver | null = null;

  // 上次宽度
  let lastControlWidth = 0;
  const visibleItems = ref<IData[]>([]);
  const moreItems = ref<IData[]>([]);
  // 激活项
  const activatedTab = computed(() => {
    return c.state.drBarItems.find(
      (tab: IDRBarItemsState) => tab.tag === c.state.defaultItem,
    );
  });

  // 创建模拟元素并计算宽度
  const calcDomWidth = (text: string, style = {}): number => {
    let domWidth = 0;
    const dom = document.createElement('div');
    const sonDom = document.createElement('div');
    // 设置innerHtml
    sonDom.innerHTML = text;
    Object.assign(sonDom.style, style);
    Object.assign(dom.style, {
      width: 'auto',
      position: 'absolute',
      left: '-9999px',
    });
    dom.appendChild(sonDom);
    document.body.appendChild(dom);
    // 获取模拟tab元素的总宽度（包括padding）
    domWidth = dom.offsetWidth;
    document.body.removeChild(dom);
    return domWidth;
  };

  // 方法：更新可见和隐藏的项目
  const updateVisibleItems = (): void => {
    const { drBarItems, showMore, defaultItem } = c.state;

    if (!controlRef.value || !showMore || drBarItems.length === 0) {
      visibleItems.value = drBarItems;
      moreItems.value = [];
      return;
    }

    // 是否激活为显示的分组项
    let isActiveVisible = false;

    // 容器实例
    const totalDom = controlRef.value.$el;
    // 拿到容器总宽度
    const totalWidth = totalDom.offsetWidth;
    // 初始化累计宽度
    let accumulatedWidth = 0;

    // 遍历总数据进行自增加上以上值，当值大于总宽度时获取index下标，以此下标截取
    visibleItems.value = [];
    moreItems.value = [];
    drBarItems.forEach((tab: IData, index: number) => {
      if (tab.visible) {
        // 文字值
        const caption = tab.caption || '';
        // 计数器
        const counterNum = tab.counterId ? counterData[tab.counterId] : null;
        const fontSize = `var(--${defaultNamespace}-font-size-header-6)`;

        // 获取计数器元素宽度
        if (
          counterNum != null &&
          !(!counterNum && counterNum !== 0) &&
          !(tab.counterMode === 1 && counterNum <= 0)
        ) {
          const counterStyle = {
            marginLeft: `var(--${defaultNamespace}-spacing-tight)`,
            padding: `0 var(--${defaultNamespace}-spacing-extra-tight)`,
            minWidth: '20px',
            fontSize: `var(--${defaultNamespace}-font-size-small)`,
          };
          const counterWidth = calcDomWidth(String(counterNum), counterStyle);
          accumulatedWidth += counterWidth;
        }

        // 获取tab宽度
        // 模拟设置元素样式
        const tabStyle = {
          padding: index === 0 ? `0 20px 0 0` : `0 20px`,
          fontSize,
        };
        const tabWidth = calcDomWidth(caption, tabStyle);
        accumulatedWidth += tabWidth;

        // 获取更多元素宽度
        const moreStyle = {
          padding: `0 0 0 20px`,
          fontSize,
        };
        let moreIconWidth = calcDomWidth('^', {
          minWidth: '16px',
          fontSize,
        });
        moreIconWidth = moreIconWidth > 16 ? moreIconWidth : 16;
        let moreText = '更多';
        if (!isActiveVisible && activatedTab.value) {
          moreText = activatedTab.value.caption || moreText;
        }
        const moreWidth =
          calcDomWidth(`${moreText} `, moreStyle) + moreIconWidth;
        // 当为最后一个并且累计宽度小于容器总宽度时
        if (index === drBarItems.length - 1 && accumulatedWidth < totalWidth) {
          visibleItems.value.push(tab);
        } else if (accumulatedWidth + moreWidth > totalWidth) {
          // 检查是否超过总宽度
          // 获取超过总宽度值
          moreItems.value.push(tab);
        } else {
          // 如果没有超过总宽度，所有项都可见
          visibleItems.value.push(tab);

          // 判断选中项是否为显示的分组项
          if (!isActiveVisible) {
            isActiveVisible = tab.tag === defaultItem;
          }
        }
      }
    });
  };

  const calcDrBarWidth = (): void => {
    if (window.ResizeObserver) {
      const dom = controlRef.value!.$el;
      if (dom) {
        // 监听宽度变化动态重新计算显示值
        resizeObserver = new ResizeObserver(entries => {
          const { width } = entries[0].contentRect;
          if (width !== lastControlWidth) {
            updateVisibleItems();
            lastControlWidth = width;
          }
        });
        resizeObserver.observe(dom);
      }
    }
  };

  // 监听 drBarItems 的变化
  watch(
    () => c.state.drBarItems,
    () => {
      updateVisibleItems();
    },
    { deep: true },
  );

  // 监听激活项变化
  watch(
    () => c.state.defaultItem,
    () => {
      updateVisibleItems();
    },
  );

  const stop = watchEffect(() => {
    if (controlRef.value) {
      calcDrBarWidth();
    }
  });

  onUnmounted(() => {
    if (resizeObserver) {
      resizeObserver.disconnect();
    }
    stop();
  });
  return { visibleItems, moreItems };
}
