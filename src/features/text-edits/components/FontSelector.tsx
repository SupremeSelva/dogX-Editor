import React, { useState } from 'react'
import { useEditorStore } from '@/store/editorStore'
import { EditorBridge } from '@/core/bridge'
import { ChevronDown } from 'lucide-react'

const FONTS = [
  'Arial', 'Segoe UI', 'Times New Roman', 'Georgia', 'Calibri',
  'Verdana', 'Helvetica', 'Trebuchet MS', 'Tahoma', 'Courier New',
  'Garamond', 'Palatino', 'Comic Sans MS', 'Impact', 'Ink Free', 'Fantasy'
]

const SIZES = [56, 48, 36, 32, 28, 24, 22, 20, 18, 16, 14, 12, 10, 9, 8, 6]

interface FontSelectorProps {
  bridge: EditorBridge;
}

export const FontSelector: React.FC<FontSelectorProps> = ({ bridge }) => {
  const { selection } = useEditorStore()
  const [showFonts, setShowFonts] = useState(false)
  const [showSizes, setShowSizes] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <button
          onClick={() => setShowFonts(!showFonts)}
          className="flex items-center gap-2 px-3 py-1.5 bg-toolbar-bg hover:bg-toolbar-hover-bg rounded text-sm min-w-[120px]"
        >
          <span className="truncate">{selection.fontFamily}</span>
          <ChevronDown className="h-3 w-3" />
        </button>
        {showFonts && (
          <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border rounded shadow-lg max-h-60 overflow-y-auto z-dropdown">
            {FONTS.map((font) => (
              <button
                key={font}
                onClick={() => {
                  bridge.executeCommand('font', font)
                  setShowFonts(false)
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm whitespace-nowrap"
                style={{ fontFamily: font }}
              >
                {font}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => setShowSizes(!showSizes)}
          className="flex items-center gap-2 px-3 py-1.5 bg-toolbar-bg hover:bg-toolbar-hover-bg rounded text-sm min-w-[60px]"
        >
          <span>{selection.fontSize}</span>
          <ChevronDown className="h-3 w-3" />
        </button>
        {showSizes && (
          <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border rounded shadow-lg max-h-60 overflow-y-auto z-dropdown">
            {SIZES.map((size) => (
              <button
                key={size}
                onClick={() => {
                  bridge.executeCommand('fontSize', size)
                  setShowSizes(false)
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
