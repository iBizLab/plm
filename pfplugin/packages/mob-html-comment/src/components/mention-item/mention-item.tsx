/* eslint-disable prefer-destructuring */
/* eslint-disable default-case */
/* eslint-disable no-plusplus */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PropType, Ref, computed, defineComponent, ref } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { CommentMentionController } from '../../controller/mob-mention.controller';
import './mention-item.scss';
import { HtmlUtil } from '../../utils';

export const MobMenTionItem = defineComponent({
  name: 'MobMenTionItem',
  props: {
    controller: {
      type: Object as PropType<CommentMentionController>,
      required: true,
    },
    item: {
      type: Object as PropType<IData>,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('mob-mention-item');
    const c = props.controller;

    const errorLoadItems: Ref<string[]> = ref([]);

    const avatarBg = computed(() => {
      return HtmlUtil.stringToHexColor(props.item.name);
    });
    const avatarName = computed(() => {
      return HtmlUtil.avatarName(props.item.name);
    });

    const getAvatarDownloadUrl = (avatarUrl: string) => {
      if (!avatarUrl) {
        return null;
      }
      const urlConfig = JSON.parse(avatarUrl);
      if (urlConfig.length === 0) {
        return null;
      }
      const { downloadUrl } = ibiz.util.file.calcFileUpDownUrl(
        c.context,
        c.params,
        c.editorParams,
      );
      const url = downloadUrl.replace('%fileId%', urlConfig[0].id);
      return url;
    };

    const url = computed(() => {
      let result = '';
      if (c.operatorMap.has(props.item.id)) {
        const operator = c.operatorMap.get(props.item.id);
        if (operator.data.iconurl) {
          result = getAvatarDownloadUrl(operator.data.iconurl) || '';
        }
      }
      return result;
    });

    const avatarLoadError = (value: string) => {
      errorLoadItems.value.push(value);
    };

    return { ns, avatarBg, avatarName, url, errorLoadItems, avatarLoadError };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        <div
          class={this.ns.e('avatar')}
          style={`background: ${this.avatarBg};`}
        >
          {this.url && !this.errorLoadItems.includes(this.url) ? (
            <img
              src={this.url}
              onError={() => this.avatarLoadError(this.url)}
            />
          ) : (
            this.avatarName
          )}
        </div>
        <div class={this.ns.e('name')}>{this.item.name}</div>
      </div>
    );
  },
});
