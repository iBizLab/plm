// 原Slate custom-types 文件，wangEditor没有导出这些类型
type ExtendableTypes =
  | 'Editor'
  | 'Element'
  | 'Text'
  | 'Selection'
  | 'Range'
  | 'Point'
  | 'Operation'
  | 'InsertNodeOperation'
  | 'InsertTextOperation'
  | 'MergeNodeOperation'
  | 'MoveNodeOperation'
  | 'RemoveNodeOperation'
  | 'RemoveTextOperation'
  | 'SetNodeOperation'
  | 'SetSelectionOperation'
  | 'SplitNodeOperation';

export interface CustomTypes {
  [key: string]: unknown;
}

export type ExtendedType<
  K extends ExtendableTypes,
  B,
> = unknown extends CustomTypes[K] ? B : CustomTypes[K];
