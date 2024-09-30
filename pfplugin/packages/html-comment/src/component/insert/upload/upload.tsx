import { defineComponent, PropType } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './upload.scss';
import { IModal } from '@ibiz-template/runtime';
import { useUpload } from './use-upload';

export const UploadCustom = defineComponent({
  name: 'UploadCustom',
  props: {
    modal: { type: Object as PropType<IModal>, required: true },
    context: { type: Object as PropType<IData>, default: () => {} },
    viewParams: { type: Object as PropType<IData>, default: () => {} },
    actionParams: { type: Object as PropType<IData>, default: () => {} },
  },
  setup(props) {
    const ns = useNamespace('upload-custom');
    const {
      uploadUrl,
      headers,
      files,
      limit,
      onError,
      onRemove,
      onSuccess,
      beforeUpload,
      onConfirm,
      onCancel,
    } = useUpload({ ...props, multiple: true });
    return {
      ns,
      files,
      limit,
      uploadUrl,
      headers,
      onError,
      onRemove,
      onSuccess,
      beforeUpload,
      onConfirm,
      onCancel,
    };
  },

  render() {
    return (
      <div class={[this.ns.b()]}>
        <div class={[this.ns.e('center')]}>
          <el-upload
            class={[this.ns.em('center', 'upload')]}
            v-model={this.files}
            action={this.uploadUrl}
            headers={this.headers}
            limit={this.limit}
            multiple={true}
            accept='audio/*'
            drag={true}
            auto-upload={true}
            before-upload={this.beforeUpload}
            onSuccess={this.onSuccess}
            onError={this.onError}
            onRemove={this.onRemove}
          >
            {{
              default: () => (
                <i class='el-icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1024 1024'
                  >
                    <path
                      fill='currentColor'
                      d='M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z'
                    ></path>
                  </svg>
                </i>
              ),
            }}
          </el-upload>
        </div>
        <div class={[this.ns.e('bottom')]}>
          <el-button onClick={this.onCancel}>取消</el-button>
          <el-button onClick={this.onConfirm}>确认</el-button>
        </div>
      </div>
    );
  },
});
