import * as Y from 'yjs';
import { SlateNode } from '@wangeditor/editor';
import { NODE_MAPPER } from './node';
import { TEXT_MAPPER } from './text';
import { ApplyFunc, OpMapper } from './types';
import { Operation } from '../types';

const NOOP = (): void => {};

const opMappers: OpMapper = {
  ...TEXT_MAPPER,
  ...NODE_MAPPER,

  set_selection: NOOP,
};

export function applySlateOp(
  sharedRoot: Y.XmlText,
  slateRoot: SlateNode,
  op: Operation,
): void {
  const apply = opMappers[op.type] as ApplyFunc<typeof op>;
  if (!apply) {
    throw new Error(`Unknown operation: ${op.type}`);
  }

  apply(sharedRoot, slateRoot, op);
}
