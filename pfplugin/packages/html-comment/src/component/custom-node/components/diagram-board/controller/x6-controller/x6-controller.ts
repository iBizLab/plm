import { Graph } from '@antv/x6';
import { clone } from '@ibiz-template/core';
import {
  ControllerEvent,
  EventBase,
  IComponentEvent,
  IViewController,
} from '@ibiz-template/runtime';
import { X6NodeController } from '../x6-node-controller/x6-node-controller';
import { X6LinkController } from '../x6-link-controller/x6-link-controller';
import { MindMapData } from '../../interface';

interface IComponentEventP extends IComponentEvent {
  /**
   * 自身的准备工作完成(如模型加载，各种初始化，init结束)
   *
   * @author lxm
   * @date 2022-09-21 16:09:28
   */
  onNodeBlur: {
    event: EventBase;
    emitArgs: undefined;
  };
}

/**
 * 负责对x6的图形进行操作
 *
 * @export
 * @class X6Controller
 */
export class X6Controller {
  /**
   * 事件触发器
   * @author lxm
   * @date 2023-04-25 09:36:31
   * @type {ControllerEvent}
   */
  evt: ControllerEvent<IComponentEventP> = new ControllerEvent(
    this.getEventArgs.bind(this),
  );

  /**
   * 当前x6图形实例
   *
   * @type {IParams}
   */
  readonly g: IParams;

  /**
   * 节点控制器
   *
   * @type {X6NodeController}
   */
  readonly node: X6NodeController;

  /**
   * 连线适控制器
   *
   * @type {X6LinkController}
   */
  readonly link: X6LinkController;

  /**
   * 默认配置参数
   */
  protected defaultParams: IParams;

  // 备份数据
  protected backupData: IData[] = [] as IData[];

  // 选中数据
  selection: IData[] = [];

  /**
   * 初始化聚焦
   */
  internalFocus: boolean = false;

  // 默认初始化数据
  defaultData: IData[] = [] as IData[];

  /**
   * x6图形配置
   *
   * @protected
   * @type {IParams}
   */
  protected graphOptions: IParams = {
    connecting: {
      // 表示使用节点或图形元素上定义的锚点作为连接点
      connectionPoint: 'anchor',
    },
    interacting: {
      // 禁止拖动
      nodeMovable: false,
    },
    // 平移
    panning: true,
  };

  /**
   * Creates an instance of X6Controller.
   * @param {IPanelController} panel
   * @param {HTMLElement} dom
   * @param {X6Options} [defaultParams={}]
   */
  constructor(
    dom: HTMLElement,
    graphOptions: IParams = {} as IParams,
    defaultParams: IParams = {},
  ) {
    this.defaultParams = defaultParams;
    this.defaultData = defaultParams.defaultData;
    this.backupData = clone(this.defaultData);
    Object.assign(this.graphOptions, graphOptions);
    this.graphOptions.container = dom;
    // 滚轮缩放
    this.graphOptions.mousewheel = {
      enabled: true,
      global: true,
      modifiers: ['ctrl', 'meta'],
      zoomAtMousePosition: true,
      guard(e: WheelEvent): boolean {
        if (
          ((e.target as HTMLElement)?.parentNode as HTMLElement)?.id ===
          `diagram-${defaultParams.nodeKey}`
        ) {
          return true;
        }
        return false;
      },
    };

    this.g = new Graph(this.graphOptions);
    this.link = new X6LinkController(this.g, this, {});
    this.node = new X6NodeController(this.g, this, {
      nodeKey: this.defaultParams.nodeKey,
      ns: this.defaultParams.ns,
      readonly: this.defaultParams.readonly,
    });
    if (!this.defaultParams.readonly) {
      // 禁用画布平移功能
      this.g.disablePanning();
    }

    this.init();
  }

  /**
   * 获取事件的基础参数
   * @author lxm
   * @date 2023-04-25 11:03:44
   * @return {*}  {Omit<EventBase, 'eventName'>}
   */
  getEventArgs(): Omit<EventBase, 'eventName'> {
    return {
      context: {} as IContext,
      params: {},
      data: [],
      targetName: '',
      view: {} as IViewController,
    };
  }

  /**
   * 初始化
   */
  protected init(): void {
    this.initEvents();
    this.load();
  }

  /**
   * 初始化事件
   */
  protected initEvents(): void {
    // 新增通知
    this.g.on('mind-map:add-topic', (e: MouseEvent, data: IParams) => {
      const { id } = data;
      const item = this.addChildNode(id);
      if (item) {
        this.refresh();
      }
    });

    // 监听节点单击事件,设置选中
    this.g.on('mind-map:click', (e: MouseEvent, data: IParams) => {
      this.clearSelection();
      this.selection = [{ data, node: (e.target as HTMLElement).parentNode }];
      ((e.target as HTMLElement).parentNode as HTMLElement).classList.add(
        'is-activated',
      );
      this.internalFocus = true;
    });

    // 监听节点编辑失焦事件，更新数据
    this.g.on(
      'mind-map:blur',
      (e: MouseEvent, data: IParams, value: string) => {
        // TODO 如果更新失败，则将值还原
        if (!this.updateNode(data.id, value || '')) {
          this.refresh();
        }

        this.internalFocus = false;
        this.evt.emit('onNodeBlur', undefined);
      },
    );
  }

  /**
   * 清除选中
   */
  clearSelection(): void {
    if (this.selection && this.selection.length > 0) {
      this.selection[0].node.classList.remove('is-activated');
      this.selection[0].node = null;
      this.selection = [];
    }
  }

  /**
   * 新增子节点
   */
  addChildNode(id: string): MindMapData | void | null {
    const res = this.findItem(this.backupData, id);
    const dataItem = res?.node;
    if (dataItem) {
      const length = dataItem.children ? dataItem.children.length : 0;
      const item: MindMapData = {
        id: `${id}-${length + 1}`,
        type: 'topic-child',
        shape: 'mind-map',
        label: ``,
        width: 120,
        height: 30,
      };
      if (item) {
        if (dataItem.children) {
          dataItem.children.push(item);
        } else {
          Object.assign(dataItem, { children: [item] });
        }
        this.defaultData = clone(this.backupData);
        return item;
      }
    }
    return null;
  }

  /**
   * 更新节点
   */
  updateNode(id: string, newText: string): boolean {
    const res = this.findItem(this.backupData, id);
    const dataItem = res?.parent;
    if (dataItem && dataItem.children) {
      const { children } = dataItem;
      const index = children.findIndex(item => item.id === id);
      children[index].label = newText;
      this.defaultData = clone(this.backupData);
      return true;
    }
    return false;
  }

  // 遍历item
  findItem(
    defaultData: IData[],
    id: string,
  ): {
    parent: MindMapData | null;
    node: MindMapData | null;
  } | null {
    let obj = null;
    if (defaultData && defaultData.length) {
      defaultData.forEach((item: IData) => {
        if (item.id === id) {
          obj = {
            parent: null,
            node: item,
          };
        }
        if (item.children && item.children) {
          const temObj = this.findItem(item.children, id);
          if (temObj) {
            obj = {
              parent: temObj.parent || item,
              node: temObj.node,
            };
          }
        }
      });
    }
    return obj;
  }

  /**
   * 删除节点
   */
  removeNode(id: string): boolean {
    const res = this.findItem(this.backupData, id);
    const dataItem = res?.parent;
    if (dataItem && dataItem.children) {
      const { children } = dataItem;
      const index = children.findIndex(item => item.id === id);
      children.splice(index, 1);
      this.defaultData = clone(this.backupData);
      return true;
    }
    return false;
  }

  /**
   * 改变是否可平移状态
   */
  togglePanning(): void {
    this.g.togglePanning();
  }

  /**
   * 禁用平移
   */
  disablePanning(): void {
    this.g.disablePanning();
  }

  /**
   * 初始化
   */
  getData(): IData {
    return this.defaultData;
  }

  /**
   * 加载
   */
  async load(): Promise<void> {
    this.node.load();
    this.link.load();
    this.g.centerContent();
  }

  /**
   * 刷新
   */
  async refresh(): Promise<void> {
    this.g.clearCells({ refresh: true });
    await this.load();
    // TODO 恢复画布平移位置
  }

  /**
   * 销毁
   */
  destroy(): void {
    this.g.dispose();
    this.node.destroy();
    this.link.destroy();
  }
}
