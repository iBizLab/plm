import { YjsEditor } from './with-yjs';
/**
 * 规范化规则
 * - 当与其他用户协作时，应用更改的异步特性可能导致slate没有子节点的状态。呈现此状态将导致崩溃。为了避免这个问题，我们必须添加一个规范化规则来确保状态总是有效的。
 * @export
 * @param {YjsEditor} editor
 * @return {*}  {YjsEditor}
 */
export declare function withNormalize(editor: YjsEditor): YjsEditor;
