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
import './html-comment.scss';

export const HtmlComment = defineComponent({
  name: 'HtmlComment',
  props: getHtmlProps<HtmlCommentController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('html-comment');

    const c = props.controller!;

    const comment = ref();

    const editorRef = ref();

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

    const renderAvatar = () => {
      const avatarBg = c.stringToHexColor(c.context.srfusername);
      const avatarName = c.avatarName(c.context.srfusername);
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
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
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
        ></IBizHtmlContent>
      </div>
    );
  },
});
