import React, { useState } from 'react'
import { EditorBridge } from '@/core/bridge'
import { ChevronDown } from 'lucide-react'

const STYLES = [
  { label: 'Normal', level: null, size: 16 },
  { label: 'Title', level: null, size: 26 },
  { label: 'Heading 1', level: 0, size: 26 },
  { label: 'Heading 2', level: 1, size: 24 },
  { label: 'Heading 3', level: 2, size: 22 },
  { label: 'Heading 4', level: 3, size: 20 },
  { label: 'Heading 5', level: 4, size: 18 },
  { label: 'Heading 6', level: 5, size: 16 },
]

interface StyleSelectorProps {
  bridge: EditorBridge;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({ bridge }) => {
  const [showStyles, setShowStyles] = useState(false)
  const [current, setCurrent] = useState('Normal')

  return (
    <div className="relative">
      <button
        onClick={() => setShowStyles(!showStyles)}
        className="flex items-center gap-2 px-3 py-1.5 bg-toolbar-bg hover:bg-toolbar-hover-bg rounded text-sm min-w-[120px]"
      >
        <span>{current}</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {showStyles && (
        <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border rounded shadow-lg z-dropdown">
          {STYLES.map((style) => (
            <button
              key={style.label}
              onClick={() => {
                if (style.level !== null) {
                  bridge.getCanvasInstance()?.command.executeTitle(style.level)
                }
                setCurrent(style.label)
                setShowStyles(false)
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
              style={{ fontSize: style.size }}
            >
              {style.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
