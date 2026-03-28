import React, { useEffect, useRef } from 'react'
import { useEditorStore } from '@/store/editorStore'
import { EditorBridge } from '@/core/bridge'

interface EditorCanvasProps {
  bridge: EditorBridge;
}

export const EditorCanvas: React.FC<EditorCanvasProps> = ({ bridge }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { setReady, setWordCount, setPageCount, setSelection } = useEditorStore()

  useEffect(() => {
    if (!containerRef.current) return

    bridge.init(containerRef.current, {
      main: [{ value: '' }],
      header: [],
      footer: [],
    }).then(() => {
      setReady(true)
    })

    bridge.on('contentChange', ({ wordCount }) => {
      setWordCount(wordCount)
    })

    bridge.on('selectionChange', (selection) => {
      setSelection(selection)
    })

    bridge.on('pageChange', ({ pageCount }) => {
      setPageCount(pageCount)
    })

    bridge.on('editorReady', () => {
      setReady(true)
    })

    return () => {
      bridge.destroy()
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full bg-editor-canvas" />
  )
}
