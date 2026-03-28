import React, { useState } from 'react'
import { EditorBridge } from '@/core/bridge'
import { ChevronDown } from 'lucide-react'

const PAPER_SIZES = [
  { label: 'A4', value: '794*1123' },
  { label: 'A2', value: '1593*2251' },
  { label: 'A3', value: '1125*1593' },
  { label: 'A5', value: '565*796' },
  { label: 'Letter', value: '813*1054' },
  { label: 'Legal', value: '813*1266' },
]

interface PageLayoutProps {
  bridge: EditorBridge;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ bridge }) => {
  const [showPaper, setShowPaper] = useState(false)
  const [showOrientation, setShowOrientation] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <button
          onClick={() => setShowPaper(!showPaper)}
          className="flex items-center gap-2 px-3 py-1.5 bg-toolbar-bg hover:bg-toolbar-hover-bg rounded text-sm"
          title="Paper Size"
        >
          <span>Paper</span>
          <ChevronDown className="h-3 w-3" />
        </button>
        {showPaper && (
          <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border rounded shadow-lg z-dropdown">
            {PAPER_SIZES.map((size) => (
              <button
                key={size.value}
                onClick={() => {
                  bridge.getCanvasInstance()?.command.executePaperSize(size.value)
                  setShowPaper(false)
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
              >
                {size.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => setShowOrientation(!showOrientation)}
          className="flex items-center gap-2 px-3 py-1.5 bg-toolbar-bg hover:bg-toolbar-hover-bg rounded text-sm"
          title="Orientation"
        >
          <span>Orient</span>
          <ChevronDown className="h-3 w-3" />
        </button>
        {showOrientation && (
          <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border rounded shadow-lg z-dropdown">
            <button
              onClick={() => {
                bridge.getCanvasInstance()?.command.executePaperDirection(0)
                setShowOrientation(false)
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            >
              Portrait
            </button>
            <button
              onClick={() => {
                bridge.getCanvasInstance()?.command.executePaperDirection(1)
                setShowOrientation(false)
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            >
              Landscape
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
