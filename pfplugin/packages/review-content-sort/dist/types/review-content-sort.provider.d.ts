import { IAppDEService, IDEMethodCreateOptions, IDEMethodProvider, Method } from '@ibiz-template/runtime';
import { IAppDataEntity, IAppDEMethod } from '@ibiz/model-core';
/**
 * 实体行为插件适配器
 * @export
 * @class DeActionMethodPluginProvider
 * @implements {IDEMethodProvider}
 */
export declare class DeActionMethodPluginProvider implements IDEMethodProvider {
    create(service: IAppDEService, entity: IAppDataEntity, method: IAppDEMethod, opts: IDEMethodCreateOptions): Method;
}
