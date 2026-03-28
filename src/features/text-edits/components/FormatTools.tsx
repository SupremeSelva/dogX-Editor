import React from 'react'
import { Button } from '@/shared/components/ui'
import { EditorBridge } from '@/core/bridge'
import { Paintbrush, Eraser } from 'lucide-react'

interface FormatToolsProps {
  bridge: EditorBridge;
}

export const FormatTools: React.FC<FormatToolsProps> = ({ bridge }) => {
  return (
    <div className="flex items-center gap-1">
      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.getCanvasInstance()?.command.executePainter()}
        title="Format Painter"
      >
        <Paintbrush className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.getCanvasInstance()?.command.executeFormat()}
        title="Clear Formatting"
      >
        <Eraser className="h-4 w-4" />
      </Button>
    </div>
  )
}
