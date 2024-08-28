import {
  IAppDEService,
  IDEMethodCreateOptions,
  IDEMethodProvider,
  Method,
} from '@ibiz-template/runtime';
import { IAppDataEntity, IAppDEMethod } from '@ibiz/model-core';
import { ReviewContentSort } from './review-content-sort';

/**
 * 实体行为插件适配器
 * @export
 * @class DeActionMethodPluginProvider
 * @implements {IDEMethodProvider}
 */
export class DeActionMethodPluginProvider implements IDEMethodProvider {
  create(
    service: IAppDEService,
    entity: IAppDataEntity,
    method: IAppDEMethod,
    opts: IDEMethodCreateOptions,
  ): Method {
    return new ReviewContentSort(service, entity, method, opts.localMode);
  }
}
