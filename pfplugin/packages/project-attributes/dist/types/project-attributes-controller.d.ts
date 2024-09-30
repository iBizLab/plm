import { EditFormController } from '@ibiz-template/runtime';
import { Ref } from 'vue';
export declare class ProjectAttributesController extends EditFormController {
    /**
     * jsonschema参数
     *
     * @author zhanghengfeng
     * @date 2024-07-05 15:07:47
     * @type {IParams}
     */
    jsonSchemaParams: IParams;
    calcFormDetail: (item: IData) => {
        allowEmpty: boolean;
        appDEFieldId: any;
        appId: string;
        capLanguageRes: {
            lanResTag: string;
            appId: string;
        };
        caption: any;
        codeName: any;
        dataType: number;
        detailStyle: string;
        detailType: string;
        editor: {
            style: {};
            appId: string;
            editable: boolean;
            editorType: string;
            halign: string;
            id: any;
            valign: string;
            valueType: string;
            wrapMode: string;
        };
        enableCond: number;
        id: any;
        labelPos: string;
        labelWidth: number;
        layoutPos: {
            colMD: number;
            layout: string;
            appId: string;
        };
        noPrivDisplayMode: number;
        showCaption: boolean;
    };
    /**
     * 初始化方法
     *
     * @author lxm
     * @date 2022-08-22 22:08:16
     * @protected
     * @returns {*}  {Promise<void>}
     */
    protected onCreated(): Promise<void>;
    protected onMounted(): Promise<void>;
    addAttributes: Ref<IData[]>;
    addAttributesFormDetail: IData[];
    calcColumnModelBySchema(json: IData, c: EditFormController): Promise<any>;
    /**
     * 根据jsonschema初始化自定义表格列
     * @author lxm
     * @date 2024-01-02 04:41:23
     * @return {*}  {Promise<void>}
     */
    initByEntitySchema(): Promise<void>;
}
