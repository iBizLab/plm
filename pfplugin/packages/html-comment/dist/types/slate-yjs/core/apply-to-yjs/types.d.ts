import * as Y from 'yjs';
import { SlateNode } from '@wangeditor/editor';
import { Operation } from '../types';
export type ApplyFunc<O extends Operation = Operation> = (sharedRoot: Y.XmlText, slateRoot: SlateNode, op: O) => void;
export type OpMapper<O extends Operation = Operation> = {
    [K in O['type']]: O extends {
        type: K;
    } ? ApplyFunc<O> : never;
};
