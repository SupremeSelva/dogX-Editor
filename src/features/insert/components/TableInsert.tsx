import React, { useState } from 'react'
import { Button } from '@/shared/components/ui'
import { EditorBridge } from '@/core/bridge'
import { Table } from 'lucide-react'

interface TableInsertProps {
  bridge: EditorBridge;
}

export const TableInsert: React.FC<TableInsertProps> = ({ bridge }) => {
  const [show, setShow] = useState(false)
  const [hoveredCell, setHoveredCell] = useState({ row: 1, col: 1 })

  const handleInsertTable = () => {
    bridge.executeCommand('insertTable', { rows: hoveredCell.row, cols: hoveredCell.col })
    setShow(false)
  }

  return (
    <div className="relative">
      <Button
        variant="toolbar"
        size="sm"
        onClick={() => setShow(!show)}
        title="Insert Table"
      >
        <Table className="h-4 w-4 mr-1" />
        Table
      </Button>

      {show && (
        <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border rounded shadow-lg p-2 z-dropdown">
          <div className="text-xs text-center mb-2">{hoveredCell.row} x {hoveredCell.col}</div>
          <div className="grid grid-cols-10 gap-0.5">
            {Array.from({ length: 100 }, (_, i) => {
              const row = Math.floor(i / 10) + 1
              const col = (i % 10) + 1
              const isHovered = row <= hoveredCell.row && col <= hoveredCell.col
              return (
                <div
                  key={i}
                  className={`w-4 h-4 border cursor-pointer ${isHovered ? 'bg-primary-200' : 'bg-white'}`}
                  onMouseEnter={() => setHoveredCell({ row, col })}
                  onClick={handleInsertTable}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
