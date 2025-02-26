/* eslint-disable no-template-curly-in-string */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-lonely-if */
import { useNamespace } from '@ibiz-template/vue3-util';
import { defineComponent, PropType, Ref, ref, nextTick, watch } from 'vue';
import { createUUID } from 'qx-util';
import {
  IHtmlItem,
  IPanelRawItem,
  IRawItemContainer,
  ITextItem,
} from '@ibiz/model-core';
import Prism from 'prismjs';
import './rawitem.scss';
import {
  ExpBarControlController,
  ITreeController,
  ScriptFactory,
} from '@ibiz-template/runtime';
import { RawEditorController } from '../controller';

export const AnchoHtmlNavBar = defineComponent({
  name: 'AnchoHtmlNavBar',
  props: {
    type: {
      type: String,
      required: false,
    },
    controller: {
      type: Object as PropType<RawEditorController>,
    },
    content: {
      type: [String, Object, Number],
    },
    rawItem: {
      type: Object as PropType<IRawItemContainer>,
      required: false,
    },
    title: {
      type: String,
    },
    parseScript: {
      type: String,
    },
  },
  emits: ['itemClick'],
  setup(props, { emit }) {
    const ns = useNamespace('ancho-html-nav-bar');
    let rawItem = null;
    let contentType = '';
    if (props.rawItem) {
      rawItem = props.rawItem.rawItem!;
      contentType = rawItem.contentType!;
    }
    const rawItemType = ref(props.type || contentType || '');
    const rawItemContent: Ref<string | number | IData> = ref('');
    let sysImage = null;
    if (contentType === 'IMAGE') {
      sysImage = (rawItem as IPanelRawItem).sysImage;
    }
    // 传入内容
    if (contentType === 'RAW' || contentType === 'HTML') {
      if (contentType === 'RAW') {
        rawItemType.value = 'TEXT';
        rawItemContent.value = (rawItem as ITextItem).caption!;
      } else {
        rawItemContent.value = (rawItem as IHtmlItem).content!;
      }
    } else if (
      ['VIDEO', 'DIVIDER', 'INFO', 'WARNING', 'ERROR'].includes(contentType!)
    ) {
      // 暂不支持
      // content = rawContent;
    } else if (contentType === 'IMAGE' && sysImage) {
      rawItemContent.value = sysImage;
    }

    // 判断传入是否为图片路径
    const isImg = (imgUrl: string): boolean => {
      const reg =
        /^https?:|^http?:|(\.png|\.svg|\.jpg|\.png|\.gif|\.psd|\.tif|\.bmp|\.jpeg)/;
      return reg.test(imgUrl);
    };

    // 视频类型内容参数
    const playerParams = ref({
      id: createUUID(),
      path: '',
      mute: true,
      autoplay: true,
      replay: false,
      showcontrols: true,
    });

    // 分割线类型参数
    const dividerParams = ref({
      contentPosition: 'center',
      html: '',
    });

    // 类型参数
    const alertParams = ref({
      type: 'info',
      title: '',
      closeabled: true,
      showIcon: false,
    });

    // 文本类型显示值
    const rawItemText: Ref<string | number | IData> = ref('');

    // 目录是否收缩
    const isCollapse = ref(false);

    // html文本内容，按照标题级别（h1~h6）分组
    const htmlContent: Ref<any[]> = ref([]);

    // 当前选中锚点
    const selectAncho = ref('');

    // 预览图片集合
    const previewSrcList: Ref<string[]> = ref([]);

    // 预览的图片索引
    const previewImgIndex = ref(0);

    // 是否显示预览模态
    const showImg = ref(false);

    // 标题id集合，用来给观察者获取元素使用
    let titleIds: string[] = [];

    // 存放进入视口的id，用来确定当前能显示的标题
    let observerIds: string[] = [];

    // 没有标题就不显示锚点栏
    const showTitle = ref(false);

    /**
     * 解析 @ 人员
     *
     * @param {string} str
     * @return {*}  {string}
     */
    const getPanelItemCustomHtml = (value: string): string => {
      if (props.parseScript) {
        return ScriptFactory.execScriptFn(
          { value, controller: props.controller },
          props.parseScript,
          {
            singleRowReturn: true,
            isAsync: false,
          },
        ) as string;
      }
      return value
        .replace(
          /@{[^,]*,"name":"(.*?)"}/g,
          "<span class='comment-tag'>@$1</span>",
        )
        .replace(/@{[^,]*,name=(.*?)}/g, "<span class='comment-tag'>@$1</span>")
        .replace(
          /#{"id":"(.+?)","name":"(.+?)","identifier":"(.+?)","type":"(.+?)","icon":"((.|[\t\r\f\n\s])+?)"}/g,
          (match, id, name, identifier, type, icon) => {
            const tempIcon = icon.trim();
            const params = JSON.stringify({
              id,
              name,
              identifier,
              type,
            });
            return `<span markerClick='marker' params='${params}' class='comment-tag is-click'>${tempIcon} ${identifier} ${name}</span>`;
          },
        )
        .replace(
          /#{"id":"(.+?)","name":"(.+?)","identifier":"(.+?)","icon":"((.|[\t\r\f\n\s])+?)"}/g,
          "<span class='comment-tag'>$4 $3 $2</span>",
        )
        .replace(
          /#{id=(.+?),name=(.+?),identifier=(.+?),icon=((.|[\t\r\f\n\s])+?)}/g,
          "<span class='comment-tag'>$4 $3 $2</span>",
        );
    };

    /**
     * 解析emoji表情
     *
     * @param {string} value
     * @return {*}  {string}
     */
    const getEmojiCustomHtml = (value: string): string => {
      return value
        .replaceAll(/{"emoji":"(.+?)"}/g, (x, emoji) => {
          const tempVal = decodeURIComponent(atob(emoji));
          return `<span class="emoji-tag">${tempVal}</span>`;
        })
        .replaceAll(
          /<span\sdata-w-e-type="emoji"\sclass=['"]emoji['"]>(.+?)<\/span>/g,
          (x, emoji) => {
            const tempVal = decodeURIComponent(atob(emoji));
            return `<span data-w-e-type="emoji" class='emoji'>${tempVal}</span>`;
          },
        );
    };

    /**
     * 解析富文本插入项内容
     *
     * @param {string} value
     * @return {*}  {string}
     */
    const getInsertCustomHtml = (value: string): string => {
      return value
        .replaceAll(
          /<span\sdata-w-e-type="insert"\sclass=['"]insert['"]>(.+?)<\/span>/g,
          (x, insert) => {
            if (insert) {
              const data = JSON.parse(insert) as IData;
              Object.assign(data, {
                params: {
                  readonly: true,
                },
              });
              const dataValue = JSON.stringify(data);
              let content = '';
              switch (data.type) {
                case 'date':
                  content = `<span data-slate-inline="true"><date-elem data-value='${dataValue}'></date-elem></span>`;
                  break;
                case 'label':
                  content = `<span data-slate-inline="true"><label-elem data-value='${dataValue}'></label-elem></span>`;
                  break;
                case 'prompt-box':
                  content = `<p><prompt-box-elem data-value='${dataValue}'></prompt-box-elem></p>`;
                  break;
                case 'mind-map':
                  content = `<p><mind-map-elem data-value='${dataValue}'></mind-map-elem></p>`;
                  break;
                case 'audio':
                  content = `<p><audio-elem data-value='${dataValue}'></audio-elem></p>`;
                  break;
                case 'formula':
                  content = `<span data-slate-inline="true"><formula-elem data-value='${dataValue}'></formula-elem></span>`;
                  break;
                case 'files':
                  content = `<span data-slate-inline="true"><files-elem data-value='${dataValue}'></files-elem></span>`;
                  break;
                default:
                  content = '';
                  break;
              }
              return content;
            }
            return '';
          },
        )
        .replaceAll(
          /<layout-elem data-w-e-type="layout" class='layout'>(.+?)<\/layout-elem>/g,
          (x, insert) => {
            if (insert) {
              const data = JSON.stringify({
                params: {
                  readonly: true,
                },
              });
              return `<layout-elem class='layout' data-value='${data}'>${insert}</layout-elem>`;
            }
            return '';
          },
        )
        .replaceAll(
          /<layout-column-elem data-w-e-type="layout-column" class='layout-column'>(.+?)<\/layout-column-elem>/g,
          (x, insert) => {
            if (insert) {
              return `<layout-column-elem class='layout-column'>${insert}</layout-column-elem>`;
            }
            return '';
          },
        );
    };

    // 转换各类值操作
    const convertValue = (): void => {
      // 图片类型
      if (rawItemType.value === 'IMAGE') {
        if (typeof props.content === 'string') {
          if (isImg(props.content)) {
            rawItemContent.value = { imagePath: props.content };
          } else {
            rawItemContent.value = { cssClass: props.content };
          }
        }
      }

      // 文本类型
      if (
        [
          'TEXT',
          'HEADING1',
          'HEADING2',
          'HEADING3',
          'HEADING4',
          'HEADING5',
          'HEADING6',
          'PARAGRAPH',
          'HTML',
          'RAW',
        ].includes(rawItemType.value)
      ) {
        rawItemText.value = rawItemContent.value;
        if (typeof rawItemText.value === 'string') {
          const val = rawItemText.value;
          rawItemText.value = val
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;nbsp;/g, ' ')
            .replace(/&nbsp;/g, ' ');
          rawItemText.value = getEmojiCustomHtml(rawItemText.value);
          rawItemText.value = getInsertCustomHtml(rawItemText.value);
          rawItemText.value = getPanelItemCustomHtml(rawItemText.value);
        }
      }

      if (
        ['VIDEO', 'DIVIDER', 'INFO', 'WARNING', 'ERROR'].includes(
          rawItemType.value,
        )
      ) {
        if (rawItemContent.value) {
          let rawConfig = {};
          try {
            if (typeof rawItemContent.value === 'string') {
              // eslint-disable-next-line no-new-func
              const func = new Function(`return (${rawItemContent.value});`);
              rawConfig = func();
              switch (rawItemType.value) {
                case 'VIDEO':
                  Object.assign(playerParams.value, rawConfig);
                  break;
                case 'DIVIDER':
                  Object.assign(dividerParams.value, rawConfig);
                  break;
                case 'INFO':
                case 'WARNING':
                case 'ERROR':
                  alertParams.value.type =
                    rawItemType.value.toLocaleLowerCase();
                  Object.assign(alertParams.value, rawConfig);
                  break;
                default:
                  break;
              }
            }
          } catch {
            ibiz.log.error(
              ibiz.i18n.t('component.rawItem.errorConfig', {
                type: rawItemType.value,
              }),
            );
          }
        }
      }
    };

    /**
     * 计算选中标题
     * @returns
     */
    const computeSelectItem = (): void => {
      if (observerIds.length === 0) {
        return;
      }
      let targetIndex = titleIds.length;
      observerIds.forEach((id: string) => {
        const index = titleIds.indexOf(id);
        if (index > -1 && targetIndex > index) {
          targetIndex = index;
        }
      });
      selectAncho.value = titleIds[targetIndex];
    };

    // 创建 Intersection Observer 对象,用来同步右侧锚点
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 当元素进入视口时执行的操作
            if (entry.target && entry.target.id) {
              observerIds.push(entry.target.id);
            }
          } else {
            // 当元素离开视口时执行的操作
            if (entry.target && entry.target.id) {
              const index = observerIds.indexOf(entry.target.id);
              if (index >= 0) {
                observerIds.splice(index, 1);
              }
            }
          }
        });
        computeSelectItem();
      },
    );

    /**
     * 处理标题层级
     * @param content 被解析字符串
     * @param level 当前解析层级
     * @returns 当前层级解构后的子数组
     */
    const parsetTtleLevel = (
      content: string,
      level: number = 1,
    ): string[] | IData[] => {
      if (level > 6) return [content]; // 只解析h1到h6
      // 首先根据level去解析content,得到当前层级的title分组
      // 分组分为两部分，分别为内容分组以及标题分组
      const items: IData[] = [];

      // 根据当前层级进行分割
      const splitRegex = new RegExp(
        `<h${level}[\\s\\S]*?>[\\s\\S]*?<\\/h${level}>`,
        'g',
      );
      // 提取当前层级包裹的标题文字
      const extractRegex = new RegExp(
        `<h${level}[\\s\\S]*?>([\\s\\S]*?)<\\/h${level}>`,
        'g',
      );

      const tempTexts = content.split(splitRegex); // 根据当前层级进行分割
      const matches = content.match(extractRegex) || [];
      if (matches.length > 0) {
        showTitle.value = true;
      }

      for (let i = 0; i < tempTexts.length; i++) {
        const uuid = `title_${createUUID()}`;
        titleIds.push(uuid);
        items.push({
          id: uuid,
          title: matches[i - 1],
          level,
          children: parsetTtleLevel(tempTexts[i], level + 1),
        });
      }
      return items;
    };

    /**
     * 将html内容以标题级别分组
     */
    const parseHtml = (): void => {
      titleIds = [];
      observerIds = [];
      showTitle.value = false;
      htmlContent.value = [];
      previewSrcList.value = [];
      if (
        rawItemType.value === 'HTML' &&
        rawItemText.value &&
        typeof rawItemText.value === 'string'
      ) {
        const items =
          rawItemText.value.match(/src="([^"]+)"/g)?.map((item: string) => {
            return item.slice(5, -1);
          }) || [];
        previewSrcList.value = items;
        htmlContent.value = parsetTtleLevel(rawItemText.value, 1) as IData[];
      }
    };

    /**
     * 点击锚点跳转
     * @param id
     */
    const jumpAncho = (id: string): void => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    /**
     * 点击控制伸缩锚点目录
     */
    const changeCollapse = (): void => {
      isCollapse.value = !isCollapse.value;
    };

    /**
     * 绘制HTML内容
     * @param items
     * @returns
     */
    const renderHTMLContent = (items: IData[]): IData[] => {
      return items.map((item: IData) => {
        return [
          item.title ? <p id={item.id} v-html={item.title}></p> : null,
          item.children && item.children.length > 0 ? (
            renderHTMLContent(item.children)
          ) : (
            <p v-html={item} onClick={imgClick}></p>
          ),
        ];
      });
    };

    /**
     * 解析title，只截取文本
     * @param title
     * @returns
     */
    const parseTitle = (title: string): string => {
      const regex = />(.*?)</g;
      const matches = title.match(regex) || [];
      return matches
        .map((match: string) => {
          return match.slice(1, -1);
        })
        .join('');
    };

    /**
     * 绘制锚点列表
     * @param items
     */
    const renderAnchoList = (items: IData[]): IData[] => {
      return items.map((item: IData) => {
        return (
          <div class={[ns.bem('ancho', 'title-item', 'text')]}>
            {item.title ? (
              <p
                class={[
                  ns.bem('ancho', 'title-item', 'text-title'),
                  ns.bem('ancho', 'title-item', `text-${item.level}`),
                  ns.is('ancho-select', selectAncho.value === item.id),
                ]}
                title={parseTitle(item.title)}
                v-html={item.title}
                onClick={() => jumpAncho(item.id)}
              ></p>
            ) : null}
            {item.children && item.children.length > 0
              ? renderAnchoList(item.children)
              : null}
          </div>
        );
      });
    };

    /**
     * 监听键盘 esc 事件
     * @param event
     */
    const listenEsc = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' || event.keyCode === 27) {
        showImg.value = false;
        event.stopPropagation();
        event.preventDefault();
      }
    };

    /**
     * 图片点击
     * @param event
     */
    const imgClick = async (event: Event): Promise<void> => {
      if (
        event &&
        event.target instanceof HTMLElement &&
        (event.target.tagName === 'IMG' || event.target.tagName === 'A')
      ) {
        if (event.target.tagName === 'A') {
          const href = event.target.getAttribute('href') || '';
          if (href.startsWith('redirect://tree#')) {
            // 特殊链接，自定义解析，并阻止触发后续事件
            event.stopPropagation();
            event.preventDefault();
            const index = href.indexOf('#');
            if (index > -1) {
              const id = href.slice(index + 1);
              if (id) {
                const pviewController = (props.controller?.parent as IData).form
                  ?.view.parentView;
                if (pviewController) {
                  const treeexpbar: ExpBarControlController =
                    pviewController.getController('treeexpbar');
                  const currentNode =
                    treeexpbar.navStack[0] ||
                    treeexpbar?.xDataController.state.selectedData[0];
                  if (currentNode) {
                    // 先展开当前节点
                    const { _id } = currentNode;
                    await (
                      treeexpbar?.xDataController as ITreeController
                    ).expandNodeByKey([_id]);
                  }

                  const activeTarget =
                    treeexpbar?.xDataController.state.items.find(
                      (item: IData) => {
                        return item._deData?.srfkey === id;
                      },
                    );
                  if (activeTarget) {
                    treeexpbar.xDataController.setActive(activeTarget);
                    treeexpbar.xDataController.setSelection([activeTarget]);
                  }
                }
              }
            }
          }
        } else {
          // 图片触发点击事件
          event.stopPropagation();
          event.preventDefault();
          const url = event.target.getAttribute('src') || '';
          if (url) {
            const index = previewSrcList.value.indexOf(url);
            previewImgIndex.value = index;
          }
          showImg.value = true;
          // 开始监听esc键盘事件
          await nextTick();
          const imgEl = document.querySelector('.el-image-viewer__wrapper');
          if (imgEl) {
            (imgEl as any).addEventListener('keydown', listenEsc);
          }
        }
      }
    };

    /**
     * 关闭图片预览模态
     */
    const closeImgPreview = (): void => {
      showImg.value = false;
    };

    // 项点击事件
    const handleClick = async (e: MouseEvent) => {
      const clickValue = (e.target as HTMLElement).getAttribute('markerClick');
      const params = (e.target as HTMLElement).getAttribute('params');
      if (!clickValue || !params) {
        e.stopPropagation();
        return;
      }
      emit('itemClick', e, JSON.parse(params));
    };

    /**
     * 观察title的状态，与锚点列表联动
     */
    const observerTitle = async (): Promise<void> => {
      observer.disconnect();
      await nextTick();
      // 要观察的目标元素
      titleIds.forEach((title: string) => {
        const targetElement = document.querySelector(`#${title}`);
        if (targetElement) {
          // 开始观察目标元素
          observer.observe(targetElement);
        }
      });
    };

    const parseCodeBlock = async () => {
      await nextTick();
      Prism.highlightAll();
    };

    convertValue();
    parseHtml();

    watch(
      () => props.content,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          rawItemContent.value = newVal as string | number;
          convertValue();
          parseHtml();
          observerTitle();
          parseCodeBlock();
        }
      },
      {
        immediate: true,
      },
    );

    return {
      ns,
      rawItemText,
      playerParams,
      dividerParams,
      alertParams,
      rawItemType,
      rawItemContent,
      htmlContent,
      isCollapse,
      previewSrcList,
      selectAncho,
      showImg,
      previewImgIndex,
      showTitle,
      jumpAncho,
      changeCollapse,
      renderHTMLContent,
      renderAnchoList,
      closeImgPreview,
      imgClick,
      handleClick,
    };
  },
  render() {
    const renderContent = (): JSX.Element | null => {
      if (this.rawItemType === 'IMAGE') {
        return (
          <i-biz-icon
            class={[this.ns.e('image')]}
            icon={this.rawItemContent}
          ></i-biz-icon>
        );
      }
      if (this.rawItemType === 'TEXT' || this.rawItemType === 'RAW') {
        return <span class={this.ns.e('text')}>{this.rawItemText}</span>;
      }
      if (this.rawItemType === 'HEADING1') {
        return <h1 class={this.ns.e('h1')}>{this.rawItemText}</h1>;
      }
      if (this.rawItemType === 'HEADING2') {
        return <h2 class={this.ns.e('h2')}>{this.rawItemText}</h2>;
      }
      if (this.rawItemType === 'HEADING3') {
        return <h3 class={this.ns.e('h3')}>{this.rawItemText}</h3>;
      }
      if (this.rawItemType === 'HEADING4') {
        return <h4 class={this.ns.e('h4')}>{this.rawItemText}</h4>;
      }
      if (this.rawItemType === 'HEADING5') {
        return <h5 class={this.ns.e('h5')}>{this.rawItemText}</h5>;
      }
      if (this.rawItemType === 'HEADING6') {
        return <h6 class={this.ns.e('h6')}>{this.rawItemText}</h6>;
      }
      if (this.rawItemType === 'PARAGRAPH') {
        return <p class={this.ns.e('paragraph')}>{this.rawItemText}</p>;
      }
      if (this.rawItemType === 'HTML') {
        return (
          <div class={this.ns.e('paragraph')}>
            <div class={this.ns.em('paragraph', 'html-content')}>
              {this.renderHTMLContent(this.htmlContent)}
            </div>
            {this.showTitle ? (
              <div class={this.ns.em('paragraph', 'ancho-container')}>
                <div
                  class={[
                    this.ns.em('paragraph', 'ancho'),
                    this.ns.b('ancho'),
                    this.ns.is('ancho-collapse', this.isCollapse),
                  ]}
                >
                  <div
                    class={this.ns.be('ancho', 'directory')}
                    title={this.title}
                  >
                    <i
                      class='fa fa-sitemap'
                      aria-hidden='true'
                      onClick={this.changeCollapse}
                      title={this.isCollapse ? '展开' : '收起'}
                    ></i>
                    {this.isCollapse ? null : (
                      <span class={this.ns.bem('ancho', 'directory', 'title')}>
                        {this.title || '目录'}
                      </span>
                    )}
                  </div>
                  <div class={this.ns.be('ancho', 'title-item')}>
                    {this.renderAnchoList(this.htmlContent)}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        );
      }
      if (this.rawItemType === 'VIDEO') {
        return (
          <div class={this.ns.e('video')}>
            <video
              id={this.playerParams.id}
              src={this.playerParams.path}
              autoplay={this.playerParams.autoplay}
              controls={this.playerParams.showcontrols}
              loop={this.playerParams.replay}
              muted={this.playerParams.mute}
            >
              <source src={this.playerParams.path} type='video/mp4' />
              <source src={this.playerParams.path} type='video/ogg' />
              <source src={this.playerParams.path} type='video/webm' />
              {ibiz.i18n.t('component.rawItem.noSupportVideo')}
            </video>
          </div>
        );
      }
      if (this.rawItemType === 'DIVIDER') {
        return (
          <el-divider content-position={this.dividerParams.contentPosition}>
            <span v-html={this.dividerParams.html}></span>
          </el-divider>
        );
      }
      if (
        this.rawItemType === 'INFO' ||
        this.rawItemType === 'WARNING' ||
        this.rawItemType === 'ERROR'
      ) {
        return (
          <el-alert
            title={this.alertParams.title}
            type={this.alertParams.type}
            show-icon={this.alertParams.showIcon}
            closable={this.alertParams.closeabled}
          ></el-alert>
        );
      }
      if (this.rawItemType === 'MARKDOWN') {
        return (
          <iBizMarkDown value={this.content} disabled={true}></iBizMarkDown>
        );
      }
      if (['PLACEHOLDER'].includes(this.rawItemType)) {
        return null;
      }
      return null;
    };

    return (
      <div class={this.ns.b()} onClick={this.handleClick}>
        {renderContent()}

        {this.showImg ? (
          <el-image-viewer
            urlList={this.previewSrcList}
            initial-index={this.previewImgIndex}
            hide-on-click-modal={true}
            onClose={this.closeImgPreview}
          ></el-image-viewer>
        ) : null}
      </div>
    );
  },
});
