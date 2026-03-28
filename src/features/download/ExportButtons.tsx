import React, { useState } from 'react'
import { EditorBridge } from '@/core/bridge'
import { Download, ChevronDown } from 'lucide-react'

interface ExportButtonsProps {
  bridge: EditorBridge;
}

export const ExportButtons: React.FC<ExportButtonsProps> = ({ bridge }) => {
  const [show, setShow] = useState(false)

  const handleExport = (format: string) => {
    const instance = bridge.getCanvasInstance()
    if (!instance) return

    const data = instance.command.getValue()
    const json = JSON.stringify(data)
    
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `document.${format}`
    a.click()
    URL.revokeObjectURL(url)
    setShow(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShow(!show)}
        className="flex items-center gap-2 px-3 py-1.5 bg-toolbar-bg hover:bg-toolbar-hover-bg rounded"
        title="Export Document"
      >
        <Download className="h-4 w-4" />
        <span>Export</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {show && (
        <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 border rounded shadow-lg z-dropdown min-w-[200px]">
          <button
            onClick={() => handleExport('docx')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            Microsoft Word (.docx)
          </button>
          <button
            onClick={() => handleExport('odt')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            OpenDocument (.odt)
          </button>
          <button
            onClick={() => handleExport('rtf')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            Rich Text Format (.rtf)
          </button>
          <button
            onClick={() => handleExport('pdf')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            PDF Document (.pdf)
          </button>
          <button
            onClick={() => handleExport('txt')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            Plain Text (.txt)
          </button>
          <button
            onClick={() => handleExport('html')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            Web Page (.html)
          </button>
          <button
            onClick={() => handleExport('epub')}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            EPUB Publication (.epub)
          </button>
        </div>
      )}
    </div>
  )
}
