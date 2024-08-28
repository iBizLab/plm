import { HttpResponse } from '@ibiz-template/core';
import { FetchMethod, IDataEntity } from '@ibiz-template/runtime';

export class ReviewContentSort extends FetchMethod {
  async exec(
    context: IContext,
    params?: IData | IData[],
    params2?: IParams,
    header?: IData,
  ): Promise<HttpResponse<IDataEntity[]>> {
    const res = await super.exec(context, params, params2, header);
    res.data.sort((a: IData, b: IData) => {
      if (a.test_case && b.test_case) {
        return a.test_case.identifier.localeCompare(b.test_case.identifier);
      }
      return -1;
    });
    return res;
  }
}
