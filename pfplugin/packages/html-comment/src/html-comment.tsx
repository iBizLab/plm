/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { defineComponent, ref } from 'vue';
import {
  getHtmlProps,
  getEditorEmits,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { HtmlCommentController } from './html-comment.controller';
import IBizHtmlContent from './wang-editor/wang-editor-comment';
import IBizHtmlCollapse from './wang-editor/wang-editor-collapse';
import { HtmlUtil } from './utils';
import './html-comment.scss';

export const HtmlComment = defineComponent({
  name: 'HtmlComment',
  props: getHtmlProps<HtmlCommentController>(),
  emits: {
    ...getEditorEmits(),
    /** 点击事件 */
    click: (_event?: IData, _data?: IData) => true,
  },
  setup(props, { emit }) {
    const ns = useNamespace('html-comment');

    const c = props.controller!;

    const comment = ref();

    const editorRef = ref();

    const isAvatarLoadError = ref(false);

    const onFocus = () => {
      c.collapsed.value = false;
      emit('focus');
    };

    const onChange = (value: unknown) => {
      emit('change', value);
      if (value && c.collapsed.value) {
        c.collapsed.value = false;
      }
    };

    const onBlur = () => {
      emit('blur');
      if (props.value) {
        return null;
      }
      c.collapsed.value = true;
    };

    const onClick = (event: MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();
      const { nodeName, dataset } = event.target as HTMLElement;
      // 点击提及工作项
      if (nodeName && nodeName === 'MENTION-ELEM') {
        const value = dataset.value || '';
        const data = JSON.parse(value);
        emit('click', event, { data });
      }
    };

    const avatarLoadError = () => {
      isAvatarLoadError.value = true;
    };

    const isImg = (imgUrl: string) => {
      const reg =
        /^https?:|^http?:|^data:image|(\.png$|\.svg|\.jpg|\.png|\.gif|\.psd|\.tif|\.bmp|\.jpeg)$/;
      return reg.test(imgUrl);
    };

    const renderAvatar = () => {
      if (c.userAvatar && !isAvatarLoadError.value) {
        let url = '';
        if (isImg(c.userAvatar)) {
          url = c.userAvatar;
        } else {
          let urlConfig: IData[] = [];
          try {
            urlConfig = JSON.parse(c.userAvatar);
          } catch (error) {
            console.error('解析头像数据失败', error);
          }
          if (urlConfig.length === 0) {
            return null;
          }
          const { downloadUrl } = ibiz.util.file.calcFileUpDownUrl(
            c.context,
            c.params,
            props.data,
            c.editorParams,
          );
          url = downloadUrl.replace('%fileId%', urlConfig[0].id);
        }
        return (
          <div class={ns.e('avatar-name')}>
            <img src={url} alt='' onError={avatarLoadError} />
          </div>
        );
      }
      const avatarBg = HtmlUtil.stringToHexColor(c.context.srfusername);
      const avatarName = HtmlUtil.avatarName(c.context.srfusername);
      if (c.context.srfusername) {
        return (
          <div class={ns.e('avatar-name')} style={`background: ${avatarBg};`}>
            {avatarName}
          </div>
        );
      }
      return (
        <el-avatar
          class={ns.e('avatar')}
          src='./assets/images/user-avatar.png'
        />
      );
    };

    return {
      ns,
      c,
      comment,
      editorRef,
      onChange,
      onFocus,
      onBlur,
      onClick,
      renderAvatar,
    };
  },
  render() {
    if (this.c.mode === 'default') {
      return (
        <IBizHtmlCollapse
          controller={this.c}
          data={this.data}
          value={this.value}
          readonly={this.readonly}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onItemClick={this.onClick}
        ></IBizHtmlCollapse>
      );
    }
    return (
      <div
        ref='comment'
        class={[this.ns.b(), this.ns.is('collapse', this.c.collapsed.value)]}
        style={{
          height: `${
            this.c.collapsed.value ? this.c.minHeight : this.c.maxHeight
          }px`,
        }}
      >
        {this.renderAvatar()}
        <IBizHtmlContent
          controller={this.c}
          data={this.data}
          value={this.value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onItemClick={this.onClick}
        ></IBizHtmlContent>
      </div>
    );
  },
});
