import { X6CellController } from '../x6-cell-controller/x6-cell-controller';
/**
 * 连线控制器
 *
 * @author chitanda
 * @date 2023-11-16 18:11:07
 * @export
 * @class X6LinkController
 */
export declare class X6LinkController extends X6CellController {
    /**
     * 连线模型
     */
    linkModel: IParams;
    /**
     * 连线配置参数
     */
    opt: IParams;
    /**
     * 默认初始化数据
     */
    protected items: IData[];
    /**
     * 父控制器
     */
    protected x6Ctrl: IParams;
    constructor(g: IParams, x6Ctrl: IParams, linkModel?: IParams);
    protected onInit(): void;
    protected register(): void;
    MindMapConnector(sourcePoint: IParams, targetPoint: IParams): string;
    load(): void;
    /**
     * 新增节点数据
     */
    addEdges(items: IData[]): IData[];
    handleMindMap(item: IParams): IData[];
    createMinMapCell(item: IData, parentItem: IData): IData;
}
