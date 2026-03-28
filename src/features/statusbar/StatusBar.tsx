import React from 'react'
import { useEditorStore } from '@/store/editorStore'

export const StatusBar: React.FC = () => {
  const { wordCount, pageCount, currentPage, zoom } = useEditorStore()

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-toolbar-bg border-t text-sm">
      <div className="flex items-center gap-4">
        <span>Page: {currentPage}/{pageCount}</span>
        <span>Words: {wordCount}</span>
      </div>
      <div className="flex items-center gap-2">
        <span>Zoom: {zoom}%</span>
      </div>
    </div>
  )
}
