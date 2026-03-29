import { useRef, useEffect } from 'react'
import Editor from './core/engine'
import { data, options } from './modules/document/document.mock'
import { ElementType, RowFlex } from './core/engine'
import { Toolbar } from './components/Toolbar'
import { useEditorHandlers } from './hooks/useEditorHandlers'

function App() {
  const editorRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<any>(null)

  useEffect(() => {
    if (editorRef.current && !instanceRef.current) {
      instanceRef.current = new Editor(
        editorRef.current,
        {
          header: [
            {
              value: 'Document Editor',
              size: 32,
              rowFlex: RowFlex.CENTER
            },
            {
              value: '\n',
              type: ElementType.SEPARATOR
            }
          ],
          main: data as any,
          footer: [
            {
              value: 'Powered by Document Editor',
              size: 12
            }
          ]
        },
        options
      );
      
      // Expose editor instance globally for debugging (same as original)
      (window as any).editor = instanceRef.current;
      (window as any).__EDITOR_INSTANCE__ = instanceRef.current
    }

    return () => {
      if (instanceRef.current) {
        instanceRef.current.destroy()
      }
    }
  }, [])

  // Wire up all button event handlers
  useEditorHandlers(instanceRef.current)

  return (
    <>
      <Toolbar />
      
      <div className="catalog" editor-component="catalog" style={{ display: 'none' }}>
        <div className="catalog__header">
          <span>Table of Contents</span>
          <div className="catalog__header__close"><i></i></div>
        </div>
        <div className="catalog__main"></div>
      </div>
      
      <div className="editor" ref={editorRef}></div>
      
      <div className="comment" editor-component="comment"></div>
      
      <div className="footer" editor-component="footer">
        <div>
          <div className="catalog-mode" title="Table of Contents"><i></i></div>
          <div className="page-mode">
            <i title="Page Mode (paged / continuous)"></i>
            <div className="options">
              <ul>
                <li data-page-mode="paging" className="active">Paged</li>
                <li data-page-mode="continuity">Continuous</li>
              </ul>
            </div>
          </div>
          <span>Visible Pages: <span className="page-no-list">1</span></span>
          <span>Page: <span className="page-no">1</span>/<span className="page-size">1</span></span>
          <span>Words: <span className="word-count">0</span></span>
          <span>Row: <span className="row-no">0</span></span>
          <span>Col: <span className="col-no">0</span></span>
        </div>
        <div className="editor-mode" title="Editor Mode (edit, clean, readonly, form, design, graffiti)">Edit Mode</div>
        <div>
          <div className="page-scale-minus" title="Zoom Out (Ctrl+-)"><i></i></div>
          <span className="page-scale-percentage" title="Zoom Level (click to reset Ctrl+0)">100%</span>
          <div className="page-scale-add" title="Zoom In (Ctrl+=)"><i></i></div>
          <div className="paper-size">
            <i title="Paper Size"></i>
            <div className="options">
              <ul>
                <li data-paper-size="794*1123" className="active">A4</li>
                <li data-paper-size="1593*2251">A2</li>
                <li data-paper-size="1125*1593">A3</li>
                <li data-paper-size="565*796">A5</li>
                <li data-paper-size="412*488">Envelope No.5</li>
                <li data-paper-size="450*866">Envelope No.6</li>
                <li data-paper-size="609*862">Envelope No.7</li>
                <li data-paper-size="862*1221">Envelope No.9</li>
                <li data-paper-size="813*1266">Legal</li>
                <li data-paper-size="813*1054">Letter</li>
              </ul>
            </div>
          </div>
          <div className="paper-direction">
            <i title="Orientation"></i>
            <div className="options">
              <ul>
                <li data-paper-direction="vertical" className="active">Portrait</li>
                <li data-paper-direction="horizontal">Landscape</li>
              </ul>
            </div>
          </div>
          <div className="paper-margin" title="Page Margins"><i></i></div>
          <div className="fullscreen" title="Fullscreen"><i></i></div>
          <div className="editor-option" title="Editor Settings"><i></i></div>
        </div>
      </div>
    </>
  )
}

export default App
