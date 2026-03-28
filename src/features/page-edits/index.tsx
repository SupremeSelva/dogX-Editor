import React from 'react'
import { EditorBridge } from '@/core/bridge'
import { PageLayout } from './components/PageLayout'
import { PageStructure } from './components/PageStructure'
import { Watermark } from './components/Watermark'

interface PageEditsToolbarProps {
  bridge: EditorBridge;
}

export const PageEditsToolbar: React.FC<PageEditsToolbarProps> = ({ bridge }) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-toolbar-bg border-b">
      <PageLayout bridge={bridge} />
      <div className="w-px h-6 bg-border" />
      <PageStructure bridge={bridge} />
      <Watermark bridge={bridge} />
    </div>
  )
}
