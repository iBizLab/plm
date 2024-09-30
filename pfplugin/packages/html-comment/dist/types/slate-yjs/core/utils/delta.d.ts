import * as Y from 'yjs';
import { DeltaInsert, InsertDelta } from '../types';
export declare function normalizeInsertDelta(delta: InsertDelta): InsertDelta;
export declare function yTextToInsertDelta(yText: Y.XmlText): InsertDelta;
export declare function getInsertLength({ insert }: DeltaInsert): number;
export declare function getInsertDeltaLength(delta: InsertDelta): number;
export declare function sliceInsertDelta(delta: InsertDelta, start: number, length: number): InsertDelta;
