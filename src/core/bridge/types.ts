import type { IElement } from '../engine/interface/Element'
import type { RowFlex } from '../engine/dataset/enum/Row'
import type { ListType, ListStyle } from '../engine/dataset/enum/List'

/**
 * Editor command types that can be executed via the bridge
 */
export type EditorCommand =
  | 'undo'
  | 'redo'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikeout'
  | 'superscript'
  | 'subscript'
  | 'font'
  | 'fontSize'
  | 'color'
  | 'highlight'
  | 'align'
  | 'list'
  | 'insertTable'
  | 'insertImage'
  | 'insertHyperlink'
  | 'insertSeparator'
  | 'insertPageBreak'
  | 'insertControl'
  | 'insertCheckbox'
  | 'insertWatermark'
  | 'removeWatermark'
  | 'print'
  | 'search'
  | 'replace'
  | 'clearFormat';

/**
 * Editor state snapshot
 */
export interface EditorState {
  content: IElement[];
  selection: {
    startIndex: number;
    endIndex: number;
  };
  canUndo: boolean;
  canRedo: boolean;
}

/**
 * Selection formatting state
 */
export interface SelectionState {
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isStrikeout: boolean;
  fontSize: number;
  fontFamily: string;
  color: string;
  highlight: string | null;
}

/**
 * Content change event data
 */
export interface ContentChangeEvent {
  content: IElement[];
  wordCount: number;
}

/**
 * Page change event data
 */
export interface PageChangeEvent {
  pageCount: number;
}

/**
 * Cursor change event data
 */
export interface CursorChangeEvent {
  row: number;
  col: number;
}

/**
 * Command executed event data
 */
export interface CommandExecutedEvent {
  command: EditorCommand;
  payload?: any;
}

/**
 * Error event data
 */
export interface ErrorEvent {
  message: string;
  error: any;
}

/**
 * Editor ready event data
 */
export interface EditorReadyEvent {
  instance: any;
}

/**
 * All bridge events
 */
export interface EditorBridgeEvents {
  editorReady: EditorReadyEvent;
  contentChange: ContentChangeEvent;
  selectionChange: SelectionState;
  pageChange: PageChangeEvent;
  cursorChange: CursorChangeEvent;
  commandExecuted: CommandExecutedEvent;
  error: ErrorEvent;
}

/**
 * Command payloads for specific commands
 */
export interface CommandPayloads {
  font: string;
  fontSize: number;
  color: string;
  highlight: string;
  align: RowFlex;
  list: { type: ListType | null; style: ListStyle };
  insertTable: { rows: number; cols: number };
  insertImage: { value: string; width: number; height: number };
  insertHyperlink: { url: string; valueList: IElement[] };
  search: { keyword: string };
  replace: { keyword: string; replaceWith: string };
}
