import { PropType, defineComponent, computed, watch, ref } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { CategoryLabel } from '../category-label';
import { EmojiItem } from '../emoji-item';
import './emoji-list.scss';

const searchByAlias = (term: string, emoji: IData) => {
  const isRelevant = (alias: string) => alias.toLowerCase().includes(term);

  return emoji.aliases.some((alias: string) => isRelevant(alias));
};

export const EmojiList = defineComponent({
  name: 'IBizEmojiList',
  props: {
    data: {
      type: Object as PropType<IData>,
      required: true,
    },
    emojisByRow: {
      type: Number,
      required: true,
    },
    emojiWithBorder: {
      type: Boolean,
    },
    emojiSize: {
      type: Number,
    },
    filter: {
      type: String,
      default: '',
    },
    continuousList: {
      type: Boolean,
    },
    category: {
      type: String,
      default: '',
    },
    categories: {
      type: Object as PropType<IData>,
      required: true,
      default: () => {},
    },
    hasSearch: {
      type: Boolean,
    },
  },
  emits: ['select', 'data'],
  setup(props, { emit }) {
    const ns = useNamespace('emoji-list');
    const emojisRef = ref<IData>({});
    // 存储表情种类元素的Ref集合
    const categoryRefs = ref<IData>({});

    // 用于过滤表情数据
    const dataFiltered = computed(() => {
      // 从props中获取当前分类下的表情数据
      let data = props.data[props.category];
      const searchValue = props.filter.trim().toLowerCase();

      if (searchValue) {
        // 如果搜索值存在，过滤出匹配搜索值的表情
        data = data.filter((emoji: IData) => searchByAlias(searchValue, emoji));
      }

      return data;
    });

    // 用于获取所有的表情种类
    const categories = computed(() => {
      return Object.keys(props.data);
    });

    // 设置动态引用的函数，将对应的DOM元素引用存储到categoryRefs中
    const setCategoryRef = (categoryName: string, el: Element): void => {
      if (el) {
        categoryRefs.value[categoryName] = el;
      }
    };

    // 计算滚动条顶部的位置
    const calcScrollTop = () => {
      return props.hasSearch ? 88 : 44;
    };

    // 用于动态计算网格布局
    const gridDynamic = computed(() => {
      const percent = 100 / props.emojisByRow;
      return {
        gridTemplateColumns: `repeat(${props.emojisByRow}, ${percent}%)`,
      };
    });

    // 用于过滤每个分类下的表情数据
    const dataFilteredByCategory = computed(() => {
      const _data: IData = {};
      Object.assign(_data, props.data);
      const searchValue = props.filter.trim().toLowerCase();

      if (searchValue) {
        categories.value.forEach((category: string) => {
          _data[category] = props.data[category].filter((item: IData) =>
            searchByAlias(searchValue, item),
          );
        });
      }

      return _data;
    });

    // 当表情被选中时触发的函数
    const onSelect = (emoji: IData) => {
      emit('select', emoji);
    };

    watch(
      () => props.data,
      () => {
        // 将滚动条置为0
        emojisRef.value.$el.scrollTop = 0;
      },
    );

    watch(
      () => props.category,
      newValue => {
        if (props.continuousList) {
          const categoryEl = categoryRefs.value[newValue].$el;
          // 计算滚动条位置
          emojisRef.value.scrollTop = categoryEl.offsetTop - calcScrollTop();
        }
      },
    );

    // 绘制表格展示表情包
    const renderGridEmojis = (params: IData) => {
      const { emojis, style, size, withBorder } = params;
      return emojis && emojis.length > 0 ? (
        <div class={[ns.m('grid-emojis')]} style={style}>
          {emojis.map((emoji: IData) => {
            return (
              <EmojiItem
                emoji={emoji}
                size={size}
                withBorder={withBorder}
                onClick={() => onSelect(emoji)}
              />
            );
          })}
        </div>
      ) : (
        ''
      );
    };

    return {
      ns,
      emojisRef,
      gridDynamic,
      dataFiltered,
      dataFilteredByCategory,
      onSelect,
      setCategoryRef,
      renderGridEmojis,
    };
  },
  render() {
    return (
      <div class={[this.ns.b()]}>
        <div ref='emojisRef' class={[this.ns.e('container')]}>
          {this.continuousList
            ? Object.keys(this.dataFilteredByCategory).map(
                (categoryName: string) => {
                  const category = this.dataFilteredByCategory[categoryName];
                  const categoriesItem = this.categories[categoryName];
                  const labelName = categoriesItem
                    ? categoriesItem.text
                    : categoryName;
                  return (
                    <div>
                      {category.length ? (
                        <CategoryLabel
                          name={labelName}
                          ref={el =>
                            this.setCategoryRef(categoryName, el as Element)
                          }
                        />
                      ) : (
                        ''
                      )}
                      {this.renderGridEmojis({
                        emojis: category,
                        style: this.gridDynamic,
                        size: this.emojiSize!,
                        withBorder: this.emojiWithBorder,
                      })}
                    </div>
                  );
                },
              )
            : this.renderGridEmojis({
                emojis: this.dataFiltered || [],
                style: this.gridDynamic,
                size: this.emojiSize!,
                withBorder: this.emojiWithBorder,
              })}
        </div>
      </div>
    );
  },
});
