import * as Y from 'yjs';
export declare function assertDocumentAttachment<T extends Y.AbstractType<any>>(sharedType: T): asserts sharedType is T & {
    doc: NonNullable<T['doc']>;
};
