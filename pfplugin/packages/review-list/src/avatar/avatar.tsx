import { defineComponent } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { Util } from '../review-list-util';
import './avatar.scss';

export const Avatar = defineComponent({
  name: 'Avatar',
  props: {
    label: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const ns = useNamespace('custom-avatar');

    const renderAvatar = (): JSX.Element => {
      if (props.img) {
        return <img class={ns.e('user-avatar')} src={props.img}></img>;
      }
      return (
        <div
          class={ns.e('default-avatar')}
          style={`background-color: ${Util.calcColorPhoto(props.label)}`}
        >
          {Util.calcTextPhoto(props.label)}
        </div>
      );
    };

    return { ns, renderAvatar };
  },
  render() {
    return <div class={this.ns.b()}>{this.renderAvatar()}</div>;
  },
});
