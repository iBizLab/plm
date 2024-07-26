import {
  PropType,
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { Emoji, ICategory, IEmoji } from './interface';
import { categoriesDefault, emojisDefault } from './icons';
import { Categories, EmojiList, InputSearch } from './components';
import './emoji-select.scss';

export const IBizEmojiSelect = defineComponent({
  name: 'IBizEmojiSelectEmojiTitle',
  props: {
    // 自定义表情符号数组，类型为IEmoji[]，必填项，默认值为emojisDefault
    customEmojis: {
      type: Array as PropType<IEmoji[]>,
      required: true,
      default: () => emojisDefault,
    },
    // 自定义分类数组，类型为ICategory[]，必填项，默认值为categoriesDefault
    customCategories: {
      type: Array as PropType<ICategory[]>,
      required: true,
      default: () => [],
    },
    // 频繁使用表情符号的数量限制
    limitFrequently: {
      type: Number,
      default: 15,
    },
    // 每行显示的表情符号数量
    emojisByRow: {
      type: Number,
      default: 8,
    },
    // 是否使用连续列表显示表情符号
    continuousList: {
      type: Boolean,
      default: false,
    },
    // 表情符号的大小
    emojiSize: {
      type: Number,
      default: 27,
    },
    // 表情符号是否带有边框
    emojiWithBorder: {
      type: Boolean,
      default: true,
    },
    // 是否显示搜索框
    showSearch: {
      type: Boolean,
      default: true,
    },
    // 是否显示分类
    showCategories: {
      type: Boolean,
      default: true,
    },
    // 是否使用深色模式
    dark: {
      type: Boolean,
      default: false,
    },
    // 初始选择的分类
    initialCategory: {
      type: String,
      default: 'peoples',
    },
    // 需要排除的分类数组
    exceptCategories: {
      type: Array as PropType<ICategory[]>,
      default: () => [],
    },
    // 需要排除的表情符号数组
    exceptEmojis: {
      type: Array as PropType<Emoji[]>,
      default: () => [],
    },
  },
  emits: ['select', 'changeCategory', 'customEmojis'],
  setup(props, { emit }) {
    const ns = useNamespace('emoji-select');
    // 存储自定义的表情数据
    const customEmojis = ref<IData[]>([]);
    // 存储自定义的表情分类数据
    const customCategories = ref<IData[]>([]);
    // 存储初始的分类名
    const initialCategory = ref('peoples');
    // 存储需要排除的分类数据
    const exceptCategories = ref<IData[]>([]);
    // 存储需要排除的表情数据
    const exceptEmojis = ref<IData[]>([]);
    // 存储频繁使用的表情索引
    const frequentlyEmojis = ref<number[]>([]);

    // 用于映射分类名到分类数据
    const mapCategories = ref<IData>({});
    // 用于映射表情到分类
    const mapEmojis = ref<IData>({});
    // 存储当前选中的分类名
    const currentCategory = ref('');
    currentCategory.value = initialCategory.value;
    // 用于存储搜索过滤的关键词
    const filterEmoji = ref('');
    // 获取所有分类的名称
    const categoriesNames = customCategories.value.map((c: IData) => c.name);
    // 如果初始分类不在提供的分类列表中，则将初始分类设置为第一个分类
    if (!categoriesNames.includes(initialCategory.value)) {
      initialCategory.value = categoriesNames[0];
    }

    // 搜索函数，用于过滤表情
    const onSearch = async (term: string) => {
      filterEmoji.value = term;
    };

    // 计算属性，用于过滤除排除分类外的所有分类
    const categoriesFiltered = computed(() => {
      return customCategories.value.filter(
        category => !exceptCategories.value.includes(category),
      );
    });

    // 映射分类数据到 mapCategories 对象
    const mapperCategories = (categories: IData[]) => {
      categories.forEach((category: IData) => {
        Object.assign(mapCategories.value, { [category.name]: category });
      });
    };

    // 映射特定分类下的表情数据到 mapEmojis 对象
    const mapperEmojisCategory = (emojis: IData[]) => {
      // 初始化 frequently（常用） 属性为一个空数组
      Object.assign(mapEmojis.value, { frequently: [] });

      // 过滤掉需要排除的表情，并映射到对应的分类下
      emojis
        .filter(emoji => !exceptEmojis.value.includes(emoji))
        .forEach(emoji => {
          const _category = emoji.category;

          if (!mapEmojis.value[_category]) {
            Object.assign(mapEmojis.value, { [_category]: [] });
          }
          mapEmojis.value[_category].push(emoji);
        });
    };

    // 恢复频繁使用的表情到 mapEmojis 的 frequently 属性中
    const restoreFrequentlyEmojis = async () => {
      // 获取频繁使用的表情索引
      const mapIndexEmojis: number[] = frequentlyEmojis.value || [];
      // 使用索引从 customEmojis 中获取对应的表情，并赋值给 frequently 属性
      Object.assign(mapEmojis.value, {
        frequently: mapIndexEmojis.map(
          (index: number) => customEmojis.value[index],
        ),
      });
    };

    // 保存频繁使用的表情的索引到 frequentlyEmojis 响应式引用中
    const saveFrequentlyEmojis = (emojis: IData[]) => {
      const mapIndexEmojis = emojis.map(emoji => {
        return customEmojis.value.indexOf(emoji);
      });
      frequentlyEmojis.value = mapIndexEmojis;
    };

    // 更新表情列表
    const updateFrequently = async (emoji: IData) => {
      const oldEmojis = mapEmojis.value.frequently;
      const emojis = [...new Set([emoji, ...oldEmojis])];

      mapEmojis.value.frequently = emojis.slice(0, props.limitFrequently);

      saveFrequentlyEmojis(emojis);
    };

    // 切换分类
    const changeCategory = async (category: IData) => {
      const hasEmojis = mapEmojis.value[category.name].length;
      currentCategory.value = category.name;

      if (hasEmojis) {
        emit('changeCategory', category);
      }
    };

    // 选中表情
    const onSelectEmoji = async (emoji: IData) => {
      await updateFrequently(emoji);
      emit('select', emoji);
    };

    watch(
      () => props.customEmojis,
      newEmojis => {
        customEmojis.value = props.customEmojis;
        if (newEmojis && newEmojis.length) {
          mapEmojis.value = {};
          mapperEmojisCategory(newEmojis);
        }
      },
      { immediate: true, deep: true },
    );

    watch(
      () => props.customCategories,
      newCategories => {
        if (newCategories && newCategories.length > 0) {
          customCategories.value = newCategories;
        } else {
          customCategories.value = categoriesDefault();
        }
        mapperCategories(customCategories.value);
      },
      { immediate: true, deep: true },
    );

    watch(
      () => props.initialCategory,
      () => {
        initialCategory.value = props.initialCategory;
      },
    );

    watch(
      () => props.exceptCategories,
      () => {
        exceptCategories.value = props.exceptCategories;
      },
    );

    watch(
      () => props.exceptEmojis,
      () => {
        exceptEmojis.value = props.exceptEmojis;
      },
    );

    onMounted(() => {
      mapperEmojisCategory(customEmojis.value);
      restoreFrequentlyEmojis();
    });

    onUnmounted(() => {
      mapEmojis.value = {};
      frequentlyEmojis.value = [];
    });

    return {
      ns,
      mapEmojis,
      filterEmoji,
      mapCategories,
      currentCategory,
      categoriesFiltered,
      onSearch,
      onSelectEmoji,
      changeCategory,
    };
  },
  render() {
    return (
      <div class={[this.ns.b(), this.ns.is('dark', this.dark)]}>
        {this.showCategories && (
          <Categories
            categories={this.categoriesFiltered}
            current={this.currentCategory}
            onSelect={this.changeCategory}
          />
        )}
        {this.showSearch && <InputSearch onUpdate={this.onSearch} />}
        <EmojiList
          data={this.mapEmojis}
          category={this.currentCategory}
          filter={this.filterEmoji}
          categories={this.mapCategories}
          emojiWithBorder={this.emojiWithBorder}
          emojiSize={this.emojiSize}
          emojisByRow={this.emojisByRow}
          continuousList={this.continuousList}
          hasSearch={this.showSearch}
          onSelect={this.onSelectEmoji}
        />
      </div>
    );
  },
});
