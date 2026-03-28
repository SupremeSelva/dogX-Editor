import React from 'react'
import { Button } from '@/shared/components/ui'
import { EditorBridge } from '@/core/bridge'
import { SeparatorHorizontal } from 'lucide-react'

interface PageStructureProps {
  bridge: EditorBridge;
}

export const PageStructure: React.FC<PageStructureProps> = ({ bridge }) => {
  return (
    <div className="flex items-center gap-1">
      <Button
        variant="toolbar"
        size="sm"
        onClick={() => bridge.getCanvasInstance()?.command.executePageBreak()}
        title="Page Break"
      >
        <SeparatorHorizontal className="h-4 w-4 mr-1" />
        Page Break
      </Button>
    </div>
  )
}
