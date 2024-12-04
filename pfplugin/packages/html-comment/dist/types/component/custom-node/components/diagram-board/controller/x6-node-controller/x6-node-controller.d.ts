import { X6CellController } from '../x6-cell-controller/x6-cell-controller';
/**
 * 节点控制器
 *
 * @export
 * @class X6NodeController
 */
export declare class X6NodeController extends X6CellController {
    private ns;
    nodeModel: IParams;
    opt: IParams;
    protected items: IData[];
    private nodeKey;
    protected x6Ctrl: IParams;
    constructor(g: IParams, x6Ctrl: IParams, nodeModel: IParams);
    onInit(): void;
    register(): void;
    /**
     * 加载
     */
    load(): void;
    /**
     * 新增节点数据
     */
    addNodes(items: IData[]): IData[];
    createMindMapCell(item: IData): IData[];
    getMindMapCellItem(item: IData): IData;
    getStyle(width: number, height: number): IParams;
    createReadonlyNode(data: IParams): HTMLElement;
    createEditNode(data: IParams): HTMLElement;
    onNodeEditBlur(e: MouseEvent, data: IParams): void;
    prevent(e: MouseEvent): void;
}
