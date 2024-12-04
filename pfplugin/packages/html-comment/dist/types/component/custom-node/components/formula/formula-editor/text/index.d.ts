import Editor from '../editor/index';
declare class Text {
    editor: Editor;
    constructor(editor: Editor);
    /**
     * 初始化
     */
    init(): void;
    /**
     * 清空内容
     */
    clear(): void;
    /**
     * 设置/获取 text
     */
    text(): string;
    /**
     * 每一步操作，都实时保存选区范围
     */
    private _saveRange;
}
export default Text;
