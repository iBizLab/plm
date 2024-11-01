/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */
import { defineComponent, Ref, ref, watch, onMounted, onUnmounted } from 'vue';
import {
  getHtmlProps,
  getEditorEmits,
  useNamespace,
} from '@ibiz-template/vue3-util';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import Quill from 'quill';
import { Delta } from 'quill/core';
import { base64ToBlob, CoreConst } from '@ibiz-template/core';
import { getCookie } from 'qx-util';
import { ScriptFactory } from '@ibiz-template/runtime';
import { MobCommentController } from './mob-comment.controller';
import './mob-comment.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IBizMobComment: any = defineComponent({
  name: 'IBizMobComment',
  props: getHtmlProps<MobCommentController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('mob-comment');
    const c: MobCommentController = props.controller;

    const editorRef = ref(null);
    const toolbarRef = ref(null);

    const lang = ibiz.i18n.getLang();

    // 编辑器对象
    let quill: Quill;

    // 是否正在编辑
    const editing = ref(false);

    // 请求头
    const headers: Ref<IData> = ref({
      Authorization: `Bearer ${getCookie(CoreConst.TOKEN)}`,
    });

    // 上传文件路径
    const uploadUrl: Ref<string> = ref('');

    // 下载文件路径
    const downloadUrl: Ref<string> = ref('');

    // 是否显示@气泡
    const showAtPopup: Ref<boolean> = ref(false);
    // 是否显示#气泡
    const showMkPopup: Ref<boolean> = ref(false);

    const mentionItems: Ref<IData[]> = ref([]);
    const markerItems: Ref<IData[]> = ref([]);

    const curValue = ref('');

    // 回复数据
    const reply = ref('');

    const getImage = (delta: Delta) => {
      const item = delta.ops.find(x => x.insert && (x.insert as IData).image);
      if (item) {
        return (item.insert as IData).image;
      }
    };

    const getValue = () => {
      let result = '';
      if (c.valueMode === 'text') {
        result = quill!.getText();
      }
      result = quill!.getSemanticHTML();
      result = c.transformHtml(result);
      return result;
    };

    // 处理图片上传(文件模式)
    const handleUpload = async (image: string) => {
      const blob = base64ToBlob(image);
      const file = await ibiz.util.file.fileUpload(
        uploadUrl.value,
        blob,
        headers.value,
      );
      const url = downloadUrl.value.replace('%fileId%', file.fileid);
      const value = getValue();
      emit('change', value.replace(image, url));
    };

    const refresh = (value: string = curValue.value) => {
      const range = quill.getSelection();
      const contents = quill.clipboard.convert({
        html: `${value}<p><br></p>`,
        text: '\n',
      });
      quill.setContents(contents);
      if (range) {
        quill.setSelection(range.index + 1, 'user');
      }
    };

    const onMentionConfirm = ({
      selectedOptions,
    }: {
      selectedOptions: IData[];
    }) => {
      const selection = selectedOptions[0];
      if (!selection) {
        return;
      }
      const range = quill.getSelection(true);
      const index = range.index + range.length;
      const value = JSON.stringify(selection);
      quill.insertText(index, `@${selection.name}`, 'mention', value, 'user');
      quill.setSelection(index + selection.name.length + 1, 'user');
      showAtPopup.value = false;
    };

    const handleMentionClick = async () => {
      const logic = c.mention.getMentionLogic();
      if (logic) {
        const res = await c.openPickUpView(props.data, logic);
        if (res && res[0]) {
          const selection = res[0]._deData;
          onMentionConfirm({
            selectedOptions: [{ ...selection, value: selection.id }],
          });
        }
      } else {
        mentionItems.value = await c.getMentions(props.data);
        showAtPopup.value = true;
      }
    };

    const onMarkerConfirm = ({
      selectedOptions,
    }: {
      selectedOptions: IData[];
    }) => {
      const selection = c.marker.getSelection(selectedOptions[0]);
      if (!selection) {
        return;
      }
      const range = quill.getSelection(true);
      const index = range.index + range.length;
      const value = JSON.stringify(selection);
      quill.insertText(index, `${selection.name}`, 'marker', value, 'user');
      quill.setSelection(index + selection.name.length + 1, 'user');
      showMkPopup.value = false;
    };

    const handleMarkerClick = async () => {
      const logic = c.marker.getMarkerLogic();
      if (logic) {
        const res = await c.openPickUpView(props.data, logic);
        if (res && res[0]) {
          const selectedOptions = c.marker.toUIData(res);
          onMarkerConfirm({
            selectedOptions,
          });
        }
      } else {
        markerItems.value = await c.getMarkers(props.data);
        showMkPopup.value = true;
      }
    };

    const onMentionCancel = () => {
      showAtPopup.value = false;
      refresh();
    };

    const onMarkerCancel = () => {
      showMkPopup.value = false;
      refresh();
    };

    const onDeltaChange = (delta: Delta): boolean => {
      let result: boolean = true;
      const insertItem = delta.ops.find(x => x.insert);
      if (insertItem) {
        const value = insertItem.insert;
        if (value === '@') {
          const range = quill.getSelection(true);
          quill.deleteText(range.index, 1, 'user');
          handleMentionClick();
          result = false;
        }
        if (value === '#') {
          const range = quill.getSelection(true);
          quill.deleteText(range.index, 1, 'user');
          handleMarkerClick();
          result = false;
        }
      }
      const deleteItem = delta.ops.find(x => x.delete);
      if (deleteItem) {
        const range = quill.getSelection(true);
        const item = quill.getContents(range.index - 1, 1);
        const hasMarker = item.ops.some(x => x.attributes?.marker);
        if (hasMarker) {
          quill.deleteText(range.index - 1, 1, 'user');
          result = false;
        }
      }
      return result;
    };

    const init = () => {
      if (!editorRef.value) {
        return;
      }
      const theme = c.showToolbar ? 'snow' : 'bubble';
      Object.assign(c.modules, { toolbar: toolbarRef.value });
      quill = new Quill(editorRef.value, {
        theme,
        modules: c.modules,
        readOnly: props.disabled || props.readonly,
        placeholder: c.placeHolder,
      });
      quill.on('text-change', (delta, oldDelta, source) => {
        if (source === 'user') {
          const bol = onDeltaChange(delta);
          if (bol) {
            const image = getImage(delta);
            if (image && c.imageMode === 'file') {
              handleUpload(image);
              return;
            }
            emit('change', getValue());
          }
        }
      });
      quill.on('selection-change', range => {
        if (range) {
          // 聚焦
          editing.value = true;
          emit('focus');
        } else {
          // 失焦
          editing.value = false;
          emit('blur');
        }
      });
      if (c.valueMode === 'text') {
        quill.setText(props.value || '');
      }
    };

    watch(
      () => props.value,
      () => {
        if (props.value) {
          curValue.value = c.transformDelta(props.value);
          const html = quill.getSemanticHTML();
          if (curValue.value !== html) {
            refresh();
          }
        } else {
          curValue.value = '';
          refresh();
        }
      },
      { immediate: true },
    );

    watch(
      () => [props.disabled, props.readonly],
      () => {
        if (!quill) {
          return;
        }
        if (props.disabled || props.readonly) {
          quill.enable(false);
        } else {
          quill.enable();
        }
      },
      { immediate: true },
    );

    // data响应式变更基础路径
    watch(
      () => props.data,
      newVal => {
        if (newVal) {
          const urls = ibiz.util.file.calcFileUpDownUrl(
            c.context,
            c.params,
            newVal,
            c.editorParams,
          );
          uploadUrl.value = urls.uploadUrl;
          downloadUrl.value = urls.downloadUrl;
        }
      },
      { immediate: true, deep: true },
    );

    onMounted(() => {
      init();
    });

    // 设置回复数据
    const handleSetReply = (args: IData) => {
      const { eventArg } = args;
      reply.value = eventArg;
      c.reply = eventArg;
      quill.setSelection(0, 'silent');
    };

    const removeReply = () => {
      reply.value = '';
      c.reply = '';
    };

    const handleFocus = () => {
      quill.setSelection(0, 'silent');
    };

    c.evt.on('onSetReply', handleSetReply);
    c.evt.on('onRemoveReply', removeReply);
    c.evt.on('focus', handleFocus);

    onUnmounted(() => {
      c.evt.off('onSetReply', handleSetReply);
      c.evt.off('onRemoveReply', removeReply);
      c.evt.off('focus', handleFocus);
    });

    const renderReply = () => {
      if (reply.value) {
        const htmlCode = ScriptFactory.execScriptFn(
          { value: reply.value },
          c.replyScript,
          { singleRowReturn: true, isAsync: false },
        ) as string;
        return (
          <div class={ns.b('reply')}>
            <div class={ns.be('reply', 'content')} v-html={htmlCode}></div>
            <ion-icon
              name='close-outline'
              onClick={() => removeReply()}
            ></ion-icon>
          </div>
        );
      }
    };

    return {
      ns,
      lang,
      editing,
      editorRef,
      toolbarRef,
      showAtPopup,
      showMkPopup,
      mentionItems,
      markerItems,
      curValue,
      handleMentionClick,
      handleMarkerClick,
      onMentionCancel,
      onMentionConfirm,
      onMarkerCancel,
      onMarkerConfirm,
      renderReply,
    };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.disabled ? this.ns.m('disabled') : '',
          this.readonly ? this.ns.m('readonly') : '',
          this.ns.m(this.lang.toLowerCase()),
          this.ns.is('editing', this.editing),
        ]}
      >
        <div class={this.ns.e('content')}>
          <div class={this.ns.e('ql-content')} ref='editorRef'>
            {this.controller.valueMode === 'html' ? (
              <div v-html={this.curValue}></div>
            ) : null}
          </div>
          {this.renderReply()}
          <div class={this.ns.e('ql-toolbar')} ref='toolbarRef'>
            <button class='ql-bold'></button>
            <button class='ql-italic'></button>
            <button class='ql-underline'></button>
            <button class='ql-strike'></button>
            <button class='ql-code-block'></button>
            <button class='ql-list' value='ordered'></button>
            <button class='ql-list' value='bullet'></button>
            <button class='ql-mention' onClick={this.handleMentionClick}>
              <svg
                class='icon'
                viewBox='0 0 1024 1024'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                p-id='4218'
                width='200'
                height='200'
              >
                <path
                  d='M23.7 555c0-339.3 247-550 533.8-550 295.6 0 442.8 165.9 442.8 401.6 0 210.8-93.5 361.7-237 361.7-63.6 0-108.5-26.2-137.2-78.6-48.6 51.1-96 79.8-174.6 79.8-116 0-178.4-77.3-178.4-193.3 0-209.5 131-323 251.9-323 64.9 0 102.3 24.9 122.2 68.6l11.2-58.6 114.7 1.2L727 510.1c-7.5 36.2-11.2 63.6-11.2 81.1 0 44.9 22.5 71.1 56.1 71.1 63.6 0 106-89.8 106-243.2 0-205.8-114.7-300.6-323-300.6-220.8 0-405.4 163.4-405.4 436.5 0 238.2 132.2 350.5 390.4 350.5 94.8 0 174.6-12.5 255.7-36.2v109.8c-88.6 26.2-177.1 39.9-263.2 39.9-329.1 0-508.7-168.4-508.7-464z m585-44.9c3.7-20 6.2-39.9 6.2-53.6 0-56.1-15-96-83.6-96-83.6 0-133.5 108.5-133.5 212 0 44.9 13.7 88.6 77.3 88.6 73.7-0.1 114.9-57.4 133.6-151z'
                  fill='currentColot'
                  p-id='4219'
                ></path>
              </svg>
            </button>
            <button class='ql-marker' onClick={this.handleMarkerClick}>
              <svg
                class='icon'
                viewBox='0 0 1024 1024'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                p-id='6854'
                width='200'
                height='200'
              >
                <path
                  d='M929.28 625.664l-234.496 0.512 24.064-229.888 210.432-0.512c20.992 0 38.4-17.408 38.4-38.4s-17.408-38.4-38.4-38.4H727.04l29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304L650.24 318.976l-232.448 0.512 29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304l-29.696 283.648-246.272 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l238.08-0.512-24.064 229.888-214.016 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l205.824-0.512-29.184 276.992c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 37.888-34.304l30.208-285.184 232.448-0.512-29.184 277.504c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 38.4-34.304l30.208-285.184 242.688-0.512c20.992 0 38.4-17.408 38.4-38.4-1.536-20.992-18.944-37.888-39.936-37.888z m-544.256 0.512l24.064-229.888 232.448-0.512-24.064 229.888-232.448 0.512z'
                  fill='currentColot'
                  p-id='6855'
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <van-popup v-model:show={this.showAtPopup} round position='bottom'>
          <van-picker
            columns={this.mentionItems}
            confirm-button-text={ibiz.i18n.t('editor.common.confirm')}
            onCancel={this.onMentionCancel}
            onConfirm={this.onMentionConfirm}
          >
            {{
              option: (option: IData) => {
                return (
                  <mobMenTionItem
                    item={option}
                    controller={this.controller.mention}
                  ></mobMenTionItem>
                );
              },
            }}
          </van-picker>
        </van-popup>
        <van-popup v-model:show={this.showMkPopup} round position='bottom'>
          <van-picker
            columns={this.markerItems}
            confirm-button-text={ibiz.i18n.t('editor.common.confirm')}
            onCancel={this.onMarkerCancel}
            onConfirm={this.onMarkerConfirm}
          >
            {{
              option: (option: IData) => {
                return (
                  <mobMarkerItem
                    item={option}
                    controller={this.controller.marker}
                  ></mobMarkerItem>
                );
              },
            }}
          </van-picker>
        </van-popup>
      </div>
    );
  },
});

export default IBizMobComment;
