import React from 'react'
import { Button } from '@/shared/components/ui'
import { EditorBridge } from '@/core/bridge'
import { Link, Minus, Code, Calendar, CheckSquare, Circle } from 'lucide-react'

interface AdvancedInsertProps {
  bridge: EditorBridge;
}

export const AdvancedInsert: React.FC<AdvancedInsertProps> = ({ bridge }) => {
  const handleInsertLink = () => {
    const url = prompt('Enter URL:')
    if (url) {
      const text = prompt('Enter link text:') || url
      bridge.executeCommand('insertHyperlink', { url, valueList: [{ value: text }] })
    }
  }

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={handleInsertLink}
        title="Insert Link"
      >
        <Link className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.getCanvasInstance()?.command.executeSeparator([0, 0])}
        title="Horizontal Line"
      >
        <Minus className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.getCanvasInstance()?.command.executeCode()}
        title="Code Block"
      >
        <Code className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.getCanvasInstance()?.command.executeDate('yyyy-MM-dd')}
        title="Insert Date"
      >
        <Calendar className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.getCanvasInstance()?.command.executeCheckbox()}
        title="Checkbox"
      >
        <CheckSquare className="h-4 w-4" />
      </Button>

      <Button
        variant="toolbar"
        size="icon-sm"
        onClick={() => bridge.getCanvasInstance()?.command.executeRadio()}
        title="Radio Button"
      >
        <Circle className="h-4 w-4" />
      </Button>
    </div>
  )
}
