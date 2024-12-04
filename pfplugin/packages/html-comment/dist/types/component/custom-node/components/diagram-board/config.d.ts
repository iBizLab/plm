import { MindMapData } from './interface';
declare const icons: {
    add: string;
};
/**
 * 思维导图默认绘制数据
 */
declare const mindMapData: () => MindMapData[];
/**
 * 工具栏绘制数据
 */
declare const topToolBars: () => IData[];
export { icons, mindMapData, topToolBars };
