import * as Y from 'yjs';
import {
  SlateEditor,
  SlateDescendant,
  SlatePoint,
  IDomEditor,
} from '@wangeditor/editor';
import { yTextToSlateElement } from '../utils/convert';
import {
  getStoredPosition,
  getStoredPositions,
  relativePositionToSlatePoint,
  removeStoredPosition,
  setStoredPosition,
  slatePointToRelativePosition,
} from '../utils/position';
import { assertDocumentAttachment } from '../utils/yjs';
import { Operation } from '../types';
import { applyYjsEvents } from '../apply-to-slate';
import { applySlateOp } from '../apply-to-yjs';

type LocalChange = {
  op: Operation;
  doc: SlateDescendant[];
  origin: unknown;
};

const DEFAULT_LOCAL_ORIGIN = Symbol('slate-yjs-operation');
const DEFAULT_POSITION_STORAGE_ORIGIN = Symbol('slate-yjs-position-storage');

const ORIGIN: WeakMap<SlateEditor, unknown> = new WeakMap();
const LOCAL_CHANGES: WeakMap<SlateEditor, LocalChange[]> = new WeakMap();
const CONNECTED: WeakSet<SlateEditor> = new WeakSet();

export type YjsEditor = IDomEditor & {
  sharedRoot: Y.XmlText;
  editorWindow: Window;
  localOrigin: unknown;
  positionStorageOrigin: unknown;

  applyRemoteEvents: (events: Y.YEvent<Y.XmlText>[], origin: unknown) => void;

  storeLocalChange: (op: Operation) => void;
  flushLocalChanges: () => void;

  isLocalOrigin: (origin: unknown) => boolean;

  connect: () => void;
  disconnect: () => void;
};

export const YjsEditor = {
  isYjsEditor(value: unknown): value is YjsEditor {
    return (
      SlateEditor.isEditor(value) &&
      (value as YjsEditor).sharedRoot instanceof Y.XmlText &&
      'localOrigin' in value &&
      'positionStorageOrigin' in value &&
      typeof (value as YjsEditor).applyRemoteEvents === 'function' &&
      typeof (value as YjsEditor).storeLocalChange === 'function' &&
      typeof (value as YjsEditor).flushLocalChanges === 'function' &&
      typeof (value as YjsEditor).isLocalOrigin === 'function' &&
      typeof (value as YjsEditor).connect === 'function' &&
      typeof (value as YjsEditor).disconnect === 'function'
    );
  },

  localChanges(editor: YjsEditor): LocalChange[] {
    return LOCAL_CHANGES.get(editor) ?? [];
  },

  applyRemoteEvents(
    editor: YjsEditor,
    events: Y.YEvent<Y.XmlText>[],
    origin: unknown,
  ): void {
    editor.applyRemoteEvents(events, origin);
  },

  storeLocalChange(editor: YjsEditor, op: Operation): void {
    editor.storeLocalChange(op);
  },

  flushLocalChanges(editor: YjsEditor): void {
    editor.flushLocalChanges();
  },

  connected(editor: YjsEditor): boolean {
    return CONNECTED.has(editor);
  },

  connect(editor: YjsEditor): void {
    editor.connect();
  },

  disconnect(editor: YjsEditor): void {
    editor.disconnect();
  },

  isLocal(editor: YjsEditor): boolean {
    return editor.isLocalOrigin(YjsEditor.origin(editor));
  },

  origin(editor: YjsEditor): unknown {
    const origin = ORIGIN.get(editor);
    return origin !== undefined ? origin : editor.localOrigin;
  },

  withOrigin(editor: YjsEditor, origin: unknown, fn: () => void): void {
    const prev = YjsEditor.origin(editor);
    ORIGIN.set(editor, origin);
    fn();
    ORIGIN.set(editor, prev);
  },

  storePosition(editor: YjsEditor, key: string, point: SlatePoint): void {
    const { sharedRoot, positionStorageOrigin: locationStorageOrigin } = editor;
    assertDocumentAttachment(sharedRoot);

    const position = slatePointToRelativePosition(sharedRoot, editor, point);

    sharedRoot.doc?.transact(() => {
      setStoredPosition(sharedRoot, key, position);
    }, locationStorageOrigin);
  },

  removeStoredPosition(editor: YjsEditor, key: string): void {
    const { sharedRoot, positionStorageOrigin: locationStorageOrigin } = editor;
    assertDocumentAttachment(sharedRoot);

    sharedRoot.doc?.transact(() => {
      removeStoredPosition(sharedRoot, key);
    }, locationStorageOrigin);
  },

  position(editor: YjsEditor, key: string): SlatePoint | null | undefined {
    const position = getStoredPosition(editor.sharedRoot, key);
    if (!position) {
      return undefined;
    }

    return relativePositionToSlatePoint(editor.sharedRoot, editor, position);
  },

  storedPositionsRelative(
    editor: YjsEditor,
  ): Record<string, Y.RelativePosition> {
    return getStoredPositions(editor.sharedRoot);
  },
};

export type WithYjsOptions = {
  autoConnect?: boolean;

  // Origin used when applying local slate operations to yjs
  localOrigin?: unknown;

  // Origin used when storing positions
  positionStorageOrigin?: unknown;
};

/**
 * withYjs
 * - 在slate-yjs的基础上新增editorWindow参数 用于计算光标位置
 * @export
 * @template T
 * @param {T} editor
 * @param {Y.XmlText} sharedRoot
 * @param {Window} editorWindow
 * @param {WithYjsOptions} [{
 *     localOrigin,
 *     positionStorageOrigin,
 *     autoConnect = false,
 *   }={}]
 * @return {*}  {(T & YjsEditor)}
 */
export function withYjs<T extends SlateEditor>(
  editor: T,
  sharedRoot: Y.XmlText,
  editorWindow: Window,
  {
    localOrigin,
    positionStorageOrigin,
    autoConnect = false,
  }: WithYjsOptions = {},
): T & YjsEditor {
  const e = editor as T & YjsEditor;

  e.sharedRoot = sharedRoot;
  e.editorWindow = editorWindow;
  e.localOrigin = localOrigin ?? DEFAULT_LOCAL_ORIGIN;
  e.positionStorageOrigin =
    positionStorageOrigin ?? DEFAULT_POSITION_STORAGE_ORIGIN;

  e.applyRemoteEvents = (events, origin): void => {
    YjsEditor.flushLocalChanges(e);

    SlateEditor.withoutNormalizing(e, () => {
      YjsEditor.withOrigin(e, origin, () => {
        applyYjsEvents(e.sharedRoot, e, events);
      });
    });
  };

  e.isLocalOrigin = (origin: unknown): boolean => origin === e.localOrigin;

  const handleYEvents = (
    events: Y.YEvent<Y.XmlText>[],
    transaction: Y.Transaction,
  ): void => {
    if (e.isLocalOrigin(transaction.origin)) {
      return;
    }

    YjsEditor.applyRemoteEvents(e, events, transaction.origin);
  };

  let autoConnectTimeoutId: ReturnType<typeof setTimeout> | null = null;
  if (autoConnect) {
    autoConnectTimeoutId = setTimeout(() => {
      autoConnectTimeoutId = null;
      YjsEditor.connect(e);
    });
  }

  e.connect = (): void => {
    if (YjsEditor.connected(e)) {
      throw new Error('already connected');
    }

    e.sharedRoot.observeDeep(handleYEvents);
    const content = yTextToSlateElement(e.sharedRoot);
    e.children = content.children;
    CONNECTED.add(e);

    SlateEditor.normalize(editor, { force: true });
    if (!editor.operations.length) {
      editor.onChange();
    }
  };

  e.disconnect = (): void => {
    if (autoConnectTimeoutId) {
      clearTimeout(autoConnectTimeoutId);
    }

    YjsEditor.flushLocalChanges(e);
    e.sharedRoot.unobserveDeep(handleYEvents);
    CONNECTED.delete(e);
  };

  e.storeLocalChange = (op): void => {
    LOCAL_CHANGES.set(e, [
      ...YjsEditor.localChanges(e),
      { op, doc: editor.children, origin: YjsEditor.origin(e) },
    ]);
  };

  e.flushLocalChanges = (): void => {
    assertDocumentAttachment(e.sharedRoot);
    const localChanges = YjsEditor.localChanges(e);
    LOCAL_CHANGES.delete(e);

    // Group local changes by origin so we can apply them in the correct order
    // with the correct origin with a minimal amount of transactions.
    const txGroups: LocalChange[][] = [];
    localChanges.forEach(change => {
      const currentGroup = txGroups[txGroups.length - 1];
      if (currentGroup && currentGroup[0].origin === change.origin) {
        return currentGroup.push(change);
      }

      txGroups.push([change]);
    });

    txGroups.forEach(txGroup => {
      assertDocumentAttachment(e.sharedRoot);

      e.sharedRoot.doc?.transact(() => {
        txGroup.forEach(change => {
          assertDocumentAttachment(e.sharedRoot);
          applySlateOp(e.sharedRoot, { children: change.doc }, change.op);
        });
      }, txGroup[0].origin);
    });
  };

  const { apply, onChange } = e;
  e.apply = (op): void => {
    if (YjsEditor.connected(e) && YjsEditor.isLocal(e)) {
      YjsEditor.storeLocalChange(e, op);
    }

    apply(op);
  };

  e.onChange = (): void => {
    if (YjsEditor.connected(e)) {
      YjsEditor.flushLocalChanges(e);
    }

    onChange();
  };

  return e;
}
