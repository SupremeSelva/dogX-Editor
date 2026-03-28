import React, { useState } from 'react'
import { EditorBridge } from '@/core/bridge'
import { Droplet, ChevronDown } from 'lucide-react'

interface WatermarkProps {
  bridge: EditorBridge;
}

export const Watermark: React.FC<WatermarkProps> = ({ bridge }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setShow(!show)}
        className="flex items-center gap-1 px-2 py-1.5 bg-toolbar-bg hover:bg-toolbar-hover-bg rounded"
        title="Watermark"
      >
        <Droplet className="h-4 w-4" />
        <ChevronDown className="h-3 w-3" />
      </button>

      {show && (
        <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border rounded shadow-lg z-dropdown min-w-[150px]">
          <button
            onClick={() => {
              const text = prompt('Enter watermark text:')
              if (text) {
                bridge.getCanvasInstance()?.command.executeAddWatermark({ data: text })
              }
              setShow(false)
            }}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            Add Watermark
          </button>
          <button
            onClick={() => {
              bridge.getCanvasInstance()?.command.executeDeleteWatermark()
              setShow(false)
            }}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            Remove Watermark
          </button>
        </div>
      )}
    </div>
  )
}
