import React, { useState } from 'react'
import { EditorBridge } from '@/core/bridge'
import { List, ListOrdered, CheckSquare, ChevronDown } from 'lucide-react'

interface ListToolsProps {
  bridge: EditorBridge;
}

export const ListTools: React.FC<ListToolsProps> = ({ bridge }) => {
  const [showList, setShowList] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setShowList(!showList)}
        className="flex items-center gap-1 px-2 py-1.5 bg-toolbar-bg hover:bg-toolbar-hover-bg rounded"
        title="Lists"
      >
        <List className="h-4 w-4" />
        <ChevronDown className="h-3 w-3" />
      </button>

      {showList && (
        <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border rounded shadow-lg z-dropdown min-w-[200px]">
          <button
            onClick={() => {
              bridge.getCanvasInstance()?.command.executeList(null, null)
              setShowList(false)
            }}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            Remove List
          </button>
          <button
            onClick={() => {
              bridge.executeCommand('list', { type: 1, style: 0 })
              setShowList(false)
            }}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            <ListOrdered className="inline h-4 w-4 mr-2" />
            Numbered List
          </button>
          <button
            onClick={() => {
              bridge.executeCommand('list', { type: 0, style: 1 })
              setShowList(false)
            }}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            <CheckSquare className="inline h-4 w-4 mr-2" />
            Checklist
          </button>
          <button
            onClick={() => {
              bridge.executeCommand('list', { type: 0, style: 0 })
              setShowList(false)
            }}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            <List className="inline h-4 w-4 mr-2" />
            Bullet List
          </button>
        </div>
      )}
    </div>
  )
}
