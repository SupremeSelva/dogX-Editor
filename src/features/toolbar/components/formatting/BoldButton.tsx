import React, { useEffect, useState } from 'react'
import { Button } from '@/shared/components/ui'
import { cn } from '@/lib/tailwind/cn'
import type { EditorBridge, SelectionState } from '@/core/bridge'

interface BoldButtonProps {
  bridge: EditorBridge;
}

export const BoldButton: React.FC<BoldButtonProps> = ({ bridge }) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleSelectionChange = (state: SelectionState) => {
      setIsActive(state.isBold)
    }

    bridge.on('selectionChange', handleSelectionChange)
    
    return () => {
      bridge.off('selectionChange', handleSelectionChange)
    }
  }, [bridge])

  const handleClick = () => {
    bridge.executeCommand('bold')
  }

  return (
    <Button
      variant="toolbar"
      size="icon-sm"
      onClick={handleClick}
      aria-pressed={isActive}
      title="Bold (Ctrl+B)"
      className={cn(isActive && 'toolbar-button-active')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
      </svg>
    </Button>
  )
}
