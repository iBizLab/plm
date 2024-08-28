/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { Ref, defineComponent, nextTick, ref, watch } from 'vue';
import {
  getEditorEmits,
  getUploadProps,
  useNamespace,
} from '@ibiz-template/vue3-util';

import { resource } from './global';
import { AvatarUploadController } from './avatar-upload-controller';
import { useIViewUpload } from './use-iview-upload';
import './avatar-upload.scss';

export const AvatarUpload = defineComponent({
  name: 'AvatarUpload',
  props: getUploadProps<AvatarUploadController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('avatar-upload');
    const c = props.controller;
    const dialogVisible = ref(false); // 模态是否显示
    const topImgRef = ref(); // 图片
    const bottomImgRef = ref(); // 底层图片
    const largePreviewImgref = ref(); // 右侧大预览图
    const smallPreviewImgref = ref(); // 右侧小预览图
    const upload1 = ref(); // 上传组件
    const upload2 = ref(); // 模态里的上传组件
    const allowDrag = ref(false); // 是否允许剪切框拖动
    const previewImgContainer = ref(); // 剪切框外层-用于翻转
    const largePreviewImgContainer = ref(); // 大预览框外层-用于翻转
    const smallPreviewImgContainer = ref(); // 小预览外层-用于翻转
    const mouseX: Ref<number> = ref(0); // 鼠标x坐标
    const mouseY: Ref<number> = ref(0); // 鼠标y坐标
    const croparea = ref(); // 顶层图片截取框
    const position = ref({
      r: c.cutShape === 'DEFAULT' ? 100 : 107.14,
      x: 150,
      y: 150,
      oldx: 150,
      oldy: 150,
    }); // 截取框位置信息
    const cropImgPreviewUrl = ref(''); // 截取的图片转化的url
    const uploadTag = ref(false); // 是否开始上传图片
    let overtrunTime = 0; // 翻转次数

    const tempFiles: Ref<
      {
        id: string;
        name: string;
        url?: string | undefined;
      }[]
    > = ref([]); // 本地准备上传的图片文件列表
    const avatarData: Ref<string | null> = ref('');
    const size = ref(1); // 放大倍数
    const defaultAvatar = resource.dir('assets/images/user-avatar.png'); // 默认图片
    const {
      uploadUrl,
      downloadUrl,
      headers,
      files,
      limit,
      onDownload,
      onError,
      onRemove,
      onSuccess,
      beforeUpload,
    } = useIViewUpload(
      props,
      value => {
        avatarData.value = value;
      },
      c,
    );

    // 初始话剪切框位置
    const initCropPosntion = async () => {
      // 初始化时计算裁剪框的大小
      await nextTick();
      const { width, height } = topImgRef.value.getBoundingClientRect();
      const x = (300 - width) / 2;
      const y = (300 - height) / 2;
      if (topImgRef.value) {
        if (x > y) {
          position.value.r = width / 3;
        } else {
          position.value.r = height / 3;
        }
      } else {
        position.value.r = 60;
      }
      position.value.x = 150;
      position.value.y = 150;
      position.value.oldx = 150;
      position.value.oldy = 150;
    };

    // 关闭模态
    const closeDialog = () => {
      dialogVisible.value = false;
      tempFiles.value.forEach((file: IData) => {
        if (file.raw) {
          URL.revokeObjectURL(file.raw);
        }
      });
      overtrunTime = 0;
      size.value = 1;
      // 回复位置
      initCropPosntion();
    };

    // 上传成功回调
    const onTempSuccess = (response: IData) => {
      if (!response) {
        return;
      }
      tempFiles.value = [];
      tempFiles.value.push({
        name: response.filename,
        id: response.fileid,
      });
      const tempValue = JSON.stringify(
        tempFiles.value.map(file => ({ name: file.name, id: file.id })),
      );
      avatarData.value = tempValue;
      if (uploadTag.value) {
        emit('change', avatarData.value);
        uploadTag.value = false;
        closeDialog();
      }
    };

    // 打开模态
    const openDialog = (response: IData) => {
      dialogVisible.value = true;
      onTempSuccess(response);
    };

    // 读取文件时
    const onChange = (file: any) => {
      if (file.status === 'ready') {
        const types = ['image/jpeg', 'image/png', 'image/jpg'];
        if (types.includes(file.raw.type)) {
          if (!uploadTag.value) {
            dialogVisible.value = true;
          }
          tempFiles.value = [file];
        } else {
          throw new Error('请选择图片类型文件');
        }
      }
    };

    // 监听文件列表的变化
    watch(
      tempFiles,
      newVal => {
        // 变更后且下载基础路径存在时解析
        if (newVal?.length && downloadUrl.value) {
          newVal.forEach((file: IData) => {
            if (file.id) {
              file.url =
                file.url || downloadUrl.value.replace('%fileId%', file.id);
            } else if (file.raw) {
              file.url = URL.createObjectURL(file.raw);
            }
          });
        }
      },
      { immediate: true },
    );

    // 超出限制覆盖上一个文件
    const overlimit = (
      _files: IData[],
      uploadFiles: IData[],
      isupload: boolean = false,
    ) => {
      if (_files.length > 0) {
        if (isupload) {
          dialogVisible.value = false;
        }
        if (uploadFiles && uploadFiles.length > 0 && uploadFiles[0].raw) {
          URL.revokeObjectURL(uploadFiles[0].raw);
        }
        upload1.value.clearFiles();
        nextTick(() => {
          upload1.value.handleStart(_files[0]);
          if (isupload) {
            upload1.value.submit();
          }
        });
      }
    };

    // 裁剪图片
    const cropImg = async (isupload: boolean = false) => {
      const url = await c.createCropImageUrl(
        croparea.value,
        position.value.x,
        position.value.y,
        position.value.r,
      );
      if (url) {
        cropImgPreviewUrl.value = url;
        if (isupload) {
          const blob = c.dataURLtoBlob(url);
          const _tempFile = new File([blob], 'cropimg.png', {
            type: blob.type,
          });
          overlimit([_tempFile], tempFiles.value, isupload);
        }
      }
    };

    // 抛出头像数据
    const uploadAvatar = async () => {
      uploadTag.value = true; // 开始截取并上传
      cropImg(true);
    };

    // 绘制脚部
    const renderFooter = () => {
      return (
        <div class={ns.em('upload-dialog', 'footer')}>
          <el-button type='text' class='cancel' onClick={closeDialog}>
            取消
          </el-button>
          <el-button
            type='primary'
            class='comfire'
            onClick={uploadAvatar}
            loading={uploadTag.value}
          >
            确认
          </el-button>
        </div>
      );
    };

    // 初始化预览图大小以及位置
    const initPreviewImgSize = (target: any, radio: number) => {
      if (c.cutShape === 'DEFAULT') {
        const { width, height } = topImgRef.value.getBoundingClientRect();
        const x = (300 - width) / 2;
        const y = (300 - height) / 2;
        const ratio = radio / position.value.r; // 比例

        const pw = width * ratio; // 预览图的宽度
        const ph = height * ratio; // 预览图的宽度

        const pl = -(position.value.x - position.value.r - x) * ratio;
        const pt = -(position.value.y - position.value.r - y) * ratio;
        target.style.width = `${pw}px`;
        target.style.height = `${ph}px`;
        target.style.transform = `translate(${pl}px,${pt}px)`;
      } else {
        target.style.width = `${radio * 2}px`;
        target.style.height = `${radio * 2}px`;
      }
    };

    // 重绘预览图得大小
    const resizePreview = (target: any, radio: number) => {
      target.style.transformOrigin = `${radio}px ${radio}px`;
      target.style.scale = size.value;
    };

    // 计算预览图位置
    const computePreviewPosition = (target: any, radio: number) => {
      if (c.cutShape === 'DEFAULT') {
        const { width, height } = topImgRef.value.getBoundingClientRect();
        const x = (300 - width / size.value) / 2;
        const y = (300 - height / size.value) / 2;
        const ratio = radio / position.value.r; // 比例

        const pl = -(position.value.x - position.value.r - x) * ratio;

        const pt = -(position.value.y - position.value.r - y) * ratio; // 正常边距

        resizePreview(target, radio);
        target.style.transform = `translate(${pl}px,${pt}px)`;
      } else {
        const right = 300 - (position.value.x + position.value.r);
        const left = position.value.x - position.value.r;
        if (radio === 60) {
          let move = (43 - left) / 2.5;
          if (move < -17.14) {
            move = -17.14;
          }
          target.style.transform = `translateX(${move}px`;
          target.style.scale = size.value;
        }
        if (radio === 18) {
          let move = (43 - left) / 8.3;
          if (move < -5.16) {
            move = -5.16;
          }
          target.style.transform = `translateX(${move}px`;
        }
        target.style.scale = size.value;
      }
    };

    // 预览图片加载完成，准备元素资源
    const imgload = async () => {
      size.value = 1;
      overtrunTime = 0;
      await initCropPosntion();
      if (c.cutShape === 'DEFAULT') {
        const clipPath = `circle(${position.value.r}px at ${position.value.x}px ${position.value.y}px)`;
        croparea.value.style.clipPath = clipPath;
      } else {
        const clipPath = `inset(0  ${
          300 - (position.value.x + position.value.r)
        }px 0 ${position.value.x - position.value.r}px)`;
        croparea.value.style.clipPath = clipPath;
      }
      // 同时计算右侧预览图片的位置

      initPreviewImgSize(largePreviewImgref.value, 60);
      initPreviewImgSize(smallPreviewImgref.value, 18);
    };

    // 剪切框鼠标移出
    const mouseOut = () => {
      allowDrag.value = false;
    };

    // 检查，修正剪切框的位置
    const checkCropImgPosition = () => {
      const { width, height } = topImgRef.value.getBoundingClientRect();
      const x = (300 - width) / 2;
      const y = (300 - height) / 2;
      if (position.value.x < x + position.value.r) {
        position.value.x = x + position.value.r;
      } else if (position.value.x > 300 - position.value.r - x) {
        position.value.x = width - position.value.r + x;
      }

      if (position.value.y < y + position.value.r) {
        position.value.y = y + position.value.r;
      } else if (position.value.y > 300 - position.value.r - y) {
        position.value.y = height + y - position.value.r;
      }
    };

    // 剪切框鼠标移动
    const mouseMove = (event: MouseEvent) => {
      // 临时处理，在缩放比例不为1时，不允许拖动
      if (
        allowDrag.value &&
        size.value === 1 &&
        event &&
        event.target &&
        (previewImgContainer.value as HTMLElement)
      ) {
        // 限制边框元素都准备好了，当前允许移动
        // 计算新位置的clip-path
        const { width, height } = topImgRef.value.getBoundingClientRect();
        const { pageX, pageY } = event;
        const x = (300 - width) / 2;
        const y = (300 - height) / 2;
        const moveX = mouseX.value - pageX;
        const moveY = mouseY.value - pageY;
        // 如果当前元素到达容器的边界，就不再往对应方向移动
        if (
          position.value.x - moveX >= x + position.value.r &&
          position.value.x - moveX >= position.value.r &&
          position.value.x - moveX <= 300 - position.value.r - x &&
          position.value.x - moveX <= 300 - position.value.r
        ) {
          position.value.oldx = position.value.x;
          position.value.x -= moveX;
        }

        if (
          position.value.y - moveY >= y + position.value.r &&
          position.value.y - moveY >= position.value.r &&
          position.value.y - moveY <= 300 - position.value.r - y &&
          position.value.y - moveY <= 300 - position.value.r
        ) {
          position.value.oldy = position.value.y;
          position.value.y -= moveY;
        }
        checkCropImgPosition();

        if (c.cutShape === 'DEFAULT') {
          // 默认，截取圆形
          const clipPath = `circle(${position.value.r}px at ${position.value.x}px ${position.value.y}px)`;
          croparea.value.style.clipPath = clipPath;
        } else {
          // 证件照矩形
          const clipPath = `inset(0  ${
            300 - (position.value.x + position.value.r)
          }px 0 ${position.value.x - position.value.r}px)`;
          croparea.value.style.clipPath = clipPath;
        }

        mouseX.value = pageX;
        mouseY.value = pageY;
        // 右侧预览图片也要移动
        computePreviewPosition(largePreviewImgref.value, 60);
        computePreviewPosition(smallPreviewImgref.value, 18);
      }
    };

    // 剪切框鼠标按下
    const mouseDown = (event: MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();
      // 保存当前鼠标坐标
      const { pageX, pageY } = event;
      mouseX.value = pageX;
      mouseY.value = pageY;
      allowDrag.value = true;
    };

    // 剪切框鼠标放起
    const mouseUp = () => {
      allowDrag.value = false;
    };

    // 设置剪切图缩放
    const setImgSize = (scale: number) => {
      [topImgRef.value, bottomImgRef.value].forEach((item: IData) => {
        const { width, height } = item.getBoundingClientRect();
        item.style.transformOrigin = `${
          position.value.x - (300 - width / scale) / 2
        }px ${position.value.y - (300 - height / scale) / 2}px`;
        item.style.scale = scale;
      });
      checkCropImgPosition();
      computePreviewPosition(largePreviewImgref.value, 60);
      computePreviewPosition(smallPreviewImgref.value, 18);
      // 缩放时计算裁剪框的位置
    };

    // 点击翻转
    const overturn = () => {
      if (previewImgContainer.value) {
        overtrunTime += 1;
        previewImgContainer.value.style.transform = `rotate(${
          overtrunTime * 90
        }deg)`;
        largePreviewImgContainer.value.style.transform = `rotate(${
          overtrunTime * 90
        }deg)`;
        smallPreviewImgContainer.value.style.transform = `rotate(${
          overtrunTime * 90
        }deg)`;
      }
    };

    // 移除图片
    const onDelete = (event: Event) => {
      event.stopPropagation();
      event.preventDefault();
      emit('change', '');
    };

    // 监听缩放比例
    watch(
      () => size.value,
      newVal => {
        setImgSize(newVal);
      },
    );

    return {
      ns,
      c,
      size,
      uploadUrl,
      headers,
      files,
      limit,
      dialogVisible,
      tempFiles,
      uploadTag,
      defaultAvatar,
      previewImgContainer,
      upload1,
      upload2,
      topImgRef,
      croparea,
      bottomImgRef,
      cropImgPreviewUrl,
      largePreviewImgref,
      smallPreviewImgref,
      smallPreviewImgContainer,
      largePreviewImgContainer,
      overturn,
      onDownload,
      onError,
      onRemove,
      onSuccess,
      beforeUpload,
      openDialog,
      renderFooter,
      overlimit,
      onTempSuccess,
      mouseMove,
      mouseUp,
      mouseDown,
      mouseOut,
      imgload,
      onChange,
      onDelete,
    };
  },

  render() {
    return (
      <div class={this.ns.b()} title='仅支持JPEG,JPG,PNG类型文件'>
        <div
          class={[
            this.ns.e('avatar-preview'),
            this.ns.is('is-rect', this.c.cutShape === 'IDRECT'),
          ]}
        >
          {this.files && this.files.length > 0 ? (
            <img src={this.files[0].url} alt='' />
          ) : (
            <img src={this.defaultAvatar} alt='' />
          )}
          <div
            class={[
              this.ns.em('avatar-preview', 'upicon'),
              this.ns.is('readonly', this.readonly),
            ]}
          >
            <el-upload
              ref='upload1'
              file-list={this.tempFiles}
              action={this.uploadUrl}
              headers={this.headers}
              multiple={false}
              auto-upload={false}
              limit={1}
              show-file-list={false}
              accept={'images/*'}
              on-change={this.onChange}
              on-exceed={this.overlimit}
              onSuccess={this.openDialog}
              {...this.$attrs}
            >
              {{
                trigger: () => {
                  return (
                    <div class={this.ns.em('avatar-preview', 'avatar-action')}>
                      <i
                        class='fa fa-camera change-avatar'
                        aria-hidden='true'
                      ></i>
                      {this.files && this.files.length > 0 ? (
                        <i
                          class='fa fa-trash'
                          aria-hidden='true'
                          onClick={this.onDelete}
                        ></i>
                      ) : null}
                    </div>
                  );
                },
              }}
            </el-upload>
          </div>
        </div>
        <el-dialog
          v-model={this.dialogVisible}
          title='上传头像'
          class={this.ns.e('upload-dialog')}
          width={660}
        >
          {{
            default: () => {
              return (
                <div class={this.ns.em('upload-dialog', 'content')}>
                  <div class={this.ns.em('upload-dialog', 'content-left')}>
                    <div
                      class={this.ns.em('upload-dialog', 'content-left-img')}
                    >
                      {this.tempFiles && this.tempFiles.length > 0 ? (
                        <div class='img-container' ref='previewImgContainer'>
                          <div class='img-bottom-container'>
                            <img
                              ref='bottomImgRef'
                              class='img-bottom'
                              src={this.tempFiles[0].url}
                              alt=''
                            />
                          </div>
                          <div class='img-modal'></div>

                          <div
                            class='img-croparea'
                            ref='croparea'
                            onMousemove={this.mouseMove}
                            onMousedown={this.mouseDown}
                            onMouseup={this.mouseUp}
                            onMouseout={this.mouseOut}
                          >
                            <img
                              ref='topImgRef'
                              class='img-top'
                              src={this.tempFiles[0].url}
                              onLoad={this.imgload}
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div
                      class={this.ns.em('upload-dialog', 'content-left-slider')}
                    >
                      <el-slider
                        v-model={this.size}
                        max={2}
                        min={1}
                        step={0.1}
                      ></el-slider>
                      <div
                        class={this.ns.em('upload-dialog', 'overturn')}
                        onClick={this.overturn}
                      >
                        <svg
                          viewBox='0 0 16 16'
                          xmlns='http://www.w3.org/2000/svg'
                          height='1em'
                          width='1em'
                          preserveAspectRatio='xMidYMid meet'
                          focusable='false'
                          fill='currentColor'
                        >
                          <g
                            id='atsnormal/rotate-right'
                            stroke-width='1'
                            fill-rule='evenodd'
                          >
                            <g
                              id='ats编组'
                              transform='translate(.954 .346)'
                              fill-rule='nonzero'
                            >
                              <path
                                d='M12.5 5.761a1.7 1.7 0 0 1 1.694 1.553l.006.147v6.093a1.7 1.7 0 0 1-1.553 1.694l-.147.006H5.164a1.7 1.7 0 0 1-1.694-1.553l-.006-.147V7.461a1.7 1.7 0 0 1 1.553-1.694l.147-.006H12.5zm0 1.2H5.164a.5.5 0 0 0-.492.41l-.008.09v6.093a.5.5 0 0 0 .41.492l.09.008H12.5a.5.5 0 0 0 .492-.41l.008-.09V7.461a.5.5 0 0 0-.5-.5zM7.288 0a.33.33 0 0 1 .202.07l2.05 1.598a.33.33 0 0 1-.003.523l-2.05 1.55a.33.33 0 0 1-.53-.263v-.951l-2.175-.006C2.518 2.507 1.37 3.725 1.2 6.399A.6.6 0 1 1 0 6.323c.21-3.277 1.852-5.02 4.788-5.002l2.168.009v-1a.33.33 0 0 1 .33-.33z'
                                id='ats形状结合'
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      class={this.ns.em('upload-dialog', 'content-left-action')}
                    >
                      <el-upload
                        ref='upload2'
                        file-list={this.files}
                        action={this.uploadUrl}
                        headers={this.headers}
                        multiple={false}
                        limit={1}
                        on-exceed={this.overlimit}
                        on-change={this.onChange}
                        show-file-list={false}
                        accept={'images/*'}
                        auto-upload={false}
                        onSuccess={this.onTempSuccess}
                        onError={this.onError}
                        {...this.$attrs}
                      >
                        {{
                          trigger: () => {
                            return (
                              <span class='upload-action'>
                                <i class='fa fa-upload' aria-hidden='true'></i>
                                <span class='upload-avatar'>上传头像</span>
                              </span>
                            );
                          },
                        }}
                      </el-upload>
                      <span class='img-tip'>最佳尺寸 120 x 120 像素</span>
                    </div>
                  </div>
                  <div class={this.ns.em('upload-dialog', 'content-right')}>
                    <div
                      class={this.ns.em('upload-dialog', 'content-right-tip')}
                    >
                      预览
                    </div>
                    <div
                      class={this.ns.em(
                        'upload-dialog',
                        'content-right-large-preview',
                      )}
                    >
                      <div
                        class={[
                          this.ns.em(
                            'upload-dialog',
                            'preview-container--large',
                          ),
                          this.ns.is('is-rect', this.c.cutShape === 'IDRECT'),
                        ]}
                        ref='largePreviewImgContainer'
                      >
                        {this.tempFiles && this.tempFiles.length > 0 ? (
                          <img
                            ref='largePreviewImgref'
                            src={this.tempFiles[0].url}
                            alt=''
                          />
                        ) : null}
                      </div>
                      <div class='size-tip'>120 x 120</div>
                    </div>
                    <div
                      class={this.ns.em(
                        'upload-dialog',
                        'content-right-small-preview',
                      )}
                    >
                      <div
                        class={[
                          this.ns.em(
                            'upload-dialog',
                            'preview-container--small',
                          ),
                          this.ns.is('is-rect', this.c.cutShape === 'IDRECT'),
                        ]}
                        ref='smallPreviewImgContainer'
                      >
                        {this.tempFiles && this.tempFiles.length > 0 ? (
                          <img
                            ref='smallPreviewImgref'
                            src={this.tempFiles[0].url}
                            alt=''
                          />
                        ) : null}
                      </div>
                      <div class='size-tip'>36 x 36</div>
                    </div>
                  </div>
                </div>
              );
            },
            footer: () => {
              return this.renderFooter();
            },
          }}
        </el-dialog>
      </div>
    );
  },
});
