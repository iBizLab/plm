import { RelativeRange } from './types';
import {
  CursorEditor,
  CursorState,
  CursorStateChangeEvent,
  RemoteCursorChangeEventListener,
  withCursors,
  withMarkdown,
  withNormalize,
  WithCursorsOptions,
  withYHistory,
  WithYHistoryOptions,
  withYjs,
  WithYjsOptions,
  YHistoryEditor,
  YjsEditor,
} from './plugins';
import { slateNodesToInsertDelta, yTextToSlateElement } from './utils/convert';
import {
  relativePositionToSlatePoint,
  relativeRangeToSlateRange,
  slatePointToRelativePosition,
  slateRangeToRelativeRange,
} from './utils/position';

export type {
  RemoteCursorChangeEventListener,
  CursorStateChangeEvent,
  CursorState,
  RelativeRange,
  WithCursorsOptions,
  WithYHistoryOptions,
  WithYjsOptions,
};

export {
  withYjs,
  withMarkdown,
  withNormalize,
  YjsEditor,
  // History plugin
  withYHistory,
  YHistoryEditor,
  // Base cursor plugin
  CursorEditor,
  withCursors,
  // Utils
  yTextToSlateElement,
  slateNodesToInsertDelta,
  slateRangeToRelativeRange,
  relativeRangeToSlateRange,
  slatePointToRelativePosition,
  relativePositionToSlatePoint,
};
