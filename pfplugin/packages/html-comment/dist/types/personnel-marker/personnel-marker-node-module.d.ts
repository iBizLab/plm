import { IDomEditor, IModuleConf } from '@wangeditor/editor';
type EmptyText = {
    text: '';
};
export type PersonnelMarkerElement = {
    type: 'personnel-marker';
    data: IData;
    children: EmptyText[];
};
export declare const personnelMarkerModule: Partial<IModuleConf>;
export declare const personnelMarkerPlugin: <T extends IDomEditor>(editor: T) => any;
export {};
