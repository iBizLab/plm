import { PropType, defineComponent, computed, ref } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './insert-item-list.scss';

const searchByAlias = (term: string, insertItem: IData): string => {
  return insertItem.text.toLowerCase().includes(term);
};

export const InsertItemList = defineComponent({
  name: 'IBizInsertItemList',
  props: {
    data: {
      type: Object as PropType<IData>,
      required: true,
    },
    filter: {
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
    const ns = useNamespace('insert-item-list');
    const InsertItemsRef = ref<IData>({});

    // 用于获取所有的表情种类
    const categories = computed(() => {
      return Object.keys(props.data);
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
    const onSelect = (insertItem: IData): void => {
      emit('select', insertItem);
    };

    const renderInsertItem = (item: IData): JSX.Element => {
      const { icon, text } = item;
      return (
        <div class={[ns.e('insert-item')]} onClick={() => onSelect(item)}>
          {icon ? (
            <div class={ns.em('insert-item', 'icon')} v-html={icon}></div>
          ) : (
            ''
          )}
          <div class={ns.em('insert-item', 'text')}>{text}</div>
        </div>
      );
    };

    // 绘制表格展示表情包
    const renderListInsertItems = (params: IData): JSX.Element | string => {
      const { insertSelect, style } = params;
      return insertSelect && insertSelect.length > 0 ? (
        <div class={[ns.e('list-insert-items')]} style={style}>
          {insertSelect.map((insertItem: IData) => {
            return renderInsertItem(insertItem);
          })}
        </div>
      ) : (
        ''
      );
    };

    return {
      ns,
      InsertItemsRef,
      dataFilteredByCategory,
      onSelect,
      renderListInsertItems,
    };
  },
  render() {
    return (
      <div class={[this.ns.b()]}>
        <div ref='InsertItemsRef' class={[this.ns.e('container')]}>
          {Object.keys(this.dataFilteredByCategory).map(
            (categoryName: string) => {
              const category = this.dataFilteredByCategory[categoryName];
              const categoriesItem = this.categories[categoryName];
              const labelName = categoriesItem
                ? categoriesItem.text
                : categoryName;
              return (
                <div>
                  {category.length ? (
                    <div class={this.ns.e('label')}>{labelName}</div>
                  ) : (
                    ''
                  )}
                  {this.renderListInsertItems({
                    insertSelect: category,
                  })}
                </div>
              );
            },
          )}
        </div>
      </div>
    );
  },
});
