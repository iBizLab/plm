import { ValueOP } from '@ibiz-template/runtime';
import { IDatePicker, IDropDownList, IEditor, IPicker } from '@ibiz/model-core';
export declare const TypeToOPs: Record<string, ValueOP[]>;
export declare const ExcludeOPs: ValueOP[];
export declare const TypeToEditor: Record<string, IEditor | IDropDownList | IPicker | IDatePicker>;
export declare const FilterModes: {
    valueOP: ValueOP;
    label: string;
}[];
