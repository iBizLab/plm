import { PropType, defineComponent } from 'vue';
import { strToBase64 } from '@ibiz-template/core';
import { useNamespace } from '@ibiz-template/vue3-util';
import { IModal, IModalData } from '@ibiz-template/runtime';
import './emoji.scss';

export const Emoji = defineComponent({
  name: 'IBizHtmlEmoji',
  props: {
    modal: { type: Object as PropType<IModal>, required: true },
  },
  setup(props) {
    const ns = useNamespace('html-emoji');

    // 选择表情
    const onSelect = (val: IData): void => {
      const modalData: IModalData = {
        ok: true,
        data: [{ emoji: strToBase64(val.data) }],
      };
      props.modal.dismiss(modalData);
    };

    return { ns, onSelect };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        <iBizEmojiSelect
          dark={true}
          continuousList={true}
          onSelect={this.onSelect}
        />
      </div>
    );
  },
});
