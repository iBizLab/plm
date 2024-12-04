export interface MindMapData {
    id: string;
    type: 'topic' | 'topic-child';
    shape: string;
    label: string;
    width: number;
    height: number;
    children?: MindMapData[];
}
