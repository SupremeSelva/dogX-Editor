import type Editor from '../engine'
import type { IEditorData, IEditorOption } from '../engine/interface/Editor'
import { EventEmitter } from './EventEmitter'
import type { 
  EditorBridgeEvents, 
  EditorCommand, 
  EditorState,
  SelectionState
} from './types'

/**
 * EditorBridge - Communication layer between React and Canvas Editor
 * 
 * This bridge isolates the canvas engine from React, enabling:
 * - Command execution from React components
 * - Event propagation from canvas to React state
 * - State synchronization between canvas and React
 * 
 * @example
 * ```tsx
 * const bridge = new EditorBridge();
 * bridge.init(containerRef.current, options);
 * bridge.on('contentChange', handleContentChange);
 * bridge.executeCommand('bold');
 * ```
 */
export class EditorBridge {
  private canvasInstance: Editor | null = null
  private eventEmitter: EventEmitter<EditorBridgeEvents>
  private isInitialized = false
  private commandQueue: Array<{ command: EditorCommand; payload?: any }> = []

  constructor() {
    this.eventEmitter = new EventEmitter<EditorBridgeEvents>()
  }

  /**
   * Initialize the canvas editor instance
   * 
   * @param container - HTML container element
   * @param data - Initial editor data
   * @param options - Editor configuration options
   */
  async init(
    container: HTMLDivElement,
    data: IEditorData,
    options?: IEditorOption
  ): Promise<void> {
    if (this.isInitialized) {
      console.warn('EditorBridge: Already initialized')
      return
    }

    try {
      // Dynamic import to avoid loading canvas engine until needed
      const { default: Editor } = await import('../engine')
      
      this.canvasInstance = new Editor(container, data, options)
      this.isInitialized = true
      
      // Set up canvas event listeners
      this.attachCanvasListeners()
      
      // Process queued commands
      this.processCommandQueue()
      
      // Notify React that editor is ready
      this.eventEmitter.emit('editorReady', { instance: this.canvasInstance })
      
      console.log('EditorBridge: Initialized successfully')
    } catch (error) {
      console.error('EditorBridge: Failed to initialize', error)
      this.eventEmitter.emit('error', { 
        message: 'Failed to initialize editor',
        error 
      })
      throw error
    }
  }

  /**
   * Execute a command on the canvas editor
   * 
   * @param command - Command name
   * @param payload - Optional command payload
   */
  executeCommand(command: EditorCommand, payload?: any): void {
    if (!this.canvasInstance || !this.isInitialized) {
      // Queue commands until editor is ready
      this.commandQueue.push({ command, payload })
      return
    }

    try {
      const commandApi = this.canvasInstance.command
      
      // Map command names to canvas API methods
      switch (command) {
        case 'undo':
          commandApi.executeUndo()
          break
        case 'redo':
          commandApi.executeRedo()
          break
        case 'bold':
          commandApi.executeBold()
          break
        case 'italic':
          commandApi.executeItalic()
          break
        case 'underline':
          commandApi.executeUnderline(payload)
          break
        case 'strikeout':
          commandApi.executeStrikeout()
          break
        case 'font':
          commandApi.executeFont(payload)
          break
        case 'fontSize':
          commandApi.executeSize(payload)
          break
        case 'color':
          commandApi.executeColor(payload)
          break
        case 'highlight':
          commandApi.executeHighlight(payload)
          break
        case 'align':
          commandApi.executeRowFlex(payload)
          break
        case 'list':
          commandApi.executeList(payload.type, payload.style)
          break
        case 'insertTable':
          commandApi.executeInsertTable(payload.rows, payload.cols)
          break
        case 'insertImage':
          commandApi.executeImage(payload)
          break
        case 'insertHyperlink':
          commandApi.executeHyperlink(payload)
          break
        case 'print':
          commandApi.executePrint()
          break
        case 'search':
          commandApi.executeSearch(payload)
          break
        case 'replace':
          commandApi.executeReplace(payload)
          break
        default:
          console.warn(`EditorBridge: Unknown command "${command}"`)
      }
      
      // Emit command executed event
      this.eventEmitter.emit('commandExecuted', { command, payload })
    } catch (error) {
      console.error(`EditorBridge: Error executing command "${command}"`, error)
      this.eventEmitter.emit('error', { 
        message: `Failed to execute command: ${command}`,
        error 
      })
    }
  }

  /**
   * Get current editor state
   * 
   * @returns Current editor state snapshot
   */
  getEditorState(): EditorState | null {
    if (!this.canvasInstance) return null

    try {
      const rangeManager = this.canvasInstance.command.getRangeManager()
      const range = rangeManager.getRange()
      
      return {
        content: this.canvasInstance.command.getValue(),
        selection: {
          startIndex: range.startIndex,
          endIndex: range.endIndex,
        },
        canUndo: this.canvasInstance.command.getCanUndo(),
        canRedo: this.canvasInstance.command.getCanRedo(),
      }
    } catch (error) {
      console.error('EditorBridge: Error getting editor state', error)
      return null
    }
  }

  /**
   * Get current selection formatting state
   * 
   * @returns Selection formatting state
   */
  getSelectionState(): SelectionState | null {
    if (!this.canvasInstance) return null

    try {
      const rangeManager = this.canvasInstance.command.getRangeManager()
      const range = rangeManager.getRange()
      const element = range.startElement
      
      return {
        isBold: element?.bold || false,
        isItalic: element?.italic || false,
        isUnderline: !!element?.underline,
        isStrikeout: !!element?.strikeout,
        fontSize: element?.size || 16,
        fontFamily: element?.font || 'Arial',
        color: element?.color || '#000000',
        highlight: element?.highlight || null,
      }
    } catch (error) {
      console.error('EditorBridge: Error getting selection state', error)
      return null
    }
  }

  /**
   * Subscribe to editor events
   * 
   * @param event - Event name
   * @param callback - Event handler
   */
  on<K extends keyof EditorBridgeEvents>(
    event: K,
    callback: (data: EditorBridgeEvents[K]) => void
  ): void {
    this.eventEmitter.on(event, callback)
  }

  /**
   * Unsubscribe from editor events
   * 
   * @param event - Event name
   * @param callback - Event handler
   */
  off<K extends keyof EditorBridgeEvents>(
    event: K,
    callback: (data: EditorBridgeEvents[K]) => void
  ): void {
    this.eventEmitter.off(event, callback)
  }

  /**
   * Get the underlying canvas editor instance
   * Use with caution - prefer using bridge methods
   * 
   * @returns Canvas editor instance
   */
  getCanvasInstance(): Editor | null {
    return this.canvasInstance
  }

  /**
   * Destroy the editor bridge and clean up resources
   */
  destroy(): void {
    if (this.canvasInstance) {
      this.canvasInstance.destroy()
      this.canvasInstance = null
    }
    
    this.eventEmitter.removeAllListeners()
    this.isInitialized = false
    this.commandQueue = []
    
    console.log('EditorBridge: Destroyed')
  }

  /**
   * Attach listeners to canvas editor events
   * @private
   */
  private attachCanvasListeners(): void {
    if (!this.canvasInstance) return

    const listener = this.canvasInstance.listener

    // Content change events
    listener.contentChange = () => {
      const state = this.getEditorState()
      if (state) {
        this.eventEmitter.emit('contentChange', { 
          content: state.content,
          wordCount: this.canvasInstance?.command.getWordCount() || 0,
        })
      }
    }

    // Selection change events
    listener.rangeStyleChange = () => {
      const selectionState = this.getSelectionState()
      if (selectionState) {
        this.eventEmitter.emit('selectionChange', selectionState)
      }
    }

    // Page change events
    listener.pageChange = (pageCount: number) => {
      this.eventEmitter.emit('pageChange', { pageCount })
    }

    // Cursor position change
    listener.cursorChange = (position: any) => {
      this.eventEmitter.emit('cursorChange', { 
        row: position.row,
        col: position.col,
      })
    }
  }

  /**
   * Process queued commands after initialization
   * @private
   */
  private processCommandQueue(): void {
    while (this.commandQueue.length > 0) {
      const { command, payload } = this.commandQueue.shift()!
      this.executeCommand(command, payload)
    }
  }
}
