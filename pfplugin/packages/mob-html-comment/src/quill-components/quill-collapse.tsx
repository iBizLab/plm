/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */
import {
  defineComponent,
  nextTick,
  onMounted,
  ref,
  watch,
  onBeforeUnmount,
} from 'vue';
import {
  getHtmlProps,
  useNamespace,
  useUIStore,
} from '@ibiz-template/vue3-util';
import Quill from 'quill';
import { MobCommentController } from '../mob-comment.controller';
import './quill-collapse.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IBizQuillCollapse: any = defineComponent({
  name: 'IBizQuillCollapse',
  props: {
    ...getHtmlProps<MobCommentController>(),
    showCollapse: {
      type: Boolean,
    },
    defaultHeight: {
      type: Number,
      default: 200,
    },
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const ns = useNamespace('quill-preview');
    const c: MobCommentController = props.controller;

    const editorRef = ref(null);

    const lang = ibiz.i18n.getLang();

    // 编辑器对象
    let quill: Quill | null = null;

    // 预览图片路径
    const previewImage = ref('');

    // 伸缩内容高度
    const collapseHeight = ref('auto');

    // 显示伸缩按钮
    const showCollapseBtn = ref(false);

    const { zIndex } = useUIStore();
    const modalZIndex = zIndex.increment();

    const init = () => {
      if (!editorRef.value) {
        return;
      }
      quill = new Quill(editorRef.value, {
        theme: 'bubble',
        modules: c.modules,
        readOnly: true,
        placeholder: c.placeHolder,
      });
      if (c.valueMode === 'text') {
        quill.setText(props.value || '');
      }
    };

    // 重置伸缩高度
    const resetCollapseHeight = () => {
      if (props.showCollapse && editorRef.value) {
        // 收缩时
        const height = (editorRef.value as HTMLElement).offsetHeight;
        // 内容高度低于设置的默认高度时,拿内容高度作为伸缩高度
        if (height < props.defaultHeight) {
          collapseHeight.value = `${height}px`;
          showCollapseBtn.value = false;
        } else {
          collapseHeight.value = `${props.defaultHeight}px`;
          showCollapseBtn.value = true;
        }
      }
    };

    // 监听img加载情况
    const watchHtmlImages = async (
      container: HTMLElement | null,
    ): Promise<void> => {
      if (!container) return;
      const images = container.querySelectorAll('img');
      const curCollapseHeight = container.offsetHeight;
      let totalHeight = curCollapseHeight > 42 ? curCollapseHeight : 42; // 模拟有文字内容时的高度或者没文字内容时的边距高度
      // 创建一个数组来存储每个图片加载完成的 Promise
      const imageLoadPromises: Promise<void>[] = [];
      images.forEach(image => {
        const loadPromise = new Promise<void>(resolve => {
          const onLoad = () => {
            const height = image.offsetHeight;
            totalHeight += height;
            resolve();
          };

          image.addEventListener('load', onLoad);

          // 在元素对象上存储事件处理函数，便于后续移除
          // eslint-disable-next-line no-param-reassign
          (image as IParams)._onLoad = onLoad;
        });
        imageLoadPromises.push(loadPromise);
      });

      // 等待所有图片加载完成
      await Promise.all(imageLoadPromises);

      if (totalHeight > props.defaultHeight) {
        collapseHeight.value = `${props.defaultHeight}px`;
        showCollapseBtn.value = true;
      } else if (totalHeight > curCollapseHeight) {
        collapseHeight.value = `${totalHeight}px`;
      }
    };

    /** 销毁img监听 */
    const removeImageLoadListeners = (container: HTMLElement | null) => {
      if (!container) return;
      const images = container.querySelectorAll('img');
      images?.forEach((image: IParams) => {
        if (image._onLoad) {
          image.removeEventListener('load', image._onLoad);
          // eslint-disable-next-line no-param-reassign
          delete image._onLoad;
        }
      });
    };

    onMounted(() => {
      init();
      nextTick(() => {
        resetCollapseHeight();
        watchHtmlImages(editorRef.value);
      });
    });

    onBeforeUnmount(() => {
      removeImageLoadListeners(editorRef.value);
    });

    const handleClick = () => {
      emit('edit');
    };

    const handlePreviewClose = () => {
      previewImage.value = '';
    };

    const handleContentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target && target.tagName === 'IMG') {
        previewImage.value = (target as IData).src;
      }
    };

    // 点击伸缩按钮
    const onClick = () => {
      // isCollapse.value = !isCollapse.value;
      emit('collapse', !props.isCollapse);
      resetCollapseHeight();
    };

    // 绘制伸缩按钮
    const renderCollapseBtn = () => {
      return (
        <div class={ns.b('collapse-btn')} onClick={onClick}>
          <span>
            {props.isCollapse
              ? ibiz.i18n.t('editor.html.expand')
              : ibiz.i18n.t('editor.html.collapse')}
          </span>
          {props.isCollapse && <ion-icon name='caret-down-outline'></ion-icon>}
          {!props.isCollapse && <ion-icon name='caret-up-outline'></ion-icon>}
        </div>
      );
    };

    watch(
      () => props.value,
      () => {
        resetCollapseHeight();
      },
      {
        immediate: true,
      },
    );

    return {
      ns,
      lang,
      editorRef,
      previewImage,
      collapseHeight,
      showCollapseBtn,
      modalZIndex,
      handleClick,
      handleContentClick,
      handlePreviewClose,
      renderCollapseBtn,
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
          this.showCollapse ? this.ns.m('show-collapse') : '',
          this.ns.is('collapse', this.isCollapse),
        ]}
        style={`--default-height: ${this.collapseHeight}`}
      >
        <div ref='editorRef' onClick={this.handleContentClick}>
          {this.controller.valueMode === 'html' ? (
            <div v-html={this.value}></div>
          ) : null}
        </div>
        {!this.readonly && !this.disabled ? (
          <div onClick={this.handleClick} class={this.ns.e('edit')}>
            <ion-icon name='create-outline'></ion-icon>
          </div>
        ) : null}
        {this.showCollapse && this.showCollapseBtn && this.renderCollapseBtn()}
        <van-popup
          class={this.ns.e('image-popup')}
          show={!!this.previewImage}
          close-on-popstate={true}
          z-index={this.modalZIndex}
          onClose={this.handlePreviewClose}
        >
          <iBizPreviewImage url={this.previewImage}></iBizPreviewImage>
        </van-popup>
      </div>
    );
  },
});

export default IBizQuillCollapse;
