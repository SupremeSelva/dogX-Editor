export const FEATURE_CATEGORIES = {
  TEXT_EDITS: 'text-edits',
  PAGE_EDITS: 'page-edits',
  INSERT: 'insert',
  DOWNLOAD: 'download',
  FIND_REPLACE: 'find-replace',
} as const

export const TEXT_EDIT_FEATURES = {
  CHARACTER_FORMATTING: {
    BOLD: 'bold',
    ITALIC: 'italic',
    UNDERLINE: 'underline',
    STRIKETHROUGH: 'strikethrough',
    SUPERSCRIPT: 'superscript',
    SUBSCRIPT: 'subscript',
    FONT_SIZE: 'fontSize',
    FONT_FAMILY: 'fontFamily',
    TEXT_COLOR: 'textColor',
    HIGHLIGHT: 'highlight',
  },
  PARAGRAPH_FORMATTING: {
    ALIGN_LEFT: 'alignLeft',
    ALIGN_CENTER: 'alignCenter',
    ALIGN_RIGHT: 'alignRight',
    ALIGN_JUSTIFY: 'alignJustify',
    LINE_SPACING: 'lineSpacing',
    PARAGRAPH_SPACING: 'paragraphSpacing',
    INDENT_LEFT: 'indentLeft',
    INDENT_RIGHT: 'indentRight',
    INDENT_FIRST_LINE: 'indentFirstLine',
    INDENT_HANGING: 'indentHanging',
  },
  LISTS: {
    NUMBERED: 'numberedList',
    BULLETED: 'bulletedList',
    CHECKLIST: 'checklist',
    MULTILEVEL: 'multilevelList',
  },
  STYLES: {
    NORMAL: 'normal',
    TITLE: 'title',
    SUBTITLE: 'subtitle',
    HEADING_1: 'heading1',
    HEADING_2: 'heading2',
    HEADING_3: 'heading3',
    HEADING_4: 'heading4',
    HEADING_5: 'heading5',
    HEADING_6: 'heading6',
  },
  TOOLS: {
    FORMAT_PAINTER: 'formatPainter',
    CLEAR_FORMAT: 'clearFormat',
    UPPERCASE: 'uppercase',
    LOWERCASE: 'lowercase',
    TITLE_CASE: 'titleCase',
  },
} as const

export const PAGE_EDIT_FEATURES = {
  LAYOUT: {
    MARGIN_TOP: 'marginTop',
    MARGIN_BOTTOM: 'marginBottom',
    MARGIN_LEFT: 'marginLeft',
    MARGIN_RIGHT: 'marginRight',
    ORIENTATION_PORTRAIT: 'orientationPortrait',
    ORIENTATION_LANDSCAPE: 'orientationLandscape',
    PAPER_SIZE: 'paperSize',
    COLUMNS: 'columns',
  },
  STRUCTURE: {
    PAGE_BREAK: 'pageBreak',
    SECTION_BREAK_NEXT: 'sectionBreakNext',
    SECTION_BREAK_CONTINUOUS: 'sectionBreakContinuous',
    COLUMN_BREAK: 'columnBreak',
  },
  ELEMENTS: {
    HEADER: 'header',
    FOOTER: 'footer',
    PAGE_NUMBER: 'pageNumber',
    WATERMARK: 'watermark',
  },
  VISUALS: {
    PAGE_BACKGROUND: 'pageBackground',
    PAGE_BORDER: 'pageBorder',
    LINE_NUMBERS: 'lineNumbers',
  },
  NAVIGATION: {
    OUTLINE: 'outline',
    NAVIGATION_PANE: 'navigationPane',
  },
} as const

export const INSERT_FEATURES = {
  MEDIA: {
    IMAGE: 'image',
    DRAWING: 'drawing',
    CHART: 'chart',
  },
  TABLES: {
    TABLE: 'table',
    INSERT_ROW: 'insertRow',
    INSERT_COLUMN: 'insertColumn',
    DELETE_ROW: 'deleteRow',
    DELETE_COLUMN: 'deleteColumn',
  },
  REFERENCES: {
    FOOTNOTE: 'footnote',
    ENDNOTE: 'endnote',
    CITATION: 'citation',
    BIBLIOGRAPHY: 'bibliography',
    TABLE_OF_CONTENTS: 'tableOfContents',
  },
  COMPONENTS: {
    HORIZONTAL_LINE: 'horizontalLine',
    EMOJI: 'emoji',
    DROPDOWN: 'dropdown',
    DATE: 'date',
  },
  ADVANCED: {
    SPECIAL_CHAR: 'specialChar',
    EQUATION: 'equation',
    LINK: 'link',
    BOOKMARK: 'bookmark',
    COMMENT: 'comment',
    SEPARATOR: 'separator',
    CODEBLOCK: 'codeblock',
    LATEX: 'latex',
    CONTROL_TEXT: 'controlText',
    CONTROL_SELECT: 'controlSelect',
    CONTROL_DATE: 'controlDate',
    CONTROL_CHECKBOX: 'controlCheckbox',
    CONTROL_RADIO: 'controlRadio',
    CHECKBOX: 'checkbox',
    RADIO: 'radio',
    BLOCK: 'block',
  },
} as const

export const DOWNLOAD_FEATURES = {
  DOCX: 'docx',
  ODT: 'odt',
  RTF: 'rtf',
  PDF: 'pdf',
  TXT: 'txt',
  HTML: 'html',
  EPUB: 'epub',
} as const

export const FIND_REPLACE_FEATURES = {
  FIND: 'find',
  FIND_NEXT: 'findNext',
  FIND_PREVIOUS: 'findPrevious',
  REPLACE: 'replace',
  REPLACE_ALL: 'replaceAll',
  MATCH_CASE: 'matchCase',
  MATCH_WHOLE_WORD: 'matchWholeWord',
  USE_REGEX: 'useRegex',
} as const
