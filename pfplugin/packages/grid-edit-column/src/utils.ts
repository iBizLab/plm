type EditorEvt = {
  closePopover: () => void;
};

/**
 * 除特定编辑器外，其他编辑器抛值时应该关闭子
 * @description 此处定义的所有编辑器类型抛值时不关闭子
 */
const filterTypes = [
  'TEXTBOX',
  'PASSWORD',
  'TEXTAREA',
  'TEXTAREA_10',
  'NUMBER',
  'SOLIDER',
  'STEPPER',
];

export { filterTypes };
export type { EditorEvt };
