import { DomElement } from '../utils/dom-core';
import Editor from './index';
declare class Command {
    editor: Editor;
    constructor(editor: Editor);
    /**
     * 执行富文本操作的命令
     * @param value value
     */
    do(value?: string | DomElement): void;
    /**
     * 公式编辑输入处理
     * @param text 插入的字符串
     * @param isSeparator 是否是定义的分隔符
     */
    insert(text: string, isSeparator?: boolean): void;
    /**
     * 渲染数学公式
     */
    renderFormula(): void;
    /**
     * 插入 html 片段
     * @param html html字符串
     */
    private insertHtml;
    /**
     * 执行 document.execCommand
     * @param name name
     * @param value value
     */
    private execCommand;
    /**
     * 执行 document.queryCommandSupported
     * @param name name
     */
    queryCommandSupported(name: string): boolean;
}
export default Command;
