import { defineComponent, PropType } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './upload.scss';
import { IModal } from '@ibiz-template/runtime';
import { UploadFile } from 'element-plus';
import { useUpload } from './use-upload';
import { getFileSvgByType } from '../../file-type/file-type';

export const UploadCustom = defineComponent({
  name: 'UploadCustom',
  props: {
    modal: { type: Object as PropType<IModal>, required: true },
    context: { type: Object as PropType<IData>, default: () => {} },
    viewParams: { type: Object as PropType<IData>, default: () => {} },
    actionParams: { type: Object as PropType<IData>, default: () => {} },
    accept: { type: String, default: '' },
  },
  setup(props) {
    const ns = useNamespace('upload-custom');
    const {
      uploadUrl,
      headers,
      files,
      limit,
      uploadRef,
      getUploadMessage,
      onError,
      onRemove,
      onItemRemove,
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
      uploadRef,
      getUploadMessage,
      onError,
      onRemove,
      onItemRemove,
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
            ref='uploadRef'
            v-model={this.files}
            action={this.uploadUrl}
            headers={this.headers}
            limit={this.limit}
            multiple={true}
            accept={this.accept}
            drag={true}
            auto-upload={true}
            before-upload={this.beforeUpload}
            onSuccess={this.onSuccess}
            onError={this.onError}
            onRemove={this.onRemove}
          >
            {{
              default: () => (
                <div class={this.ns.e('message')}>
                  <span class={this.ns.em('message', 'icon')}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 1024 1024'
                      width='1em'
                      height='1em'
                    >
                      <path
                        fill='currentColor'
                        d='M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z'
                      ></path>
                    </svg>
                  </span>
                  <span class={this.ns.em('message', 'caption')}>
                    {this.getUploadMessage(this.accept)}
                  </span>
                </div>
              ),
              file: ({ file }: { file: UploadFile }) => {
                return [
                  <div class='el-upload-list__item-info'>
                    <a class='el-upload-list__item-name'>
                      <i class='el-icon el-icon--document'>
                        {getFileSvgByType(file.raw?.type || '')}
                      </i>
                      <span
                        class='el-upload-list__item-file-name'
                        title={file.raw?.name}
                      >
                        {file.raw?.name}
                      </span>
                    </a>
                    {file.status === 'uploading' && (
                      <el-progress
                        type='line'
                        stroke-width='2'
                        percentage={Number(file.percentage)}
                        style='margin-top: 0.5rem'
                      />
                    )}
                    <label class='el-upload-list__item-status-label'>
                      <i class='el-icon el-icon--upload-success el-icon--circle-check'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 1024 1024'
                        >
                          <path
                            fill='currentColor'
                            d='M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896'
                          ></path>
                          <path
                            fill='currentColor'
                            d='M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z'
                          ></path>
                        </svg>
                      </i>
                    </label>
                    <i
                      class='el-icon el-icon--close'
                      onClick={() => this.onItemRemove(file)}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 1024 1024'
                      >
                        <path
                          fill='currentColor'
                          d='M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z'
                        ></path>
                      </svg>
                    </i>
                  </div>,
                ];
              },
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
