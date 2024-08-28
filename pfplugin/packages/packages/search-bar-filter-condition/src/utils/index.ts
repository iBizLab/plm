import { ValueOP } from '@ibiz-template/runtime';

// 过滤操作模式
export const FilterModes = [
  { valueOP: ValueOP.EQ, label: '等于(=)' },
  { valueOP: ValueOP.NOT_EQ, label: '不等于(<>)' },
  { valueOP: ValueOP.GT, label: '大于(>)' },
  { valueOP: ValueOP.GT_AND_EQ, label: '大于等于(>=)' },
  { valueOP: ValueOP.LT, label: '小于(<)' },
  { valueOP: ValueOP.LT_AND_EQ, label: '小于等于(<=)' },
  { valueOP: ValueOP.IS_NULL, label: '值为空(Nil)' },
  { valueOP: ValueOP.IS_NOT_NULL, label: '值不为空(NotNil)' },
  { valueOP: ValueOP.IN, label: '值在范围中(In)' },
  { valueOP: ValueOP.NOT_IN, label: '值不在范围中(NotIn)' },
  { valueOP: ValueOP.LIKE, label: '文本包含(%)' },
  { valueOP: ValueOP.LIFT_LIKE, label: '文本左包含(%#)' },
  { valueOP: ValueOP.RIGHT_LIKE, label: '文本右包含(#%)' },
  { valueOP: ValueOP.EXISTS, label: '存在(EXISTS)' },
  { valueOP: ValueOP.NOT_EXISTS, label: '不存在(NOTEXISTS)' },
];

/** 不需要编辑器的OP */
export const ExcludeOPs: string[] = [
  ValueOP.IS_NULL,
  ValueOP.IS_NOT_NULL,
  ValueOP.EXISTS,
  ValueOP.NOT_EXISTS,
];
