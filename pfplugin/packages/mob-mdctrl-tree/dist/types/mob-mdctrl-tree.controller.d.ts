import { ControlVO, MDCtrlController, MDCtrlLoadParams } from '@ibiz-template/runtime';
import { IMobMdCtrlTreeState } from './mob-md-ctrl-tree.state';
/**
 * 多数据列表树（移动端）
 *
 * @export
 * @class MobMDCtrlTreeController
 * @extends {MDCtrlController}
 */
export declare class MobMDCtrlTreeController extends MDCtrlController {
    state: IMobMdCtrlTreeState;
    /**
     * 值属性名称
     *
     * @private
     * @type {(string | undefined)}
     * @memberof MobMDCtrlTreeController
     */
    private valueField;
    /**
     * 父属性名称
     *
     * @private
     * @type {(string | undefined)}
     * @memberof MobMDCtrlTreeController
     */
    private parentField;
    /**
     * 仅展开条件
     * - 点击项满足条件时不触发激活，仅改变展开状态
     * @private
     * @type {IData}
     * @memberof MobMDCtrlTreeController
     */
    private onlyExpand;
    /**
     * 初始化state的属性
     *
     * @protected
     * @memberof MobMDCtrlTreeController
     */
    protected initState(): void;
    /**
     * 生命周期-创建完成
     *
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof MobMDCtrlTreeController
     */
    protected onCreated(): Promise<void>;
    /**
     * 部件加载数据行为 重写
     * - 默认合并 srfshowmode 参数
     * @param {MDCtrlLoadParams} [args={}]
     * @return {*}  {Promise<IData[]>}
     * @memberof MobMDCtrlTreeController
     */
    load(args?: MDCtrlLoadParams): Promise<IData[]>;
    /**
     * 计算节点数据
     *
     * @memberof MobMDCtrlTreeController
     */
    calcNodes(): void;
    /**
     * 部件加载后处理
     *
     * @param {MDCtrlLoadParams} args
     * @param {ControlVO[]} items
     * @return {*}  {Promise<IData[]>}
     * @memberof MobMDCtrlTreeController
     */
    afterLoad(args: MDCtrlLoadParams, items: ControlVO[]): Promise<IData[]>;
    /**
     * 行单击
     *
     * @param {IData} data
     * @param {MouseEvent} [event]
     * @return {*}  {Promise<void>}
     * @memberof MobMDCtrlTreeController
     */
    onRowClick(data: IData, event?: MouseEvent): Promise<void>;
}
