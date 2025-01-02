/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { defineComponent, ref } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { SearchSvg } from '../../icons';
import './input-search.scss';

export const InputSearch = defineComponent({
  name: 'IBizInputSearch',
  emits: ['update'],
  setup(props, { emit }) {
    const ns = useNamespace('emoji-input-search');
    const inputSearch = ref('');

    // 表情搜索
    const onSearch = () => {
      emit('update', inputSearch.value);
    };

    // 处理键盘事件
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e && e.code === 'Enter') {
        onSearch();
      }
    };
    return { ns, inputSearch, onSearch, handleKeyUp };
  },
  render() {
    return (
      <div class={[this.ns.b()]}>
        <div class={this.ns.e('container')} onKeyup={this.handleKeyUp}>
          <div
            class={this.ns.em('container', 'search')}
            onClick={this.onSearch}
          >
            {SearchSvg()}
          </div>
          <input
            class={this.ns.em('container', 'input')}
            type='text'
            v-model={this.inputSearch}
            placeholder={ibiz.i18n.t('app.search')}
          />
        </div>
      </div>
    );
  },
});
