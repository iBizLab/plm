import { ITreeGridState } from '@ibiz-template/runtime';
export interface INumberTreeGridState extends ITreeGridState {
    /**
     * 已加载的节点map
     *
     * @type {Map<string, any>}
     * @memberof INumberTreeGridState
     */
    nodeLoadedMap: Map<string, any>;
}
