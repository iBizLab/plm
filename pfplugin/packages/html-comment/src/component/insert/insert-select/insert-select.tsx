import { PropType, VNode, defineComponent, h, onMounted, ref } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { IModal, IModalData } from '@ibiz-template/runtime';
import './insert-select.scss';
import { categoriesDefault, insertItemsDefault } from './config';
import { InsertItemList } from '../insert-item-list/insert-item-list';
import { UploadCustom } from '../upload/upload';

export const InsertSelect = defineComponent({
  name: 'IBizHtmlInsertSelect',
  props: {
    modal: { type: Object as PropType<IModal>, required: true },
    context: { type: Object as PropType<IData>, default: () => {} },
    viewParams: { type: Object as PropType<IData>, default: () => {} },
    actionParams: { type: Object as PropType<IData>, default: () => {} },
  },
  emits: ['select'],
  setup(props) {
    const ns = useNamespace('html-insert-select');
    // 搜索值
    const searchVal = ref('');
    // 存储自定义的插入项分类数据
    const customCategories = ref<IData[]>([]);
    // 用于映射插入项到分类
    const mapInsertItems = ref<IData>({});
    // 存储需要排除的插入项数据
    const exceptInsertItems = ref<IData[]>([]);

    // 用于映射分类名到分类数据
    const mapCategories = ref<IData>({});

    // 映射特定分类下的插入项数据到 mapInsertItems 对象
    const mapperEmojisCategory = (insertItems: IData[]): void => {
      // 初始化 frequently（常用） 属性为一个空数组
      Object.assign(mapInsertItems.value, { frequently: [] });

      // 过滤掉需要排除的插入项，并映射到对应的分类下
      insertItems
        .filter(insertItem => !exceptInsertItems.value.includes(insertItem))
        .forEach(insertItem => {
          const _category = insertItem.category;

          if (!mapInsertItems.value[_category]) {
            Object.assign(mapInsertItems.value, { [_category]: [] });
          }
          mapInsertItems.value[_category].push(insertItem);
        });
    };
    // 映射分类数据到 mapCategories 对象
    const mapperCategories = (categories: IData[]): void => {
      categories.forEach((category: IData) => {
        Object.assign(mapCategories.value, { [category.type]: category });
      });
    };

    // 处理本地文件上传
    const handleLocalFiles = async (item: IData): Promise<void> => {
      const accept = item.type === 'audio' ? 'audio/*' : '';
      const modalData: IModalData = {
        ok: true,
        data: [],
      };
      const res: IModalData = await ibiz.overlay.modal(
        (modal: IModal): VNode => {
          return h(UploadCustom, {
            modal,
            context: props.context,
            viewParams: props.viewParams,
            actionParams: props.actionParams,
            accept,
          });
        },
        undefined,
        { width: 'auto', height: 'auto' },
      );
      if (res.ok && res.data && res.data.length > 0) {
        res.data.forEach((item2: IData) => {
          modalData.data?.push({
            type: item.type,
            value: item2,
            params: { isAdd: true },
          });
        });
      }
      props.modal.dismiss(modalData);
    };

    // 处理默认
    const handleDefault = (item: IData): void => {
      const modalData: IModalData = {
        ok: true,
        data: [{ type: item.type, value: item.value, params: { isAdd: true } }],
      };
      props.modal.dismiss(modalData);
    };

    // 选中插入项
    const onSelectItem = async (item: IData): Promise<void> => {
      switch (item.type) {
        case 'audio':
        case 'files':
          await handleLocalFiles(item);
          break;
        default:
          handleDefault(item);
          break;
      }
    };

    onMounted(() => {
      mapInsertItems.value = {};
      mapperEmojisCategory(insertItemsDefault());

      customCategories.value = categoriesDefault();
      mapperCategories(customCategories.value);
    });

    return {
      ns,
      mapInsertItems,
      mapCategories,
      searchVal,
      onSelectItem,
    };
  },
  render() {
    const inputSearch = (
      <div class={[this.ns.b('search')]}>
        <div class={this.ns.be('search', 'container')}>
          <div class={this.ns.bem('search', 'container', 'search')}>
            <svg
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
              height='1em'
              width='1em'
              focusable='false'
            >
              <g stroke-width='1'>
                <path d='M6.751 12.303A5.557 5.557 0 0 1 1.2 6.751C1.2 3.691 3.69 1.2 6.751 1.2a5.558 5.558 0 0 1 5.551 5.551 5.557 5.557 0 0 1-5.551 5.552M6.751 0a6.751 6.751 0 1 0 4.309 11.949l3.855 3.855a.6.6 0 1 0 .849-.849l-3.854-3.853A6.751 6.751 0 0 0 6.751 0'></path>
              </g>
            </svg>
          </div>
          <input
            class={this.ns.bem('search', 'container', 'input')}
            type='text'
            v-model={this.searchVal}
            placeholder={ibiz.i18n.t('app.search')}
          />
        </div>
      </div>
    );

    return (
      <div class={this.ns.b()}>
        {inputSearch}
        <InsertItemList
          data={this.mapInsertItems}
          filter={this.searchVal}
          categories={this.mapCategories}
          onSelect={this.onSelectItem}
        />
      </div>
    );
  },
});
