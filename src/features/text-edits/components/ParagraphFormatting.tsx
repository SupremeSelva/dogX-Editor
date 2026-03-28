import React, { useState } from 'react'
import { Button } from '@/shared/components/ui'
import { EditorBridge } from '@/core/bridge'
import { AlignLeft, AlignCenter, AlignRight, AlignJustify, ChevronDown } from 'lucide-react'

const LINE_SPACINGS = [1, 1.25, 1.5, 1.75, 2, 2.5, 3]

interface ParagraphFormattingProps {
  bridge: EditorBridge;
}

export const ParagraphFormatting: React.FC<ParagraphFormattingProps> = ({ bridge }) => {
  const [showSpacing, setShowSpacing] = useState(false)

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.executeCommand('align', 0)}
        title="Align Left"
      >
        <AlignLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.executeCommand('align', 1)}
        title="Align Center"
      >
        <AlignCenter className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.executeCommand('align', 2)}
        title="Align Right"
      >
        <AlignRight className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.executeCommand('align', 3)}
        title="Justify"
      >
        <AlignJustify className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-1" />

      <div className="relative">
        <button
          onClick={() => setShowSpacing(!showSpacing)}
          className="flex items-center gap-1 px-2 py-1.5 bg-toolbar-bg hover:bg-toolbar-hover-bg rounded text-sm"
          title="Line Spacing"
        >
          <span>Line</span>
          <ChevronDown className="h-3 w-3" />
        </button>
        {showSpacing && (
          <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border rounded shadow-lg z-dropdown">
            {LINE_SPACINGS.map((spacing) => (
              <button
                key={spacing}
                onClick={() => {
                  bridge.getCanvasInstance()?.command.executeRowMargin(spacing)
                  setShowSpacing(false)
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
              >
                {spacing}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
