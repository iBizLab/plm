import { HttpResponse } from '@ibiz-template/core';
import { FetchMethod, IDataEntity } from '@ibiz-template/runtime';
export declare class ReviewContentSort extends FetchMethod {
    exec(context: IContext, params?: IData | IData[], params2?: IParams, header?: IData): Promise<HttpResponse<IDataEntity[]>>;
}
