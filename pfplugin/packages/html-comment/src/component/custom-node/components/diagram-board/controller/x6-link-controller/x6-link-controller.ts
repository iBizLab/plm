import { Graph, Path } from '@antv/x6';
import { X6CellController } from '../x6-cell-controller/x6-cell-controller';
/**
 * 连线控制器
 *
 * @author chitanda
 * @date 2023-11-16 18:11:07
 * @export
 * @class X6LinkController
 */
export class X6LinkController extends X6CellController {
  /**
   * 连线模型
   */
  linkModel: IParams = {};

  /**
   * 连线配置参数
   */
  opt: IParams = {
    inherit: 'edge',
  };

  /**
   * 默认初始化数据
   */
  protected items: IData[] = [] as IData[];

  /**
   * 父控制器
   */
  protected x6Ctrl: IParams;

  constructor(g: IParams, x6Ctrl: IParams, linkModel: IParams = {}) {
    super(g);
    this.linkModel = linkModel;
    this.x6Ctrl = x6Ctrl;
    this.register();
  }

  protected onInit(): void {
    super.onInit();
  }

  protected register(): void {
    // 边注册
    Graph.registerEdge(
      'mind-map-edge',
      {
        connector: {
          name: 'mind-map',
        },
        attrs: {
          line: {
            targetMarker: '',
            stroke: 'var(--ibiz-color-primary)',
            strokeWidth: 2,
          },
        },
        zIndex: 0,
        ...this.opt,
      },
      true,
    );
    // 连接器注册
    Graph.registerConnector('mind-map-connector', this.MindMapConnector, true);
  }

  // 思维导图连接器计算
  MindMapConnector(sourcePoint: IParams, targetPoint: IParams): string {
    const hgap = Math.abs(targetPoint.x - sourcePoint.x);

    const path = new Path();
    path.appendSegment(Path.createSegment('M', sourcePoint.x, sourcePoint.y));
    path.appendSegment(Path.createSegment('L', sourcePoint.x, sourcePoint.y));
    const x1 =
      sourcePoint.x < targetPoint.x
        ? sourcePoint.x + hgap / 2
        : sourcePoint.x - hgap / 2;
    const y1 = sourcePoint.y;
    const x2 =
      sourcePoint.x < targetPoint.x
        ? targetPoint.x - hgap / 2
        : targetPoint.x + hgap / 2;
    const y2 = targetPoint.y;

    // 水平三阶贝塞尔曲线
    path.appendSegment(
      Path.createSegment('C', x1, y1, x2, y2, targetPoint.x, targetPoint.y),
    );

    return path.serialize();
  }

  load(): void {
    const items = this.x6Ctrl.getData();
    this.items = this.initData(items);
    const edges = this.addEdges(this.items);
    this.g.addEdges(edges);
  }

  /**
   * 新增节点数据
   */
  addEdges(items: IData[]): IData[] {
    const cells: IData[] = [];
    items.forEach((item: IData) => {
      if (item.data && item.data.shape === 'mind-map') {
        if (item.children && item.children.length) {
          cells.push(...this.handleMindMap(item));
        }
      } else {
        cells.push(item);
      }
    });
    return cells;
  }

  handleMindMap(item: IParams): IData[] {
    const cells: IData[] = [];
    if (item && item.children) {
      item.children.forEach((item2: IData) => {
        cells.push(this.createMinMapCell(item2, item));
        if (item2.children && item2.children) {
          cells.push(...this.handleMindMap(item2));
        }
      });
    }
    return cells;
  }

  createMinMapCell(item: IData, parentItem: IData): IData {
    if (item.data && item.data.shape === 'mind-map') {
      const { id } = item;
      return {
        shape: 'mind-map-edge',
        source: {
          cell: parentItem.id,
          anchor: {
            name: 'right',
            args: {
              dx: 0,
            },
          },
        },
        target: {
          cell: id,
          anchor: {
            name: 'left',
          },
        },
        connector: {
          name: 'mind-map-connector', // 使用自定义连接器
        },
        data: item,
      };
    }
    return item;
  }
}
