import { MindMapData } from './mind-map-data';
export interface HierarchyResult {
    id: string;
    x: number;
    y: number;
    data: MindMapData;
    children?: HierarchyResult[];
}
