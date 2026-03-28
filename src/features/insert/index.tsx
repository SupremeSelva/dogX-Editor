import React from 'react'
import { EditorBridge } from '@/core/bridge'
import { MediaInsert } from './components/MediaInsert'
import { TableInsert } from './components/TableInsert'
import { AdvancedInsert } from './components/AdvancedInsert'

interface InsertToolbarProps {
  bridge: EditorBridge;
}

export const InsertToolbar: React.FC<InsertToolbarProps> = ({ bridge }) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-toolbar-bg border-b">
      <MediaInsert bridge={bridge} />
      <TableInsert bridge={bridge} />
      <div className="w-px h-6 bg-border" />
      <AdvancedInsert bridge={bridge} />
    </div>
  )
}
