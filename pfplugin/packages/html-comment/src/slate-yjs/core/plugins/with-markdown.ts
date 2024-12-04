/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SlateEditor,
  SlateTransforms,
  SlateElement,
  SlateRange,
  SlateText,
  SlatePoint,
  DomEditor,
} from '@wangeditor/editor';
import { YjsEditor } from './with-yjs';

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function inlineRegex(trigger: string): RegExp {
  const escaped = escapeRegExp(trigger);
  return new RegExp(`(${escaped}).+?(${escaped})$`);
}

function blockRegex(trigger: string): RegExp {
  const escaped = escapeRegExp(trigger);
  return new RegExp(`^(${escaped})$`);
}

function createSetBlockApply(
  type: string,
): (editor: SlateEditor, range: SlateRange) => void {
  return (editor: SlateEditor, range: SlateRange) => {
    SlateTransforms.setNodes(editor, { type } as any, {
      match: n => SlateEditor.isBlock(editor, n),
      at: range,
    });
  };
}

function createSetInlineApply(
  type: string,
): (editor: SlateEditor, range: SlateRange) => void {
  return (editor: SlateEditor, range: SlateRange) => {
    const rangeRef = SlateEditor.rangeRef(editor, range);

    SlateTransforms.unwrapNodes(editor, {
      at: range,
      match: n => SlateEditor.isInline(editor, n),
      mode: 'all',
      split: true,
    });

    if (rangeRef.current) {
      SlateTransforms.insertNodes(
        editor,
        { text: ' ' },
        {
          match: SlateText.isText,
          at: SlateRange.end(rangeRef.current),
          select: true,
        },
      );
    }

    const targetRange = rangeRef.unref();
    if (targetRange) {
      SlateTransforms.wrapNodes(editor, { type, children: [] } as any, {
        at: targetRange,
        split: true,
      });
    }
  };
}

function createSetMarkApply(
  key: string,
): (editor: SlateEditor, range: SlateRange) => void {
  return (editor: SlateEditor, range: SlateRange) => {
    SlateTransforms.insertNodes(
      editor,
      { text: ' ' },
      {
        match: SlateText.isText,
        at: SlateRange.end(range),
        select: true,
      },
    );
    SlateTransforms.setNodes(
      editor,
      { [key]: true },
      {
        match: SlateText.isText,
        at: range,
        split: true,
      },
    );
  };
}

const SHORTCUTS = [
  { trigger: blockRegex('#'), apply: createSetBlockApply('heading-one') },
  { trigger: blockRegex('##'), apply: createSetBlockApply('heading-two') },
  { trigger: blockRegex('>'), apply: createSetBlockApply('block-quote') },
  { trigger: inlineRegex('`'), apply: createSetInlineApply('inline-code') },
  { trigger: inlineRegex('**'), apply: createSetMarkApply('bold') },
  { trigger: inlineRegex('__'), apply: createSetMarkApply('bold') },
  { trigger: inlineRegex('*'), apply: createSetMarkApply('italic') },
  { trigger: inlineRegex('_'), apply: createSetMarkApply('italic') },
  { trigger: inlineRegex('~~'), apply: createSetMarkApply('strikethrough') },
];

function before(
  editor: SlateEditor,
  at: SlatePoint,
  stringOffset: number,
): SlatePoint | undefined {
  if (at.offset >= stringOffset) {
    return { offset: at.offset - stringOffset, path: at.path };
  }

  const entry = SlateEditor.previous(editor, {
    at: at.path,
    match: SlateText.isText,
  });
  if (!entry) {
    return undefined;
  }

  const [node, path] = entry;
  return before(
    editor,
    { offset: node.text.length, path },
    stringOffset - at.offset,
  );
}

/**
 * 处理Markdown文件
 *
 * @export
 * @param {YjsEditor} editor
 * @return {*}  {YjsEditor}
 */
export function withMarkdown(editor: YjsEditor): YjsEditor {
  const { deleteBackward, insertText, isInline, insertBreak } = editor;

  editor.insertText = insert => {
    const { selection } = editor;

    if (insert !== ' ' || !selection || !SlateRange.isCollapsed(selection)) {
      return insertText(insert);
    }

    const { anchor } = selection;
    const block = SlateEditor.above(editor, {
      match: n => SlateEditor.isBlock(editor, n),
    });
    const path = block ? block[1] : [];
    const blockRange = { anchor, focus: SlateEditor.start(editor, path) };
    const beforeText = SlateEditor.string(editor, blockRange);

    for (const { trigger, apply } of SHORTCUTS) {
      const match = trigger.exec(beforeText);
      if (!match) {
        continue;
      }

      const [text, startText, endText] = match;
      SlateEditor.withoutNormalizing(editor, () => {
        const matchEnd = anchor;
        const endMatchStart =
          endText && before(editor, matchEnd, endText.length);
        const startMatchEnd =
          startText && before(editor, matchEnd, text.length - startText.length);
        const matchStart = before(editor, matchEnd, text.length);

        if (!matchEnd || !matchStart) {
          return;
        }

        const matchRangeRef = SlateEditor.rangeRef(editor, {
          anchor: matchStart,
          focus: matchEnd,
        });

        if (endMatchStart) {
          SlateTransforms.delete(editor, {
            at: { anchor: endMatchStart, focus: matchEnd },
          });
        }
        if (startMatchEnd) {
          SlateTransforms.delete(editor, {
            at: { anchor: matchStart, focus: startMatchEnd },
          });
        }

        const applyRange = matchRangeRef.unref();
        if (applyRange) {
          apply(editor, applyRange);
        }
      });

      return;
    }

    insertText(insert);
  };

  editor.insertBreak = () => {
    const { selection } = editor;

    const layoutNode = DomEditor.getSelectedNodeByType(editor, 'layout');
    if (layoutNode) {
      insertBreak();
      return;
    }
    if (selection) {
      const block = SlateEditor.above(editor, {
        match: n => SlateEditor.isBlock(editor, n),
      });
      const path = block ? block[1] : [];
      const end = SlateEditor.end(editor, path);
      const wasSelectionAtEnd = SlatePoint.equals(
        end,
        SlateRange.end(selection),
      );

      SlateTransforms.splitNodes(editor, { always: true });

      if (wasSelectionAtEnd) {
        SlateTransforms.unwrapNodes(editor, {
          match: n => SlateEditor.isInline(editor, n),
          mode: 'all',
        });
        SlateTransforms.setNodes(editor, { type: 'paragraph' } as any, {
          match: n => SlateEditor.isBlock(editor, n),
        });
        const marks = SlateEditor.marks(editor) ?? {};
        SlateTransforms.unsetNodes(editor, Object.keys(marks), {
          match: SlateText.isText,
        });
      }
    }
  };

  editor.deleteBackward = (...args) => {
    const layoutNode = DomEditor.getSelectedNodeByType(editor, 'layout');
    if (layoutNode) {
      deleteBackward(...args);
      return;
    }
    const { selection } = editor;

    if (selection && SlateRange.isCollapsed(selection)) {
      const match = SlateEditor.above(editor, {
        match: n => SlateEditor.isBlock(editor, n),
      });

      if (match) {
        const [block, path] = match;
        const start = SlateEditor.start(editor, path);

        if (
          !SlateEditor.isEditor(block) &&
          SlateElement.isElement(block) &&
          (block as any).type !== 'paragraph' &&
          SlatePoint.equals(selection.anchor, start)
        ) {
          const newProperties = {
            type: 'paragraph',
          };
          SlateTransforms.setNodes(editor, newProperties as any);
          return;
        }
      }

      deleteBackward(...args);
    }
  };

  editor.isInline = n =>
    (SlateElement.isElement(n) && (n as any).type === 'inline-code') ||
    isInline(n);

  return editor;
}
