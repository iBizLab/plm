import { Shape } from '@antv/x6';
import { Namespace } from '@ibiz-template/core';
import { X6CellController } from '../x6-cell-controller/x6-cell-controller';
import { HierarchyResult } from '../../interface';

/**
 * 节点控制器
 *
 * @export
 * @class X6NodeController
 */
export class X6NodeController extends X6CellController {
  private ns!: Namespace;

  nodeModel: IParams = {};

  opt: IParams = {};

  // 默认初始化数据
  protected items: IData[] = [] as IData[];

  private nodeKey: string;

  // 父控制器
  protected x6Ctrl: IParams;

  constructor(g: IParams, x6Ctrl: IParams, nodeModel: IParams) {
    super(g);
    this.nodeModel = nodeModel;
    this.x6Ctrl = x6Ctrl;
    this.nodeKey = this.nodeModel.nodeKey;
    this.ns = this.nodeModel.ns;
    this.register();
    this.init();
  }

  onInit(): void {
    super.onInit();
  }

  register(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;
    const { readonly } = this.nodeModel;
    Shape.HTML.register({
      effect: ['data'],
      ..._this.opt,
      shape: `mind-map-${_this.nodeKey}`,
      html(cell: IParams): HTMLDivElement {
        const data = cell.getData();
        const div = document.createElement('div');
        div.className = _this.ns.b('custom-html-node');
        if (!readonly) {
          div.onclick = (e: MouseEvent): void => {
            _this.prevent(e);
            _this.g.emit('mind-map:click', e, data);
          };
          div.ondblclick = (e: MouseEvent): void => {
            _this.prevent(e);
            _this.g.emit('mind-map:dblclick', e, data);
          };
          const addImgBox = document.createElement('div');
          addImgBox.innerHTML = `<svg t="1721380398285" class="add-node-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1711" width="1em" height="1em"><path d="M512 170.67c-23.56 0-42.67 19.1-42.67 42.67v256h-256c-23.56 0-42.67 19.1-42.67 42.67s19.1 42.67 42.67 42.67h256v256c0 23.56 19.1 42.67 42.67 42.67s42.67-19.1 42.67-42.67v-256h256c23.56 0 42.67-19.1 42.67-42.67s-19.1-42.67-42.67-42.67h-256v-256c0-23.57-19.11-42.67-42.67-42.67z" p-id="1712"></path></svg>`;
          addImgBox.className = _this.ns.be(
            'custom-html-node',
            'add-item-icon-box',
          );
          addImgBox.onclick = (e: MouseEvent): void => {
            _this.prevent(e);
            // 这里可以添加更多的事件处理逻辑
            _this.g.emit('mind-map:add-topic', e, data);
          };
          div.appendChild(addImgBox);
        }
        const readonlyDiv = _this.createReadonlyNode.bind(_this)(data);
        div.append(readonlyDiv);
        return div;
      },
    });

    // 监听节点双击事件,切换编辑态样式
    this.g.on('mind-map:dblclick', (e: MouseEvent, data: IParams) => {
      let { target } = e;
      let { parentNode } = target as HTMLElement;
      (parentNode as HTMLElement).classList.add('is-activated');
      const input = this.createEditNode(data);
      // eslint-disable-next-line no-shadow, @typescript-eslint/no-explicit-any
      input.onblur = (e: any): void => {
        this.prevent(e);
        this.onNodeEditBlur(e, data);
      };
      input.onclick = this.prevent;
      input.ondblclick = this.prevent;
      (parentNode as HTMLElement).appendChild(input);
      input!.focus();
      input!.focus();
      (input as IParams)!.setSelectionRange(0, data.label.length);
      (target as HTMLElement).remove();
      target = null;
      parentNode = null;
    });

    // 监听节点单击事件,设置选中样式
    this.g.on('mind-map:click', (e: MouseEvent) => {
      ((e.target as HTMLElement).parentNode as HTMLElement).classList.add(
        'is-activated',
      );
    });
  }

  /**
   * 加载
   */
  load(): void {
    const items = this.x6Ctrl.getData();
    this.items = this.initData(items);
    this.g.addNodes(this.addNodes(this.items));
  }

  /**
   * 新增节点数据
   */
  addNodes(items: IData[]): IData[] {
    const cells: IData[] = [];
    items.forEach((item: IData) => {
      if (item.data && item.data.shape === 'mind-map') {
        const mindMapCells = this.createMindMapCell(item);
        mindMapCells.forEach((item2: IData) => {
          cells.push(item2);
        });
      } else {
        cells.push(item);
      }
    });
    return cells;
  }

  // 创建思维导图项
  createMindMapCell(item: IData): IData[] {
    const cells = [] as IData[];
    if (item) {
      const { children } = item;
      cells.push(this.getMindMapCellItem(item));
      if (children && children?.length) {
        children.forEach((item2: HierarchyResult) => {
          cells.push(...this.createMindMapCell(item2));
        });
      }
    }
    return cells;
  }

  // 获取思维导图cell项
  getMindMapCellItem(item: IData): IData {
    const { data } = item;
    return {
      id: data.id,
      shape: `mind-map-${this.nodeKey}`,
      x: item.x,
      y: item.y,
      width: data.width,
      height: data.height,
      label: data.label,
      type: data.type,
      data,
      attrs: {
        body: {
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6,
        },
      },
    };
  }

  // 获取样式
  getStyle(width: number, height: number): IParams {
    return {
      width: `${width}px`,
      height: `${height}px`,
      lineHeight: `${height}px`,
    };
  }

  // 创建只读节点
  createReadonlyNode(data: IParams): HTMLElement {
    const { label, width, height } = data;
    const tempStyle = this.getStyle(width, height);
    const readonlyDiv = document.createElement('div');
    readonlyDiv.className = this.ns.be('custom-html-node', 'readonly-node');
    Object.assign(readonlyDiv.style, { ...tempStyle });
    readonlyDiv.textContent = label;
    if (`${label}`.length > 5) {
      readonlyDiv.title = label;
    }
    return readonlyDiv;
  }

  // 创建编辑节点
  createEditNode(data: IParams): HTMLElement {
    const input = document.createElement('input');
    input.setAttribute('value', data.label);
    input.setAttribute('type', 'text');
    Object.assign(input.style, {
      ...this.getStyle(data.width, data.height),
      textAlign: 'center',
      lineHeight: '100%',
    });
    input.className = this.ns.be('custom-html-node', 'edit-node');
    return input;
  }

  // 处理单个节点编辑完成后失焦
  onNodeEditBlur(e: MouseEvent, data: IParams): void {
    const target = e.target as HTMLElement;
    const value = (target as IParams).value || '';
    const parentNode = target.parentNode as HTMLElement;
    target.remove();
    const readonlyDiv = this.createReadonlyNode(data);
    readonlyDiv.textContent = value;
    this.g.emit('mind-map:blur', e, data, value);
    parentNode.appendChild(readonlyDiv);
  }

  // 阻止事件
  prevent(e: MouseEvent): void {
    e.stopPropagation();
    e.preventDefault();
  }
}
